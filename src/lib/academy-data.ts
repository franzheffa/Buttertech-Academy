export const partnerLogos = [
  {
    name: 'Google for Education Partner',
    src: '/partners/google-for-education-partner-horizontal-wide.png',
    alt: 'Google for Education Partner',
    category: 'Academy',
  },
  {
    name: 'Google Workspace for Education',
    src: '/partners/google-workspace-for-education-color.png',
    alt: 'Google Workspace for Education',
    category: 'Productivite education',
  },
  {
    name: 'Gemini Enterprise',
    src: '/partners/gemini-enterprise-lockup.png',
    alt: 'Gemini Enterprise',
    category: 'AI Enterprise',
  },
] as const

export const partnerPlacements = [
  {
    title: 'Buttertech Academy',
    description:
      'Google for Education, Google Workspace for Education et Gemini structurent les parcours, la productivite et l accompagnement IA.',
    badges: ['Google for Education', 'Google Workspace for Education', 'Gemini'],
  },
  {
    title: 'AI commerce',
    description:
      'La plateforme prepare une distribution locale des outils IA avec paiement simple et accompagnement de mise en route.',
    badges: ['Gemini', 'AI packs', 'Smith-Heffa Paygate'],
  },
  {
    title: 'Enterprise trust',
    description:
      'Google Cloud, NVIDIA et une base cloud native servent de colonne vertebrale pour les experiences d apprentissage et d orchestration.',
    badges: ['Google Cloud', 'NVIDIA', 'Enterprise trust'],
  },
] as const

