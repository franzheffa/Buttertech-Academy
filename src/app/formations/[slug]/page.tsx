import Navbar from '@/components/Navbar'
import QuizCard from '@/components/QuizCard'
import { formationQuizzes } from '@/lib/quiz-data'
import Link from 'next/link'

const FORMATIONS: Record<string, {
  titre: string
  sousTitre: string
  code: string
  uec: number
  bloom: string
  duree: string
  description: string
  modules: { num: number; titre: string; duree: string; bloom: string; points: string[] }[]
}> = {
  '1': {
    titre: 'Agents IA Gemini 3.0',
    sousTitre: 'Architecture Multi-Agents',
    code: 'BTA-AGENTS-001',
    uec: 0.6,
    bloom: '1→6',
    duree: '6 heures',
    description:
      'Concevez une architecture multi-agents Gemini 3.0 deployee sur Cloud Run Montreal avec inference NVIDIA NIM H100. Le parcours couvre architecture, orchestration, cloud et validation finale.',
    modules: [
      { num: 1, titre: 'Architecture des agents IA Gemini 3.0', duree: '20–45 min', bloom: 'Se rappeler (1)', points: ['Agent IA, orchestrateur, Gemini 3.0, NVIDIA NIM', 'Agent IA vs simple chatbot', 'Sources enterprise Google Cloud'] },
      { num: 2, titre: 'Vision artificielle & infrastructures NVIDIA NIM', duree: '20–45 min', bloom: 'Comprendre (2)', points: ['Architecture vision, OCR, transcription audio', 'NVIDIA NIM comme couche d inference', 'Endpoint REST et integration cloud'] },
      { num: 3, titre: 'Orchestration multi-agents — Lab', duree: '20–45 min', bloom: 'Appliquer (3)', points: ['Flux orchestrateur → agents specialises', 'Pipeline 3 agents Gemini', 'Memory bank et delegation'] },
      { num: 4, titre: 'Deploiement Cloud Run Montreal', duree: '20–45 min', bloom: 'Analyser (4)', points: ['northamerica-northeast1 et bases cloud native', 'Docker + Artifact Registry', 'Variables d env et IAM least privilege'] },
      { num: 5, titre: 'Conformite et accessibilite', duree: '20–45 min', bloom: 'Evaluer (5)', points: ['Loi 25 et gouvernance', 'WCAG 2.1 AA et sous-titrage', 'Checklist de livraison responsable'] },
      { num: 6, titre: 'Quiz final — Visionnaire & multimodal', duree: '30 min', bloom: 'Creer (6)', points: ['Questions de validation', 'Schema d architecture complet', 'Synthese transferable'] },
    ],
  },
  '2': {
    titre: 'IA Responsable & Loi 25',
    sousTitre: 'Conformite & gouvernance mondiale de l IA',
    code: 'BTA-IARG-002',
    uec: 0.7,
    bloom: '2→5',
    duree: '7 heures',
    description:
      'Comprenez les obligations de conformite, les cadres reglementaires mondiaux et les preuves attendues pour deployer des solutions IA en contexte institutionnel et entreprise.',
    modules: [
      { num: 1, titre: 'Loi 25 — Principes fondamentaux au Quebec', duree: '1h30', bloom: 'Comprendre (2)', points: ['Consentement explicite et gouvernance', 'Responsable de la protection des renseignements personnels', 'Evaluation formative'] },
      { num: 2, titre: 'RGPD & equivalences mondiales', duree: '1h30', bloom: 'Comprendre (2)', points: ['RGPD, UK-GDPR, LGPD et extraterritorialite', 'Lecture comparative des obligations', 'Reperes pour enseignement et operations'] },
      { num: 3, titre: 'AI Act UE — Classification des risques', duree: '1h30', bloom: 'Analyser (4)', points: ['Niveaux de risque et obligations', 'Traceabilite, registre et conformite', 'Applications concretes pour les usages IA'] },
      { num: 4, titre: 'Deploiement cloud conforme — Privacy by Design', duree: '1h30', bloom: 'Analyser (4)', points: ['Cloud Run Montreal et securite', 'Secret Manager, chiffrement et journalisation', 'Architecture responsable'] },
      { num: 5, titre: 'Quiz final et validation', duree: '1h00', bloom: 'Evaluer (5)', points: ['Checklist, preuves et synthese', 'Quiz final avec seuil', 'Attestation et archivage pedagogique'] },
    ],
  },
  '3': {
    titre: 'Productivite Agentique',
    sousTitre: 'Prompt Engineering P.T.C.F. & automatisation cloud',
    code: 'BTA-PA-001',
    uec: 0.6,
    bloom: '3→6',
    duree: '6 heures',
    description:
      'Maitrisez la methode P.T.C.F. pour rediger des prompts structurés, integrez Gemini dans Google Workspace et automatisez vos flux avec Apps Script et Cloud Run.',
    modules: [
      { num: 1, titre: 'Prompt Engineering P.T.C.F.', duree: '2h30', bloom: 'Appliquer (3)', points: ['Persona · Tache · Contexte · Format', 'Atelier meta-prompting Gemini Advanced', 'Transformer un prompt faible en prompt puissant'] },
      { num: 2, titre: 'Google Workspace for Education', duree: '1h30', bloom: 'Utiliser (3)', points: ['Gmail, Calendar, Sheets, Docs, Classroom, Vault', 'Conformite Loi 25 et collaboration', 'Cas d usage enseignants & administration'] },
      { num: 3, titre: 'Automatisation Cloud Native · Apps Script', duree: '2h00', bloom: 'Creer (6)', points: ['Cloud Run vs automatisations no-code', 'Apps Script et securite', 'Pipeline automatise complet'] },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(FORMATIONS).map((slug) => ({ slug }))
}

export default function FormationSlugPage({ params }: { params: { slug: string } }) {
  const formation = FORMATIONS[params.slug]

  if (!formation) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="mb-4 text-6xl">🔍</div>
          <h1 className="mb-4 text-2xl font-black">Formation introuvable</h1>
          <p className="mb-8 text-sm text-gray-500">La formation demandee n existe pas ou n est pas encore disponible.</p>
          <Link href="/formations" className="btn-gold">← Toutes les formations</Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <Link href="/formations" className="mb-6 inline-block text-sm text-gray-500 transition-colors hover:text-[#C9A84C]">
          ← Retour aux formations
        </Link>

        <div className="mb-3 flex flex-wrap gap-2">
          <span className="bloom-badge">{formation.code}</span>
          <span className="bloom-badge" style={{ background: '#000', color: '#C9A84C' }}>Bloom {formation.bloom} · {formation.uec} UEC</span>
          <span className="bloom-badge" style={{ background: '#1A7A4A', color: 'white' }}>{formation.duree}</span>
        </div>
        <h1 className="mb-1 text-3xl font-black tracking-tighter">{formation.titre}</h1>
        <p className="mb-4 text-sm font-bold text-[#C9A84C]">{formation.sousTitre}</p>
        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-gray-600">{formation.description}</p>

        <h2 className="mb-4 flex items-center gap-2 text-lg font-black tracking-tighter">
          <span className="inline-block h-5 w-1 bg-[#C9A84C]" />
          Plan de formation — {formation.modules.length} modules
        </h2>

        <div className="mb-12 space-y-3">
          {formation.modules.map((module) => (
            <div key={module.num} className="group rounded-lg border border-gray-200 p-5 transition-all hover:border-[#C9A84C]">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#C9A84C] text-sm font-black text-black">
                  {module.num}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="font-black text-gray-900 transition-colors group-hover:text-[#C9A84C]">{module.titre}</h3>
                    <span className="text-xs font-bold text-gray-400">{module.duree}</span>
                  </div>
                  <p className="mb-2 text-xs font-black text-[#C9A84C]">{module.bloom}</p>
                  <ul className="space-y-1">
                    {module.points.map((point) => (
                      <li key={point} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="mt-0.5 shrink-0 text-[#C9A84C]">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <QuizCard
          storageKey={`academy-formation-${params.slug}-quiz`}
          quizKey={`formation:${params.slug}`}
          title={`Quiz actif — ${formation.titre}`}
          description="Chaque parcours dispose maintenant d un quiz de validation rapide pour repetition, revision et verification de la comprehension avant ou apres evaluation formelle."
          questions={formationQuizzes[params.slug]}
        />

        <div className="mt-8 rounded-lg border-2 border-[#C9A84C] bg-black p-8 text-center">
          <p className="mb-2 text-xs font-black uppercase tracking-widest text-[#C9A84C]">Disponible avec le Bundle Quintessence IA</p>
          <h3 className="mb-2 text-xl font-black text-white">{formation.titre} · {formation.uec} UEC</h3>
          <p className="mb-6 text-sm text-gray-400">{formation.duree} · Bloom {formation.bloom} · Cloud Run Montreal · Google ecosystem</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Acces Bundle Quintessence — 399$ CAD
          </a>
        </div>
      </main>
    </>
  )
}
