import Navbar from '@/components/Navbar'
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
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Espace Étudiants SOFEDUC</h1>
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

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="shell-card">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Calendrier de formation</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight">Synchrone, coaching et flux asynchrone</h2>
              </div>
              <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">Mobile first</span>
            </div>
            <div className="mt-5 grid gap-4">
              {studentJourney.liveSchedule.map((item) => (
                <div key={item.slot} className="rounded-[1.25rem] border border-black/10 bg-[#fffaf0] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-lg font-black tracking-tight">{item.slot}</p>
                    <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{item.type}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{item.topic}</p>
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-neutral-500">{item.status}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Travaux et remises</p>
            <div className="mt-4 space-y-3">
              {studentJourney.submissions.map((item) => (
                <div key={item.item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-black tracking-tight text-white">{item.item}</h2>
                    <span
                      className={`status-pill ${
                        item.tone === 'done'
                          ? 'border-emerald-400/30 text-emerald-300'
                          : item.tone === 'review'
                            ? 'border-sky-400/30 text-sky-300'
                            : item.tone === 'progress'
                              ? 'border-[#C9A84C]/40 text-[#f3d27a]'
                              : 'border-rose-400/30 text-rose-300'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-neutral-400">{item.due}</p>
                </div>
              ))}
            </div>
          </article>
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

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Progression par bloc</p>
            <div className="mt-4 space-y-4">
              {studentJourney.progression.map((item) => (
                <div key={item.label} className="rounded-[1.25rem] border border-black/10 bg-white p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-black tracking-tight">{item.label}</h2>
                    <span className="text-lg font-black text-[#7a5c12]">{item.value}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-[#f5ead0]">
                    <div className="h-2 rounded-full bg-[#C9A84C]" style={{ width: item.value }} />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Attestations et badges</p>
            <div className="mt-4 space-y-4">
              {studentJourney.attestationStack.map((item) => (
                <div key={item.title} className="soft-panel">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-black tracking-tight">{item.title}</h2>
                    <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{item.state}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

      </main>
    </>
  )
}