export const studentJourney = {
  hero: {
    title: 'Espace apprenant Buttertech Academy',
    subtitle:
      'Un cockpit de formation synchrone et asynchrone avec objectifs d apprentissage, blocs de cours, traces evaluatives, attestations et accompagnement IA continu.',
  },
  metrics: [
    { value: '15', label: 'Seances structurees', detail: 'Vision seance par seance avec objectifs, activites et traces.' },
    { value: '4', label: 'Blocs de cours', detail: 'Organisation claire selon les visees, contenus et evaluations.' },
    { value: '24/7', label: 'Accompagnement IA', detail: 'Aides a la revision, resumes, traduction et preparation des livrables.' },
  ],
  weeklyFlow: [
    {
      title: 'Avant la seance',
      text: 'Lectures, capsule courte, pretest, objectifs du bloc et consignes de preparation sont visibles en premier sur mobile.',
    },
    {
      title: 'Pendant la seance synchrone',
      text: 'Zoom, atelier, demonstration, discussion, questions et participation sont regroupes dans une meme vue avec preuves de presence.',
    },
    {
      title: 'Apres la seance',
      text: 'Travail individuel, retroaction, portfolio, post-test, depot des traces et preparation de l evaluation suivante.',
    },
    {
      title: 'Pack IA etudiant',
      text: 'Gemini, outils de productivite, espace documents et orientation vers les paiements locaux sont relies dans le meme parcours.',
    },
  ],
  learningBlocks: [
    {
      title: 'Bloc 1 · Fondations et intentions du cours',
      hours: '6h',
      objectives: 'Comprendre les visees du cours, les apprentissages attendus et les prerequis.',
      taxonomy: 'Comprendre → Appliquer',
      methods: 'Exposes interactifs, lectures, pretest, discussion guidee',
      evaluation: 'Pretest diagnostique, quiz de comprehension, participation',
    },
    {
      title: 'Bloc 2 · Mise en pratique et etude de cas',
      hours: '7h',
      objectives: 'Appliquer les concepts dans des cas authentiques et des ateliers accompagnes.',
      taxonomy: 'Appliquer → Analyser',
      methods: 'Atelier, etude de cas, demonstration, travail en equipe',
      evaluation: 'Depot de cas, grille d observation, retroaction formative',
    },
    {
      title: 'Bloc 3 · Production et consolidation',
      hours: '7h',
      objectives: 'Produire une reponse structuree, justifier ses choix et mobiliser les ressources du cours.',
      taxonomy: 'Analyser → Evaluer',
      methods: 'Projet, simulation, travail reflexif, peer review',
      evaluation: 'Travail ecrit, evaluation par les pairs, journal de bord',
    },
    {
      title: 'Bloc 4 · Epreuve finale et transfert',
      hours: '7h',
      objectives: 'Structurer une production finale et demontrer le transfert des competences dans un contexte realiste.',
      taxonomy: 'Evaluer → Creer',
      methods: 'Projet final, expose, portfolio, synthese guidee',
      evaluation: 'Epreuve finale, presentation, attestation et sondage',
    },
  ],
  evidenceBoard: [
    'Plan de cours et objectifs du bloc visibles',
    'Pretest et post-test par sequence',
    'Captures de participation synchrone et travaux asynchrones',
    'Journal de bord, portfolio et retroactions conservees',
    'Attestation et sondage de fin de parcours',
  ],
  evaluations: [
    { name: 'Evaluation 1', weight: '20%', format: 'Quiz + etude de cas courte' },
    { name: 'Evaluation 2', weight: '25%', format: 'Travail pratique ou atelier note' },
    { name: 'Evaluation 3', weight: '20%', format: 'Travail reflexif ou production ecrite' },
    { name: 'Epreuve finale', weight: '35%', format: 'Projet final, expose ou portfolio' },
  ],
  liveSchedule: [
    { slot: 'Lundi 18:30', type: 'Synchrone', topic: 'Classe virtuelle, demonstration et questions', status: 'En direct ou replay' },
    { slot: 'Mercredi 12:00', type: 'Coaching', topic: 'Heure de bureau, accompagnement individuel et feedback', status: 'Sur reservation' },
    { slot: 'Vendredi 17:00', type: 'Asynchrone', topic: 'Depot des traces, quiz, portfolio et retroaction', status: 'Echeance visible' },
  ],
  submissions: [
    { item: 'Pretest du bloc 1', due: 'Aujourd hui', status: 'A completer', tone: 'attention' },
    { item: 'Etude de cas de la seance 4', due: '02 avr. 2026', status: 'Depose', tone: 'done' },
    { item: 'Journal reflexif intermediaire', due: '05 avr. 2026', status: 'Retroaction recue', tone: 'review' },
    { item: 'Portfolio final', due: '12 avr. 2026', status: 'Preparation', tone: 'progress' },
  ],
  progression: [
    { label: 'Bloc 1', value: '100%', detail: 'Fondations, pretest et objectifs completes' },
    { label: 'Bloc 2', value: '74%', detail: 'Ateliers et etude de cas en cours' },
    { label: 'Bloc 3', value: '38%', detail: 'Production, peer review et consolidation' },
    { label: 'Bloc 4', value: '12%', detail: 'Epreuve finale planifiee' },
  ],
  attestationStack: [
    { title: 'Attestation de participation', state: 'Disponible', detail: 'Generee apres validation des traces synchrones et asynchrones.' },
    { title: 'Badge de competence intermediaire', state: 'En preparation', detail: 'Delivre apres le bloc 2 et la grille d observation.' },
    { title: 'Attestation finale Buttertech Academy', state: 'Conditionnelle', detail: 'Publiee apres epreuve finale, sondage et portfolio conformes.' },
  ],
  partnerProof: [
    'Google for Education pour la structure pedagogique et l adoption en contexte educatif',
    'Google Workspace for Education pour les supports, depots et collaboration',
    'Gemini pour l accompagnement IA contextuel dans les parcours',
  ],
} as const

