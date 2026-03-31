import Navbar from '@/components/Navbar'
import PartnerStrip from '@/components/PartnerStrip'
import { teacherJourney } from '@/lib/academy-data'
import Link from 'next/link'

export default function EspaceFormateurPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className="shell-card">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Analyse prealable et macrodesign</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">{teacherJourney.hero.title}</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                {teacherJourney.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/go-to-market" className="btn-gold">Piloter le go to market</Link>
                <Link href="/sondage" className="btn-black">Suivre la satisfaction</Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#C9A84C]/20 bg-[#fffaf0] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Cadence de session</p>
              <div className="mt-4 space-y-4">
                {teacherJourney.sessionMatrix.map((workflow) => (
                  <div key={workflow.session} className="rounded-2xl border border-black/10 bg-white p-4">
                    <p className="text-sm font-black text-black">Seances {workflow.session}</p>
                    <p className="mt-2 text-sm font-semibold text-[#7a5c12]">{workflow.mode}</p>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">{workflow.outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {teacherJourney.metrics.map((metric) => (
            <article key={metric.label} className="dark-shell">
              <p className="text-4xl font-black tracking-tight text-white">{metric.value}</p>
              <p className="mt-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{metric.label}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-300">{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {teacherJourney.complianceChecklist.map((feature) => (
            <article key={feature.title} className="shell-card">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Formateur</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{feature.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Methodes et evaluation</p>
            <div className="mt-4 grid gap-3">
              {teacherJourney.teachingMethods.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-black/10 bg-[#fffaf0] px-4 py-4 text-sm leading-6 text-neutral-700">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <article className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Pieces de conformite</p>
            <div className="mt-4 space-y-3">
              {teacherJourney.evidenceBoard.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="shell-card">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Workflow de delivery</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {teacherJourney.workflows.map((workflow) => (
              <article key={workflow.name} className="rounded-[1.5rem] border border-black/10 bg-white p-5">
                <h2 className="text-xl font-black tracking-tight">{workflow.name}</h2>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
                  {workflow.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#C9A84C]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <PartnerStrip variant="dark" />
      </main>
    </>
  )
}
