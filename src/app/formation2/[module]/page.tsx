import Navbar from '@/components/Navbar'
import QuizCard from '@/components/QuizCard'
import { moduleQuizzes } from '@/lib/quiz-data'
import Link from 'next/link'

const MODULES: Record<string, { titre: string; duree: string; bloom: string; objectifs: string[]; contenu: string[]; preuves: string[] }> = {
  module1: {
    titre: 'Loi 25 — Principes fondamentaux au Quebec',
    duree: '1h30',
    bloom: 'Comprendre (2)',
    objectifs: ['Identifier les obligations cles de la Loi 25.', 'Comprendre les roles de gouvernance.', 'Situer les impacts concrets sur une organisation de formation.'],
    contenu: ['Consentement explicite, transparence et responsabilite organisationnelle.', 'Role du RPRP, registre d incidents et communication a la CAI.', 'Cas appliques au contexte pedagogique et aux plateformes numeriques.'],
    preuves: ['Quiz diagnostique.', 'Mini etude de cas guidee.', 'Trace de comprehension integree au parcours.'],
  },
  module2: {
    titre: 'RGPD & equivalences mondiales',
    duree: '1h30',
    bloom: 'Comprendre (2)',
    objectifs: ['Comparer Loi 25, RGPD, UK-GDPR et LGPD.', 'Reperer les obligations communes et les ecarts majeurs.', 'Construire une lecture de conformite multi-juridictionnelle.'],
    contenu: ['Tableau comparatif des bases legales, droits et obligations.', 'Autorites de controle, extraterritorialite et sanctions.', 'Cas d usage pour l enseignement, les donnees etudiantes et l IA.'],
    preuves: ['Tableau de comparaison.', 'Questionnaire d analyse.', 'Reponse courte sur un scenario international.'],
  },
  module3: {
    titre: 'AI Act UE — Classification par niveaux de risque',
    duree: '1h30',
    bloom: 'Analyser (4)',
    objectifs: ['Distinguer les niveaux de risque prevus par l AI Act.', 'Evaluer si un usage est a risque eleve ou limite.', 'Relier les obligations a un cas reel de solution IA.'],
    contenu: ['Risque inacceptable, eleve, limite et minimal.', 'Documentation, supervision humaine et obligations de registre.', 'Effets pratiques sur les agents IA et les plateformes de formation.'],
    preuves: ['Grille d analyse de risque.', 'Etude de cas commentee.', 'Synthese de conformite a remettre.'],
  },
  module4: {
    titre: 'Deploiement cloud conforme — Privacy by Design',
    duree: '1h30',
    bloom: 'Analyser (4)',
    objectifs: ['Structurer un deploiement cloud conforme.', 'Choisir les composants de securite et de journalisation adaptes.', 'Appliquer les principes Privacy by Design a une architecture cible.'],
    contenu: ['Cloud Run Montreal, chiffrement, gestion des secrets et IAM.', 'Journalisation, conservation des preuves et separation des acces.', 'Architecture de reference pour un parcours conforme et auditable.'],
    preuves: ['Schema d architecture commente.', 'Checklist de conformite.', 'Validation des controles essentiels.'],
  },
  module5: {
    titre: 'Quiz final et validation',
    duree: '1h00',
    bloom: 'Evaluer (5)',
    objectifs: ['Verifier la maitrise des notions cles du parcours.', 'Structurer les preuves attendues.', 'Preparer la delivrance de l attestation finale.'],
    contenu: ['Checklist de criteres, preuves visibles et conformite pedagogique.', 'Quiz final et seuil de reussite.', 'Preparation de l attestation et de l archivage.'],
    preuves: ['Quiz final.', 'Dossier de preuves.', 'Attestation finale.'],
  },
}

export function generateStaticParams() {
  return Object.keys(MODULES).map((module) => ({ module }))
}

export default function Formation2ModulePage({ params }: { params: { module: string } }) {
  const moduleData = MODULES[params.module]

  if (!moduleData) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-3xl font-black tracking-tight">Module introuvable</h1>
          <p className="mt-4 text-sm leading-7 text-neutral-600">Le module demande n est pas disponible pour le moment.</p>
          <Link href="/formation2" className="btn-gold mt-8 inline-flex">Retour a la formation</Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <Link href="/formation2" className="text-sm text-neutral-500 transition-colors hover:text-[#C9A84C]">← Retour a la formation 2</Link>

        <section className="dark-shell gold-grid mt-6">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Formation 2 · IA Responsable & Loi 25</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">{moduleData.titre}</h1>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-2 text-[#C9A84C]">{moduleData.bloom}</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-neutral-300">{moduleData.duree}</span>
          </div>
        </section>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <section className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Objectifs</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-neutral-700">
              {moduleData.objectifs.map((item) => (
                <li key={item} className="flex gap-2"><span className="text-[#C9A84C]">•</span><span>{item}</span></li>
              ))}
            </ul>
          </section>

          <section className="shell-card lg:col-span-2">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Contenu du module</p>
            <div className="mt-4 grid gap-3">
              {moduleData.contenu.map((item) => (
                <div key={item} className="soft-panel text-sm leading-7 text-neutral-700">{item}</div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 shell-card">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Preuves et evaluations</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {moduleData.preuves.map((item) => (
              <div key={item} className="soft-panel text-sm leading-7 text-neutral-700">{item}</div>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <QuizCard
            storageKey={`academy-module-${params.module}-quiz`}
            quizKey={`module:${params.module}`}
            title={`Quiz du module — ${moduleData.titre}`}
            description="Chaque module est maintenant accompagne d un quiz actif pour revision, repetition et verification locale des acquis avant le passage a la suite."
            questions={moduleQuizzes[params.module]}
          />
        </div>
      </main>
    </>
  )
}
