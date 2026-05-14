/* =========================================================================
 * Fiches de philo — app.js
 * Navigation, rendu, recherche, modal, import/export + animations.
 * ========================================================================= */

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => Array.from(p.querySelectorAll(s));

const state = {
  view: "fiche",
  currentFicheId: null,
  currentAuteur: null,
  citationFilter: null,
  query: ""
};

/* ─── helpers ─────────────────────────────────────────────── */
const slug = s => s.toLowerCase()
  .normalize("NFD").replace(/[̀-ͯ]/g, "")
  .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const findFiche = id => window.FICHES.find(f => f.id === id);
const findFicheByNotion = notion => window.FICHES.find(f => slug(f.notion) === slug(notion));

const allAuteurs = () => {
  const map = new Map();
  for (const f of window.FICHES) {
    for (const axe of f.axes || []) {
      for (const a of axe.auteurs || []) {
        if (!map.has(a.nom)) map.set(a.nom, { nom: a.nom, dates: a.dates, count: 0, fiches: [] });
        const e = map.get(a.nom);
        e.count++;
        e.fiches.push({ ficheId: f.id, notion: f.notion, axe: axe.titre, auteurData: a });
      }
    }
  }
  return Array.from(map.values()).sort((a, b) => a.nom.localeCompare(b.nom));
};

const allCitationsFlat = () => {
  const out = [];
  for (const f of window.FICHES) {
    for (const axe of f.axes || []) {
      for (const a of axe.auteurs || []) {
        for (const c of a.citations || []) {
          out.push({ ...c, auteur: a.nom, dates: a.dates, ficheId: f.id, notion: f.notion });
        }
      }
    }
  }
  return out;
};

/* Détermine l'époque d'un auteur d'après sa date de naissance */
const EPOQUE_ORDER = ["Antiquité", "Modernes", "XIXᵉ siècle", "Contemporains"];
function epoqueOf(dates) {
  if (!dates) return "Autre";
  const m = dates.replace(/–/g, "-").match(/-?\d+/);
  if (!m) return "Autre";
  const year = parseInt(m[0], 10);
  if (year < 500) return "Antiquité";
  if (year < 1789) return "Modernes";
  if (year < 1880) return "XIXᵉ siècle";
  return "Contemporains";
}

const ficheMatches = (f, q) => {
  if (!q) return true;
  q = q.toLowerCase();
  return JSON.stringify(f).toLowerCase().includes(q);
};

/* ─── animations: IntersectionObserver pour fade-up ──────── */
let revealObserver = null;
let revealFallback = null;
function setupRevealObserver() {
  if (revealObserver) revealObserver.disconnect();
  if (revealFallback) clearTimeout(revealFallback);
  const main = document.querySelector(".main");
  revealObserver = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("revealed");
        revealObserver.unobserve(e.target);
      }
    }
  }, { root: main, threshold: 0, rootMargin: "0px 0px 50px 0px" });
}
function observeReveal(root = $("#main")) {
  const els = $$(".reveal", root);
  els.forEach(el => revealObserver.observe(el));
  // Fallback : si l'observer ne déclenche pas (scroll rapide, edge case),
  // on force la révélation de tout ce qui reste après 1.2s.
  if (revealFallback) clearTimeout(revealFallback);
  revealFallback = setTimeout(() => {
    els.forEach(el => el.classList.add("revealed"));
  }, 1200);
}

