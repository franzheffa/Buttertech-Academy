import Navbar from '@/components/Navbar'
import PartnerStrip from '@/components/PartnerStrip'
import { goToMarketData } from '@/lib/academy-data'

export default function GoToMarketPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className="dark-shell gold-grid">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Partner marketing control tower</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            {goToMarketData.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300 sm:text-base">
            {goToMarketData.hero.subtitle}
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {goToMarketData.pillars.map((pillar) => (
            <article key={pillar.title} className="shell-card">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Pillar</p>
              <h2 className="mt-3 text-2xl font-black tracking-tight">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{pillar.text}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {goToMarketData.kpis.map((kpi) => (
            <article key={kpi.label} className="kpi-tile">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{kpi.label}</p>
              <p className="mt-4 text-4xl font-black tracking-tight">{kpi.value}</p>
              <p className="mt-3 text-sm text-neutral-500">{kpi.trend}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Motions prioritaires</p>
            <div className="mt-4 space-y-4">
              {goToMarketData.motions.map((motion) => (
                <article key={motion.name} className="soft-panel">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-black tracking-tight">{motion.name}</h2>
                    <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{motion.stage}</span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-neutral-500">{motion.owner}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{motion.detail}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Monitoring vivant</p>
            <div className="mt-4 grid gap-3">
              {goToMarketData.monitoring.map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Campaigns</p>
            <div className="mt-4 space-y-4">
              {goToMarketData.campaigns.map((campaign) => (
                <article key={campaign.name} className="rounded-[1.5rem] border border-black/10 bg-[#fffaf0] p-5">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="text-xl font-black tracking-tight">{campaign.name}</h2>
                    <span className="rounded-full border border-[#C9A84C]/40 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#7a5c12]">
                      {campaign.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-neutral-500">{campaign.channel}</p>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{campaign.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Operational stack</p>
            <div className="mt-4 grid gap-4">
              {[
                ['Acquisition', 'Landing pages, partner proof, academy offers, enterprise demos'],
                ['Activation', 'Onboarding mobile first, learner cockpit, teacher orchestration, agent support'],
                ['Expansion', 'Viize parking motion, security trust, Mandiant, Gemini Enterprise enterprise upsell'],
                ['Proof', 'KPI board, satisfaction, completion, attestations, compliance evidence'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h3 className="text-lg font-black tracking-tight text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PartnerStrip />
      </main>
    </>
  )
}
