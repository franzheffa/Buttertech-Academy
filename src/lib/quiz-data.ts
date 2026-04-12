export type QuizQuestion = {
  id: string
  prompt: string
  options: string[]
  answerIndex: number
  explanation: string
}

export const formationQuizzes: Record<string, QuizQuestion[]> = {
  '1': [
    {
      id: 'f1-q1',
      prompt: 'Quel composant orchestre les appels entre plusieurs agents specialises ?',
      options: ['Le navigateur', 'L orchestrateur', 'Le stockage statique', 'Le CDN'],
      answerIndex: 1,
      explanation: 'L orchestrateur coordonne les appels, les outils et la memoire entre les agents specialises.',
    },
    {
      id: 'f1-q2',
      prompt: 'Quel est le principal avantage de Cloud Run pour ce parcours ?',
      options: ['Une IA offline uniquement', 'Un hebergement manuel sans autoscaling', 'Un deploiement serverless elastique', 'Une dependance locale au poste formateur'],
      answerIndex: 2,
      explanation: 'Cloud Run permet un deploiement serverless avec autoscaling et une base solide pour les labs et demos.',
    },
    {
      id: 'f1-q3',
      prompt: 'Dans ce parcours, NVIDIA NIM est surtout presente comme :',
      options: ['Un LMS', 'Une couche d inference standardisee', 'Un outil de visioconference', 'Un tableur'],
      answerIndex: 1,
      explanation: 'NVIDIA NIM sert ici de couche d inference et d exposition d endpoints pour les modeles.',
    },
    {
      id: 'f1-q4',
      prompt: 'Quel livrable final est attendu ?',
      options: ['Un schema d architecture multi-agents', 'Une affiche marketing', 'Un contrat RH', 'Un formulaire de paie'],
      answerIndex: 0,
      explanation: 'Le parcours mene vers une architecture cible multi-agents argumentee et transferable.',
    },
  ],
  '2': [
    {
      id: 'f2-q1',
      prompt: 'La Loi 25 insiste notamment sur :',
      options: ['La suppression des journaux', 'La gouvernance des renseignements personnels', 'L absence de consentement', 'Le stockage sans responsable'],
      answerIndex: 1,
      explanation: 'La gouvernance, la responsabilite et la protection des renseignements personnels sont centrales.',
    },
    {
      id: 'f2-q2',
      prompt: 'L AI Act de l UE classe les systemes selon :',
      options: ['Le nombre d employes', 'Le prix de vente', 'Le niveau de risque', 'Le fuseau horaire'],
      answerIndex: 2,
      explanation: 'Le niveau de risque determine les exigences applicables et la profondeur des controles.',
    },
    {
      id: 'f2-q3',
      prompt: 'Privacy by Design signifie ici :',
      options: ['Ajouter la securite a la fin', 'Integrer la protection des donnees des la conception', 'Supprimer toutes les donnees', 'Eviter toute journalisation'],
      answerIndex: 1,
      explanation: 'Les mesures de protection sont prevues dans l architecture, les flux et les controles des le depart.',
    },
    {
      id: 'f2-q4',
      prompt: 'Quel resultat pedagogique est vise ?',
      options: ['Memoriser des slogans', 'Evaluer un deploiement IA sous angle conformite', 'Faire un montage video', 'Construire un CRM'],
      answerIndex: 1,
      explanation: 'La formation apprend a analyser, comparer et evaluer une solution IA sous angle reglementaire et operationnel.',
    },
  ],
  '3': [
    {
      id: 'f3-q1',
      prompt: 'Dans P.T.C.F., le P correspond a :',
      options: ['Paiement', 'Persona', 'Portail', 'Pipeline'],
      answerIndex: 1,
      explanation: 'Persona cadre le role, le point de vue ou l identite attendue du systeme ou de l agent.',
    },
    {
      id: 'f3-q2',
      prompt: 'Quel benefice principal apporte Google Workspace for Education dans ce parcours ?',
      options: ['La collaboration et les flux educatifs', 'Le minage crypto', 'Le rendu 3D local', 'La paie mobile money'],
      answerIndex: 0,
      explanation: 'Workspace sert ici de base de collaboration, de production et de circulation des livrables educatifs.',
    },
    {
      id: 'f3-q3',
      prompt: 'Apps Script est mobilise pour :',
      options: ['Compiler le noyau Linux', 'Automatiser des flux et operations Workspace', 'Gerer des GPUs locaux', 'Faire du design vectoriel'],
      answerIndex: 1,
      explanation: 'Apps Script permet de relier Gmail, Docs, Sheets et d autres services dans des automatisations utiles.',
    },
    {
      id: 'f3-q4',
      prompt: 'Le vrai objectif du parcours productivite agentique est de :',
      options: ['Multiplier les outils sans methode', 'Standardiser les invites et automatiser des resultats utiles', 'Remplacer tout apprentissage', 'Supprimer les validations humaines'],
      answerIndex: 1,
      explanation: 'Le parcours vise une methode de travail reproductible, utile et integree aux operations reelles.',
    },
  ],
}