/* ─── sidebar ─────────────────────────────────────────────── */
function renderSidebar() {
  const navN = $("#nav-notions");
  navN.innerHTML = "";
  const q = state.query.toLowerCase();
  const groups = window.NOTIONS_GROUPS || [{ titre: "Notions", notions: window.NOTIONS }];

  for (const group of groups) {
    const items = [];
    for (const notion of group.notions) {
      const fiche = findFicheByNotion(notion);
      const filled = !!fiche;
      if (q) {
        const matchName = notion.toLowerCase().includes(q);
        const matchContent = fiche && ficheMatches(fiche, q);
        if (!matchName && !matchContent) continue;
      }
      items.push({ notion, fiche, filled });
    }
    if (!items.length) continue;

    const header = document.createElement("div");
    header.className = "sidebar-group-title";
    header.textContent = group.titre;
    navN.appendChild(header);

    for (const { notion, fiche, filled } of items) {
      const btn = document.createElement("button");
      btn.className = "nav-item" + (filled ? "" : " empty") +
        (filled && fiche.id === state.currentFicheId && state.view === "fiche" ? " active" : "");
      btn.innerHTML = `<span>${notion}</span><span class="nav-badge">${filled ? "●" : "○"}</span>`;
      if (filled) btn.onclick = () => selectFiche(fiche.id);
      else btn.onclick = () => {
        $("#btn-new").click();
        setTimeout(() => {
          const input = document.querySelector('[name="notion"]');
          if (input) input.value = notion;
          document.querySelector('[data-tab="manual"]')?.click();
        }, 50);
      };
      navN.appendChild(btn);
    }
  }
}

/* ─── main: fiche view ────────────────────────────────────── */
function selectFiche(id) {
  state.view = "fiche";
  state.currentFicheId = id;
  state.currentAuteur = null;
  renderSidebar();
  const f = findFiche(id);
  if (!f) { renderEmpty(); return; }
  renderFiche(f);
  renderSidePanelForFiche(f);
  $(".main").scrollTop = 0;
  setupRevealObserver();
  requestAnimationFrame(() => observeReveal());
}

