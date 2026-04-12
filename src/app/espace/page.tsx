'use client'

import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function EspacePage() {
  const spaces = [
    {
      title: 'Espace etudiants',
      href: '/espace/apprenant',
      description: 'Progression, blocs de cours, modalites synchro et asynchro, quiz, packs IA et attestations.',
      cta: 'Ouvrir mon cockpit',
      emoji: '🎓',
    },
    {
      title: 'Espace professeurs',
      href: '/espace/formateur',
      description: 'Analyse prealable, macrodesign, delivery de cohortes, preuves pedagogiques et suivi qualite.',
      cta: 'Piloter mes cohortes',
      emoji: '🧑‍🏫',
    },
    {
      title: 'Espace etablissements',
      href: '/espace/etablissement',
      description: 'Licences campus, bundles IA, gouvernance, achats et pilotage multi-cohortes.',
      cta: 'Voir les offres campus',
      emoji: '🏫',
    },
    {
      title: 'AI Studio',
      href: 'https://aistudio-smith-heffa.vercel.app',
      description: 'Studio IA separe pour workflows, orchestration et experimentation multimodale.',
      cta: 'Ouvrir AI Studio',
      external: true,
      emoji: '🧠',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="dark-shell">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Buttertech Academy</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Espace Academy</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
            Un hub simple pour les experiences etudiantes, professorales et institutionnelles, avec une boucle fermee entre
            apprentissage, outils IA, productivite et paiement.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-lg border-2 border-[#C9A84C] bg-black p-6 text-center">
            <div className="text-4xl font-black text-[#C9A84C]">4</div>
            <div className="mt-2 text-xs font-black uppercase tracking-widest text-gray-400">Lanes Academy</div>
          </div>
          <div className="kpi-tile text-center">
            <div className="text-4xl font-black">15</div>
            <div className="mt-2 text-xs font-black uppercase tracking-widest text-gray-400">Seances pedagogiques</div>
          </div>
          <div className="kpi-tile text-center">
            <div className="text-4xl font-black">3</div>
            <div className="mt-2 text-xs font-black uppercase tracking-widest text-gray-400">Parcours IA</div>
          </div>
          <div className="kpi-tile text-center">
            <div className="text-4xl font-black">24/7</div>
            <div className="mt-2 text-xs font-black uppercase tracking-widest text-gray-400">Support IA</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {spaces.map((space) => (
            <article key={space.title} className="shell-card flex flex-col">
              <div className="text-3xl">{space.emoji}</div>
              <p className="mt-4 text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Academy lane</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">{space.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{space.description}</p>
              {space.external ? (
                <a href={space.href} target="_blank" rel="noopener noreferrer" className="mt-6 btn-black text-center">
                  {space.cta}
                </a>
              ) : (
                <Link href={space.href} className="mt-6 btn-black text-center">
                  {space.cta}
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/formation2" className="btn-gold">Commencer Formation 2 →</Link>
          <Link href="/boutique-ia" className="btn-black">Boutique IA</Link>
          <Link href="/attestation" className="btn-black">Attestation</Link>
        </div>
      </main>
    </>
  )
}
