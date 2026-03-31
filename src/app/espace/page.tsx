'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function EspacePage() {
  const spaces = [
    {
      title: 'Espace apprenant',
      href: '/espace/apprenant',
      description: 'Progression, blocs de cours, modalites synchro et asynchro, evaluations et attestations.',
      cta: 'Ouvrir mon cockpit',
    },
    {
      title: 'Espace formateur',
      href: '/espace/formateur',
      description: 'Analyse prealable, macrodesign, delivery de cohortes, preuves pedagogiques et suivi qualite.',
      cta: 'Piloter mes cohortes',
    },
    {
      title: 'Control tower go to market',
      href: '/go-to-market',
      description: 'KPIs, ecosysteme partenaire, campagnes, offers et narration vivante des plateformes.',
      cta: 'Voir les KPIs',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="dark-shell">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Academy operating system</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Espace Academy</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
            Un hub unique pour les experiences apprenant, formateur et go to market. Tout est pense pour la lecture mobile,
            la montee en gamme enterprise et la preuve de qualite pedagogique.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="bg-black border-2 border-[#C9A84C] rounded-lg p-6 text-center">
            <div className="text-4xl font-black text-[#C9A84C]">3</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Espaces strategiques</div>
          </div>
          <div className="kpi-tile text-center">
            <div className="text-4xl font-black">15</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Seances pedagogiques</div>
          </div>
          <div className="kpi-tile text-center">
            <div className="text-4xl font-black">4</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Piliers SOFEDUC</div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {spaces.map((space) => (
            <article key={space.title} className="shell-card flex flex-col">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Academy lane</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">{space.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-neutral-600">{space.description}</p>
              <Link href={space.href} className="mt-6 btn-black text-center">
                {space.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex gap-3 flex-wrap">
          <Link href="/formation2" className="btn-gold">Commencer Formation 2 →</Link>
          <Link href="/sondage" className="btn-black">Sondage SOFEDUC</Link>
          <Link href="/attestation" className="btn-black">Attestation</Link>
        </div>
      </main>
    </>
  )
}