function renderFiche(f) {
  const main = $("#main");
  const html = [];

  html.push(`
    <article class="fiche">
      <header class="fiche-header reveal">
        <div class="fiche-eyebrow">Notion · Bac de philosophie</div>
        <h1 class="fiche-title">${f.notion}</h1>
        ${f.etymologie ? `<p class="content-text fiche-etymo">${f.etymologie}</p>` : ""}
        ${f.problematique ? `<p class="fiche-problematique">${f.problematique}</p>` : ""}
      </header>
  `);

  if (f.a_retenir) {
    html.push(`<section class="section a-retenir reveal" id="s-retenir">
      <div class="a-retenir-label">À retenir</div>
      <p>${f.a_retenir}</p>
    </section>`);
  }

  if (f.definitions?.length) {
    html.push(`<section class="section reveal" id="s-def">
      <h2 class="section-title"><span class="section-title-num">A</span> Définitions clés</h2>
      <div class="def-list">
        ${f.definitions.map(d => `
          <div class="def-item"><span class="def-term">${d.terme}.</span>${d.def}</div>
        `).join("")}
      </div>
    </section>`);
  }

  if (f.distinctions?.length) {
    html.push(`<section class="section reveal" id="s-dist">
      <h2 class="section-title"><span class="section-title-num">B</span> Distinctions à maîtriser</h2>
      <ul class="distinctions-list">
        ${f.distinctions.map(d => `<li>${d}</li>`).join("")}
      </ul>
    </section>`);
  }

  if (f.frise?.length) {
    html.push(`<section class="section reveal" id="s-frise">
      <h2 class="section-title"><span class="section-title-num">C</span> Frise chronologique</h2>
      ${renderFrise(f.frise)}
    </section>`);
  }

  if (f.axes?.length) {
    html.push(`<section class="section reveal" id="s-axes">
      <h2 class="section-title"><span class="section-title-num">D</span> Axes &amp; auteurs</h2>
      ${f.axes.map(axe => renderAxe(axe)).join("")}
    </section>`);
  }

  if (f.cartographie) {
    html.push(`<section class="section reveal" id="s-carto">
      <h2 class="section-title"><span class="section-title-num">E</span> Cartographie des positions</h2>
      ${renderCartographie(f.cartographie)}
    </section>`);
  }

  if (f.objections?.length) {
    html.push(`<section class="section reveal" id="s-obj">
      <h2 class="section-title"><span class="section-title-num">F</span> Objections croisées</h2>
      <p class="section-intro">Mini-dialogues reconstruits : qui adresse quelle critique à qui ?</p>
      <div class="objections-list">
        ${f.objections.map(o => `
          <div class="objection">
            <div class="objection-arrow"><span class="o-from">${o.de}</span> → <span class="o-to">${o.vers}</span></div>
            <p class="objection-propos">${o.propos}</p>
          </div>
        `).join("")}
      </div>
    </section>`);
  }

  if (f.phrases_formules?.length) {
    html.push(`<section class="section reveal" id="s-formules">
      <h2 class="section-title"><span class="section-title-num">G</span> Phrases-formules</h2>
      <p class="section-intro">À recaser tel quel dans une dissertation pour donner du tranchant.</p>
      <div class="formules-grid">
        ${f.phrases_formules.map(p => `<div class="formule">${p}</div>`).join("")}
      </div>
    </section>`);
  }

  if (f.pieges?.length) {
    html.push(`<section class="section reveal" id="s-pieges">
      <h2 class="section-title"><span class="section-title-num">H</span> Pièges classiques à éviter</h2>
      <ul class="pieges-list">
        ${f.pieges.map(p => `<li><span class="piege-icon">⚠</span>${p}</li>`).join("")}
      </ul>
    </section>`);
  }

  if (f.methode) {
    html.push(`<section class="section reveal" id="s-methode">
      <h2 class="section-title"><span class="section-title-num">I</span> Méthode</h2>
      <div class="methode-box">
        ${f.methode.problematiser ? `<p><b>Problématiser :</b> ${f.methode.problematiser}</p>` : ""}
        ${f.methode.plan_type ? `<p><b>Plan-type :</b> ${f.methode.plan_type}</p>` : ""}
        ${f.methode.accroches?.length ? `
          <p><b>Accroches possibles :</b></p>
          <ul>${f.methode.accroches.map(a => `<li>${a}</li>`).join("")}</ul>
        ` : ""}
      </div>
    </section>`);
  }

  if (f.plan_corrige) {
    html.push(`<section class="section reveal" id="s-plan">
      <h2 class="section-title"><span class="section-title-num">J</span> Plan corrigé d'un sujet-type</h2>
      ${renderPlanCorrige(f.plan_corrige)}
    </section>`);
  }

  if (f.ouvertures?.length) {
    html.push(`<section class="section reveal" id="s-ouvertures">
      <h2 class="section-title"><span class="section-title-num">K</span> Ouvertures culturelles</h2>
      <div class="ouvertures-grid">
        ${f.ouvertures.map(o => `
          <div class="ouverture">
            <span class="ouverture-type">${o.type}</span>
            <div class="ouverture-ref">${o.ref}</div>
            <div class="ouverture-comment">${o.comment}</div>
          </div>
        `).join("")}
      </div>
    </section>`);
  }

  if (f.sujets_bac?.length) {
    html.push(`<section class="section reveal" id="s-sujets">
      <h2 class="section-title"><span class="section-title-num">L</span> Sujets de bac types</h2>
      <ul class="sujets-list">
        ${f.sujets_bac.map(s => `<li>${s}</li>`).join("")}
      </ul>
    </section>`);
  }

  html.push("</article>");
  main.innerHTML = html.join("");
}

