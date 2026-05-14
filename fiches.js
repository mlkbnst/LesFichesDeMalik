/* =========================================================================
 * Fiches de philo — Bac
 * Liste des notions au programme + fiches détaillées et structurées.
 * Schéma : id, notion, etymologie, problematique, a_retenir,
 *          definitions[], distinctions[], frise[], axes[],
 *          cartographie{}, objections[], phrases_formules[],
 *          pieges[], methode{}, plan_corrige{}, ouvertures[],
 *          sujets_bac[], notions_liees[]
 * ========================================================================= */

window.NOTIONS = [
  "L'art", "Le bonheur", "La conscience", "Le devoir", "L'État", "L'inconscient",
  "La justice", "Le langage", "La liberté", "La nature", "La raison", "La religion",
  "La science", "La technique", "Le temps", "Le travail", "La vérité"
];

/* Regroupement par chapitre (thématiques du programme bac) */
window.NOTIONS_GROUPS = [
  {
    titre: "Existence, culture & sujet",
    notions: ["L'art", "La conscience", "L'inconscient", "Le temps", "La religion", "Le bonheur"]
  },
  {
    titre: "Morale & politique",
    notions: ["Le devoir", "La justice", "La liberté", "L'État", "Le travail"]
  },
  {
    titre: "Connaissance & nature",
    notions: ["Le langage", "La nature", "La raison", "La science", "La technique", "La vérité"]
  }
];