export const moduleQuizzes: Record<string, QuizQuestion[]> = {
  module1: [
    { id: 'm1-q1', prompt: 'Quel principe est central dans la Loi 25 ?', options: ['Consentement explicite', 'Absence de gouvernance', 'Suppression des roles', 'Publicite automatique'], answerIndex: 0, explanation: 'Le consentement explicite fait partie des obligations majeures de gouvernance et de transparence.' },
    { id: 'm1-q2', prompt: 'Le RPRP designe :', options: ['Un routeur cloud', 'Le responsable de la protection des renseignements personnels', 'Un rapport fiscal', 'Une licence logicielle'], answerIndex: 1, explanation: 'Le RPRP organise la gouvernance et les responsabilites autour des renseignements personnels.' },
    { id: 'm1-q3', prompt: 'Une organisation de formation doit aussi penser a :', options: ['La pedagogie et les donnees etudiantes', 'Uniquement le design du logo', 'L achat de GPU personnels', 'Le changement de monnaie'], answerIndex: 0, explanation: 'Le contexte pedagogique implique aussi des obligations sur les donnees etudiantes et les preuves.' },
  ],
  module2: [
    { id: 'm2-q1', prompt: 'Le RGPD et la Loi 25 ont en commun :', options: ['Des obligations de protection des donnees', 'L interdiction du cloud', 'Le meme organisme de controle', 'Le meme texte integral'], answerIndex: 0, explanation: 'Ils partagent des logiques de responsabilite et de protection, meme si les details varient.' },
    { id: 'm2-q2', prompt: 'L extraterritorialite signifie :', options: ['Une regle limitee a un seul campus', 'Un effet possible au-dela du territoire d origine', 'Une absence de sanctions', 'Une simple recommandation'], answerIndex: 1, explanation: 'Certaines regles peuvent s appliquer a des activites ou personnes hors du territoire initial.' },
    { id: 'm2-q3', prompt: 'Comparer plusieurs cadres sert a :', options: ['Rendre la lecture plus complexe sans usage', 'Construire une gouvernance multi-juridictionnelle', 'Eviter toute decision', 'Supprimer les preuves'], answerIndex: 1, explanation: 'La comparaison aide a concevoir des politiques plus robustes pour plusieurs zones de risque.' },
  ],
  module3: [
    { id: 'm3-q1', prompt: 'L AI Act se structure autour de :', options: ['Niveaux de risque', 'Couleurs de marque', 'Fuseaux horaires', 'Types d ecrans'], answerIndex: 0, explanation: 'Les obligations varient selon le niveau de risque du systeme ou de l usage.' },
    { id: 'm3-q2', prompt: 'Un systeme a risque eleve exige davantage de :', options: ['Documentation et controles', 'Silence contractuel', 'Moins de supervision', 'Aucune trace'], answerIndex: 0, explanation: 'Les systemes a risque eleve demandent documentation, supervision, qualite et gouvernance renforcees.' },
    { id: 'm3-q3', prompt: 'Dans un contexte IA educatif, cette classification permet de :', options: ['Choisir un logo', 'Evaluer la sensibilite d un usage', 'Remplacer les enseignants', 'Supprimer les evaluations'], answerIndex: 1, explanation: 'La classification aide a qualifier la criticite d un usage et a aligner les controles.' },
  ],
  module4: [
    { id: 'm4-q1', prompt: 'Privacy by Design suppose :', options: ['La protection integree a l architecture', 'Une politique ajoutee apres incident', 'Aucune journalisation', 'Des secrets en clair'], answerIndex: 0, explanation: 'La protection doit etre visible dans les choix d architecture, d acces et de journalisation.' },
    { id: 'm4-q2', prompt: 'Secret Manager sert a :', options: ['Stocker les secrets de facon securisee', 'Faire du marketing email', 'Gerer un quiz papier', 'Dessiner des schemas'], answerIndex: 0, explanation: 'La gestion des secrets securise les credentials et reduit les expositions directes.' },
    { id: 'm4-q3', prompt: 'Une architecture auditable a besoin de :', options: ['Traces, controles et separation des acces', 'Moins de supervision', 'Documents invisibles', 'Des mots de passe partages'], answerIndex: 0, explanation: 'L auditabilite repose sur des preuves, des traces et des controles de responsabilite.' },
  ],
  module5: [
    { id: 'm5-q1', prompt: 'Le quiz final sert a :', options: ['Valider les notions cles du parcours', 'Supprimer les preuves', 'Changer le contenu du cours', 'Remplacer toute evaluation'], answerIndex: 0, explanation: 'Le quiz final permet une verification synthese des acquis du parcours.' },
    { id: 'm5-q2', prompt: 'Les preuves attendues servent surtout a :', options: ['Documenter la conformite et la progression', 'Faire du graphisme', 'Eviter les traces', 'Retarder les cohortes'], answerIndex: 0, explanation: 'Les preuves permettent de relier apprentissage, gouvernance et qualite du parcours.' },
    { id: 'm5-q3', prompt: 'L archivage pedagogique sert notamment a :', options: ['Conserver une trace exploitable des evaluations', 'Remplacer la formation', 'Supprimer les resultats', 'Bloquer les apprenants'], answerIndex: 0, explanation: 'Les archives servent a garder les traces d evaluation et de pilotage sur une base fiable.' },
  ],
}
