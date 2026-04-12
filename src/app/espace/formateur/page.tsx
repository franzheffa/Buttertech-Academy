import Navbar from '@/components/Navbar'
import PartnerProofBar from '@/components/PartnerProofBar'
import { teacherJourney } from '@/lib/academy-data'
import Link from 'next/link'

const facultyTools = [
  { emoji: '📚', title: 'Pilotage des cohortes', text: 'Vision seance, progression, depots, feedback et relances depuis une surface unique.' },
  { emoji: '🧪', title: 'Quiz et preuves', text: 'Activer des quiz, verifier les blocs et conserver une trace lisible des evaluations.' },
  { emoji: '🤝', title: 'Lien campus', text: 'Coordonner l adoption avec l administration, les licences et les offres institutionnelles.' },
]

export default function EspaceFormateurPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className="shell-card">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Analyse prealable et macrodesign</p>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-black sm:text-5xl">Espace professeurs et delivery</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">{teacherJourney.hero.subtitle}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/simulateur" className="btn-gold">Ouvrir le simulateur IA</Link>
                <Link href="/espace/etablissement" className="btn-black">Coordonner avec l etablissement</Link>
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

        <PartnerProofBar emphasis="academy" />

        <section className="grid gap-4 md:grid-cols-3">
          {facultyTools.map((item) => (
            <article key={item.title} className="shell-card">
              <div className="text-3xl">{item.emoji}</div>
              <h2 className="mt-4 text-xl font-black tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {teacherJourney.cockpit.map((metric) => (
            <article key={metric.label} className="kpi-tile">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{metric.label}</p>
              <p className="mt-4 text-4xl font-black tracking-tight">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-neutral-600">{metric.detail}</p>
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

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Cockpit de session</p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {teacherJourney.liveOps.map((workflow) => (
                <article key={workflow.title} className="soft-panel">
                  <h2 className="text-xl font-black tracking-tight">{workflow.title}</h2>
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
          </article>

          <article className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Alertes de cohorte</p>
            <div className="mt-4 space-y-3">
              {teacherJourney.cohortAlerts.map((alert) => (
                <div key={alert.learner} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-lg font-black tracking-tight text-white">{alert.learner}</h2>
                    <span className="status-pill border-[#C9A84C]/40 text-[#f3d27a]">A traiter</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-neutral-300">{alert.issue}</p>
                  <p className="mt-3 text-[11px] font-black uppercase tracking-[0.18em] text-neutral-400">{alert.action}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