window.FICHES = [

/* ════════════════════════════════════════════════════════════════════════
   LA CONSCIENCE
   ════════════════════════════════════════════════════════════════════════ */
{
  id: "conscience",
  notion: "La conscience",
  etymologie: "Du latin <i>cum-scientia</i>, « savoir avec soi » — toute conscience est d'abord conscience <em>de soi</em>, savoir accompagné de l'expérience de celui qui sait.",
  problematique: "La conscience fait-elle de l'homme un être à part — libre, responsable, dépositaire d'une intériorité unique — ou n'est-elle qu'une fine pellicule de transparence apparente qui masque les vraies déterminations (corporelles, sociales, inconscientes) qui nous constituent ?",
  a_retenir: "Trois moments d'une dialectique. <b>D'abord</b> la conscience semble l'évidence absolue — Descartes, Kant, Pascal : elle fonde le sujet et sa dignité. <b>Puis</b> elle se révèle suspecte — Spinoza, Nietzsche, Freud : ce que je crois savoir de moi masque ce qui me détermine. <b>Enfin</b> elle se reprend comme tâche — Sartre, Alain, Merleau-Ponty : la conscience n'est pas un état mais un acte, le travail par lequel je deviens responsable de ce que je suis.",

  definitions: [
    { terme: "Conscience psychologique", def: "Faculté de se représenter à soi-même le monde et soi : sentiment immédiat de ce que je suis, perçois et fais — souvent confondue avec la transparence à soi." },
    { terme: "Conscience réfléchie (de soi)", def: "Acte par lequel la conscience se prend elle-même pour objet. Non plus seulement percevoir, mais <em>se savoir</em> percevant — niveau supérieur où s'ouvre la pensée." },
    { terme: "Conscience morale", def: "Voix intérieure qui juge mes actes en termes de bien et de mal — à ne pas confondre avec la conscience psychologique (ici je ne <em>sais</em> pas, je me <em>juge</em>)." },
    { terme: "Sujet", def: "Être pensant capable de dire « Je », unifiant ses représentations sous une même conscience. Condition de possibilité de la responsabilité, de la liberté, du droit." },
    { terme: "Intentionnalité", def: "Propriété de la conscience d'être toujours conscience <em>de quelque chose</em> (Husserl). La conscience n'est pas un contenant : elle est mouvement vers un objet." },
    { terme: "Cogito", def: "Acte par lequel le sujet, en pensant, saisit immédiatement et certainement son propre être. « Je pense, donc je suis » (Descartes)." }
  ],

  distinctions: [
    "<b>Conscience / inconscience</b> : ne pas être conscient (sommeil, coma) — état temporaire, passif, négatif.",
    "<b>Conscience / inconscient</b> : l'inconscient freudien n'est pas un manque de conscience, c'est un <em>système psychique</em> actif, structuré, qui agit sur la conscience sans qu'elle le sache.",
    "<b>Conscience immédiate / réfléchie</b> : sentir (animal aussi) / savoir qu'on sent (propre de l'homme — Locke, Hegel).",
    "<b>Conscience de soi / connaissance de soi</b> : avoir le sentiment d'être ne suffit pas à savoir ce que l'on est (Spinoza, Freud).",
    "<b>Pour-soi / en-soi</b> (Sartre) : la conscience (pour-soi) n'est jamais ce qu'elle est, à la différence des choses (en-soi) qui coïncident avec elles-mêmes.",
    "<b>Conscience psychologique / conscience morale</b> : la première décrit, la seconde juge ; on peut être conscient sans avoir mauvaise conscience.",
    "<b>Conscience humaine / conscience animale</b> : l'animal a-t-il conscience de soi ? Débat ouvert (test du miroir, métacognition)."
  ],

  frise: [
    { auteur: "Augustin", dates: "354–430", courant: "Patristique", oeuvre: "Confessions, De vera religione", idee: "Invention de l'intériorité — la vérité habite dans l'homme intérieur." },
    { auteur: "Descartes", dates: "1596–1650", courant: "Rationalisme", oeuvre: "Méditations métaphysiques", idee: "Le cogito : la conscience de penser est la première certitude." },
    { auteur: "Pascal", dates: "1623–1662", courant: "Augustinisme", oeuvre: "Pensées", idee: "Roseau pensant : la dignité par la conscience de sa fragilité." },
    { auteur: "Locke", dates: "1632–1704", courant: "Empirisme", oeuvre: "Essai sur l'entendement humain", idee: "L'identité personnelle repose sur la continuité de la conscience (mémoire)." },
    { auteur: "Leibniz", dates: "1646–1716", courant: "Rationalisme", oeuvre: "Nouveaux Essais", idee: "Petites perceptions : il y a des perceptions inconscientes, anticipation de Freud." },
    { auteur: "Kant", dates: "1724–1804", courant: "Idéalisme transcendantal", oeuvre: "Anthropologie", idee: "Pouvoir dire « Je » élève l'homme infiniment au-dessus du vivant." },
    { auteur: "Hegel", dates: "1770–1831", courant: "Idéalisme allemand", oeuvre: "Phénoménologie de l'Esprit", idee: "La conscience de soi se conquiert dans le travail et la reconnaissance d'autrui." },
    { auteur: "Nietzsche", dates: "1844–1900", courant: "Philosophie du soupçon", oeuvre: "Le Gai Savoir", idee: "La conscience est superficielle, grégaire, secondaire au corps." },
    { auteur: "Freud", dates: "1856–1939", courant: "Psychanalyse", oeuvre: "L'Interprétation des rêves", idee: "Le moi n'est pas maître dans sa propre maison — l'inconscient agit." },
    { auteur: "Bergson", dates: "1859–1941", courant: "Spiritualisme", oeuvre: "Données immédiates", idee: "La conscience est durée et mémoire ; moi profond vs moi superficiel." },
    { auteur: "Husserl", dates: "1859–1938", courant: "Phénoménologie", oeuvre: "Idées I", idee: "Toute conscience est conscience de quelque chose : l'intentionnalité." },
    { auteur: "Alain", dates: "1868–1951", courant: "Réflexion morale", oeuvre: "Éléments de philosophie", idee: "Penser, c'est dire non : la conscience est jugement." },
    { auteur: "Sartre", dates: "1905–1980", courant: "Existentialisme", oeuvre: "L'Être et le Néant", idee: "La conscience est néant : pure liberté, condamnée à se faire." },
    { auteur: "Merleau-Ponty", dates: "1908–1961", courant: "Phénoménologie", oeuvre: "Phénoménologie de la perception", idee: "La conscience est incarnée — je <em>suis</em> mon corps." }
  ],

  axes: [
    {
      numero: "I",
      titre: "La conscience définit l'homme et fonde le sujet",
      enjeu: "Premier moment : la conscience apparaît comme l'évidence inaugurale, ce qui distingue radicalement l'homme de l'animal et de la chose, et fonde sa dignité comme sujet pensant, libre, responsable.",
      auteurs: [
        {
          nom: "Augustin",
          dates: "354–430",
          oeuvre: "De vera religione (391), Confessions (397–401)",
          these: "La conscience est <b>le lieu de l'intériorité</b> : ne va pas chercher la vérité au-dehors, rentre en toi-même. L'homme intérieur, qui s'interroge sur ses motivations et ses pensées, est le sujet par excellence.",
          explication: "Augustin invente la subjectivité moderne. Avant lui, le sujet de la pensée se rapportait à un cosmos extérieur ; avec lui, la pensée s'enroule sur elle-même et découvre une profondeur intérieure inépuisable, lieu de la mémoire, du désir et finalement de la rencontre avec Dieu. Toute la philosophie de la conscience, de Descartes à Husserl, hérite de ce geste d'introspection.",
          exemple: "Le récit des <i>Confessions</i> — Augustin scrute son propre passé, fouille ses propres motivations (le vol des poires, à 16 ans) pour comprendre pourquoi il a fait le mal. Premier autoportrait psychologique de l'histoire occidentale.",
          citations: [
            { texte: "Ne va pas hors de toi, rentre en toi-même : la vérité habite à l'intérieur de l'homme.", source: "De vera religione, XXXIX, 72", commentaire: "Formule fondatrice de l'introspection occidentale. À mobiliser pour dire que la conscience n'est pas une fenêtre sur le monde mais une plongée en soi." }
          ]
        },
        {
          nom: "Descartes",
          dates: "1596–1650",
          oeuvre: "Méditations métaphysiques (1641), II",
          these: "La conscience de penser est la <b>première certitude</b> et la seule indubitable. Même si je doute de tout — du monde, de mon corps, d'un Dieu trompeur — je ne peux douter que je doute : donc je pense, donc je suis.",
          explication: "Le doute méthodique vise à trouver un point d'arrêt indubitable. Descartes constate que toute pensée, fût-elle erreur ou doute, est un acte qui suppose un être pensant. Le <em>cogito</em> n'est pas une déduction mais une intuition immédiate, saisie en première personne à chaque exécution. La conscience devient le fondement de toute connaissance possible — le sujet précède l'objet.",
          exemple: "Tentez de douter de votre propre existence pendant que vous y pensez : impossible. L'acte même de la tentative la dément. C'est la « performance » du cogito.",
          citations: [
            { texte: "Je pense, donc je suis.", source: "Discours de la méthode, IV (1637)", commentaire: "À ne pas réduire à un syllogisme. C'est une intuition à reproduire soi-même : une vérité de première personne." },
            { texte: "Je ne suis donc, précisément parlant, qu'une chose qui pense, c'est-à-dire un esprit, un entendement ou une raison.", source: "Méditation II", commentaire: "La conscience identifie le sujet à sa pensée — son corps en est dissocié. D'où le dualisme cartésien." }
          ]
        },
        {
          nom: "Pascal",
          dates: "1623–1662",
          oeuvre: "Pensées (posth. 1670), fr. 200 et 113 (Sellier)",
          these: "L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau <b>pensant</b>. Sa dignité ne tient pas à sa force mais à sa conscience — savoir qu'on meurt est plus que mourir.",
          explication: "Pascal ne nie pas la fragilité physique ; il en fait au contraire le ressort de la grandeur humaine. L'univers est immense et nous écrase, mais il l'ignore ; nous le savons. Cette dissymétrie cognitive renverse le rapport de force. La conscience est donc à la fois ce qui rend l'homme misérable (il sait sa finitude) et grand (il la sait).",
          exemple: "Un condamné qui marche vers l'échafaud : physiquement plus vulnérable que jamais, mais sa conscience, en sachant ce qui l'attend, donne à sa situation une dignité absente chez l'animal.",
          citations: [
            { texte: "L'homme n'est qu'un roseau, le plus faible de la nature, mais c'est un roseau pensant. […] Quand l'univers l'écraserait, l'homme serait encore plus noble que ce qui le tue, parce qu'il sait qu'il meurt.", source: "Pensées, fr. 200 (Sellier)", commentaire: "Pivot du « pari » pascalien : la grandeur vient de la conscience de la misère. Idée à recaser dans toute dissertation sur la dignité humaine." }
          ]
        },
        {
          nom: "Locke",
          dates: "1632–1704",
          oeuvre: "Essai philosophique concernant l'entendement humain (1690), II, 27",
          these: "L'identité personnelle ne réside ni dans le corps, ni dans une substance d'âme, mais dans <b>la continuité de la conscience</b> qui s'étend par la mémoire dans le passé. Je suis celui qui se souvient d'être celui-ci.",
          explication: "Locke répond à une question : qu'est-ce qui fait que je suis le même qu'hier ? Pas le corps (il change), pas la substance (inaccessible), mais le tissu de la conscience reliant les états passés et présents par la mémoire. Si demain je ne me rappelle rien, je serai un autre. La conscience devient le critère de l'identité personnelle.",
          exemple: "Expérience de pensée du prince et du cordonnier : si la conscience d'un prince passait dans le corps d'un cordonnier, l'être qui en résulterait serait le prince, pas le cordonnier — car il se souviendrait comme prince.",
          citations: [
            { texte: "C'est dans la conscience seule que consiste l'identité personnelle.", source: "Essai, II, 27, §9", commentaire: "Fondement de toutes les approches modernes de l'identité narrative (Ricœur), des films d'amnésie, des débats sur la téléportation." }
          ]
        },
        {
          nom: "Kant",
          dates: "1724–1804",
          oeuvre: "Anthropologie d'un point de vue pragmatique (1798), §1",
          these: "Posséder le « Je » dans sa représentation <b>élève l'homme infiniment</b> au-dessus de tout autre vivant. C'est cette unité du « Je pense » qui fait de lui une personne — fin en soi, sujet de droit.",
          explication: "Avant l'apparition du « Je » dans le langage de l'enfant, celui-ci parle de lui à la troisième personne (« Pierre veut le jouet »). Le jour où il dit « je veux », un sujet moral surgit. Pour Kant, cette unité aperceptive est aussi ce qui rend possible toute expérience cohérente : c'est le « Je pense » qui accompagne et unifie nos représentations. Conscience = condition de possibilité du sujet moral et théorique.",
          exemple: "L'enfant qui pour la première fois dit « moi, je » — passage de l'animal à la personne. C'est aussi ce qui distingue la personne (Kant) de la chose : la première a une dignité, la seconde un prix.",
          citations: [
            { texte: "Posséder le Je dans sa représentation : ce pouvoir élève l'homme infiniment au-dessus de tous les autres êtres vivants sur la terre. Par là, il est une personne.", source: "Anthropologie, §1", commentaire: "Citation centrale pour toute dissertation sur la dignité humaine, à articuler avec la formule de la fin en soi (FMM)." }
          ]
        },
        {
          nom: "Hegel",
          dates: "1770–1831",
          oeuvre: "Phénoménologie de l'Esprit (1807), IV, A — Esthétique (1835, posth.)",
          these: "La conscience de soi n'est pas un fait donné, mais une <b>conquête</b>. Elle se construit doublement : <em>théoriquement</em> en se prenant pour objet, et <em>pratiquement</em> en transformant les choses extérieures — et surtout dans la lutte pour la reconnaissance d'autrui.",
          explication: "Hegel récuse l'intériorité solitaire cartésienne. La conscience de soi n'est pas immédiate : elle naît dans la confrontation à un autre être conscient. La dialectique du maître et de l'esclave montre que c'est l'esclave, par le travail qui transforme le monde et donne à voir sa propre activité, qui accède à la conscience de soi authentique — pas le maître figé dans la jouissance. L'enfant qui jette des pierres dans l'eau « pour voir les ronds » accomplit déjà ce geste de conscience.",
          exemple: "Le sculpteur qui se reconnaît dans la statue qu'il a faite. L'objet extérieur lui renvoie l'image de son intériorité. Plus généralement : on ne sait qui l'on est qu'à travers ce qu'on fait et ce que les autres reconnaissent en nous.",
          citations: [
            { texte: "L'homme, par son activité pratique, a le droit de transformer les choses extérieures […] afin d'y reconnaître son propre caractère.", source: "Esthétique, Introduction", commentaire: "Conscience comme extériorisation. À mobiliser pour montrer qu'on ne se connaît pas par introspection seule." },
            { texte: "La conscience de soi n'atteint sa satisfaction que dans une autre conscience de soi.", source: "Phénoménologie de l'Esprit, IV", commentaire: "Pose la conscience comme rapport à autrui — anticipe Sartre, Levinas, Honneth." }
          ]
        },
        {
          nom: "Husserl",
          dates: "1859–1938",
          oeuvre: "Idées directrices pour une phénoménologie (1913), §84",
          these: "Toute conscience est <b>conscience de quelque chose</b>. La conscience n'est pas un contenant intérieur fermé : elle est une visée, une intentionnalité, un mouvement vers le monde.",
          explication: "Husserl récuse l'image cartésienne d'une conscience-théâtre dans lequel défileraient des représentations. La conscience n'a pas de contenu indépendant du monde visé : penser, c'est penser à quelque chose ; aimer, c'est aimer quelqu'un. Cette « intentionnalité » dissout l'opposition intérieur/extérieur : la conscience est par essence ouverture sur le monde.",
          exemple: "Quand je perçois cette table, ma conscience n'est pas « plus » qu'une visée de la table : il n'y a pas un « moi » distinct qui regarde une représentation interne. Toute la conscience est dans le geste de viser.",
          citations: [
            { texte: "Toute conscience est conscience de quelque chose.", source: "Idées I, §84", commentaire: "Formule à connaître. Permet de critiquer le cartésianisme (conscience-substance) et d'introduire la phénoménologie." }
          ]
        }
      ]
    },
    {
      numero: "II",
      titre: "La conscience trompeuse : illusion, superficialité, inconscient",
      enjeu: "Deuxième moment dialectique : ce que je crois savoir de moi par conscience immédiate est peut-être l'erreur fondamentale qui me masque mes vraies causes. La conscience est-elle un savoir ou un leurre ? Et l'aperception transparente du cogito ne s'efface-t-elle pas devant les déterminations inconscientes ?",
      auteurs: [
        {
          nom: "Leibniz",
          dates: "1646–1716",
          oeuvre: "Nouveaux Essais sur l'entendement humain (1704, posth.), Préface",
          these: "Il y a en nous, à chaque instant, une <b>infinité de petites perceptions</b> sans aperception ni réflexion — des contenus psychiques que la conscience ne saisit pas, mais qui agissent sur elle et la composent.",
          explication: "Leibniz anticipe Freud de deux siècles. Le bruit de la mer que j'entends est l'addition de millions de bruits de gouttelettes, dont aucun n'est consciemment perçu — pourtant tous concourent à la sensation. De même, nos humeurs, nos préférences, nos décisions « libres » sont composées de micro-perceptions sous le seuil de la conscience. La conscience claire est l'exception, l'inconscient psychique est la règle.",
          exemple: "Tu entends « mer » sans entendre chaque vague. Tu aimes une couleur sans savoir pourquoi. Tu prends une décision « par intuition » : c'est la résultante intégrée d'innombrables perceptions infimes que ta conscience ignore.",
          citations: [
            { texte: "Il y a mille marques qui font juger qu'il y a à tout moment une infinité de perceptions en nous, mais sans aperception et sans réflexion.", source: "Nouveaux Essais, Préface", commentaire: "À utiliser pour montrer que le concept d'inconscient psychique ne date pas de Freud et est rationnellement défendable." }
          ]
        },
        {
          nom: "Spinoza",
          dates: "1632–1677",
          oeuvre: "Éthique (1677, posth.), III, Appendice — Lettre 58 à Schuller",
          these: "Les hommes se croient libres parce qu'ils ont conscience de leurs actions, <b>mais ignorent les causes</b> qui les déterminent. La conscience n'est donc jamais que conscience d'effet, jamais de cause.",
          explication: "Pour Spinoza, tout dans la nature (l'homme inclus) est déterminé. Le sentiment de liberté qu'éprouve la conscience vient seulement de son ignorance des chaînes causales qui la traversent. Si la pierre lancée pensait, elle se croirait libre. La conscience est donc le lieu d'une illusion structurelle : non un mensonge, mais une vision tronquée qui prend la partie pour le tout.",
          exemple: "L'ivrogne « décide » librement de boire un verre de plus ; le mélancolique « choisit » son silence. Tous deux ont la conscience de leur choix, mais ignorent les déterminations qui les y portent.",
          citations: [
            { texte: "Les hommes se trompent en ce qu'ils se croient libres, opinion qui consiste en cela seul qu'ils sont conscients de leurs actions et ignorants des causes par lesquelles ils sont déterminés.", source: "Éthique, II, prop. 35, scolie", commentaire: "La citation à connaître par cœur. Sert pour la liberté ET la conscience. La conscience est une connaissance partielle qui prend l'effet pour la cause." },
            { texte: "Concevez maintenant, si vous le voulez, que la pierre, tandis qu'elle continue de se mouvoir, pense et sache qu'elle s'efforce autant qu'elle peut de continuer à se mouvoir. Cette pierre […] croira être très libre.", source: "Lettre 58 à Schuller", commentaire: "Métaphore lumineuse. Sert d'image-test : si la pierre se croit libre, peut-être te crois-tu libre pour la même raison." }
          ]
        },
        {
          nom: "Nietzsche",
          dates: "1844–1900",
          oeuvre: "Le Gai Savoir (1882), §354 — Ainsi parlait Zarathoustra (1883)",
          these: "La conscience est <b>secondaire et superficielle</b>. Elle s'est développée sous la pression sociale, comme instrument de communication ; ce qu'elle exprime de moi n'est jamais mon vrai « soi » mais la part de moi qui est commune, grégaire, moyenne.",
          explication: "Pour Nietzsche, la conscience est née du besoin de communiquer : pour transmettre, il a fallu rendre ses états mentaux compréhensibles aux autres, donc les traduire en termes communs, donc se les rendre conscients soi-même. Conséquence : la conscience parle déjà le langage du troupeau. Le vrai « soi » — singulier, corporel, instinctif — est plus profond, et c'est ce que Nietzsche appelle « le corps » ou « la grande raison ».",
          exemple: "Quand tu te dis intérieurement « j'ai envie de répondre », tu te dis ce que n'importe qui pourrait dire à ta place. Le « toi » singulier — ton désir corporel, ton ton spontané — précède cette mise en mots et la déborde.",
          citations: [
            { texte: "La conscience ne fait à proprement parler partie de l'existence individuelle de l'homme que dans la mesure où celle-ci a une existence sociale, grégaire.", source: "Le Gai Savoir, §354", commentaire: "À mobiliser contre toute philosophie qui fait de la conscience un sanctuaire de l'individualité." },
            { texte: "Derrière tes pensées et tes sentiments se tient un maître puissant, un sage inconnu — il se nomme Soi. Il habite ton corps, il est ton corps.", source: "Ainsi parlait Zarathoustra, « Des contempteurs du corps »", commentaire: "Inversion : ce n'est pas le corps qui est instrument de l'esprit, c'est la conscience qui est instrument du corps." }
          ]
        },
        {
          nom: "Freud",
          dates: "1856–1939",
          oeuvre: "Introduction à la psychanalyse (1916–17) — Une difficulté de la psychanalyse (1917)",
          these: "Le <b>moi n'est pas maître dans sa propre maison</b>. La vie psychique consciente n'est que la pointe émergée d'un iceberg : l'inconscient (refoulé, structuré, agissant) détermine pensées, désirs, lapsus, rêves, choix.",
          explication: "Freud opère ce qu'il appelle la troisième « blessure narcissique » : après Copernic (la Terre n'est pas le centre) et Darwin (l'homme n'est pas une espèce à part), il montre que l'homme n'est pas même maître de sa propre psyché. La conscience est trompée par ses propres mécanismes de défense : refoulement, déni, rationalisation. Les actes manqués, les lapsus, les rêves, sont les « formations de l'inconscient » qui percent la censure consciente.",
          exemple: "Le ministre des finances qui ouvre une séance par « Je déclare la séance close » : lapsus révélateur d'un désir inconscient. Le rêve, voie royale vers l'inconscient. La phobie, symptôme d'un conflit refoulé.",
          citations: [
            { texte: "Le moi n'est pas maître dans sa propre maison.", source: "Une difficulté de la psychanalyse (1917)", commentaire: "Formule emblématique de la décentration freudienne. À mobiliser pour contester l'évidence du cogito." },
            { texte: "Le rêve est la voie royale qui mène à la connaissance de l'inconscient dans la vie psychique.", source: "L'Interprétation des rêves (1900), VII", commentaire: "Sert pour montrer que l'inconscient n'est pas inaccessible : il a des manifestations interprétables." }
          ]
        },
        {
          nom: "Bergson",
          dates: "1859–1941",
          oeuvre: "Essai sur les données immédiates de la conscience (1889), III — L'Énergie spirituelle (1919)",
          these: "Notre conscience est habituellement <b>superficielle</b> : elle se vit comme un moi social, fait d'automatismes et de mots tout faits. Il existe un moi plus profond, durée vécue, mémoire intégrale — auquel nous n'accédons que rarement.",
          explication: "Bergson distingue deux strates : le moi superficiel, fait de signes appris, traduit en langage commun, partagé avec les autres — et le moi profond, lieu de la durée pure, irréductible aux concepts. La conscience claire travaille avec le premier ; la conscience attentive, intuitive, profonde, ne s'atteint qu'en plongeant sous la croûte verbale.",
          exemple: "Quand on dit « j'ai peur », « je suis amoureux », on plaque un mot général sur une expérience singulière. Mais ma peur, à cet instant, ne ressemble à aucune autre. C'est cette singularité que le moi profond conserve, et que la conscience habituelle perd.",
          citations: [
            { texte: "Conscience signifie d'abord mémoire.", source: "L'Énergie spirituelle", commentaire: "Pour Bergson, pas de conscience sans rétention du passé. Sert à articuler conscience et identité personnelle." }
          ]
        }
      ]
    },
    {
      numero: "III",
      titre: "La conscience comme tâche : liberté, incarnation, responsabilité",
      enjeu: "Troisième moment : si la conscience peut être trompée, elle est aussi ce par quoi je m'arrache aux déterminations et me fais responsable de ce que je suis. La conscience devient moins un état qu'un acte ; moins une donnée qu'une tâche.",
      auteurs: [
        {
          nom: "Sartre",
          dates: "1905–1980",
          oeuvre: "L'Être et le Néant (1943) — L'existentialisme est un humanisme (1946)",
          these: "La conscience est <b>néant</b> : elle n'a pas de nature, pas d'essence. Elle est pur projet, pur surgissement. <em>L'existence précède l'essence</em> — je ne suis rien d'autre que ce que je fais de moi, à chaque instant.",
          explication: "Pour Sartre, le « pour-soi » (la conscience) ne coïncide jamais avec lui-même comme un caillou coïncide avec lui-même. Je ne suis pas <em>lâche</em> comme cette table est en bois : je deviens lâche par mes actes, et chaque instant je peux cesser de l'être. D'où la « mauvaise foi » : nier sa liberté en se réfugiant dans une essence figée. L'exemple célèbre du garçon de café — qui « joue » à être garçon de café, gestes trop précis, voix trop appliquée — montre comment on se fait chose pour fuir le poids de la liberté.",
          exemple: "Le garçon de café qui « joue à être garçon de café » : il est trop garçon de café, il se fait être un rôle, parce qu'être seulement la conscience nue qu'il est lui serait insupportable. De même : « je suis timide » est de la mauvaise foi — tu deviens timide à chaque rencontre, tu peux ne pas l'être à la prochaine.",
          citations: [
            { texte: "L'existence précède l'essence.", source: "L'existentialisme est un humanisme", commentaire: "Formule emblématique. Contre toute essence humaine fixée d'avance — je suis ce que je deviens." },
            { texte: "L'homme est condamné à être libre. Condamné parce qu'il ne s'est pas créé lui-même, et par ailleurs cependant libre, parce qu'une fois jeté dans le monde, il est responsable de tout ce qu'il fait.", source: "L'existentialisme est un humanisme", commentaire: "Articule conscience et responsabilité : avoir conscience = ne pas pouvoir invoquer d'excuse." },
            { texte: "Voyons ce garçon de café. Il a le geste vif et appuyé, un peu trop précis, un peu trop rapide… il joue à être garçon de café.", source: "L'Être et le Néant, II, 2", commentaire: "Description phénoménologique de la mauvaise foi. Citation très utile : permet l'illustration concrète d'un concept abstrait." }
          ]
        },
        {
          nom: "Merleau-Ponty",
          dates: "1908–1961",
          oeuvre: "Phénoménologie de la perception (1945)",
          these: "Je ne suis pas un esprit logé dans un corps : <b>je suis mon corps</b>. La conscience est avant tout incarnée, perceptive, ancrée dans le monde par la chair.",
          explication: "Merleau-Ponty récuse à la fois Descartes (conscience-substance désincarnée) et le matérialisme strict. Avant que je pense, je perçois ; et je perçois parce que j'ai un corps situé dans le monde. Le toucher, le geste, l'orientation spatiale ne sont pas des dérivés de la pensée : ils en sont la condition. Conscience = corps + monde, indissociables.",
          exemple: "Quand tu déplaces une chaise dans le noir, ton corps « sait » où elle est sans que tu y penses. Cette intelligence corporelle, antérieure à la pensée explicite, est le tissu primordial de la conscience.",
          citations: [
            { texte: "Je ne suis pas devant mon corps, je suis dans mon corps, ou plutôt je suis mon corps.", source: "Phénoménologie de la perception, II", commentaire: "Renverse le dualisme cartésien. Sert pour montrer que la conscience n'est pas une pure intériorité, mais un être-au-monde." }
          ]
        },
        {
          nom: "Alain",
          dates: "1868–1951",
          oeuvre: "Éléments de philosophie (1941) — Propos",
          these: "Avoir conscience, c'est <b>juger</b>. La conscience est ce refus de se laisser aller à ce qu'on est, le « non » que l'esprit oppose à ses propres mouvements.",
          explication: "Pour Alain, la conscience n'est pas un miroir passif. Elle est puissance critique : je n'ai vraiment conscience d'une émotion qu'au moment où je la mets à distance pour la juger. Pas de conscience sans cet écart, sans ce refus. Conscience = pouvoir de se dédoubler pour se reprendre.",
          exemple: "Avoir conscience de sa colère, ce n'est pas être en colère : c'est précisément cesser de l'être complètement, car déjà la distance s'installe.",
          citations: [
            { texte: "Penser, c'est dire non.", source: "Propos sur les pouvoirs", commentaire: "Maxime alanienne. La conscience est moins lumière que résistance — pouvoir de refuser ce qui s'impose." }
          ]
        }
      ]
    }
  ],

  cartographie: {
    intro: "Synthèse comparative des grandes positions sur la conscience.",
    criteres: ["Fiabilité de la conscience", "Origine", "Fonction principale", "Critique adressée"],
    positions: [
      { auteur: "Descartes", valeurs: ["Absolue (cogito indubitable)", "Substance pensante", "Fonder toute connaissance", "Naïveté du sujet transparent"] },
      { auteur: "Spinoza", valeurs: ["Trompeuse (illusion de liberté)", "Effet conscient de causes ignorées", "Décrire — non expliquer", "Mécompréhension des causes"] },
      { auteur: "Kant", valeurs: ["Fiable comme forme unifiante", "Aperception transcendantale", "Fonder l'expérience et la personne", "Ne dit rien du « moi en soi »"] },
      { auteur: "Hegel", valeurs: ["Dialectique (devient vraie)", "Reconnaissance et travail", "Se conquérir comme sujet historique", "Solitude cartésienne refusée"] },
      { auteur: "Freud", valeurs: ["Très limitée (~ pointe iceberg)", "Effet de surface du psychisme", "Compromis avec les pulsions", "Centre du sujet, surestimée"] },
      { auteur: "Sartre", valeurs: ["Néant pur (transparence sans contenu)", "Surgissement sans cause", "Liberté radicale, responsabilité", "Conscience-chose, conscience-substance"] }
    ]
  },

  objections: [
    {
      de: "Spinoza",
      vers: "Descartes",
      propos: "« Vous croyez le cogito immédiat et transparent : mais quand vous dites “je pense”, vous ignorez ce qui pense en vous. La conscience de penser n'est pas la connaissance des causes qui produisent cette pensée. Vous prenez la pointe de l'iceberg pour l'iceberg. »"
    },
    {
      de: "Freud",
      vers: "Descartes",
      propos: "« Le “je” du cogito n'est pas un sujet plein mais un compromis entre des instances (ça, moi, surmoi). Le sentiment de penser cohérent est lui-même le résultat d'un travail de refoulement. »"
    },
    {
      de: "Sartre",
      vers: "Freud",
      propos: "« L'inconscient comme alibi est la pire des mauvaises fois : invoquer un “autre” en moi qui agirait à ma place, c'est nier ma liberté. Même mon désir refoulé, je le porte en tant que conscience. »"
    },
    {
      de: "Merleau-Ponty",
      vers: "Sartre",
      propos: "« Tu fais de la conscience un néant pur planant au-dessus du corps : mais la conscience est d'abord corporelle, perception incarnée. Pas de pour-soi sans chair. »"
    },
    {
      de: "Nietzsche",
      vers: "Kant",
      propos: "« Ton sujet unifié, ton “Je pense” — pure fiction grammaticale. La pensée n'arrive pas quand le “je” le veut ; le “je” est un effet du verbe, pas son auteur. »"
    }
  ],

  phrases_formules: [
    "« Toute conscience est conscience d'un écart à soi : elle ne coïncide jamais avec ce qu'elle saisit. »",
    "« Ce que la conscience offre comme une transparence se révèle souvent comme une opacité bien éclairée. »",
    "« L'inconscient ne supprime pas la conscience, il la décentre — il ne la nie pas, il la dépose. »",
    "« Avoir conscience, ce n'est pas seulement savoir, c'est juger ; et juger, c'est se distinguer de ce qu'on juge. »",
    "« Le sujet n'est pas un point de départ, mais un point d'arrivée — il a à se conquérir. »",
    "« Là où l'on croit la conscience pleine, elle est creusée d'un manque ; là où l'on croit la conscience close, elle est tendue vers le monde. »",
    "« Refuser sa conscience, c'est encore en exercer une. »",
    "« La dignité de l'homme ne tient pas à ce qu'il sache de lui-même, mais à ce qu'il puisse, dans cette ignorance même, se reprendre. »"
  ],

  pieges: [
    "<b>Confondre conscience et connaissance de soi</b> : avoir conscience d'être triste ≠ savoir pourquoi je le suis. Spinoza, Freud renversent cette équation.",
    "<b>Opposer conscience et inconscient comme + et –</b> : l'inconscient freudien n'est pas un manque de conscience, c'est un système psychique actif, structuré, doté de ses propres lois.",
    "<b>Réduire le cogito à un syllogisme</b> : « Je pense, donc je suis » n'est pas une déduction (du genre « tout pensant est, je pense, donc je suis »), c'est une intuition à exécuter en première personne.",
    "<b>Penser que la conscience est un théâtre intérieur</b> : pour Husserl et la phénoménologie, elle est intentionnalité — visée du monde, pas spectacle privé.",
    "<b>Confondre conscience psychologique et conscience morale</b> : « avoir mauvaise conscience » mobilise la seconde ; « avoir conscience de ses mains » la première.",
    "<b>Tenir l'animal pour sans conscience</b> : la question reste ouverte (test du miroir, métacognition chez les corvidés, primates). Ne pas trancher trop vite.",
    "<b>Croire qu'avoir conscience suffit à être libre</b> : Spinoza, Marx, Freud rappellent que la conscience peut être conscience d'une servitude qu'elle ne perçoit pas comme telle."
  ],

  methode: {
    problematiser: "Sur la conscience, le piège est de partir d'une définition unique. Toujours commencer par une expérience vive (le sentiment immédiat d'être soi), puis y faire entrer le soupçon (sommes-nous transparents à nous-mêmes ?), puis reconstruire (la conscience comme tâche).",
    plan_type: "I. Évidence (cogito, dignité) — II. Soupçon (déterminations, inconscient) — III. Reconstruction (conscience comme acte, responsabilité, incarnation).",
    accroches: [
      "Partir d'un acte manqué célèbre (Freud) ou d'une expérience commune (lapsus, mauvaise foi).",
      "Citer un personnage littéraire : Meursault dans <i>L'Étranger</i> (conscience à distance), Raskolnikov (conscience morale).",
      "Évoquer le test du miroir chez l'animal pour interroger ce qui sépare conscience humaine et animale.",
      "Partir d'une question d'identité : « Suis-je le même qu'il y a dix ans ? » → Locke."
    ]
  },

  plan_corrige: {
    sujet: "La conscience de soi suffit-elle pour se connaître ?",
    accroche: "Au matin, je me regarde dans le miroir et je dis « moi ». Pourtant ce visage que je vois est précisément ce que les autres voient — pas ce que je sens du dedans. Et cette voix intérieure qui me dit « moi », d'où vient-elle ? La conscience que j'ai d'exister suffit-elle à me livrer ce que je suis ?",
    problematique: "Sujet en apparence intime : me connaître semble dépendre de la profondeur avec laquelle je m'examine. Mais l'examen lui-même est sujet à caution : la conscience peut-elle se prendre pour objet de manière fiable, ou la connaissance de soi exige-t-elle un détour par autrui, par les œuvres, par l'inconscient révélé ?",
    annonce: "Nous verrons d'abord que la conscience de soi semble fonder une transparence à soi immédiate (I) ; cependant, cette transparence est contestée par les déterminismes qui montrent que la conscience ne saisit pas ses propres causes (II) ; il faudra dès lors comprendre la connaissance de soi non comme donnée mais comme tâche, exigeant le détour par autrui, le travail et la réflexion (III).",
    parties: [
      {
        titre: "I. La conscience de soi paraît offrir une connaissance immédiate et certaine",
        idee: "Le cogito cartésien et la dignité du « Je » kantien fondent l'idée d'une transparence du sujet à lui-même.",
        args: [
          { nom: "Descartes (cogito)", dev: "La conscience de penser est la première certitude. En doutant de tout, je ne peux douter que je pense.", citation: "« Je pense, donc je suis » (Discours IV)." },
          { nom: "Kant (le Je)", dev: "Pouvoir dire « Je » élève l'homme au rang de personne, sujet unifié de ses représentations.", citation: "« Posséder le Je dans sa représentation élève l'homme infiniment au-dessus de tous les autres êtres » (Anthropologie, §1)." },
          { nom: "Locke (identité personnelle)", dev: "Je sais qui je suis par la continuité de ma conscience mémorielle.", citation: "« C'est dans la conscience seule que consiste l'identité personnelle » (Essai II, 27)." }
        ]
      },
      {
        titre: "II. Mais cette transparence est trompeuse — la conscience ignore ce qui la détermine",
        idee: "Spinoza, Freud, Nietzsche montrent que la conscience est une connaissance partielle qui prend l'effet pour la cause.",
        args: [
          { nom: "Spinoza (illusion)", dev: "Je sais que j'agis ; j'ignore pourquoi. Le sentiment de liberté vient de cette ignorance.", citation: "« Les hommes se trompent en ce qu'ils se croient libres » (Éthique II, 35, scolie)." },
          { nom: "Freud (inconscient)", dev: "Mes pensées conscientes sont la pointe d'un iceberg psychique. Je ne suis pas maître chez moi.", citation: "« Le moi n'est pas maître dans sa propre maison »." },
          { nom: "Nietzsche (superficialité)", dev: "La conscience exprime le « moyen », le commun, l'utile à la communication — pas l'individu profond." }
        ]
      },
      {
        titre: "III. Se connaître exige le détour : autrui, l'œuvre, l'analyse",
        idee: "La connaissance de soi est moins introspective qu'extériorisée et conquise.",
        args: [
          { nom: "Hegel (reconnaissance)", dev: "On ne se connaît qu'à travers ce qu'on fait et ce qu'autrui reconnaît en nous." },
          { nom: "Sartre (responsabilité)", dev: "Je suis ce que je fais, à chaque instant — me connaître, c'est m'engager.", citation: "« L'existence précède l'essence »." },
          { nom: "Merleau-Ponty (incarnation)", dev: "La connaissance de soi passe par le corps perceptif, qui ne se voit pas comme objet mais s'éprouve.", citation: "« Je suis mon corps »." }
        ]
      }
    ],
    conclusion: "Conscience de soi et connaissance de soi ne sont pas équivalentes. La première est immédiate et donc trompeuse ; la seconde est médiate, exigeante, et passe par l'autre, le travail, la réflexion critique. Loin d'être une donnée, l'identité est ce que je me fais en cherchant à la dire. Reste à savoir s'il existe une connaissance achevée de soi — ou si l'homme demeure, comme l'écrivait Nietzsche, « l'étranger pour lui-même »."
  },

  ouvertures: [
    { type: "Roman", ref: "Camus, <i>L'Étranger</i> (1942)", comment: "Meursault est conscient sans être présent à lui-même — la conscience comme distance, indifférence, opacité." },
    { type: "Roman", ref: "Dostoïevski, <i>Crime et Châtiment</i> (1866)", comment: "La conscience morale de Raskolnikov le ronge après le meurtre, indépendamment de toute découverte extérieure." },
    { type: "Roman", ref: "Maupassant, <i>Le Horla</i> (1887)", comment: "Conscience dédoublée — l'expérience inquiétante d'une autre présence en soi." },
    { type: "Film", ref: "C. Nolan, <i>Memento</i> (2000)", comment: "Sans mémoire, plus d'identité personnelle (Locke). Le héros oublie qui il est toutes les dix minutes." },
    { type: "Film", ref: "S. Kubrick, <i>2001 : l'Odyssée de l'espace</i> (1968)", comment: "HAL 9000 : une intelligence artificielle peut-elle avoir conscience d'elle-même ? Question contemporaine." },
    { type: "Sciences", ref: "Test du miroir (Gallup, 1970)", comment: "Quelques espèces (chimpanzés, éléphants, pies) se reconnaissent dans un miroir — indice possible de conscience de soi." },
    { type: "Sciences", ref: "Expérience de Libet (1983)", comment: "L'activité cérébrale précéderait de ~300 ms la conscience d'avoir décidé. Limite de la transparence du sujet à lui-même." }
  ],

  sujets_bac: [
    "La conscience de soi suffit-elle pour se connaître ?",
    "Peut-on échapper à sa conscience ?",
    "Avoir conscience, est-ce un fardeau ?",
    "La conscience nous trompe-t-elle ?",
    "Suis-je ce dont j'ai conscience d'être ?",
    "Faut-il opposer la conscience à l'inconscient ?",
    "L'homme est-il responsable de tout ce dont il a conscience ?",
    "Toute prise de conscience est-elle libératrice ?"
  ],

  notions_liees: ["liberte", "inconscient", "devoir", "verite"]
},

/* ════════════════════════════════════════════════════════════════════════
   LA LIBERTÉ
   ════════════════════════════════════════════════════════════════════════ */
{
  id: "liberte",
  notion: "La liberté",
  etymologie: "Du latin <i>liber</i>, opposé à <i>servus</i> (esclave) — est libre d'abord celui qui n'appartient à personne. Du grec <i>eleutheria</i>, statut du citoyen membre de la <i>polis</i>.",
  problematique: "Sommes-nous réellement libres, ou la liberté n'est-elle qu'une illusion née de notre ignorance des causes qui nous déterminent ? Et si nous sommes libres, est-ce une donnée naturelle ou une conquête à arracher contre nous-mêmes et contre nos déterminations ?",
  a_retenir: "Trois grandes positions à articuler. <b>Le libre arbitre</b> (Descartes, Augustin) — la liberté est un pouvoir métaphysique de choisir, expérimenté en première personne. <b>Le déterminisme</b> (Spinoza, Marx, Freud) — ce que je crois libre est une ignorance des causes. <b>L'autonomie comme conquête</b> (Rousseau, Kant, Sartre) — la liberté véritable n'est pas spontanéité mais auto-détermination rationnelle, arrachée contre les déterminations immédiates.",

  definitions: [
    { terme: "Liberté (sens négatif)", def: "Absence de contrainte ou d'obstacle extérieur — pouvoir faire ce qu'on veut sans entrave (Hobbes, Constant)." },
    { terme: "Liberté (sens positif)", def: "Autonomie : pouvoir d'agir selon sa propre loi, de se déterminer soi-même rationnellement (Rousseau, Kant)." },
    { terme: "Libre arbitre", def: "Pouvoir métaphysique de choisir indifféremment entre deux options, sans y être déterminé par aucune cause antérieure. Descartes, Augustin." },
    { terme: "Indépendance", def: "Ne pas dépendre d'autrui pour vivre. À distinguer de la liberté : un animal sauvage est indépendant, pas libre." },
    { terme: "Spontanéité", def: "Capacité d'agir sans contrainte extérieure. Insuffisante pour une liberté véritable (un fou agit spontanément)." },
    { terme: "Délibération (proairésis)", def: "Examen rationnel des moyens en vue d'une fin ; condition aristotélicienne du choix volontaire." },
    { terme: "Autonomie", def: "Étymologiquement « se donner à soi-même sa propre loi » (auto-nomos). Cœur de la liberté kantienne." },
    { terme: "Hétéronomie", def: "Recevoir sa loi d'un autre que soi (passions, désirs, autorité extérieure). Opposée à l'autonomie." }
  ],

  distinctions: [
    "<b>Liberté ≠ libre arbitre</b> : on peut tenir une liberté véritable (autonomie kantienne) sans admettre le libre arbitre comme indifférence métaphysique.",
    "<b>Liberté ≠ indépendance</b> : l'animal est indépendant mais pas libre ; le citoyen obéit aux lois et est potentiellement plus libre que le sauvage isolé.",
    "<b>Liberté naturelle / civile</b> (Rousseau) : la première est pouvoir illimité borné par la seule force ; la seconde, pouvoir limité par la volonté générale, mais effectivement garanti.",
    "<b>Liberté formelle / réelle</b> (Marx) : être juridiquement libre ne suffit pas si les conditions économiques rendent l'exercice de cette liberté impossible.",
    "<b>Liberté des Anciens / des Modernes</b> (Constant) : la première est participation collective au pouvoir politique ; la seconde, indépendance privée et jouissance individuelle.",
    "<b>Liberté négative / positive</b> (I. Berlin) : être libre <em>de</em> quoi (absence d'entrave) / libre <em>pour</em> quoi (capacité de réaliser).",
    "<b>Faire ce qui me plaît ≠ être libre</b> : suivre ses désirs, c'est obéir à des forces (passions, instincts, conditionnements) — pas se déterminer soi-même."
  ],

  frise: [
    { auteur: "Aristote", dates: "–384 / –322", courant: "Antiquité grecque", oeuvre: "Éthique à Nicomaque", idee: "Liberté = choix délibéré (proairésis), volontaire en connaissance de cause." },
    { auteur: "Épictète", dates: "50–125", courant: "Stoïcisme", oeuvre: "Manuel, Entretiens", idee: "Liberté intérieure : distinguer ce qui dépend de nous." },
    { auteur: "Augustin", dates: "354–430", courant: "Patristique", oeuvre: "De libero arbitrio", idee: "Libre arbitre comme don divin, source du mal moral." },
    { auteur: "Hobbes", dates: "1588–1679", courant: "Contractualisme", oeuvre: "Léviathan", idee: "Liberté = absence d'obstacle extérieur (compatibilisme)." },
    { auteur: "Descartes", dates: "1596–1650", courant: "Rationalisme", oeuvre: "Méditation IV", idee: "Libre arbitre infini : ce qui en l'homme imite Dieu." },
    { auteur: "Spinoza", dates: "1632–1677", courant: "Rationalisme moniste", oeuvre: "Éthique", idee: "Le libre arbitre est une illusion : tout est causalement déterminé." },
    { auteur: "Rousseau", dates: "1712–1778", courant: "Lumières", oeuvre: "Du Contrat social", idee: "Liberté civile = obéissance à la loi qu'on s'est prescrite." },
    { auteur: "Kant", dates: "1724–1804", courant: "Idéalisme transcendantal", oeuvre: "FMM, Critique de la raison pratique", idee: "Liberté = autonomie de la raison pratique." },
    { auteur: "Constant", dates: "1767–1830", courant: "Libéralisme", oeuvre: "De la liberté des Anciens…", idee: "Distinction Anciens (politique) vs Modernes (privée)." },
    { auteur: "Hegel", dates: "1770–1831", courant: "Idéalisme allemand", oeuvre: "Principes de la philosophie du droit", idee: "L'histoire universelle = progrès dans la conscience de la liberté." },
    { auteur: "Tocqueville", dates: "1805–1859", courant: "Libéralisme politique", oeuvre: "De la démocratie en Amérique", idee: "Risque démocratique : despotisme doux, tyrannie de la majorité." },
    { auteur: "Mill", dates: "1806–1873", courant: "Libéralisme utilitariste", oeuvre: "De la liberté", idee: "Harm principle : ma liberté s'arrête où commence le tort à autrui." },
    { auteur: "Marx", dates: "1818–1883", courant: "Matérialisme historique", oeuvre: "Le 18 Brumaire", idee: "Les hommes font l'histoire dans des conditions qu'ils n'ont pas choisies." },
    { auteur: "Bergson", dates: "1859–1941", courant: "Spiritualisme", oeuvre: "Données immédiates", idee: "Liberté = acte qui exprime la personnalité tout entière." },
    { auteur: "Freud", dates: "1856–1939", courant: "Psychanalyse", oeuvre: "Introduction à la psychanalyse", idee: "Le libre choix est surdéterminé par l'inconscient." },
    { auteur: "Sartre", dates: "1905–1980", courant: "Existentialisme", oeuvre: "L'Être et le Néant", idee: "L'homme est condamné à être libre — pas d'essence préalable." },
    { auteur: "Beauvoir", dates: "1908–1986", courant: "Existentialisme féministe", oeuvre: "Le Deuxième Sexe", idee: "Ma liberté n'est rien sans celle d'autrui ; liberté en situation." }
  ],

  axes: [
    {
      numero: "I",
      titre: "La liberté comme libre arbitre : l'homme cause première de ses actes",
      enjeu: "Thèse classique du sens commun, élaborée par Aristote, Augustin et Descartes : l'homme se distingue du reste du vivant parce qu'il peut, par un acte de volonté, choisir entre des possibles — il est cause première de ses actes.",
      auteurs: [
        {
          nom: "Aristote",
          dates: "–384 / –322",
          oeuvre: "Éthique à Nicomaque, III, 1–5",
          these: "Est volontaire l'acte qui a sa cause <b>en l'agent</b>, fait en connaissance de cause, après <b>délibération</b> (<em>proairésis</em>). Le choix est désir réfléchi.",
          explication: "Aristote ne pose pas un libre arbitre métaphysique sans cause : il distingue volontaire et involontaire. Est involontaire l'acte commis sous contrainte (force extérieure) ou par ignorance. Le volontaire suppose la délibération — examen rationnel des moyens en vue d'une fin. Cas mixtes : le capitaine qui jette sa cargaison dans la tempête agit-il volontairement ? Oui, dit Aristote, parce que dans la situation, il a choisi.",
          exemple: "Tu ne délibères pas pour savoir si tu vas respirer (ce n'est pas en ton pouvoir) ; tu délibères pour savoir si tu vas dire la vérité à un ami sur un sujet sensible. Là est le lieu de la liberté.",
          citations: [
            { texte: "Le choix sera désir délibératif des choses qui dépendent de nous.", source: "Éthique à Nicomaque, III, 5", commentaire: "Sert pour définir précisément ce qu'on entend par « choix libre » : ni pulsion brute, ni indifférence métaphysique — délibération raisonnée." }
          ]
        },
        {
          nom: "Augustin",
          dates: "354–430",
          oeuvre: "De libero arbitrio (Du libre arbitre, 388–395)",
          these: "Le libre arbitre est <b>don de Dieu</b> et source de la responsabilité morale. C'est parce que l'homme est libre qu'il peut faire le mal — et qu'il en porte la responsabilité, non Dieu.",
          explication: "Augustin construit le concept moderne de libre arbitre pour résoudre le problème du mal : si Dieu est bon et tout-puissant, d'où vient le mal ? Réponse : du libre arbitre humain. Mais cette liberté pose un problème : comment concilier la prescience divine (Dieu sait ce que je ferai) et ma liberté ? Augustin maintient les deux : Dieu sait, mais ne contraint pas.",
          exemple: "Le récit du vol des poires dans les <i>Confessions</i> : Augustin se demande pourquoi, adolescent, il a volé des fruits dont il n'avait pas besoin. Réponse : pour le mal lui-même. Pure liberté de la volonté mauvaise — donc pure responsabilité.",
          citations: [
            { texte: "Le libre arbitre de la volonté est un grand bien.", source: "De libero arbitrio, II, 18", commentaire: "Renverse l'évaluation : la liberté est un bien même si elle rend le mal possible. À mobiliser pour penser le risque de la liberté." }
          ]
        },
        {
          nom: "Descartes",
          dates: "1596–1650",
          oeuvre: "Méditations métaphysiques (1641), IV — Principes I, 39 — Lettre au Père Mesland (1645)",
          these: "Le libre arbitre est en l'homme ce qui le rend <b>semblable à Dieu</b>. Il est infini : aucune contrainte ne peut me forcer à donner ou refuser mon assentiment. La liberté éclairée (suivre le vrai) est supérieure à la liberté d'indifférence (choisir indistinctement).",
          explication: "Descartes distingue deux niveaux. La <em>liberté d'indifférence</em> est le plus bas degré : pouvoir choisir le moins bon, marque de l'imperfection. La <em>liberté éclairée</em> est le plus haut : suivre ce que l'entendement reconnaît comme vrai — non par contrainte, mais par évidence. Le libre arbitre est tellement évident qu'il n'a pas besoin de preuve : nous en faisons l'expérience à chaque instant en première personne.",
          exemple: "Quand tu hésites entre deux desserts sans préférer l'un à l'autre, tu exerces une liberté d'indifférence ; quand tu choisis le vrai parce qu'il s'impose à ton entendement, tu exerces la liberté la plus haute. La vraie liberté n'est pas hésitation : c'est adhésion lucide.",
          citations: [
            { texte: "Il n'y a que la volonté seule, ou la liberté du franc arbitre, que j'expérimente en moi être si grande, que je ne conçois point l'idée d'aucune autre plus ample et plus étendue.", source: "Méditation IV", commentaire: "Définition de la liberté cartésienne comme infinie — analogie avec Dieu. À mobiliser pour la thèse forte du libre arbitre." },
            { texte: "Cette indifférence […] est plutôt un défaut dans la connaissance qu'une perfection dans la volonté.", source: "Méditation IV", commentaire: "Permet de nuancer : pour Descartes, la liberté maximale n'est PAS l'hésitation indifférente, c'est l'adhésion lucide au vrai." }
          ]
        }
      ]
    },
    {
      numero: "II",
      titre: "Critique du libre arbitre : les déterminismes",
      enjeu: "Et si la liberté ressentie n'était que l'envers de notre ignorance des causes ? La modernité enregistre la critique : causes psychiques, sociales, économiques, inconscientes, neurobiologiques — autant de forces qui font nos « choix » à notre place. Reste à savoir si déterminisme et liberté sont incompatibles.",
      auteurs: [
        {
          nom: "Spinoza",
          dates: "1632–1677",
          oeuvre: "Éthique (1677, posth.), I App., II prop. 35 ; Lettre 58 à Schuller",
          these: "Le libre arbitre est une <b>illusion</b>. Tout dans la nature (l'homme compris) est rigoureusement déterminé. L'homme se croit libre parce qu'il a conscience de ses désirs, mais ignore les causes qui les produisent.",
          explication: "Spinoza ne nie pas la liberté : il la redéfinit. Est libre ce qui agit par la seule nécessité de sa nature. Pour l'homme, devenir libre, c'est comprendre les causes qui le déterminent — la connaissance libère, l'ignorance enchaîne. La liberté n'est donc pas un point de départ (libre arbitre), c'est une conquête de la raison.",
          exemple: "L'image de la pierre lancée : si elle pensait, elle se croirait libre, ignorant la main qui l'a lancée. Notre sentiment de liberté ressemble : nous avons conscience du mouvement, pas de l'impulsion qui le cause.",
          citations: [
            { texte: "Les hommes se trompent en ce qu'ils se croient libres, opinion qui consiste en cela seul qu'ils sont conscients de leurs actions et ignorants des causes par où ils sont déterminés.", source: "Éthique, II, prop. 35, scolie", commentaire: "Citation cardinale. À connaître par cœur. Sert pour liberté ET conscience." },
            { texte: "Si la pierre, après avoir reçu l'impulsion, pouvait penser, elle croirait être libre et ne continuer son mouvement que parce qu'elle le voudrait.", source: "Lettre 58 à Schuller", commentaire: "Métaphore décisive. Permet de penser le sentiment subjectif de liberté comme effet d'une perspective limitée." }
          ]
        },
        {
          nom: "Hobbes",
          dates: "1588–1679",
          oeuvre: "Léviathan (1651), XXI",
          these: "La liberté n'est pas l'absence de cause, mais <b>l'absence d'obstacle extérieur</b>. Un homme libre est celui qui n'est empêché de faire ce qu'il veut. Déterminisme et liberté sont compatibles (compatibilisme).",
          explication: "Hobbes refuse à la fois le libre arbitre métaphysique (idée vide) et l'idée que tout déterminisme abolit la liberté. Une rivière qui suit son cours est libre dans son lit, même si son mouvement est nécessaire. De même, un homme est libre quand il peut faire ce qu'il veut — peu importe qu'il « doive » vouloir ce qu'il veut. La liberté est politique et pratique, non métaphysique.",
          exemple: "Un homme attaché par des chaînes n'est pas libre ; un homme qui veut boire un verre de vin et le fait est libre — même si la nécessité de son désir s'enchaîne à toute une série de causes.",
          citations: [
            { texte: "Un homme libre est celui qui, pour les choses que sa force et son esprit le rendent capable de faire, n'est pas empêché de faire ce qu'il a la volonté de faire.", source: "Léviathan, XXI", commentaire: "Définition compatibiliste classique. Permet de défaire le faux dilemme « déterminisme ou liberté »." }
          ]
        },
        {
          nom: "Marx",
          dates: "1818–1883",
          oeuvre: "Le 18 Brumaire de Louis Bonaparte (1852) ; L'Idéologie allemande (1845–46)",
          these: "Les hommes font leur propre histoire — mais <b>pas dans des conditions choisies par eux</b>. Les rapports économiques et sociaux hérités pèsent comme un cauchemar sur la conscience des vivants. La liberté formelle (juridique) du salarié masque sa contrainte économique réelle.",
          explication: "Marx refuse autant le libre arbitre pur que le fatalisme. La liberté est réelle mais conditionnée. Le contrat de travail est juridiquement « libre » : nul ne force le salarié. Mais matériellement, sans propriété des moyens de production, il doit vendre sa force de travail pour survivre. La libération exige donc la transformation des conditions matérielles, pas seulement des esprits.",
          exemple: "Tu es « libre » de choisir ton emploi, mais tu n'es pas libre de ne pas travailler. Tu es « libre » d'acheter ce que tu veux, mais ton budget contraint ton choix. La liberté formelle peut masquer une contrainte réelle.",
          citations: [
            { texte: "Les hommes font leur propre histoire, mais ils ne la font pas arbitrairement, dans des conditions choisies par eux, mais dans des conditions directement données et héritées du passé.", source: "Le 18 Brumaire, ouverture", commentaire: "Citation très bankable. Permet de dire : la liberté est réelle ET conditionnée. À opposer à Sartre." }
          ]
        },
        {
          nom: "Freud",
          dates: "1856–1939",
          oeuvre: "Introduction à la psychanalyse (1916–17), 6e leçon",
          these: "Nos actes les plus apparemment libres — choix amoureux, vocations, lapsus, oublis — sont <b>surdéterminés par l'inconscient</b>. Le sentiment de libre choix masque la causalité psychique.",
          explication: "Freud étend le principe de déterminisme à la vie psychique : pas d'événement psychique sans cause. Mais cette cause est souvent refoulée — infantile, sexuelle, parentale. Lorsque je crois choisir librement mon partenaire, je rejoue souvent un schéma œdipien ; lorsque j'oublie un nom, ce n'est pas hasard mais conflit refoulé.",
          exemple: "Tu « choisis » de tomber amoureuse de quelqu'un qui ressemble à ton père — ou à son inverse exact, ce qui revient psychiquement au même. L'inconscient agit derrière le sentiment du choix.",
          citations: [
            { texte: "Vous avez tendance à attribuer aux choix mentaux une liberté que la psychanalyse vient contester.", source: "Introduction à la psychanalyse, 6e leçon", commentaire: "À utiliser pour montrer que la psychanalyse n'est pas un simple constat, mais un rabattement du libre arbitre." }
          ]
        }
      ]
    },
    {
      numero: "III",
      titre: "La liberté comme conquête : autonomie, engagement, situation",
      enjeu: "Et si la liberté n'était pas un fait donné mais une tâche à accomplir ? Penser la liberté comme autonomie (Rousseau, Kant), comme engagement (Sartre), comme conquête historique (Hegel, Beauvoir) — non comme spontanéité mais comme effort arraché contre les déterminations immédiates.",
      auteurs: [
        {
          nom: "Épictète",
          dates: "50–125",
          oeuvre: "Manuel (Encheiridion), I et V",
          these: "Seul est libre celui qui distingue <b>ce qui dépend de nous</b> (nos jugements, désirs, refus, impulsions) <b>de ce qui n'en dépend pas</b> (corps, biens, réputation, mort). La liberté est intérieure, jamais extérieure.",
          explication: "Épictète, esclave puis affranchi, sait que la liberté politique peut être absente sans que la liberté intérieure le soit. Toute la sagesse stoïcienne consiste à concentrer son énergie sur ce qui dépend de soi, et à accepter sereinement ce qui n'en dépend pas. Ce n'est pas la chose qui blesse, c'est le jugement qu'on porte sur la chose.",
          exemple: "Un détenu peut être plus libre qu'un homme riche aliéné par la peur de perdre ses biens. Mandela, à Robben Island, pratiquait cette liberté intérieure. La prison contraint le corps, pas le jugement.",
          citations: [
            { texte: "Il y a des choses qui dépendent de nous, d'autres qui n'en dépendent pas.", source: "Manuel, I", commentaire: "Distinction-clé. À mobiliser pour dire que la liberté n'est pas dans le pouvoir extérieur mais dans le rapport à soi." },
            { texte: "Souviens-toi que ce qui blesse les hommes, ce ne sont pas les choses elles-mêmes, mais les jugements qu'ils portent sur les choses.", source: "Manuel, V", commentaire: "Anticipe les thérapies cognitives modernes. Liberté = pouvoir sur ses propres représentations." }
          ]
        },
        {
          nom: "Rousseau",
          dates: "1712–1778",
          oeuvre: "Du Contrat social (1762), I, 4–8",
          these: "L'homme n'est civilement libre que lorsqu'il <b>obéit à des lois qu'il s'est lui-même prescrites</b>. L'obéissance à la loi qu'on s'est donnée est liberté. Renoncer à sa liberté serait renoncer à sa qualité d'homme.",
          explication: "Rousseau renverse l'idée que l'État soit un mal pour la liberté. La liberté naturelle, livrée à la seule force, est précaire ; le contrat social, en substituant à cette liberté une liberté civile garantie par la loi commune (volonté générale), permet une liberté véritable. Obéir à la loi qu'on a faite, c'est encore vouloir ce qu'on fait — donc être libre.",
          exemple: "Un sportif accepte les règles du jeu : sans elles, le jeu n'existerait pas. Sa « contrainte » est ce qui lui permet de jouer librement. De même les lois civiles : sans elles, pas de citoyens, donc pas de liberté véritable.",
          citations: [
            { texte: "L'obéissance à la loi qu'on s'est prescrite est liberté.", source: "Du Contrat social, I, 8", commentaire: "Formule centrale. Sert pour : autonomie politique, articulation liberté/loi, critique de l'opposition liberté/règle." },
            { texte: "Renoncer à sa liberté, c'est renoncer à sa qualité d'homme, aux droits de l'humanité, même à ses devoirs.", source: "Du Contrat social, I, 4", commentaire: "La liberté n'est pas seulement un droit mais un devoir constitutif de l'humanité." }
          ]
        },
        {
          nom: "Kant",
          dates: "1724–1804",
          oeuvre: "Fondements de la métaphysique des mœurs (1785), III ; Critique de la raison pratique (1788)",
          these: "Être libre, ce n'est pas suivre ses penchants — c'est <b>obéir à la loi morale</b> que la raison se donne à elle-même. La liberté véritable est autonomie de la raison pratique : agir selon une maxime que je pourrais ériger en loi universelle.",
          explication: "Pour Kant, suivre ses désirs, c'est encore subir : la nature parle en moi, je suis hétéronome. La liberté authentique consiste à agir par devoir, c'est-à-dire en suivant l'impératif catégorique — loi universelle que je me donne moi-même par la raison. Liberté et moralité sont synonymes. C'est parce que je peux dire « non » à mes inclinations que je suis libre.",
          exemple: "Tu as faim et tu vois un sandwich sur la table d'un inconnu. Suivre ton désir, c'est l'hétéronomie. Te dire « si tout le monde faisait ça, plus personne ne pourrait poser un sandwich nulle part », c'est ériger la maxime en loi universelle : ne pas voler. Là est la liberté autonome.",
          citations: [
            { texte: "Agis seulement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle.", source: "FMM, II", commentaire: "Première formulation de l'impératif catégorique. Sert pour articuler liberté et devoir." },
            { texte: "Une volonté libre et une volonté soumise à des lois morales sont une seule et même chose.", source: "FMM, III", commentaire: "Identification kantienne liberté / moralité. À utiliser pour réfuter « liberté = faire ce qu'on veut »." }
          ]
        },
        {
          nom: "Hegel",
          dates: "1770–1831",
          oeuvre: "Principes de la philosophie du droit (1820) ; Leçons sur la philosophie de l'histoire (1837, posth.)",
          these: "La liberté n'est pas une intériorité abstraite : elle se <b>réalise objectivement</b> dans les institutions — famille, société civile, État. L'histoire universelle est progrès dans la conscience de la liberté.",
          explication: "Hegel récuse à la fois la liberté solitaire (Stoïciens), la liberté formelle (Kant) et le libre arbitre comme caprice. La vraie liberté est <em>effective</em> : elle se déploie dans des structures sociales qui la garantissent. La dialectique du maître et de l'esclave montre que c'est l'esclave, par le travail qui transforme le monde, qui accède à la liberté ; le maître, dépendant du travail de l'autre, ne l'atteint pas.",
          exemple: "Un citoyen vit dans un État de droit : ses libertés sont protégées par les institutions. Comparé à un sauvage isolé soumis à la peur, il est plus libre — sa liberté est <em>effective</em>, garantie, reconnue.",
          citations: [
            { texte: "L'histoire universelle n'est rien d'autre que le progrès dans la conscience de la liberté.", source: "Leçons sur la philosophie de l'histoire, Introduction", commentaire: "À mobiliser pour penser la liberté comme processus historique, pas comme état naturel." },
            { texte: "L'État est la réalité effective de la liberté concrète.", source: "Philosophie du droit, §260", commentaire: "Contre Rousseau (volonté générale abstraite) et le libéralisme négatif : l'État rend la liberté réelle." }
          ]
        },
        {
          nom: "Constant",
          dates: "1767–1830",
          oeuvre: "De la liberté des Anciens comparée à celle des Modernes (1819)",
          these: "Il faut distinguer <b>deux libertés</b>. Antique : participation collective au pouvoir politique, mais sans autonomie privée. Moderne : indépendance individuelle, jouissances privées, libertés civiles. Confondre les deux, comme la Terreur révolutionnaire, mène au despotisme au nom de la liberté.",
          explication: "Constant écrit après la Révolution française, contre les Jacobins qui voulaient ressusciter la liberté antique (participation totale du citoyen à la chose publique) au prix de la vie privée. Il montre que les sociétés modernes (commerciales, larges, individualistes) appellent un type différent de liberté : l'indépendance privée, garantie par des droits, à laquelle s'ajoute (mais ne se substitue pas) une participation politique représentative.",
          exemple: "Un Athénien votait pour exiler ou condamner à mort un autre citoyen, mais sa vie privée était scrutée et contrainte. Un Européen moderne ne participe que de loin au pouvoir politique, mais ses choix de vie sont protégés. Deux libertés, deux modèles, à ne pas confondre.",
          citations: [
            { texte: "Le but des Anciens était le partage du pouvoir social entre tous les citoyens d'une même patrie. […] Le but des Modernes est la sécurité dans les jouissances privées.", source: "De la liberté des Anciens…", commentaire: "Distinction très utile en dissertation : permet de désambiguïser le mot « liberté » au début d'un sujet politique." }
          ]
        },
        {
          nom: "Tocqueville",
          dates: "1805–1859",
          oeuvre: "De la démocratie en Amérique (1840), II, IV, 6",
          these: "La démocratie produit un nouveau type d'oppression — non plus tyrannique mais <b>doux</b> — par la pression conformiste de l'opinion majoritaire. La liberté politique formelle peut coexister avec une servitude des esprits.",
          explication: "Tocqueville observe en Amérique le pendant inquiétant de la démocratie : la passion de l'égalité, devenue exclusive, conduit à la conformité, à la docilité, à la tutelle bienveillante de l'État. Le citoyen renonce à exercer activement sa liberté en échange d'une sécurité confortable. Et l'opinion majoritaire pèse sur les esprits avec une force inconnue des anciennes tyrannies.",
          exemple: "Les réseaux sociaux modernes illustrent la « tyrannie de la majorité » : pression conformiste, peur de la cancellation, autocensure. Aucun État ne nous impose ce silence : c'est l'opinion qui le fait.",
          citations: [
            { texte: "Je pense que l'espèce d'oppression dont les peuples démocratiques sont menacés ne ressemblera à rien de ce qui l'a précédée dans le monde.", source: "De la démocratie en Amérique, II, IV, 6", commentaire: "Annonce le concept de « despotisme doux ». À utiliser pour penser les menaces contemporaines sur la liberté." },
            { texte: "Je ne connais pas de pays où il règne, en général, moins d'indépendance d'esprit et de véritable liberté de discussion qu'en Amérique.", source: "De la démocratie en Amérique, I, II, 7", commentaire: "Liberté juridique ≠ liberté effective des esprits. Avertissement sur le conformisme." }
          ]
        },
        {
          nom: "Mill",
          dates: "1806–1873",
          oeuvre: "De la liberté (On Liberty, 1859)",
          these: "La liberté individuelle doit être <b>totale</b>, sauf si elle nuit à autrui. C'est le <em>harm principle</em> : l'État (ou la société) ne peut intervenir dans la vie d'un individu que pour empêcher qu'il cause un tort à autrui.",
          explication: "Mill défend une liberté libérale forte contre toute interférence paternaliste. Tant que ma conduite n'affecte que moi (ou des adultes consentants), nul n'a le droit de m'en empêcher — même pour mon propre bien. Cette position fonde la défense moderne des libertés individuelles : opinion, expression, mœurs, modes de vie.",
          exemple: "Boire de l'alcool seul chez soi : pas de tort à autrui, donc liberté. Conduire ivre : tort potentiel à autrui, donc l'État peut intervenir. La frontière du <em>harm</em> trace la limite légitime de la liberté.",
          citations: [
            { texte: "Le seul aspect de la conduite d'un homme pour lequel il est responsable devant la société, c'est celui qui concerne autrui.", source: "On Liberty, I", commentaire: "Citation-clé pour le libéralisme politique. Sert pour penser la limite légitime de la liberté." }
          ]
        },
        {
          nom: "Sartre",
          dates: "1905–1980",
          oeuvre: "L'existentialisme est un humanisme (1946) ; L'Être et le Néant (1943)",
          these: "L'homme est <b>condamné à être libre</b> : pas d'essence, pas de nature humaine, rien ne le détermine. Il est entièrement responsable de ce qu'il est, à chaque instant. Refuser sa liberté (« mauvaise foi ») est encore en user.",
          explication: "Sartre pousse la liberté à son extrême. Pas de nature humaine fixée : l'existence précède l'essence. Je suis ce que je fais. Refuser sa liberté, c'est encore choisir. On ne peut pas <em>ne pas</em> choisir. Conséquence lourde : l'angoisse, l'absence d'excuse, la responsabilité totale. Même devant un peloton d'exécution, je reste libre de choisir comment je meurs.",
          exemple: "« Je suis comme ça, je ne peux pas faire autrement » : pure mauvaise foi sartrienne. Tu te fais essence, tu nies ta liberté pour fuir sa charge. Mais ce refus est encore un choix.",
          citations: [
            { texte: "L'homme est condamné à être libre.", source: "L'existentialisme est un humanisme", commentaire: "Citation emblématique. À déployer : « condamné parce qu'il ne s'est pas créé », « libre parce qu'une fois jeté dans le monde, responsable de tout »." },
            { texte: "Jamais nous n'avons été plus libres que sous l'occupation allemande.", source: "« La République du silence », 1944", commentaire: "Paradoxe puissant : la situation extrême révèle la liberté dans sa nudité — choisir de collaborer ou résister, à chaque instant." }
          ]
        },
        {
          nom: "Bergson",
          dates: "1859–1941",
          oeuvre: "Essai sur les données immédiates de la conscience (1889), III",
          these: "L'acte libre est celui où <b>la personne tout entière</b> s'exprime. Il est rare : la plupart du temps, nous agissons par habitude, par moi superficiel, sans engager notre moi profond.",
          explication: "Bergson refuse à la fois le libre arbitre comme indifférence (acte sans cause) et le déterminisme mécanique. La liberté n'est pas la rupture absolue de causalité ; c'est la création d'un acte qui jaillit de la totalité de notre durée intérieure — donc rare, irréductible à toute analyse, et reconnaissable rétrospectivement.",
          exemple: "Le choix d'une vocation, après des années d'hésitation, qui te semble enfin évident, où tu te reconnais entièrement : acte libre au sens bergsonien. La plupart des « choix » courants sont en revanche des réactions du moi superficiel.",
          citations: [
            { texte: "Nous sommes libres quand nos actes émanent de notre personnalité entière, quand ils l'expriment, quand ils ont avec elle cette indéfinissable ressemblance qu'on trouve parfois entre l'œuvre et l'artiste.", source: "Essai, III", commentaire: "Belle définition de la liberté comme expression intégrale du moi profond. À utiliser pour nuancer Sartre (liberté de chaque instant) et Descartes (liberté de l'indifférence)." }
          ]
        },
        {
          nom: "Beauvoir",
          dates: "1908–1986",
          oeuvre: "Pour une morale de l'ambiguïté (1947) ; Le Deuxième Sexe (1949)",
          these: "Ma liberté n'est rien si elle n'est pas reconnue par autrui ; elle <b>implique celle des autres</b>. Et elle est toujours en <em>situation</em> : on n'est jamais libre dans le vide, mais dans un corps, une classe, un genre, une époque.",
          explication: "Beauvoir prolonge et corrige Sartre : la liberté absolue qu'il défend ignore les situations concrètes (l'oppression, le genre, la classe). Une femme dans une société patriarcale n'a pas la même liberté qu'un homme dans la même société. Vouloir la liberté n'a de sens que si je veux aussi celle des autres : la liberté est par essence intersubjective et solidaire.",
          exemple: "« On ne naît pas femme, on le devient » : la féminité n'est pas une nature, c'est un produit social qui restreint la liberté. La libération suppose donc une transformation des structures, pas seulement un changement intérieur.",
          citations: [
            { texte: "On ne naît pas femme, on le devient.", source: "Le Deuxième Sexe, II, ouverture", commentaire: "Formule majeure. À mobiliser pour penser la liberté en situation, contre toute essence imposée." },
            { texte: "Vouloir la liberté et vouloir dévoiler l'être sont un seul et même choix.", source: "Pour une morale de l'ambiguïté", commentaire: "Liberté = exigence de vérité. Et solidaire : ma liberté implique celle des autres." }
          ]
        }
      ]
    }
  ],

  cartographie: {
    intro: "Synthèse comparative des grandes positions sur la liberté.",
    criteres: ["Réalité du libre arbitre ?", "Type de liberté défendu", "Conditions d'effectivité", "Rapport à la nécessité"],
    positions: [
      { auteur: "Descartes", valeurs: ["Oui, infini", "Liberté d'indifférence + éclairée", "Évidence en première personne", "Indépendance des causes naturelles"] },
      { auteur: "Spinoza", valeurs: ["Non — illusion", "Liberté = comprendre la nécessité", "Connaissance des causes", "Nécessité totale, mais comprise = libératrice"] },
      { auteur: "Rousseau", valeurs: ["Oui (civile)", "Autonomie politique : obéir à la loi qu'on s'est faite", "Contrat social, volonté générale", "Loi librement consentie = pas obstacle mais condition"] },
      { auteur: "Kant", valeurs: ["Oui (postulat moral)", "Autonomie de la raison pratique", "Obéissance à l'impératif catégorique", "Liberté = causalité d'un autre ordre (nouménal)"] },
      { auteur: "Sartre", valeurs: ["Oui, absolu", "Liberté ontologique radicale", "Aucune — chaque instant l'engage", "Refus de toute essence ; nécessité = mauvaise foi"] },
      { auteur: "Marx", valeurs: ["Conditionnel", "Liberté réelle vs formelle", "Transformation des conditions matérielles", "Causalité historique reconnue, mais transformable"] }
    ]
  },

  objections: [
    {
      de: "Spinoza",
      vers: "Descartes",
      propos: "« Vous éprouvez intérieurement votre libre arbitre, dites-vous ; mais l'expérience subjective ne prouve rien. Si la pierre pensait, elle se croirait libre. Votre cogito sait qu'il pense, pas pourquoi il pense ce qu'il pense. »"
    },
    {
      de: "Marx",
      vers: "Sartre",
      propos: "« Tu prétends que l'ouvrier sous-payé est ‘libre’ de quitter son emploi : abstraction ! Sans capital, sans alternative, sa liberté formelle est une chaîne réelle. La liberté n'a de sens que comme transformation des conditions matérielles. »"
    },
    {
      de: "Sartre",
      vers: "Freud",
      propos: "« L'inconscient comme excuse : voilà la pire mauvaise foi. Quand tu dis ‘mon inconscient m'a fait faire ça’, tu inventes en toi un autre qui agit à ta place. Mais ce désir refoulé, c'est encore toi qui le portes. »"
    },
    {
      de: "Beauvoir",
      vers: "Sartre",
      propos: "« Tu as raison : l'homme est libre. Mais cette liberté abstraite oublie que la liberté est toujours en situation. Une femme algérienne en 1955 n'a pas la même liberté qu'un philosophe parisien. Reconnaître cela ne nie pas la liberté : c'est en penser les conditions réelles. »"
    },
    {
      de: "Constant",
      vers: "Rousseau",
      propos: "« Votre volonté générale qui contraint à être libre — voilà l'origine de la Terreur. Confondre la liberté antique (politique) et la liberté moderne (privée), c'est sacrifier l'individu au nom du collectif. »"
    },
    {
      de: "Tocqueville",
      vers: "Mill",
      propos: "« Votre <em>harm principle</em> protège l'individu de l'État. Soit. Mais qui le protégera de la masse, de l'opinion, de la pression conformiste qui pèse sur chaque pensée ? Le danger moderne n'est pas la tyrannie d'un, c'est la tyrannie de tous. »"
    }
  ],

  phrases_formules: [
    "« Le contraire de la liberté n'est pas la contrainte, mais l'absence d'autonomie. »",
    "« L'illusion de la liberté n'est jamais que la conscience d'un effet qui ignore sa cause. »",
    "« Faire ce qu'on veut, c'est encore obéir — mais à ses désirs. »",
    "« La liberté commence quand cesse l'ignorance des causes. »",
    "« On ne naît pas libre, on le devient — et chaque génération doit le devenir à nouveau. »",
    "« Être libre, ce n'est pas n'être déterminé par rien, c'est se déterminer soi-même. »",
    "« La loi qu'on s'est donnée libère ; celle qu'on subit asservit. »",
    "« Refuser sa liberté, c'est encore en user. »",
    "« La liberté véritable n'est pas absence de loi, mais autonomie : se donner à soi-même sa propre règle. »"
  ],

  pieges: [
    "<b>Confondre liberté et libre arbitre</b> : on peut tenir la liberté (comme autonomie kantienne ou comme connaissance des causes spinoziste) sans admettre le libre arbitre métaphysique.",
    "<b>Confondre liberté et indépendance</b> : un ermite est indépendant ; il n'est pas plus libre qu'un citoyen — peut-être moins, faute d'institutions qui garantissent sa liberté.",
    "<b>Identifier liberté et absence de contrainte</b> : Rousseau et Kant montrent que la loi qu'on s'est donnée libère plutôt qu'elle n'asservit.",
    "<b>Penser que faire ce qu'on veut, c'est être libre</b> : suivre ses désirs, c'est obéir à des forces (passions, conditionnements). La liberté véritable est autonomie, non spontanéité.",
    "<b>Opposer absolument déterminisme et liberté</b> : Hobbes, Spinoza, le compatibilisme moderne montrent que la liberté est compatible avec le déterminisme (selon la définition qu'on en retient).",
    "<b>Confondre liberté politique et liberté métaphysique</b> : la première concerne le rapport au pouvoir ; la seconde, le statut de la volonté humaine. Constant insiste sur cette distinction.",
    "<b>Croire que la liberté est un état</b> : pour Sartre, Beauvoir, Hegel, elle est un acte, un processus, jamais une possession définitive.",
    "<b>Confondre liberté formelle et liberté réelle</b> : la liberté juridique du salarié peut masquer une contrainte économique massive (Marx)."
  ],

  methode: {
    problematiser: "Sur la liberté, la première opération est toujours de désambiguïser : de quelle liberté parle-t-on ? Politique, métaphysique, morale, civile, intérieure ? Toute dissertation sur la liberté qui n'opère pas cette distinction au début risque la confusion.",
    plan_type: "I. La liberté comme évidence subjective (libre arbitre, sens commun) — II. Critique : déterminismes et illusions — III. Reformulation : liberté comme conquête / autonomie / situation.",
    accroches: [
      "Partir d'une situation concrète où la liberté est en jeu : décision, vote, désobéissance.",
      "Citer un cas de résistance (Sartre sur l'Occupation, Mandela, Antigone) — la liberté révélée par sa privation.",
      "Mobiliser un paradoxe : « Renoncer à sa liberté, c'est renoncer à sa qualité d'homme » (Rousseau).",
      "Évoquer un dilemme contemporain : déterminisme neurobiologique (Libet) vs sentiment de libre choix."
    ]
  },

  plan_corrige: {
    sujet: "Suis-je ce que mon passé a fait de moi ?",
    accroche: "« Je suis comme ça, c'est mon histoire. » Cette phrase, qu'on entend ou qu'on prononce souvent, contient toute une philosophie : mon présent serait la simple résultante d'un passé sur lequel je n'ai pas de prise. Mais en disant cela, qu'est-ce que je fais — sinon précisément choisir de m'identifier à ce passé ?",
    problematique: "Le sujet engage le rapport entre déterminisme et liberté. Mon passé (éducation, traumas, milieu social, inconscient) me constitue indéniablement ; mais suis-je <em>réductible</em> à lui ? Y a-t-il en moi une marge irréductible de liberté qui me permettrait de me ressaisir, de me reprendre, de devenir autre ?",
    annonce: "Nous verrons d'abord que je suis effectivement, en grande partie, le produit de mon passé : déterminismes psychiques, sociaux, biologiques (I). Mais reconnaître ces déterminations n'est pas y être réduit : la conscience ouvre une distance, et la liberté commence là (II). Enfin, ce n'est pas malgré mon passé mais à partir de lui que je me construis — non pas en l'oubliant, mais en l'assumant et en le reprenant pour en faire autre chose (III).",
    parties: [
      {
        titre: "I. Mon passé me détermine en profondeur",
        idee: "Les sciences humaines et la philosophie moderne montrent que je suis largement le produit de ce qui m'a précédé.",
        args: [
          { nom: "Freud (inconscient)", dev: "Mes choix d'aujourd'hui rejouent des schémas infantiles refoulés.", citation: "« Le moi n'est pas maître dans sa propre maison. »" },
          { nom: "Marx (conditions sociales)", dev: "Mon milieu, ma classe, mon époque pèsent comme un cauchemar sur ma conscience.", citation: "« Les hommes font leur histoire, mais pas dans des conditions choisies par eux. »" },
          { nom: "Spinoza (causes ignorées)", dev: "Mon sentiment de liberté n'est qu'ignorance des causes qui me déterminent.", citation: "« Les hommes se trompent en ce qu'ils se croient libres. »" }
        ]
      },
      {
        titre: "II. Mais avoir conscience de ses déterminations, c'est déjà ne plus s'y réduire",
        idee: "La conscience ouvre une distance qui est le commencement de la liberté.",
        args: [
          { nom: "Sartre (transcendance)", dev: "L'homme n'a pas d'essence préalable ; à chaque instant, il peut se ressaisir.", citation: "« L'existence précède l'essence. »" },
          { nom: "Alain (penser = dire non)", dev: "Avoir conscience d'un déterminisme, c'est déjà l'objectiver, donc s'en distinguer.", citation: "« Penser, c'est dire non. »" },
          { nom: "Spinoza (connaissance libératrice)", dev: "Comprendre ce qui me détermine, c'est moins le subir : la connaissance est puissance d'agir." }
        ]
      },
      {
        titre: "III. Je suis ce que je fais de mon passé — la liberté est reprise, non rupture",
        idee: "Le passé n'est pas une cause externe : c'est la matière que je reprends pour me faire.",
        args: [
          { nom: "Bergson (durée)", dev: "Le passé est intégré à ma personne : il agit en moi sans m'enchaîner — mes actes les plus libres l'expriment tout entier." },
          { nom: "Sartre (situation)", dev: "Je ne choisis pas mes circonstances, mais je choisis le sens que je leur donne." },
          { nom: "Beauvoir (devenir)", dev: "On ne naît pas X, on le devient — donc on peut le devenir autrement.", citation: "« On ne naît pas femme, on le devient. »" }
        ]
      }
    ],
    conclusion: "Je suis fait de mon passé, mais je ne m'y réduis pas. La liberté n'est ni rupture absolue ni illusion, mais reprise : ce travail par lequel je transforme ce que j'ai subi en ce que je vais. Mon histoire est moins une chaîne qu'une matière, moins une fatalité qu'une tâche. Reste à savoir si cette reprise est toujours possible — ou s'il existe des passés trop lourds, des situations trop écrasantes, où la liberté ne peut plus que se survivre."
  },

  ouvertures: [
    { type: "Théâtre", ref: "Sophocle, <i>Antigone</i> (–441) ; Anouilh, <i>Antigone</i> (1944)", comment: "La désobéissance comme exercice de la liberté contre la loi humaine — affirmation du libre choix au prix de la vie." },
    { type: "Roman", ref: "Camus, <i>Les Justes</i> (1949)", comment: "La liberté à l'épreuve de la responsabilité : peut-on tuer pour libérer ? Kaliayev refuse de jeter la bombe quand il voit des enfants." },
    { type: "Roman", ref: "Orwell, <i>1984</i> (1949)", comment: "La liberté de penser sous totalitarisme. Que reste-t-il quand le langage lui-même est contrôlé ?" },
    { type: "Film", ref: "S. Kubrick, <i>Orange mécanique</i> (1971)", comment: "Peut-on conditionner la liberté ? Si l'on supprime la capacité de choisir le mal, supprime-t-on aussi la capacité de choisir le bien ?" },
    { type: "Fait historique", ref: "L'esclave Épictète", comment: "Étymologiquement et biographiquement esclave, philosophiquement libre — la liberté intérieure peut survivre à la captivité." },
    { type: "Fait historique", ref: "Nelson Mandela, 27 ans à Robben Island", comment: "La liberté intérieure préservée sous l'enfermement ; libération comme reprise de soi." },
    { type: "Sciences", ref: "B. Libet, expérience de 1983", comment: "L'activité cérébrale précède de ~300 ms la conscience de la décision. Le libre arbitre conscient serait une post-rationalisation. Mais Libet maintenait un « veto » conscient possible. Débat ouvert." },
    { type: "Actualité", ref: "Algorithmes et bulles de filtre", comment: "Les réseaux sociaux conditionnent nos choix sans que nous en ayons conscience — nouvelle forme de la « tyrannie de la majorité » (Tocqueville)." }
  ],

  sujets_bac: [
    "La liberté est-elle une illusion ?",
    "Être libre, est-ce faire ce qui me plaît ?",
    "Suis-je ce que mon passé a fait de moi ?",
    "Peut-on être libre sans être autonome ?",
    "La liberté se réduit-elle à l'absence de contraintes ?",
    "Faut-il craindre ses désirs pour être libre ?",
    "Obéir, est-ce renoncer à sa liberté ?",
    "Pourquoi voulons-nous être libres ?",
    "Y a-t-il une vraie liberté sans égalité ?",
    "La liberté est-elle un droit ou une conquête ?"
  ],

  notions_liees: ["conscience", "devoir", "etat", "justice", "inconscient"]
},

/* ════════════════════════════════════════════════════════════════════════
   L'INCONSCIENT
   ════════════════════════════════════════════════════════════════════════ */
{
  id: "inconscient",
  notion: "L'inconscient",
  etymologie: "Du latin <i>in-conscientia</i>, négation de la conscience. Mais avec Freud, le terme change radicalement de sens : il ne désigne plus l'absence de conscience (sommeil, évanouissement) mais un <em>système psychique</em> actif, structuré, séparé de la conscience par la censure.",
  problematique: "L'inconscient existe-t-il vraiment, ou n'est-il qu'un alibi commode pour fuir la responsabilité ? Et si l'inconscient existe comme système psychique, qui parle quand je dis « je » ? L'hypothèse freudienne nous libère-t-elle d'une illusion, ou nous prive-t-elle de notre liberté ?",
  a_retenir: "Trois moments. <b>Avant Freud</b>, des philosophes (Leibniz, Schopenhauer, Nietzsche) anticipent l'idée d'une vie psychique non-consciente. <b>Freud</b> transforme cette intuition en système : l'inconscient n'est pas un manque de conscience, mais une instance psychique structurée (ça/moi/surmoi) qui agit par refoulement et se manifeste dans les rêves, lapsus, symptômes. <b>Les critiques</b> (Sartre, Alain) y voient une fuite : invoquer l'inconscient comme excuse serait nier sa liberté. <b>Lacan</b> réhabilite l'hypothèse : l'inconscient est <em>structuré comme un langage</em>.",

  definitions: [
    { terme: "Inconscient (freudien)", def: "Système psychique distinct de la conscience, contenant des représentations refoulées qui obéissent à leur propre logique (principe de plaisir, processus primaire)." },
    { terme: "Refoulement", def: "Opération psychique qui maintient hors de la conscience les représentations inacceptables (désirs interdits, souvenirs traumatiques)." },
    { terme: "Première topique", def: "Découpage du psychisme en trois systèmes : Conscient / Préconscient / Inconscient (Freud, 1900–1915)." },
    { terme: "Deuxième topique", def: "Découpage en trois instances : <em>ça</em> (réservoir des pulsions), <em>moi</em> (médiateur réaliste), <em>surmoi</em> (instance des interdits, héritier de l'autorité parentale). Introduite en 1923." },
    { terme: "Censure", def: "Instance psychique (assimilable au surmoi) qui empêche le retour à la conscience des contenus refoulés." },
    { terme: "Symptôme", def: "Formation de compromis entre désir refoulé et défense du moi : phobie, obsession, conversion somatique." },
    { terme: "Sublimation", def: "Déplacement de l'énergie pulsionnelle vers un objet socialement valorisé (art, science, religion). L'inconscient est aussi créateur." },
    { terme: "Acte manqué / lapsus", def: "Erreur ou trouble de la parole révélant un désir inconscient. Le ministre des Finances : « Je déclare la séance close » au lieu d'« ouverte »." }
  ],

  distinctions: [
    "<b>Inconscient ≠ inconscience</b> : l'inconscience est un état passager (sommeil, coma) ; l'inconscient est un système psychique permanent et actif.",
    "<b>Refoulé ≠ oublié</b> : l'oubli est passif (la trace s'efface) ; le refoulement est actif (la représentation est maintenue à l'écart par une force psychique).",
    "<b>Conscient / Préconscient / Inconscient</b> : le préconscient (souvenirs latents) est rappelable par effort ; l'inconscient ne l'est qu'indirectement (rêve, analyse).",
    "<b>Ça / Moi / Surmoi</b> : trois instances de la deuxième topique. Le ça veut, le surmoi interdit, le moi compose.",
    "<b>Inconscient psychanalytique ≠ inconscient cognitif</b> (neurosciences) : le second désigne les processus neuronaux non conscients (perception subliminale, automatismes) ; le premier est structuré par le sens et le désir.",
    "<b>Hypothèse de l'inconscient ≠ déterminisme physique</b> : invoquer l'inconscient n'est pas réduire l'homme à des causes mécaniques — l'inconscient est porteur d'un sens à interpréter."
  ],

  frise: [
    { auteur: "Leibniz", dates: "1646–1716", courant: "Rationalisme", oeuvre: "Nouveaux Essais (1704)", idee: "Les « petites perceptions » : il y a en nous une infinité de perceptions sans aperception. Anticipation de Freud." },
    { auteur: "Schopenhauer", dates: "1788–1860", courant: "Philosophie de la volonté", oeuvre: "Le Monde comme volonté et représentation (1818)", idee: "Sous le voile des représentations, une Volonté aveugle et inconsciente meut tout être." },
    { auteur: "Nietzsche", dates: "1844–1900", courant: "Philosophie du soupçon", oeuvre: "Zarathoustra (1883)", idee: "Le corps est une grande raison : plus de sagesse dans la chair que dans l'esprit conscient." },
    { auteur: "Freud", dates: "1856–1939", courant: "Psychanalyse", oeuvre: "L'Interprétation des rêves (1900) ; Le Moi et le Ça (1923)", idee: "L'inconscient comme système psychique : deux topiques, refoulement, manifestations." },
    { auteur: "Alain", dates: "1868–1951", courant: "Réflexion morale", oeuvre: "Éléments de philosophie (1941)", idee: "Refus de l'inconscient : pas d'« autre moi » en moi — concept-excuse." },
    { auteur: "Sartre", dates: "1905–1980", courant: "Existentialisme", oeuvre: "L'Être et le Néant (1943)", idee: "L'inconscient comme mauvaise foi : je sais ce que je veux ne pas savoir." },
    { auteur: "Lacan", dates: "1901–1981", courant: "Psychanalyse structurale", oeuvre: "Écrits (1966)", idee: "« L'inconscient est structuré comme un langage » : retour à Freud par la linguistique." }
  ],

  axes: [
    {
      numero: "I",
      titre: "L'inconscient avant Freud : anticipations philosophiques",
      enjeu: "L'idée d'une vie psychique non consciente ne naît pas avec Freud. Plusieurs philosophes l'ont préparée — comme intuition, sans en faire un système rigoureux.",
      auteurs: [
        {
          nom: "Leibniz",
          dates: "1646–1716",
          oeuvre: "Nouveaux Essais sur l'entendement humain (1704, posth.), Préface",
          these: "Il y a en nous, à chaque instant, <b>une infinité de petites perceptions</b> sans aperception ni réflexion — contenus psychiques actifs que la conscience ne saisit pas mais qui agissent en nous.",
          explication: "Le bruit de la mer que j'entends est l'addition de millions de bruits de gouttelettes, dont aucun n'est consciemment perçu. De même nos humeurs, préférences, intuitions sont composées de micro-perceptions sous le seuil. Leibniz pose ainsi, deux siècles avant Freud, que tout ce qui est psychique n'est pas conscient — premier coup porté à l'évidence cartésienne.",
          exemple: "Tu aimes une couleur sans savoir pourquoi ; tu sens un malaise dans une pièce dont rien d'explicite ne devrait te déranger. Ce n'est pas du néant — c'est une perception sans aperception, une intelligence sans conscience claire.",
          citations: [
            { texte: "Il y a mille marques qui font juger qu'il y a à tout moment une infinité de perceptions en nous, mais sans aperception et sans réflexion.", source: "Nouveaux Essais, Préface", commentaire: "Citation cardinale pour dire que l'inconscient psychique est rationnellement défendable AVANT Freud — pas une invention de la psychanalyse." }
          ]
        },
        {
          nom: "Schopenhauer",
          dates: "1788–1860",
          oeuvre: "Le Monde comme volonté et représentation (1818)",
          these: "Sous le voile des représentations conscientes, une <b>Volonté aveugle et inconsciente</b> meut tout être vivant. La conscience claire n'est que l'écume d'un océan plus profond.",
          explication: "Pour Schopenhauer, la conscience est l'organe d'une force plus ancienne : la Volonté, qui veut, agit, désire en deçà de toute représentation. L'intellect est instrument du vouloir, pas l'inverse. Freud reconnaîtra explicitement sa dette envers Schopenhauer pour la notion de refoulement et de pulsion.",
          exemple: "L'attirance sexuelle qui te saisit avant toute réflexion ; l'instinct de survie qui te fait reculer face au danger sans calcul. Là parle la Volonté — antérieure et plus puissante que la conscience.",
          citations: [
            { texte: "La conscience est la simple surface de notre esprit, dont nous ne connaissons, comme du globe, que la croûte, et non l'intérieur.", source: "Le Monde comme volonté et représentation, II", commentaire: "Métaphore puissante. À mobiliser pour montrer que l'inconscient comme thèse philosophique précède la psychanalyse." }
          ]
        },
        {
          nom: "Nietzsche",
          dates: "1844–1900",
          oeuvre: "Ainsi parlait Zarathoustra (1883) ; Par-delà bien et mal (1886)",
          these: "Le <b>corps est une grande raison</b> ; l'esprit conscient n'en est qu'un instrument. Ce qu'on appelle « pensée » est gouverné par des forces pulsionnelles plus profondes que le moi conscient.",
          explication: "Nietzsche ne parle pas d'« inconscient » au sens freudien, mais d'un Soi corporel et instinctif qui précède et dépasse la conscience. Le « je » conscient est un personnage de surface ; les forces réelles agissent dans le corps. Cette intuition prépare Freud — qui reconnaîtra que Nietzsche avait pressenti beaucoup de ses propres découvertes.",
          exemple: "Tu décides « rationnellement » de partir, et tu restes. Tu prétends ne pas aimer, mais ton corps trahit le désir. C'est le Soi profond qui parle à travers le corps, contre ce que la conscience prétend vouloir.",
          citations: [
            { texte: "Derrière tes pensées et tes sentiments se tient un maître puissant, un sage inconnu — il se nomme Soi. Il habite ton corps, il est ton corps.", source: "Ainsi parlait Zarathoustra, « Des contempteurs du corps »", commentaire: "Citation centrale. Le corps n'est pas instrument de l'esprit : c'est l'esprit qui est instrument du corps." }
          ]
        }
      ]
    },
    {
      numero: "II",
      titre: "La découverte freudienne : l'inconscient comme système",
      enjeu: "Freud transforme une intuition philosophique en hypothèse scientifique. L'inconscient n'est pas un manque de conscience, mais un système psychique actif, structuré, avec ses propres lois — et dont les manifestations sont déchiffrables.",
      auteurs: [
        {
          nom: "Freud — première topique",
          dates: "1856–1939",
          oeuvre: "L'Interprétation des rêves (1900) ; Métapsychologie (1915)",
          these: "Le psychisme se divise en trois systèmes : <b>Conscient</b> (ce que je perçois), <b>Préconscient</b> (ce qui peut redevenir conscient), <b>Inconscient</b> (refoulé, inaccessible directement). L'inconscient agit, parle, se manifeste — mais à travers des formations indirectes : rêves, lapsus, symptômes.",
          explication: "Freud propose en 1900 le modèle de la première topique. Entre conscient et inconscient s'interpose une censure (instance préconsciente) qui empêche les contenus refoulés de revenir directement. Mais le refoulé fait retour de façon déformée : c'est la « voie royale » du rêve, qui condense, déplace, transforme — pour exprimer un désir sans alerter la censure. Lapsus, actes manqués et symptômes obéissent à la même logique.",
          exemple: "Tu rêves d'un train qui entre en gare. Le rêve peut représenter, par condensation, à la fois un désir sexuel et la peur de la mort. La censure ne reconnaît pas ce que veut dire le rêve ; le rêveur conscient non plus. L'analyse remonte aux désirs refoulés.",
          citations: [
            { texte: "Le rêve est la voie royale qui mène à la connaissance de l'inconscient dans la vie psychique.", source: "L'Interprétation des rêves, VII", commentaire: "Formule emblématique. L'inconscient n'est pas inaccessible : ses manifestations sont déchiffrables." },
            { texte: "Le moi n'est pas maître dans sa propre maison.", source: "Une difficulté de la psychanalyse (1917)", commentaire: "Troisième « blessure narcissique » de l'humanité : après Copernic et Darwin, Freud décentre le sujet. À connaître par cœur." }
          ]
        },
        {
          nom: "Freud — deuxième topique",
          dates: "1856–1939",
          oeuvre: "Le Moi et le Ça (1923) ; Nouvelles conférences (1933)",
          these: "Le psychisme se réorganise en trois instances : <b>le ça</b> (pulsions, principe de plaisir), <b>le moi</b> (médiateur réaliste), <b>le surmoi</b> (interdits intériorisés, héritier de l'autorité parentale). L'inconscient n'est pas seulement le refoulé : une partie du moi et tout le surmoi sont aussi inconscients.",
          explication: "La deuxième topique enrichit le modèle. Le moi conscient n'est pas le seul agent : le ça pousse, le surmoi interdit, le moi compose en permanence. Le conflit n'est pas entre une conscience claire et un inconscient sombre, mais entre plusieurs instances dont la plupart agissent en silence. Le « je » conscient est un compromis instable.",
          exemple: "Tu te sens « mal sans raison » : peut-être le moi reçoit-il une réprobation du surmoi pour un désir du ça que la censure interdit même de formuler. Ton mal-être est l'écho de ce conflit triple.",
          citations: [
            { texte: "Là où était le ça, le moi doit advenir.", source: "Nouvelles conférences, 31", commentaire: "Programme même de la psychanalyse : élargir la zone de la conscience, sans supprimer l'inconscient. Citation décisive pour articuler inconscient et liberté." }
          ]
        }
      ]
    },
    {
      numero: "III",
      titre: "L'inconscient en question : alibi, mauvaise foi ou langage ?",
      enjeu: "L'hypothèse freudienne soulève une question éthique : si je peux invoquer l'inconscient pour expliquer mes actes, suis-je encore responsable ? Sartre et Alain y voient une fuite ; Lacan y voit, au contraire, une structure rigoureuse.",
      auteurs: [
        {
          nom: "Alain",
          dates: "1868–1951",
          oeuvre: "Éléments de philosophie (1941)",
          these: "Il n'y a en moi <b>qu'un seul moi</b>. Invoquer l'inconscient, c'est inventer en soi un autre qui agirait à ma place — c'est une excuse, non une vérité.",
          explication: "Pour Alain, le concept même d'inconscient est suspect : il transforme un effort moral (se ressaisir, s'avouer ses désirs) en une fatalité subie (« mon inconscient m'y a poussé »). C'est une démission de la pensée. La conscience peut être obscure, lâche, douloureuse — mais elle est seule. Pas d'« autre moi ».",
          exemple: "« Je ne sais pas pourquoi je l'ai dit, c'était inconscient » : pour Alain, formulation typique de la fuite. Tu le savais — au moins assez pour que ça t'échappe précisément maintenant. Réfléchis, et tu retrouveras l'intention.",
          citations: [
            { texte: "Penser, c'est dire non.", source: "Propos sur les pouvoirs", commentaire: "Pour Alain, beaucoup de souffrances dites « inconscientes » sont en réalité un refus de penser. La conscience est seule, donc seule responsable." }
          ]
        },
        {
          nom: "Sartre",
          dates: "1905–1980",
          oeuvre: "L'Être et le Néant (1943), Première partie, II — De la mauvaise foi",
          these: "L'inconscient freudien est une <b>fiction</b> qui dédouble le sujet pour qu'il puisse s'ignorer lui-même. Mais on ne peut pas être étranger à soi : ce que Freud appelle inconscient est en réalité de la <em>mauvaise foi</em> — un mensonge à soi-même qui présuppose qu'on sait ce qu'on veut ignorer.",
          explication: "Sartre pose un paradoxe : pour refouler une représentation, il faut bien que la censure la reconnaisse comme à refouler — donc qu'elle la connaisse. Mais alors, l'inconscient n'est plus inconscient : il y a un savoir qui se cache à un savoir. C'est la structure même de la mauvaise foi, conscience qui se ment à elle-même tout en sachant qu'elle ment. L'inconscient comme excuse est la pire des mauvaises fois : il permet de ne pas répondre de soi.",
          exemple: "Une femme à un rendez-vous laisse sa main dans celle de son partenaire en parlant de Kant — « comme si » sa main n'était pas à elle. Mauvaise foi : elle veut et ne veut pas, elle sait et ne veut pas savoir. Invoquer son « inconscient » serait ici encore une fuite.",
          citations: [
            { texte: "L'inconscient remplace la notion de mauvaise foi par l'idée d'un mensonge sans menteur — ce qui est inconcevable.", source: "L'Être et le Néant, II, 2 (paraphrase)", commentaire: "À mobiliser pour articuler conscience, liberté, responsabilité. L'inconscient comme alibi ontologique." },
            { texte: "L'homme est condamné à être libre.", source: "L'existentialisme est un humanisme", commentaire: "Conséquence : pas d'« autre » en moi qui pourrait agir à ma place. Je suis tout entier responsable." }
          ]
        },
        {
          nom: "Lacan",
          dates: "1901–1981",
          oeuvre: "Écrits (1966) ; Séminaires",
          these: "Loin d'être une fiction, l'inconscient est <b>structuré comme un langage</b>. Les lois du rêve (condensation, déplacement) sont les lois mêmes de la métaphore et de la métonymie. Pas d'inconscient « biologique » ou « instinctuel » : un inconscient symbolique, fait de signifiants.",
          explication: "Lacan opère un « retour à Freud » par la linguistique de Saussure. Pour lui, le sujet est constitué par son entrée dans le langage — c'est l'ordre symbolique. L'inconscient n'est pas une réserve d'instincts, c'est le discours de l'Autre, ce qui parle en moi à travers les signifiants que la culture me transmet. « Ça parle. »",
          exemple: "Un lapsus n'est pas un accident neurologique : c'est un signifiant qui surgit, transportant un sens autre que celui visé. La psychanalyse écoute ce que la langue dit malgré le sujet.",
          citations: [
            { texte: "L'inconscient est structuré comme un langage.", source: "Écrits, « L'instance de la lettre »", commentaire: "Formule centrale de Lacan. Permet de répondre à Sartre : l'inconscient n'est pas un autre moi, c'est l'effet structurant du langage sur le sujet." },
            { texte: "L'inconscient, c'est le discours de l'Autre.", source: "Écrits", commentaire: "Décentre encore le sujet : ce qui parle en moi n'est ni moi ni un autre moi, c'est l'ordre symbolique." }
          ]
        }
      ]
    }
  ],

  cartographie: {
    intro: "Synthèse comparative : que dit chacun de l'inconscient ?",
    criteres: ["L'inconscient existe-t-il ?", "Quelle nature ?", "Rapport à la liberté", "Critique adressée"],
    positions: [
      { auteur: "Leibniz", valeurs: ["Oui (anticipation)", "Petites perceptions", "Compatible avec la raison", "Limité, pas systémique"] },
      { auteur: "Schopenhauer", valeurs: ["Oui (Volonté)", "Force aveugle, métaphysique", "L'homme est joué par la Volonté", "Pessimisme sans échappée"] },
      { auteur: "Freud", valeurs: ["Oui, central", "Système psychique structuré", "Décentré, mais analysable", "Hypothèse falsifiable ?"] },
      { auteur: "Alain", valeurs: ["Non", "Concept-excuse", "Seul je peux répondre de moi", "Refus de la psychanalyse"] },
      { auteur: "Sartre", valeurs: ["Non (mauvaise foi)", "Auto-mensonge transparent", "Liberté totale, responsabilité", "Existence précède essence"] },
      { auteur: "Lacan", valeurs: ["Oui, langagier", "Discours de l'Autre", "Sujet effet du signifiant", "Rigorise Freud"] }
    ]
  },

  objections: [
    { de: "Sartre", vers: "Freud", propos: "« Votre inconscient est une fiction commode : il dédouble le sujet pour qu'il puisse s'ignorer lui-même. Mais qui refoule ? Le moi ou la censure ? Si c'est la censure, elle sait ce qu'elle refoule — donc l'inconscient n'est pas inconscient. Vous remplacez la mauvaise foi par un mensonge sans menteur : c'est incohérent. »" },
    { de: "Alain", vers: "Freud", propos: "« Vous transformez l'effort de penser sur soi en fatalité subie. Il y a en moi un seul moi — pas un autre qui agirait à ma place. Votre inconscient est une excuse érigée en système. »" },
    { de: "Lacan", vers: "Sartre", propos: "« Tu fais comme si le sujet pouvait être pleinement présent à lui-même. Mais le sujet est divisé par le langage qui le précède et le constitue. L'inconscient n'est pas un autre moi : c'est la marque, en moi, de l'Autre. Tu sous-estimes la coupure symbolique. »" },
    { de: "Freud", vers: "Alain", propos: "« Vous appelez ‘effort moral’ ce qui est en réalité refoulement aveugle. L'analyse montre que des contenus psychiques agissent réellement à votre insu — lapsus, rêves, symptômes le prouvent. Refuser l'inconscient, c'est encore en exercer un. »" }
  ],

  phrases_formules: [
    "« L'inconscient n'est pas un manque de conscience, c'est une autre scène. »",
    "« Là où je crois être, l'inconscient parle ; là où l'inconscient parle, je dois advenir. »",
    "« Le moi est un compromis, non un commencement. »",
    "« L'inconscient n'efface pas la conscience, il la décentre. »",
    "« Penser l'inconscient n'est pas renoncer à la liberté, c'est en repenser les conditions. »",
    "« Le sujet n'est pas maître de la maison où il dit ‘je’. »",
    "« Tout ce qui est psychique n'est pas conscient — telle est la révolution freudienne. »",
    "« L'inconscient comme excuse est la pire des mauvaises fois. »"
  ],

  pieges: [
    "<b>Confondre inconscient et inconscience</b> : la seconde est passagère (coma, sommeil) ; le premier est un système psychique permanent et actif.",
    "<b>Réduire l'inconscient au refoulé</b> : la deuxième topique montre qu'une partie du moi, et tout le surmoi, sont eux aussi inconscients.",
    "<b>Faire de l'inconscient un autre moi caché</b> : Sartre montre qu'on tombe alors dans la contradiction du « mensonge sans menteur ».",
    "<b>Invoquer l'inconscient comme excuse</b> : ce serait nier sa responsabilité. Freud lui-même : « Là où était le ça, le moi doit advenir. »",
    "<b>Confondre inconscient psychanalytique et inconscient cognitif</b> : le second désigne les processus neuronaux non conscients ; le premier est porteur de sens et de désir.",
    "<b>Penser que l'inconscient est sombre, primitif, dangereux</b> : pour Freud, il est aussi source de créativité (sublimation, art, science)."
  ],

  methode: {
    problematiser: "Toujours commencer par une expérience concrète d'« étrangeté à soi » (lapsus, rêve, oubli inexplicable). Puis interroger : est-ce un mystère à dissoudre ou une structure à reconnaître ? Articulation classique : anticipations philosophiques → système freudien → critique éthique et reformulation.",
    plan_type: "I. Anticipations philosophiques (Leibniz, Schopenhauer, Nietzsche) — II. La systématisation freudienne — III. Critiques et reformulations (Sartre, Alain ; Lacan).",
    accroches: [
      "Partir d'un lapsus célèbre (« Je déclare la séance close » du ministre fatigué).",
      "Évoquer un rêve dont le sens semble échapper, ou un acte manqué qui « parle ».",
      "Mentionner <i>Le Horla</i> de Maupassant : la conscience qui se découvre habitée par un autre.",
      "Le paradoxe : pour réfuter l'inconscient, il faudrait pouvoir en faire le tour conscient."
    ]
  },

  plan_corrige: {
    sujet: "L'inconscient peut-il servir d'excuse ?",
    accroche: "« Je ne sais pas pourquoi je l'ai fait — c'était inconscient. » Cette phrase, parfois sincère, désigne-t-elle une vérité psychique reconnue, ou seulement une fuite devant la responsabilité ?",
    problematique: "L'hypothèse freudienne d'un inconscient psychique transforme la question morale : si une part de mes actes échappe à mon vouloir, je ne peux plus en répondre comme d'actes pleinement libres. Mais ce raisonnement n'est-il pas lui-même suspect — l'invocation d'un « autre moi » étant trop commode pour ne pas en cacher une autre ?",
    annonce: "Nous verrons d'abord que l'inconscient, comme système psychique reconnu, semble effectivement limiter ma responsabilité (I). Mais le concept même se prête à une critique radicale : il peut être l'instrument d'une mauvaise foi qui se déguise en savoir (II). Reste alors à articuler reconnaissance de l'inconscient et exigence de responsabilité (III).",
    parties: [
      {
        titre: "I. La découverte freudienne semble limiter la responsabilité du sujet",
        idee: "Si une partie de mes actes est produite par l'inconscient, je n'en suis pas pleinement l'auteur.",
        args: [
          { nom: "Freud", dev: "Lapsus, rêves, symptômes — toute une activité psychique m'échappe.", citation: "« Le moi n'est pas maître dans sa propre maison. »" },
          { nom: "Schopenhauer", dev: "La Volonté agit avant la conscience, sous le voile des représentations." },
          { nom: "Leibniz", dev: "Anticipation : il y a des perceptions sans aperception." }
        ]
      },
      {
        titre: "II. Mais invoquer l'inconscient comme excuse est philosophiquement suspect",
        idee: "Le concept d'inconscient peut servir à une fuite de soi.",
        args: [
          { nom: "Alain", dev: "Pas d'autre moi en moi : la conscience est seule. L'inconscient comme « excuse ».", citation: "« Penser, c'est dire non. »" },
          { nom: "Sartre", dev: "L'inconscient comme « mensonge sans menteur » est incohérent — c'est de la mauvaise foi.", citation: "« L'homme est condamné à être libre. »" }
        ]
      },
      {
        titre: "III. Reconnaître l'inconscient ET assumer sa responsabilité",
        idee: "Loin de s'opposer, conscience de l'inconscient et exigence morale se complètent.",
        args: [
          { nom: "Freud (lui-même)", dev: "Le but de l'analyse n'est pas l'excuse, mais l'élargissement de la responsabilité.", citation: "« Là où était le ça, le moi doit advenir. »" },
          { nom: "Lacan", dev: "L'inconscient comme structure de langage rend possible un sujet plus lucide, non un sujet déresponsabilisé." }
        ]
      }
    ],
    conclusion: "L'inconscient ne peut servir d'excuse que pour qui refuse de l'analyser. Le but de la psychanalyse n'est pas de soustraire le sujet à sa responsabilité, mais d'élargir la zone où il peut effectivement répondre de lui-même. Loin d'innocenter, l'analyse de l'inconscient oblige à une responsabilité plus exigeante : celle d'avouer ce que la conscience claire ignorait."
  },

  ouvertures: [
    { type: "Roman", ref: "Maupassant, <i>Le Horla</i> (1887)", comment: "L'expérience inquiétante d'une présence en soi qu'on ne reconnaît pas — figure littéraire de l'inconscient." },
    { type: "Roman", ref: "Dostoïevski, <i>Le Sous-sol</i> (1864)", comment: "Un narrateur qui s'observe en disant ce qu'il refoule — anticipation littéraire du « ça parle »." },
    { type: "Film", ref: "A. Hitchcock, <i>Pas de printemps pour Marnie</i> (1964)", comment: "Mise en scène du trauma refoulé et de son éclaircissement par l'analyse." },
    { type: "Film", ref: "I. Bergman, <i>Persona</i> (1966)", comment: "Effacement des frontières entre deux psychismes — métaphore visuelle du moi divisé." },
    { type: "Sciences", ref: "Perception subliminale (psychologie cognitive)", comment: "Des stimuli infraliminaires influencent comportements et choix — vérification expérimentale d'un inconscient cognitif." },
    { type: "Actualité", ref: "Kahneman, <i>Système 1, système 2</i> (2011)", comment: "Décisions « rationnelles » influencées par des heuristiques inconscientes — autre forme d'inconscient psychique." }
  ],

  sujets_bac: [
    "L'inconscient peut-il servir d'excuse ?",
    "L'hypothèse de l'inconscient nous dispense-t-elle de penser ?",
    "Suis-je le mieux placé pour me connaître ?",
    "L'idée d'inconscient est-elle compatible avec la liberté ?",
    "L'inconscient n'est-il qu'un mythe ?",
    "Peut-on connaître son inconscient ?",
    "Sommes-nous responsables de nos rêves ?"
  ],

  notions_liees: ["conscience", "liberte", "devoir", "verite"]
},

/* ════════════════════════════════════════════════════════════════════════
   LE DEVOIR
   ════════════════════════════════════════════════════════════════════════ */
{
  id: "devoir",
  notion: "Le devoir",
  etymologie: "Du latin <i>dēbēre</i> (devoir, être obligé), de <i>dē-habēre</i> — « avoir à rendre ». Le devoir suppose toujours une dette : quelque chose à acquitter — envers la société, autrui, la loi morale, Dieu, ou soi-même.",
  problematique: "Faut-il agir <em>par</em> devoir, ou par inclination ? Le devoir m'asservit-il, ou est-il au contraire la seule manière d'être véritablement libre ? Et envers qui suis-je en dette : moi-même, autrui, l'humanité, l'avenir ?",
  a_retenir: "Trois grandes positions. <b>Kant</b> : le devoir est inconditionnel — il faut agir <em>par devoir</em>, en suivant la loi morale que la raison se donne (impératif catégorique). C'est l'autonomie. <b>Les utilitaristes</b> (Bentham, Mill) : le devoir n'a de sens qu'en vue d'une fin — maximiser le bien-être. <b>Les critiques</b> (Nietzsche, Schopenhauer) : le devoir kantien serait une morale d'esclave ou une théologie déguisée. <b>Reformulations contemporaines</b> : Bergson distingue morale close et ouverte ; Levinas fait du visage d'autrui l'origine du devoir ; Jonas étend le devoir aux générations futures.",

  definitions: [
    { terme: "Devoir", def: "Obligation morale ressentie comme contraignante mais nécessaire : ce que je dois faire indépendamment de ce que je veux ou désire." },
    { terme: "Devoir moral / juridique / social", def: "Le devoir moral oblige en conscience ; le devoir juridique est sanctionné légalement ; le devoir social relève de la convention." },
    { terme: "Impératif catégorique", def: "Commandement moral inconditionnel valant pour tout être raisonnable en toute circonstance (Kant). Forme : « Agis selon une maxime qui puisse être érigée en loi universelle. »" },
    { terme: "Impératif hypothétique", def: "Commandement conditionnel : « si tu veux X, fais Y ». Relève de l'habileté ou de la prudence, non de la morale." },
    { terme: "Maxime", def: "Principe subjectif d'action — la règle qu'on suit effectivement, qui peut être universalisable ou non." },
    { terme: "Autonomie / hétéronomie", def: "Se donner à soi-même sa propre loi (<i>auto-nomos</i>) / recevoir sa loi d'un autre que soi (passions, autorité)." },
    { terme: "Bonne volonté", def: "Volonté qui agit par devoir, indépendamment des conséquences ou de l'inclination (Kant). Seule chose absolument bonne au monde." },
    { terme: "Conséquentialisme / déontologie", def: "Juger un acte d'après ses conséquences (utilitarisme) / d'après sa conformité à un principe (Kant)." }
  ],

  distinctions: [
    "<b>Agir par devoir ≠ conformément au devoir ≠ par inclination</b> (Kant) : seul le premier a une valeur morale. Le commerçant honnête par calcul agit conformément au devoir — sans valeur morale.",
    "<b>Impératif catégorique ≠ impératif hypothétique</b> : le premier est inconditionnel (« Tu ne dois pas mentir ») ; le second conditionnel (« Si tu veux être respecté, ne mens pas »).",
    "<b>Devoir kantien ≠ devoir social</b> : le premier est universel et désintéressé, le second relatif et conventionnel.",
    "<b>Devoir moral ≠ devoir juridique</b> : le second est sanctionné par la loi ; le premier oblige en conscience même sans sanction.",
    "<b>Autonomie ≠ liberté arbitraire</b> : l'autonomie suppose qu'on suive la loi qu'on s'est rationnellement donnée, pas qu'on fasse n'importe quoi.",
    "<b>Devoir / vertu</b> (Aristote vs Kant) : le devoir oblige ponctuellement, la vertu est une disposition acquise par habitude."
  ],

  frise: [
    { auteur: "Aristote", dates: "–384 / –322", courant: "Antiquité grecque", oeuvre: "Éthique à Nicomaque", idee: "Pas de « devoir » au sens kantien : la morale repose sur la vertu, disposition acquise par l'habitude." },
    { auteur: "Cicéron", dates: "–106 / –43", courant: "Stoïcisme romain", oeuvre: "De officiis", idee: "Les <i>officia</i> : devoirs sociaux et politiques du citoyen romain." },
    { auteur: "Kant", dates: "1724–1804", courant: "Idéalisme transcendantal", oeuvre: "FMM (1785), Critique de la raison pratique (1788)", idee: "Devoir = impératif catégorique. Agir par devoir, non par inclination — autonomie." },
    { auteur: "Bentham", dates: "1748–1832", courant: "Utilitarisme", oeuvre: "Introduction aux principes (1789)", idee: "Le bien = ce qui maximise le bonheur du plus grand nombre." },
    { auteur: "Schopenhauer", dates: "1788–1860", courant: "Philosophie de la volonté", oeuvre: "Le Fondement de la morale (1840)", idee: "Critique du devoir kantien : théologie déguisée. La morale repose sur la compassion." },
    { auteur: "Mill", dates: "1806–1873", courant: "Utilitarisme nuancé", oeuvre: "L'Utilitarisme (1861)", idee: "Distinction qualitative des plaisirs ; conséquentialisme raffiné." },
    { auteur: "Nietzsche", dates: "1844–1900", courant: "Philosophie du soupçon", oeuvre: "Généalogie de la morale (1887)", idee: "Le devoir comme morale d'esclave : ressentiment, dette, peur déguisée en vertu." },
    { auteur: "Bergson", dates: "1859–1941", courant: "Spiritualisme", oeuvre: "Les Deux Sources de la morale et de la religion (1932)", idee: "Deux sources : morale close (pression sociale) et morale ouverte (élan d'amour)." },
    { auteur: "Levinas", dates: "1906–1995", courant: "Phénoménologie éthique", oeuvre: "Totalité et Infini (1961)", idee: "Le visage d'autrui m'oblige : éthique première, antérieure à l'ontologie." },
    { auteur: "Jonas", dates: "1903–1993", courant: "Éthique contemporaine", oeuvre: "Le Principe responsabilité (1979)", idee: "Devoir envers les générations futures — repenser l'éthique à l'âge de la technique." }
  ],

  axes: [
    {
      numero: "I",
      titre: "Le devoir comme commandement de la raison : Kant",
      enjeu: "Avec Kant, le devoir devient le cœur de la morale. Il n'est pas une contrainte extérieure mais l'expression même de la liberté rationnelle. Agir par devoir, c'est se rendre digne d'être homme.",
      auteurs: [
        {
          nom: "Kant",
          dates: "1724–1804",
          oeuvre: "Fondements de la métaphysique des mœurs (1785) ; Critique de la raison pratique (1788)",
          these: "Le devoir est un <b>commandement inconditionnel</b> de la raison : l'impératif catégorique. Sa formule : agir selon une maxime universalisable, traiter l'humanité comme fin et jamais simplement comme moyen.",
          explication: "Kant distingue trois types de motifs : <em>par inclination</em> (je rends service parce que ça me plaît), <em>conformément au devoir</em> (je suis honnête parce que c'est rentable), <em>par devoir</em> (je suis honnête parce que c'est mon devoir, quoi qu'il en coûte). Seul le dernier a une valeur morale. L'impératif catégorique est le test universel : ma maxime peut-elle valoir pour tous, sans contradiction ? Si j'érige le mensonge en loi universelle, plus personne ne croit personne — la maxime se détruit elle-même.",
          exemple: "Tu trouves un portefeuille rempli d'argent. Par inclination : je le garde. Conformément au devoir : je le rends parce que je risque d'être attrapé. Par devoir : je le rends parce que je ne peux pas vouloir que tout le monde garde ce qu'il trouve. Seule cette dernière action a une valeur morale.",
          citations: [
            { texte: "Agis seulement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle.", source: "FMM, II", commentaire: "Première formule de l'impératif catégorique. LA citation cardinale pour le devoir. À connaître par cœur." },
            { texte: "Agis de telle sorte que tu traites l'humanité, aussi bien dans ta personne que dans la personne de tout autre, toujours en même temps comme une fin, et jamais simplement comme un moyen.", source: "FMM, II", commentaire: "Deuxième formule : la personne comme fin en soi. Sert pour la dignité, l'éthique, l'opposition personne/chose." },
            { texte: "Le ciel étoilé au-dessus de moi, la loi morale en moi.", source: "Critique de la raison pratique, conclusion", commentaire: "Belle clôture. Le devoir n'est pas un fardeau : il est ce qui élève l'homme à la dignité morale." },
            { texte: "Une volonté libre et une volonté soumise à des lois morales sont une seule et même chose.", source: "FMM, III", commentaire: "Identification kantienne liberté/devoir. À mobiliser pour réfuter l'opposition spontanée devoir/liberté." }
          ]
        }
      ]
    },
    {
      numero: "II",
      titre: "Critiques du devoir kantien : utilitarisme et soupçon",
      enjeu: "Le formalisme kantien est attaqué dès le XIXe siècle. Pour les utilitaristes, une morale qui ne se soucie pas des conséquences est aveugle ; pour Nietzsche et Schopenhauer, le devoir kantien cache encore une théologie ou un ressentiment.",
      auteurs: [
        {
          nom: "Bentham",
          dates: "1748–1832",
          oeuvre: "Introduction aux principes de la morale et de la législation (1789)",
          these: "Le bien et le mal se mesurent à leurs <b>conséquences</b> sur le bonheur. Une action est bonne si elle augmente le plaisir et diminue la peine — pour le plus grand nombre.",
          explication: "Bentham fonde l'utilitarisme : principe d'utilité. Pas d'impératif catégorique mystérieux, un calcul (en principe) rigoureux des conséquences. Une action moralement requise est celle qui maximise le bonheur collectif. C'est une morale conséquentialiste : ce qui compte, ce sont les effets réels, mesurables.",
          exemple: "Faut-il dire la vérité à un mourant ? Pour Kant, oui — toujours. Pour Bentham, ça dépend : si dire la vérité augmente la souffrance et n'apporte rien, mieux vaut s'abstenir. Tout dépend du bilan plaisir/peine.",
          citations: [
            { texte: "La nature a placé l'humanité sous le gouvernement de deux maîtres souverains : la peine et le plaisir.", source: "Introduction aux principes…", commentaire: "Fondation hédoniste de l'utilitarisme. Sert pour opposer morale du devoir et morale du bonheur." }
          ]
        },
        {
          nom: "Mill",
          dates: "1806–1873",
          oeuvre: "L'Utilitarisme (1861)",
          these: "Mill nuance Bentham : tous les plaisirs ne se valent pas. Il existe une <b>hiérarchie qualitative</b> — il vaut mieux être Socrate insatisfait qu'un imbécile satisfait.",
          explication: "Mill défend un utilitarisme raffiné : ce qui compte n'est pas seulement la quantité de plaisir, mais sa qualité. Il distingue plaisirs supérieurs (intellectuels, esthétiques, moraux) et inférieurs (sensuels). Cela rapproche l'utilitarisme d'une éthique exigeante — sans la formaliser comme Kant.",
          exemple: "Une heure de grand roman et une heure de chips : pour un benthamien strict, plaisirs comparables ; pour Mill, le premier est qualitativement supérieur, parce qu'il développe les facultés proprement humaines.",
          citations: [
            { texte: "Mieux vaut être un être humain insatisfait qu'un porc satisfait ; mieux vaut être un Socrate insatisfait qu'un imbécile satisfait.", source: "L'Utilitarisme, II", commentaire: "Formule célèbre. Permet de raffiner l'opposition Kant/utilitarisme — il y a un utilitarisme exigeant." }
          ]
        },
        {
          nom: "Schopenhauer",
          dates: "1788–1860",
          oeuvre: "Le Fondement de la morale (1840)",
          these: "Le devoir kantien est une <b>théologie déguisée</b>. Kant a sécularisé les commandements bibliques en gardant leur forme — un commandement absolu, mais sans le législateur divin qui le rend intelligible. La morale véritable repose sur la compassion.",
          explication: "Pour Schopenhauer, l'impératif catégorique présuppose la forme du « Tu dois » sans en avoir le fondement (Dieu). C'est une forme religieuse vidée de son contenu. La morale véritable ne se fonde pas sur un commandement abstrait, mais sur la <em>compassion</em> — sentiment immédiat de la souffrance d'autrui comme étant la mienne.",
          exemple: "Quand je vois quelqu'un souffrir et que je ressens cette souffrance en moi, ce n'est pas une maxime universalisable qui me pousse à agir : c'est l'évidence sensible d'un même être souffrant. La morale est sentiment, non commandement.",
          citations: [
            { texte: "Ne fais de mal à personne ; au contraire, aide tous, autant que tu peux. C'est la véritable formule de la morale.", source: "Le Fondement de la morale", commentaire: "Morale de la compassion. À opposer à Kant pour penser une morale non-formelle, située." }
          ]
        },
        {
          nom: "Nietzsche",
          dates: "1844–1900",
          oeuvre: "Généalogie de la morale (1887) ; Par-delà bien et mal (1886)",
          these: "Le devoir kantien est l'héritage d'une <b>morale d'esclave</b>. Il vient de la « dette » (<i>Schuld</i>), du ressentiment des faibles, qui transforment leur impuissance en vertu. « Tu dois » est la voix du troupeau.",
          explication: "Nietzsche déconstruit généalogiquement la morale du devoir : derrière son universalité prétendue, il y a une histoire — celle des dominés qui, ne pouvant se venger des puissants, ont inversé les valeurs : ce qui était vital, noble, fort est devenu « mal » ; ce qui était faible, soumis, calculateur est devenu « bien ». Le devoir comme commandement universel masque cette inversion réactive.",
          exemple: "« Il faut être humble » : pour Nietzsche, on traduit ici une incapacité (les faibles ne peuvent être autrement) en vertu universelle. Le devoir-humilité est en réalité une jalousie sublimée.",
          citations: [
            { texte: "Tout ce qui est profond aime le masque.", source: "Par-delà bien et mal, §40", commentaire: "Permet de déployer le soupçon : sous chaque devoir prétendu universel, chercher quel intérêt particulier se cache." }
          ]
        }
      ]
    },
    {
      numero: "III",
      titre: "Reformulations contemporaines : autrui, vivant, avenir",
      enjeu: "Le XXe siècle reformule le devoir : non plus seulement loi universelle abstraite, mais réponse au visage concret d'autrui (Levinas), élan d'amour (Bergson), ou responsabilité envers les générations futures et le vivant (Jonas).",
      auteurs: [
        {
          nom: "Bergson",
          dates: "1859–1941",
          oeuvre: "Les Deux Sources de la morale et de la religion (1932)",
          these: "Il y a <b>deux sources</b> distinctes du devoir : la <em>morale close</em>, qui obéit à la pression sociale et conserve le groupe ; la <em>morale ouverte</em>, qui jaillit comme un élan d'amour universel, portée par les grands mystiques et héros.",
          explication: "Pour Bergson, la morale du devoir ordinaire est essentiellement défensive : elle protège le groupe contre ses ennemis intérieurs et extérieurs. Mais à côté coexiste une morale d'élan, qui ne dit pas « tu dois » mais « viens », et qui transgresse les frontières du groupe pour embrasser l'humanité. Kant capture la première ; il rate la seconde.",
          exemple: "« Ne vole pas tes voisins » relève de la morale close. La pulsion qui pousse à se consacrer aux mourants étrangers (Mère Teresa) relève de la morale ouverte — non commandement, mais élan créateur.",
          citations: [
            { texte: "La morale close défend la cité contre les ennemis du dehors et contre les éléments rebelles du dedans. La morale ouverte embrasse l'humanité tout entière.", source: "Les Deux Sources… (paraphrase)", commentaire: "Distinction-clé pour nuancer Kant et penser un devoir non-formel." }
          ]
        },
        {
          nom: "Levinas",
          dates: "1906–1995",
          oeuvre: "Totalité et Infini (1961) ; Éthique et infini (1982)",
          these: "Le devoir n'est pas une loi rationnelle abstraite : il naît dans <b>la rencontre du visage d'autrui</b>. Le visage me regarde, me parle, m'oblige avant tout savoir. L'éthique précède l'ontologie.",
          explication: "Pour Levinas, marqué par la Shoah, la philosophie occidentale a privilégié l'être (ontologie) sur l'autre (éthique). Or, c'est l'autre, dans sa nudité de visage, qui constitue le sujet moral : « tu ne tueras point » est inscrit sur le visage, antérieur à toute loi morale formelle. Le devoir, c'est répondre à l'appel d'autrui — répondre en n'étant pas indifférent.",
          exemple: "Quand un sans-abri me croise sur le trottoir et que je détourne le regard : ce n'est pas la loi kantienne que je transgresse en premier, c'est le visage que je refuse de voir. Le devoir est là, dans cette rencontre concrète et singulière.",
          citations: [
            { texte: "Le visage parle. Il parle, en cela qu'il rend possible et commence tout discours.", source: "Totalité et Infini", commentaire: "Le visage comme événement éthique antérieur. À mobiliser pour penser un devoir non-formel, situé, intersubjectif." },
            { texte: "L'éthique précède l'ontologie.", source: "Éthique et infini", commentaire: "Formule emblématique : la philosophie première n'est pas l'être, c'est la responsabilité pour l'autre." }
          ]
        },
        {
          nom: "Jonas",
          dates: "1903–1993",
          oeuvre: "Le Principe responsabilité (1979)",
          these: "Le devoir doit être <b>repensé à l'âge de la technique</b>. Les actions humaines ont désormais des conséquences planétaires et irréversibles : il faut une éthique qui prenne en charge les générations futures et la nature.",
          explication: "Jonas montre que les morales traditionnelles (Kant inclus) supposaient un monde où les conséquences de nos actes étaient locales et limitées. Avec la bombe atomique, le génie génétique, la crise écologique, ce monde a disparu. Il faut un nouvel impératif, étendant la moralité aux êtres qui n'existent pas encore.",
          exemple: "Polluer aujourd'hui ne nuit pas à mes contemporains identifiables, mais à des générations non encore nées. La morale kantienne ne traite pas bien ce cas : Jonas étend le devoir à ces êtres absents mais réels.",
          citations: [
            { texte: "Agis de telle sorte que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur la terre.", source: "Le Principe responsabilité", commentaire: "Impératif jonasien — réécriture écologique de Kant. Très bankable pour les sujets sur l'environnement, la technique, le futur." }
          ]
        }
      ]
    }
  ],

  cartographie: {
    intro: "Synthèse comparative : comment penser le devoir ?",
    criteres: ["Fondement du devoir", "Mode d'évaluation", "Universel ou situé ?", "Critique adressée"],
    positions: [
      { auteur: "Kant", valeurs: ["Raison pratique", "Impératif catégorique (forme)", "Universel", "Formel, indifférent aux conséquences"] },
      { auteur: "Bentham/Mill", valeurs: ["Sentiment du plaisir/peine", "Conséquences mesurées", "Universel (greatest happiness)", "Trop calculateur ; plaisirs incommensurables"] },
      { auteur: "Schopenhauer", valeurs: ["Compassion", "Sentiment immédiat de la souffrance", "Universel (sympathie)", "Manque de rigueur conceptuelle"] },
      { auteur: "Nietzsche", valeurs: ["Volonté de puissance (critique)", "Généalogie (suspicion)", "Singulier (par-delà bien/mal)", "Risque de relativisme moral"] },
      { auteur: "Bergson", valeurs: ["Élan vital / pression sociale", "Distinction close/ouverte", "Mixte", "Notion d'« élan » difficile à formaliser"] },
      { auteur: "Levinas", valeurs: ["Visage d'autrui", "Réponse à l'appel", "Singulier (chaque autre unique)", "Insuffisance face aux problèmes globaux"] },
      { auteur: "Jonas", valeurs: ["Survie de l'humanité", "Précaution, anticipation", "Universel élargi à l'avenir", "Risque de paralysie face au possible"] }
    ]
  },

  objections: [
    { de: "Mill", vers: "Kant", propos: "« Votre impératif catégorique est aveugle aux conséquences. Un homme cache des innocents dans sa cave ; un assassin vous demande où ils sont. Faut-il dire la vérité ‘par devoir’ ? Votre morale, en se voulant pure, devient inhumaine. »" },
    { de: "Kant", vers: "Mill", propos: "« Votre calcul des conséquences réduit la morale à une affaire de bonheur — donc d'inclination. Vous transformez les hommes en moyens pour produire du plaisir. Mais traiter une personne comme un moyen, c'est nier sa dignité. »" },
    { de: "Nietzsche", vers: "Kant", propos: "« Votre ‘devoir’ rationnel est l'habillage moderne d'une morale chrétienne ancienne — celle des faibles qui ont rebaptisé leur impuissance ‘vertu’. Vous voulez croire au commandement sans Dieu : c'est une théologie sans théologien. »" },
    { de: "Levinas", vers: "Kant", propos: "« Votre maxime universalisable manque le concret : le visage de cet autre singulier qui me regarde et m'oblige. La morale ne se déduit pas, elle se reçoit. »" },
    { de: "Jonas", vers: "Kant", propos: "« Votre éthique présuppose un monde sans grandes conséquences. À l'âge de la bombe et du génie génétique, il faut un autre impératif : sauvegarder la possibilité d'une vie humaine future. »" },
    { de: "Bergson", vers: "Kant", propos: "« Vous décrivez bien la morale close — celle qui maintient le groupe. Mais vous manquez la morale ouverte, celle de l'élan, qui n'obéit à aucune loi universelle parce qu'elle les transcende toutes. »" }
  ],

  phrases_formules: [
    "« Le devoir est ce que je dois faire alors même que je voudrais l'éviter. »",
    "« Agir par devoir, ce n'est pas obéir à un autre, c'est obéir à soi comme être raisonnable. »",
    "« Le devoir n'asservit pas la liberté : il en est la forme. »",
    "« Là où l'inclination cède, le devoir commence ; là où le devoir parle, l'humanité s'élève. »",
    "« Faire son devoir, ce n'est pas suivre une règle, c'est répondre d'autrui. »",
    "« Toute morale qui ne pense pas les conséquences est aveugle ; toute morale qui ne pense que les conséquences est cynique. »",
    "« Le devoir n'est pas l'envers du désir, c'est ce qui le rend humain. »",
    "« Le visage d'autrui m'oblige avant toute loi. »"
  ],

  pieges: [
    "<b>Opposer devoir et liberté</b> : pour Kant, ce sont une seule et même chose — agir par devoir, c'est se déterminer par la raison, donc être libre.",
    "<b>Confondre ‘par devoir’ et ‘conformément au devoir’</b> : la même action peut avoir ou non valeur morale selon la motivation. Le commerçant honnête par calcul agit conformément au devoir, sans valeur morale.",
    "<b>Réduire le devoir au respect d'une règle extérieure</b> : c'est confondre devoir moral et devoir social ou juridique. Le vrai devoir est autonome.",
    "<b>Penser que le devoir s'oppose au bonheur</b> : Kant ne dit pas qu'il faut souffrir, il dit qu'il ne faut pas faire dépendre la moralité du bonheur.",
    "<b>Confondre impératif catégorique et impératif hypothétique</b> : seul le premier est moral. « Si tu veux être respecté, sois honnête » n'a aucune valeur morale.",
    "<b>Croire que la morale utilitariste autorise n'importe quoi</b> : Mill nuance Bentham, et même Bentham exige un calcul rigoureux.",
    "<b>Identifier le devoir à un sentiment subjectif</b> (« je sens que c'est mal ») : pour Kant, le sentiment est précisément ce qui ne fonde pas le devoir."
  ],

  methode: {
    problematiser: "Toujours interroger d'abord : devoir = obligation extérieure ou commandement intérieur ? Loi ou élan ? Universel ou singulier ? La dialectique classique articule la position kantienne (formelle, universelle, autonome), ses critiques (utilitaristes, soupçonneuses), et ses reformulations (intersubjectives, écologiques).",
    plan_type: "I. Le devoir kantien comme commandement de la raison — II. Critiques : utilitarisme et soupçon (Mill, Nietzsche) — III. Reformulations contemporaines (Bergson, Levinas, Jonas).",
    accroches: [
      "Partir d'un dilemme classique : faut-il mentir à l'assassin qui demande où sont cachés ses victimes ?",
      "Évoquer <i>Antigone</i> : devoir envers les dieux et la famille contre la loi de la cité.",
      "Citer Hannah Arendt sur Eichmann : la « banalité du mal », ou la fuite dans l'obéissance bureaucratique.",
      "Partir d'un dilemme écologique : devoir envers des êtres qui n'existent pas encore."
    ]
  },

  plan_corrige: {
    sujet: "Faut-il faire son devoir par devoir ?",
    accroche: "« Je l'ai fait parce qu'il le fallait. » Cette phrase peut désigner aussi bien l'acte le plus haut (le sauvetage désintéressé) que la fuite la plus lâche (l'obéissance sans pensée). Faire son devoir « par devoir », est-ce s'élever ou se déresponsabiliser ?",
    problematique: "Le sujet engage le débat sur la moralité de l'intention. Kant affirme qu'une action n'a de valeur morale que si elle est accomplie par devoir, indépendamment de toute inclination. Mais peut-on faire le bien sans inclination, et est-ce souhaitable ? L'obéissance à la règle ne risque-t-elle pas de remplacer l'éthique vivante ?",
    annonce: "Nous verrons d'abord pourquoi, pour Kant, l'acte moral suppose qu'on le fasse par devoir et non par inclination (I). Mais nous interrogerons ce formalisme : conséquences ignorées (utilitarisme), suspicion généalogique (Nietzsche), obéissance qui peut devenir mal (II). Reste à reformuler : faire son devoir, ce n'est peut-être pas obéir à une règle mais répondre d'autrui (III).",
    parties: [
      {
        titre: "I. Pour Kant, l'acte n'a de valeur morale que s'il est fait par devoir",
        idee: "Sans devoir, l'action perd sa dignité morale — elle redevient calcul ou inclination.",
        args: [
          { nom: "Kant (impératif catégorique)", dev: "Seul le devoir, en tant que commandement universel de la raison, fonde la moralité.", citation: "« Agis seulement d'après la maxime grâce à laquelle tu peux vouloir en même temps qu'elle devienne une loi universelle. »" },
          { nom: "Kant (autonomie)", dev: "Faire son devoir, c'est suivre la loi qu'on s'est rationnellement donnée — donc être libre.", citation: "« Une volonté libre et une volonté soumise à des lois morales sont une seule et même chose. »" },
          { nom: "Kant (fin en soi)", dev: "L'humanité doit toujours être traitée comme fin, jamais comme moyen — règle inconditionnelle." }
        ]
      },
      {
        titre: "II. Mais le formalisme du devoir peut conduire à l'aveuglement ou à la fuite",
        idee: "Faire son devoir « par devoir » risque d'ignorer les conséquences, voire de servir d'excuse à la lâcheté.",
        args: [
          { nom: "Mill (conséquences)", dev: "Le bien se mesure aussi à ses effets ; ignorer les conséquences, c'est sacrifier le réel à la forme." },
          { nom: "Nietzsche (généalogie)", dev: "Le devoir prétend être universel ; il est l'héritage historique d'une morale de la dette et du ressentiment." },
          { nom: "Arendt (banalité du mal)", dev: "L'obéissance bureaucratique d'Eichmann montre comment « faire son devoir » peut servir l'horreur — quand on cesse de penser." }
        ]
      },
      {
        titre: "III. Faire son devoir, c'est moins obéir à une règle que répondre d'autrui",
        idee: "Reformulé, le devoir n'est plus formel mais incarné : il prend la figure d'autrui, de l'avenir, du vivant.",
        args: [
          { nom: "Levinas (visage)", dev: "Le devoir naît dans la rencontre du visage d'autrui, qui m'oblige avant toute règle.", citation: "« L'éthique précède l'ontologie. »" },
          { nom: "Bergson (morale ouverte)", dev: "À côté du devoir comme contrainte, il y a l'élan d'amour qui dépasse toute règle." },
          { nom: "Jonas (responsabilité)", dev: "À l'âge de la technique, le devoir s'étend aux générations futures et au vivant — il devient principe responsabilité." }
        ]
      }
    ],
    conclusion: "Faut-il faire son devoir par devoir ? Oui — si l'on veut que l'acte ait une dignité morale propre, indépendante de l'inclination ou du calcul. Mais cette pureté ne suffit pas : sans pensée des conséquences, sans réponse à autrui, sans souci de l'avenir, le devoir peut se dégrader en formalisme aveugle ou en obéissance lâche. Le devoir véritable est exigence rationnelle <em>et</em> réponse à la situation, loi universelle <em>et</em> attention au visage. Ce n'est pas obéir, c'est répondre."
  },

  ouvertures: [
    { type: "Théâtre", ref: "Sophocle, <i>Antigone</i> (–441)", comment: "Le conflit des devoirs : envers la cité (Créon) ou envers la famille et les dieux (Antigone) ? Préfigure le déchirement moral moderne." },
    { type: "Essai", ref: "H. Arendt, <i>Eichmann à Jérusalem</i> (1963)", comment: "La « banalité du mal » : Eichmann ne pensait pas. Faire son devoir bureaucratique peut conduire au crime." },
    { type: "Roman", ref: "Sartre, <i>Les Mouches</i> (1943)", comment: "Oreste refuse de se réfugier dans le remords ou le devoir : il assume son acte." },
    { type: "Roman", ref: "Camus, <i>Les Justes</i> (1949)", comment: "Conflit moral : tuer pour libérer ? Kaliayev refuse de lancer la bombe quand il voit des enfants — limites du conséquentialisme." },
    { type: "Fait historique", ref: "Procès de Nuremberg (1945–46)", comment: "« Je n'ai fait qu'obéir aux ordres » : refus juridique de l'obéissance comme excuse — Nuremberg consacre une morale au-dessus de la loi." },
    { type: "Actualité", ref: "Crise écologique et impératif de Jonas", comment: "Devoirs envers les générations futures et le vivant — l'éthique contemporaine élargit la sphère du devoir au-delà de l'humanité présente." }
  ],

  sujets_bac: [
    "Faut-il faire son devoir par devoir ?",
    "Le devoir s'oppose-t-il à la liberté ?",
    "Peut-on être heureux en faisant son devoir ?",
    "Suis-je en dette envers les autres ?",
    "Le devoir est-il toujours rationnel ?",
    "Faire son devoir, est-ce obéir ?",
    "Avons-nous des devoirs envers les générations futures ?",
    "La morale peut-elle se passer du devoir ?"
  ],

  notions_liees: ["liberte", "conscience", "justice", "etat", "inconscient"]
}

];
