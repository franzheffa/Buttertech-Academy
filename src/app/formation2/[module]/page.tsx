import Navbar from '@/components/Navbar'
import Link from 'next/link'

const MODULES: Record<string, {
  titre: string
  duree: string
  bloom: string
  objectifs: string[]
  contenu: string[]
  preuves: string[]
}> = {
  module1: {
    titre: 'Loi 25 — Principes Fondamentaux au Québec',
    duree: '1h30',
    bloom: 'COMPRENDRE (2)',
    objectifs: [
      'Identifier les obligations clés de la Loi 25.',
      'Comprendre les rôles de gouvernance et de protection des renseignements personnels.',
      'Situer les impacts concrets sur une organisation de formation.',
    ],
    contenu: [
      'Consentement explicite, transparence et responsabilité organisationnelle.',
      'Rôle du RPRP, registre d’incidents et communication à la CAI.',
      'Cas appliqués au contexte pédagogique et aux plateformes numériques.',
    ],
    preuves: [
      'Quiz diagnostique.',
      'Mini étude de cas guidée.',
      'Trace de compréhension intégrée au parcours.',
    ],
  },
  module2: {
    titre: 'RGPD & Équivalences Mondiales',
    duree: '1h30',
    bloom: 'COMPRENDRE (2)',
    objectifs: [
      'Comparer Loi 25, RGPD, UK-GDPR et LGPD.',
      'Repérer les obligations communes et les écarts majeurs.',
      'Construire une lecture de conformité multi-juridictionnelle.',
    ],
    contenu: [
      'Tableau comparatif des bases légales, droits et obligations.',
      'Autorités de contrôle, extraterritorialité et sanctions.',
      'Cas d’usage pour l’enseignement, les données étudiantes et l’IA.',
    ],
    preuves: [
      'Tableau de comparaison.',
      'Questionnaire d’analyse.',
      'Réponse courte sur un scénario international.',
    ],
  },
  module3: {
    titre: 'AI Act UE — Classification par Niveaux de Risque',
    duree: '1h30',
    bloom: 'ANALYSER (4)',
    objectifs: [
      'Distinguer les niveaux de risque prévus par l’AI Act.',
      'Évaluer si un usage est à risque élevé ou limité.',
      'Relier les obligations à un cas réel de solution IA.',
    ],
    contenu: [
      'Risque inacceptable, élevé, limité et minimal.',
      'Documentation, supervision humaine et obligations de registre.',
      'Effets pratiques sur les agents IA et les plateformes de formation.',
    ],
    preuves: [
      'Grille d’analyse de risque.',
      'Étude de cas commentée.',
      'Synthèse de conformité à remettre.',
    ],
  },
  module4: {
    titre: 'Déploiement Cloud Conforme — Privacy by Design',
    duree: '1h30',
    bloom: 'ANALYSER (4)',
    objectifs: [
      'Structurer un déploiement cloud conforme.',
      'Choisir les composants de sécurité et de journalisation adaptés.',
      'Appliquer les principes Privacy by Design à une architecture cible.',
    ],
    contenu: [
      'Cloud Run Montréal, chiffrement, gestion des secrets et IAM.',
      'Journalisation, conservation des preuves et séparation des accès.',
      'Architecture de référence pour un parcours conforme et auditable.',
    ],
    preuves: [
      'Schéma d’architecture commenté.',
      'Checklist de conformité.',
      'Validation des contrôles essentiels.',
    ],
  },
  module5: {
    titre: 'Audit SOFEDUC & Certification — Quiz Final',
    duree: '1h00',
    bloom: 'ÉVALUER (5)',
    objectifs: [
      'Vérifier la maîtrise des notions clés du parcours.',
      'Structurer les preuves d’audit attendues.',
      'Préparer la délivrance de l’attestation finale.',
    ],
    contenu: [
      'Checklist de critères, preuves visibles et conformité pédagogique.',
      'Quiz final et seuil de réussite.',
      'Préparation de l’attestation et de l’archivage.',
    ],
    preuves: [
      'Quiz final.',
      'Dossier de preuves.',
      'Attestation finale.',
    ],
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
          <p className="mt-4 text-sm leading-7 text-neutral-600">
            Le module demandé n’est pas disponible pour le moment.
          </p>
          <Link href="/formation2" className="btn-gold mt-8 inline-flex">
            Retour à la formation
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <Link href="/formation2" className="text-sm text-neutral-500 transition-colors hover:text-[#C9A84C]">
          ← Retour à la formation 2
        </Link>

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
                <li key={item} className="flex gap-2">
                  <span className="text-[#C9A84C]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="shell-card lg:col-span-2">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Contenu du module</p>
            <div className="mt-4 grid gap-3">
              {moduleData.contenu.map((item) => (
                <div key={item} className="soft-panel text-sm leading-7 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 shell-card">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Preuves et évaluations</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {moduleData.preuves.map((item) => (
              <div key={item} className="soft-panel text-sm leading-7 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
