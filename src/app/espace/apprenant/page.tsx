import Navbar from '@/components/Navbar'
import PartnerStrip from '@/components/PartnerStrip'
import { studentJourney } from '@/lib/academy-data'
import Link from 'next/link'

export default function EspaceApprenantPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className="dark-shell gold-grid overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Parcours synchrone et asynchrone</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">{studentJourney.hero.title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300 sm:text-base">
                {studentJourney.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/formations" className="btn-gold">Explorer les formations</Link>
                <Link href="/attestation" className="btn-black">Voir mes attestations</Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#C9A84C]/30 bg-white/[0.04] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Demarche d apprentissage</p>
              <div className="mt-4 space-y-4">
                {studentJourney.weeklyFlow.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <p className="text-sm font-black text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {studentJourney.metrics.map((metric) => (
            <article key={metric.label} className="kpi-tile">
              <p className="text-4xl font-black tracking-tight text-black">{metric.value}</p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{metric.label}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {studentJourney.learningBlocks.map((feature) => (
            <article key={feature.title} className="shell-card">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{feature.hours}</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{feature.objectives}</p>
              <div className="mt-4 grid gap-3 rounded-[1.25rem] border border-black/10 bg-[#fffaf0] p-4 text-sm text-neutral-700">
                <p><span className="font-black text-black">Taxonomie:</span> {feature.taxonomy}</p>
                <p><span className="font-black text-black">Methodes:</span> {feature.methods}</p>
                <p><span className="font-black text-black">Evaluation:</span> {feature.evaluation}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Trajectoire evaluative</p>
            <div className="mt-4 space-y-4">
              {studentJourney.evaluations.map((evaluation) => (
                <div key={evaluation.name} className="rounded-[1.25rem] border border-black/10 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-black tracking-tight">{evaluation.name}</h2>
                    <span className="rounded-full border border-[#C9A84C]/40 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#7a5c12]">
                      {evaluation.weight}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{evaluation.format}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Preuves visibles</p>
            <div className="mt-4 space-y-3">
              {studentJourney.evidenceBoard.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <PartnerStrip />
      </main>
    </>
  )
}
