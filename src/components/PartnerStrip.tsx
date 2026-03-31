import { partnerLogos, partnerPlacements } from '@/lib/academy-data'

type PartnerStripProps = {
  variant?: 'light' | 'dark'
}

export default function PartnerStrip({ variant = 'light' }: PartnerStripProps) {
  const dark = variant === 'dark'

  return (
    <section
      className={`rounded-[2rem] border px-4 py-5 sm:px-6 sm:py-6 ${
        dark ? 'border-[#C9A84C]/40 bg-[#050505] text-white' : 'border-[#C9A84C]/20 bg-[#fffaf0] text-black'
      }`}
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Partner ecosystem</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            Repartition des logos et solutions partenaires
          </h2>
        </div>
        <p className={`max-w-xl text-sm leading-6 ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>
          Les logos web disponibles sont affiches directement. Les autres lockups fournis en source kit sont archives dans le repo
          pour insertion progressive sur les surfaces produit et marketing.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {['Google for Education', 'Gemini Enterprise', 'Google Workspace for Education', 'Maps Platform', 'Trust'].map((badge) => (
          <span
            key={badge}
            className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] ${
              dark ? 'border-[#C9A84C]/40 text-[#f3d27a]' : 'border-[#C9A84C]/40 text-[#7a5c12]'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_1fr]">
        <div className="grid gap-4">
          {partnerPlacements.map((placement) => (
            <article
              key={placement.title}
              className={`rounded-[1.5rem] border p-5 ${
                dark ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-white'
              }`}
            >
              <h3 className="text-lg font-black tracking-tight">{placement.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${dark ? 'text-neutral-300' : 'text-neutral-600'}`}>{placement.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {placement.badges.map((badge) => (
                  <span
                    key={badge}
                    className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${
                      dark ? 'border-[#C9A84C]/50 text-[#f3d27a]' : 'border-[#C9A84C]/40 text-[#7a5c12]'
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-4">
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              className={`rounded-[1.5rem] border p-5 ${dark ? 'border-white/10 bg-white' : 'border-black/10 bg-white'}`}
            >
              <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{logo.category}</p>
              <div className="flex min-h-[120px] items-center justify-center rounded-[1rem] border border-dashed border-[#C9A84C]/30 bg-white p-4">
                <img src={logo.src} alt={logo.alt} className="max-h-20 w-auto object-contain sm:max-h-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
