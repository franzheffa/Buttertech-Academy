type PartnerProofBarProps = {
  variant?: 'light' | 'dark'
  emphasis?: 'academy' | 'simulateur'
}

const academyLogos = [
  { src: '/partners/google-for-education.svg', alt: 'Google for Education', className: 'max-h-10 sm:max-h-12' },
  { src: '/partners/google-for-education-partner-horizontal-wide.png', alt: 'Google for Education Partner', className: 'max-h-12 sm:max-h-14' },
  { src: '/partners/google-workspace-for-education-color.png', alt: 'Google Workspace for Education', className: 'max-h-12 sm:max-h-14' },
]

const simulatorLogos = [
  { src: '/partners/google-workspace-gemini.png', alt: 'Google Workspace with Gemini', className: 'max-h-14 sm:max-h-16' },
  { src: '/partners/google-cloud.svg', alt: 'Google Cloud', className: 'max-h-10 sm:max-h-12' },
  { src: '/partners/google-secops.svg', alt: 'Google Security Operations', className: 'max-h-10 sm:max-h-12' },
]

export default function PartnerProofBar({ variant = 'light', emphasis = 'academy' }: PartnerProofBarProps) {
  const dark = variant === 'dark'
  const logos = emphasis === 'simulateur' ? simulatorLogos : academyLogos

  return (
    <section
      className={`rounded-[1.75rem] border px-4 py-5 sm:px-6 ${
        dark ? 'border-[#C9A84C]/25 bg-[#050505] text-white' : 'border-[#C9A84C]/20 bg-white text-black'
      }`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">
            {emphasis === 'simulateur' ? 'Écosystème IA' : 'Écosystème Academy'}
          </p>
          <h2 className="mt-2 text-xl font-black tracking-tight sm:text-2xl">
            {emphasis === 'simulateur'
              ? 'Google Workspace with Gemini, Google Cloud et sécurité opérationnelle'
              : 'Google for Education, Google Workspace for Education et preuve partenaire'}
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[52%]">
          {logos.map((logo) => (
            <div
              key={logo.alt}
              className={`flex min-h-[96px] items-center justify-center rounded-[1.25rem] border p-4 ${
                dark ? 'border-white/10 bg-white' : 'border-black/10 bg-[#fffaf0]'
              }`}
            >
              <img src={logo.src} alt={logo.alt} className={`${logo.className} w-auto object-contain`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
