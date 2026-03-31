export const partnerLogos = [
  {
    name: 'Google for Education Partner',
    src: '/partners/google-for-education-partner-horizontal.png',
    alt: 'Google for Education Partner',
    category: 'Academy',
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
      'Google for Education, Google Workspace for Education et Gemini Enterprise structurent les parcours, la productivite et l accompagnement IA.',
    badges: ['Google for Education', 'Google Workspace for Education', 'Gemini Enterprise'],
  },
  {
    title: 'Viize Parking Intelligence',
    description:
      'Google Maps Platform Partner doit accompagner chaque surface qui parle de parking, cartographie, geolocalisation ou optimisation de flux.',
    badges: ['Google Maps Platform Partner', 'Parking Intelligence', 'Operations'],
  },
  {
    title: 'Cyber and Trust',
    description:
      'Mandiant et Threat Intelligence se placent sur les experiences trust, securite, resilience et gouvernance.',
    badges: ['Mandiant', 'Threat Intelligence', 'Enterprise Trust'],
  },
] as const

export const studentJourney = {
  hero: {
    title: 'Espace Apprenant SOFEDUC',
    subtitle:
      'Un cockpit de formation synchrone et asynchrone avec objectifs d apprentissage, blocs de cours, traces evaluatives, attestations et accompagnement continu.',
  },
  metrics: [
    { value: '15', label: 'Seances structurees', detail: 'Vision seance par seance avec objectifs, activites et traces' },
    { value: '4', label: 'Blocs de cours', detail: 'Organisation claire selon les visées, contenus et evaluations' },
    { value: '100%', label: 'Pieces visibles', detail: 'Plan de cours, blocs, activites, preuves et attestations centralises' },
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
      title: 'Encadrement continu',
      text: 'Forum, heures de bureau, feedback, journal de bord et rappel des competences visees restent accessibles en tout temps.',
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
} as const

export const teacherJourney = {
  hero: {
    title: 'Espace Formateur et Macrodesign',
    subtitle:
      'Un poste de pilotage qui aligne analyse prealable, macrodesign, plan de cours, seances synchrones, activites asynchrones, evaluations et preuves de qualite SOFEDUC.',
  },
  metrics: [
    { value: '15', label: 'Seances pilotables', detail: 'Chaque seance peut etre marquee synchrone, asynchrone ou hybride' },
    { value: '4', label: 'Piliers SOFEDUC', detail: 'Analyse, macrodesign, delivery, evaluation' },
    { value: '360°', label: 'Vision de cohorte', detail: 'Progression, preuves, satisfaction, risques et relances' },
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
} as const

export const goToMarketData = {
  hero: {
    title: 'Control Tower Go To Market',
    subtitle:
      'Un site vivant qui relie ecosysteme, campagnes, solutions, operations et KPI enterprise pour Buttertech Academy et ses plateformes.',
  },
  pillars: [
    {
      title: 'Ecosysteme partenaire',
      text: 'Google for Education, Gemini Enterprise, Google Workspace for Education, Google Maps Platform, NVIDIA et Mandiant.',
    },
    {
      title: 'Offres et motions',
      text: 'Academy, Viize parking intelligence, agent smith-heffa, prompt ops, gouvernance IA et accompagnement enterprise.',
    },
    {
      title: 'Pilotage KPI',
      text: 'Pipeline, activation, completion, satisfaction, conversion bundle et qualite de delivery.',
    },
  ],
  kpis: [
    { label: 'Pipeline partenaire', value: '$1.24M', trend: '+18% ce mois' },
    { label: 'Apprenants actifs', value: '1,284', trend: '+11% mobile first' },
    { label: 'Taux de completion', value: '93%', trend: '+7 pts' },
    { label: 'Accounts enterprise', value: '42', trend: '+9 ouverts' },
  ],
  campaigns: [
    {
      name: 'Academy Education Launch',
      channel: 'Education / Enterprise',
      status: 'Active',
      description: 'Campagne autour des parcours certifiants, Gemini Enterprise et Workspace for Education.',
    },
    {
      name: 'Viize Smart Parking Motion',
      channel: 'Maps / Mobility',
      status: 'Planned',
      description: 'Narratif parking intelligent avec Google Maps Platform Partner et analytics terrain.',
    },
    {
      name: 'Trust and Security Expansion',
      channel: 'Cyber / C-suite',
      status: 'Active',
      description: 'Positionnement Mandiant, Threat Intelligence et gouvernance IA enterprise.',
    },
  ],
} as const