/* ─── sub-renderers ───────────────────────────────────────── */
function renderAxe(axe) {
  return `
    <div class="axe">
      <h3 class="axe-title"><span class="axe-num">${axe.numero}.</span>${axe.titre}</h3>
      ${axe.enjeu ? `<p class="axe-enjeu">${axe.enjeu}</p>` : ""}
      ${(axe.auteurs || []).map(a => `
        <div class="auteur-block">
          <div class="auteur-header">
            <span class="auteur-nom auteur-link" onclick="selectAuteur('${a.nom.replace(/'/g, "\\'")}')" title="Voir toutes les entrées de ${a.nom}">${a.nom}</span>
            ${a.dates ? `<span class="auteur-dates">${a.dates}</span>` : ""}
            ${a.oeuvre ? `<span class="auteur-oeuvre">— ${a.oeuvre}</span>` : ""}
          </div>
          ${a.these ? `<p class="auteur-these">${a.these}</p>` : ""}
          ${a.explication ? `<p class="auteur-explication">${a.explication}</p>` : ""}
          ${a.exemple ? `<div class="exemple-bloc"><span class="exemple-label">Exemple</span> ${a.exemple}</div>` : ""}
          ${(a.citations || []).map(c => `
            <div class="citation">
              <div class="citation-texte">« ${c.texte} »</div>
              <div class="citation-source">${a.nom}${c.source ? `, ${c.source}` : ""}</div>
              ${c.commentaire ? `<div class="citation-commentaire">${c.commentaire}</div>` : ""}
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;
}

function renderFrise(frise) {
  return `
    <div class="frise-wrap">
      <div class="frise-line"></div>
      <div class="frise-items">
        ${frise.map((it, i) => `
          <div class="frise-item" style="--i:${i}">
            <div class="frise-dot"></div>
            <div class="frise-content">
              <div class="frise-dates">${it.dates}</div>
              <div class="frise-auteur">${it.auteur}</div>
              ${it.courant ? `<div class="frise-courant">${it.courant}</div>` : ""}
              ${it.oeuvre ? `<div class="frise-oeuvre">${it.oeuvre}</div>` : ""}
              <div class="frise-idee">${it.idee}</div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderCartographie(c) {
  const head = `<tr><th>Auteur</th>${c.criteres.map(cr => `<th>${cr}</th>`).join("")}</tr>`;
  const rows = c.positions.map(p => `
    <tr>
      <td class="carto-auteur">${p.auteur}</td>
      ${p.valeurs.map(v => `<td>${v}</td>`).join("")}
    </tr>
  `).join("");
  return `
    ${c.intro ? `<p class="section-intro">${c.intro}</p>` : ""}
    <div class="carto-scroll">
      <table class="carto-table">
        <thead>${head}</thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function renderPlanCorrige(p) {
  return `
    <div class="plan-corrige">
      <div class="plan-sujet">« ${p.sujet} »</div>
      ${p.accroche ? `<div class="plan-block"><div class="plan-label">Accroche</div><p>${p.accroche}</p></div>` : ""}
      ${p.problematique ? `<div class="plan-block"><div class="plan-label">Problématique</div><p>${p.problematique}</p></div>` : ""}
      ${p.annonce ? `<div class="plan-block"><div class="plan-label">Annonce de plan</div><p>${p.annonce}</p></div>` : ""}
      ${(p.parties || []).map(part => `
        <div class="plan-partie">
          <h4>${part.titre}</h4>
          ${part.idee ? `<p class="plan-idee">${part.idee}</p>` : ""}
          ${(part.args || []).map(arg => `
            <div class="plan-arg">
              <div class="plan-arg-nom">${arg.nom}</div>
              <div class="plan-arg-dev">${arg.dev}</div>
              ${arg.citation ? `<div class="plan-arg-cit">${arg.citation}</div>` : ""}
            </div>
          `).join("")}
        </div>
      `).join("")}
      ${p.conclusion ? `<div class="plan-block plan-conclusion"><div class="plan-label">Conclusion</div><p>${p.conclusion}</p></div>` : ""}
    </div>
  `;
}

function renderSidePanelForFiche(f) {
  const panel = $("#side-panel");
  const cits = [];
  for (const axe of f.axes || []) {
    for (const a of axe.auteurs || []) {
      for (const c of a.citations || []) cits.push({ ...c, auteur: a.nom });
    }
  }
  const liees = (f.notions_liees || [])
    .map(id => findFiche(id))
    .filter(Boolean);

  const toc = [
    { id: "s-retenir", label: "À retenir" },
    { id: "s-def", label: "Définitions" },
    { id: "s-dist", label: "Distinctions" },
    { id: "s-frise", label: "Frise chronologique" },
    { id: "s-axes", label: "Axes & auteurs" },
    { id: "s-carto", label: "Cartographie" },
    { id: "s-obj", label: "Objections croisées" },
    { id: "s-formules", label: "Phrases-formules" },
    { id: "s-pieges", label: "Pièges" },
    { id: "s-methode", label: "Méthode" },
    { id: "s-plan", label: "Plan corrigé" },
    { id: "s-ouvertures", label: "Ouvertures" },
    { id: "s-sujets", label: "Sujets bac" }
  ];

  panel.innerHTML = `
    <div class="side-section">
      <h4>Sommaire</h4>
      <ul class="toc-list">
        ${toc.map(t => `<li><a href="#${t.id}" onclick="document.getElementById('${t.id}').scrollIntoView({behavior:'smooth'});return false;">${t.label}</a></li>`).join("")}
      </ul>
    </div>
    <div class="side-section">
      <h4>Citations à retenir (${cits.length})</h4>
      ${cits.slice(0, 6).map(c => `
        <div class="mini-citation">
          <span class="t">« ${c.texte.length > 130 ? c.texte.slice(0, 130) + "…" : c.texte} »</span>
          <span class="s">${c.auteur}${c.source ? ` — ${c.source}` : ""}</span>
        </div>
      `).join("")}
    </div>
    ${liees.length ? `
      <div class="side-section">
        <h4>Notions liées</h4>
        <div class="liees-list">
          ${liees.map(l => `<button class="liee-chip" onclick="selectFiche('${l.id}')">${l.notion}</button>`).join("")}
        </div>
      </div>` : ""}
  `;
}

/* ─── auteur view ─────────────────────────────────────────── */
function selectAuteur(nom) {
  state.view = "auteur";
  state.currentAuteur = nom;
  state.currentFicheId = null;
  renderSidebar();
  const auteurs = allAuteurs();
  const a = auteurs.find(x => x.nom === nom);
  if (!a) { renderEmpty(); return; }

  const main = $("#main");
  const html = [];
  html.push(`
    <div class="auteur-view-header reveal">
      <div class="fiche-eyebrow">Auteur</div>
      <h2>${a.nom}</h2>
      ${a.dates ? `<div class="auteur-view-context">${a.dates}</div>` : ""}
      <div class="auteur-view-context">${a.count} entrée${a.count > 1 ? "s" : ""} dans ${new Set(a.fiches.map(f => f.notion)).size} fiche${new Set(a.fiches.map(f => f.notion)).size > 1 ? "s" : ""}</div>
    </div>
  `);

  for (const entry of a.fiches) {
    const ad = entry.auteurData;
    html.push(`
      <div class="auteur-citation-block reveal">
        <div class="auteur-cit-notion" onclick="selectFiche('${entry.ficheId}')">${entry.notion} · ${entry.axe}</div>
        ${ad.oeuvre ? `<div class="auteur-oeuvre" style="margin-bottom:6px">${ad.oeuvre}</div>` : ""}
        ${ad.these ? `<p class="auteur-these">${ad.these}</p>` : ""}
        ${ad.explication ? `<p class="auteur-explication">${ad.explication}</p>` : ""}
        ${(ad.citations || []).map(c => `
          <div class="citation">
            <div class="citation-texte">« ${c.texte} »</div>
            <div class="citation-source">${a.nom}${c.source ? `, ${c.source}` : ""}</div>
            ${c.commentaire ? `<div class="citation-commentaire">${c.commentaire}</div>` : ""}
          </div>
        `).join("")}
      </div>
    `);
  }

  main.innerHTML = html.join("");
  $("#side-panel").innerHTML = `
    <div class="side-section">
      <h4>Apparaît dans</h4>
      <ul class="toc-list">
        ${Array.from(new Set(a.fiches.map(f => f.ficheId))).map(id => {
          const fi = findFiche(id);
          return `<li><a href="#" onclick="selectFiche('${id}');return false;">${fi.notion}</a></li>`;
        }).join("")}
      </ul>
    </div>
  `;
  $(".main").scrollTop = 0;
  setupRevealObserver();
  requestAnimationFrame(() => observeReveal());
}

/* ─── all citations view — groupé par notion ─────────────── */
function showAllCitations() {
  state.view = "citations";
  state.currentFicheId = null;
  state.currentAuteur = null;
  renderSidebar();

  const main = $("#main");
  const html = [];
  const totalCit = allCitationsFlat().length;

  html.push(`
    <div class="all-citations-view">
      <div class="fiche-eyebrow">Répertoire</div>
      <h2>Citations par notion <span class="cit-total">(${totalCit})</span></h2>
      <p class="section-intro">Toutes les citations des fiches, classées par notion puis par auteur. Clique sur le titre pour ouvrir la fiche, sur le nom de l'auteur pour voir ses entrées.</p>
      <div class="cit-anchors">
        ${window.FICHES.map(f => `<a href="#cit-${f.id}" class="cit-anchor">${f.notion}</a>`).join("")}
      </div>
  `);

  for (const fiche of window.FICHES) {
    const cits = [];
    for (const axe of fiche.axes || []) {
      for (const a of axe.auteurs || []) {
        for (const c of a.citations || []) {
          cits.push({ ...c, auteur: a.nom, axeTitre: axe.titre, axeNum: axe.numero });
        }
      }
    }
    if (!cits.length) continue;

    // Regrouper par auteur dans cette notion
    const byAuteur = new Map();
    for (const c of cits) {
      if (!byAuteur.has(c.auteur)) byAuteur.set(c.auteur, []);
      byAuteur.get(c.auteur).push(c);
    }

    html.push(`
      <section class="cit-by-notion reveal" id="cit-${fiche.id}">
        <header class="cit-notion-header">
          <h3 class="cit-notion-title" onclick="selectFiche('${fiche.id}')">
            Citations sur ${fiche.notion.toLowerCase()}
          </h3>
          <span class="cit-notion-count">${cits.length} citation${cits.length > 1 ? "s" : ""}</span>
        </header>
        <div class="cit-by-auteur-list">
          ${Array.from(byAuteur.entries()).map(([auteur, list]) => `
            <div class="cit-auteur-block">
              <h4 class="cit-auteur-name" onclick="selectAuteur('${auteur.replace(/'/g, "\\'")}')">${auteur}</h4>
              ${list.map(c => `
                <div class="citation">
                  <div class="citation-texte">« ${c.texte} »</div>
                  <div class="citation-source">${c.source || ""}</div>
                  ${c.commentaire ? `<div class="citation-commentaire">${c.commentaire}</div>` : ""}
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </section>
    `);
  }

  html.push("</div>");
  main.innerHTML = html.join("");
  $("#side-panel").innerHTML = "";
  $(".main").scrollTop = 0;
  setupRevealObserver();
  requestAnimationFrame(() => observeReveal());
}

function renderEmpty() {
  $("#main").innerHTML = `<div class="empty-state"><p>Sélectionne une notion ou un auteur à gauche.</p></div>`;
  $("#side-panel").innerHTML = "";
}

/* ─── modal ───────────────────────────────────────────────── */
function openModal() { $("#modal").hidden = false; }
function closeModal() { $("#modal").hidden = true; $("#json-output").hidden = true; }

function buildFicheJSON(form) {
  const data = Object.fromEntries(new FormData(form));
  const id = slug(data.notion.replace(/^l[ae'']\s*/i, "").replace(/^l'\s*/i, ""));

  const parseDefs = txt => (txt || "").split("\n").map(l => l.trim()).filter(Boolean).map(l => {
    const i = l.indexOf(":");
    return i > 0 ? { terme: l.slice(0, i).trim(), def: l.slice(i + 1).trim() } : { terme: "", def: l };
  });
  const parseAxes = txt => (txt || "").split(/\n\s*---\s*\n/).map(block => {
    const lines = block.split("\n").map(l => l.trim()).filter(Boolean);
    if (!lines.length) return null;
    return { numero: "", titre: lines[0], enjeu: lines.slice(1).join(" "), auteurs: [] };
  }).filter(Boolean);
  const parseCitations = txt => (txt || "").split("\n").map(l => l.trim()).filter(Boolean).map(l => {
    const m = l.match(/^"(.+?)"\s*—\s*(.+?),\s*(.+?)(?:,\s*(.+))?$/);
    return m ? { texte: m[1], auteur: m[2], source: [m[3], m[4]].filter(Boolean).join(", ") }
             : { texte: l, auteur: "", source: "" };
  });

  return {
    id, notion: data.notion,
    problematique: data.problematique || "",
    definitions: parseDefs(data.definitions),
    distinctions: (data.distinctions || "").split("\n").map(l => l.trim()).filter(Boolean),
    axes: parseAxes(data.axes),
    citations_libres: parseCitations(data.citations),
    sujets_bac: (data.sujets || "").split("\n").map(l => l.trim()).filter(Boolean),
    notions_liees: (data.liees || "").split(",").map(s => slug(s.trim())).filter(Boolean)
  };
}

/* ─── search ──────────────────────────────────────────────── */
function onSearch(e) { state.query = e.target.value; renderSidebar(); }

/* ─── events ──────────────────────────────────────────────── */
function bindEvents() {
  $("#search").addEventListener("input", onSearch);
  $("#btn-new").addEventListener("click", openModal);
  $("#close-modal").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  $("#btn-citations").addEventListener("click", showAllCitations);

  $$(".tab").forEach(t => t.addEventListener("click", () => {
    $$(".tab").forEach(x => x.classList.remove("active"));
    $$(".tab-panel").forEach(x => x.classList.remove("active"));
    t.classList.add("active");
    $(`[data-panel="${t.dataset.tab}"]`).classList.add("active");
  }));

  $("#manual-form").addEventListener("submit", e => {
    e.preventDefault();
    const fiche = buildFicheJSON(e.target);
    const out = $("#json-output");
    out.hidden = false;
    out.textContent = "// Ajoute cette entrée à window.FICHES dans fiches.js :\n\n" +
      JSON.stringify(fiche, null, 2);
  });

  $("#btn-import").addEventListener("click", () => $("#file-import").click());
  $("#file-import").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const r = new FileReader();
    r.onload = () => {
      try {
        const obj = JSON.parse(r.result);
        const arr = Array.isArray(obj) ? obj : [obj];
        for (const f of arr) {
          const i = window.FICHES.findIndex(x => x.id === f.id);
          if (i >= 0) window.FICHES[i] = f; else window.FICHES.push(f);
        }
        closeModal(); renderSidebar();
        if (arr[0]) selectFiche(arr[0].id);
      } catch (err) { alert("JSON invalide : " + err.message); }
    };
    r.readAsText(file);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
    if (e.key === "/" && document.activeElement !== $("#search")) {
      e.preventDefault(); $("#search").focus();
    }
  });
}

/* ─── init ────────────────────────────────────────────────── */
function init() {
  setupRevealObserver();
  renderSidebar();
  if (window.FICHES.length) selectFiche(window.FICHES[0].id);
  else renderEmpty();
  bindEvents();
}

window.selectFiche = selectFiche;
window.selectAuteur = selectAuteur;
window.showAllCitations = showAllCitations;
init();