export const teacherJourney = {
  hero: {
    title: 'Espace formateur et macrodesign',
    subtitle:
      'Un poste de pilotage qui aligne analyse prealable, macrodesign, plan de cours, seances synchrones, activites asynchrones, evaluations et preuves de qualite pedagogique.',
  },
  metrics: [
    { value: '15', label: 'Seances pilotables', detail: 'Chaque seance peut etre marquee synchrone, asynchrone ou hybride.' },
    { value: '4', label: 'Piliers pedagogiques', detail: 'Analyse, macrodesign, delivery, evaluation.' },
    { value: '360°', label: 'Vision de cohorte', detail: 'Progression, preuves, satisfaction, risques et relances.' },
  ],
  complianceChecklist: [
    {
      title: 'Analyse prealable',
      text: 'Sigle, descriptif officiel, apprentissages vises, public cible, contexte, contraintes, technologies et enjeux de formation a distance.',
    },
    {
      title: 'Macrodesign',
      text: 'Objectifs, taxonomie de Bloom, types de connaissances, strategies d enseignement, modalites d interaction et d evaluation.',
    },
    {
      title: 'Planification des seances',
      text: 'Contenus essentiels, taches evaluatives, synchrones et asynchrones, ressources et suivis par seance.',
    },
    {
      title: 'Qualite et preuves',
      text: 'Participation, productions, portfolios, sondages, attestations, retroactions et archives de la cohorte.',
    },
  ],
  teachingMethods: [
    'Expose interactif et demonstration',
    'Atelier et simulation',
    'Etude de cas et projet',
    'Travail en equipe et discussion',
    'Travail reflexif et portfolio',
    'Pretest, post-test et evaluation finale',
  ],
  workflows: [
    {
      name: 'Avant session',
      items: ['Valider les objectifs et le niveau taxonomique', 'Publier ressources, pretest et consignes', 'Planifier la part synchrone et asynchrone'],
    },
    {
      name: 'Pendant session',
      items: ['Animer la seance, les interactions et l atelier', 'Suivre la participation et les difficultes', 'Documenter les traces et ajuster en direct'],
    },
    {
      name: 'Apres session',
      items: ['Diffuser la retroaction et le post-test', 'Archiver productions et observations', 'Preparer l evaluation suivante et les attestations'],
    },
  ],
  sessionMatrix: [
    { session: '1-3', mode: 'Synchrone guide', outcome: 'Lancement, cadrage, diagnostique, notions de base' },
    { session: '4-8', mode: 'Synchrone + asynchrone', outcome: 'Ateliers, etudes de cas, travaux equipes, checkpoints' },
    { session: '9-12', mode: 'Asynchrone accompagne', outcome: 'Travail individuel, portfolio, retroactions detaillees' },
    { session: '13-15', mode: 'Soutenance et finale', outcome: 'Presentation, epreuve finale, sondage et attestation' },
  ],
  evidenceBoard: [
    'Journal de conception et analyse prealable',
    'Macrodesign avec Bloom et types de connaissances',
    'Synoptique par seance, modalite et tache evaluative',
    'Grilles de participation, travaux et portfolio',
    'Sondage final et pieces d attestation',
  ],
  cockpit: [
    { label: 'Presence synchrone', value: '94%', detail: 'Participation moyenne sur les 3 dernieres seances' },
    { label: 'Travaux remis', value: '27/30', detail: 'Depots recueillis et traces asynchrones disponibles' },
    { label: 'Cohorte a risque', value: '3', detail: 'Apprenants a relancer sous 24h' },
    { label: 'Attestations pretes', value: '18', detail: 'Pieces generables des la fermeture de cohorte' },
  ],
  liveOps: [
    {
      title: 'Regie synchrone',
      items: ['Lancer la salle Zoom/Meet', 'Partager objectifs, taxonomie et activites', 'Capturer presence, questions et interactions'],
    },
    {
      title: 'Flux asynchrone',
      items: ['Verifier depots et journaux de bord', 'Pousser la retroaction sous 48h', 'Programmer rappels et echeances'],
    },
    {
      title: 'Qualite de cohorte',
      items: ['Suivre satisfaction et comprehension', 'Isoler les apprenants a risque', 'Documenter les ajustements pedagogiques'],
    },
  ],
  rubricRows: [
    { criterion: 'Participation et engagement', weighting: '15%', signal: 'Presence, interactions, questions, collaboration' },
    { criterion: 'Application des notions', weighting: '25%', signal: 'Etudes de cas, exercices, demonstrations' },
    { criterion: 'Production et transfert', weighting: '35%', signal: 'Travail final, portfolio, argumentation' },
    { criterion: 'Reflexivite et amelioration', weighting: '25%', signal: 'Journal de bord, autoevaluation, integration du feedback' },
  ],
  cohortAlerts: [
    { learner: 'Cohorte A · 2 apprenants', issue: 'Absence a la derniere seance synchrone', action: 'Relance + replay + mini checkpoint' },
    { learner: 'Cohorte B · 1 apprenant', issue: 'Portfolio incomplet', action: 'Feedback cible et deadline adaptee' },
    { learner: 'Cohorte C · 3 apprenants', issue: 'Quiz bloc 2 sous le seuil', action: 'Atelier de remobilisation' },
  ],
  partnerProof: [
    'Google for Education Partner pour le signal institutionnel visible',
    'Google Workspace for Education pour la logistique de cohortes et les ressources',
    'Google Cloud pour l execution et la securisation des experiences IA',
  ],
} as const
