import Link from 'next/link'

const quickLinks = [
  { href: '/formations', label: 'Formations' },
  { href: '/espace/apprenant', label: 'Espace etudiants' },
  { href: '/espace/formateur', label: 'Espace professeurs' },
  { href: '/espace/etablissement', label: 'Espace etablissements' },
  { href: '/boutique-ia', label: 'Boutique IA' },
]

const trustSignals = [
  'Google for Education',
  'Gemini',
  'NVIDIA Inception',
  'Paiements locaux et internationaux',
]

export default function EnterpriseFooter() {
  return (
    <footer className="mt-16 border-t-2 border-[#C9A84C] bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Buttertech ecosystem</p>
          <h2 className="mt-3 text-2xl font-black tracking-tight">BUTTERTECH ACADEMY</h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-neutral-300">
            Plateforme de formation, d orchestration IA et de distribution d outils educatifs premium, avec une experience
            enterprise alignee sur Buttertech et Smith-Heffa Paygate.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#C9A84C]/30 bg-white/5 px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#C9A84C]"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Acces rapide</p>
          <div className="mt-4 grid gap-3 text-sm text-neutral-300">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-[#C9A84C]">
                {item.label}
              </Link>
            ))}
            <a
              href="https://aistudio-smith-heffa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C9A84C]"
            >
              AI Studio
            </a>
            <a
              href="https://smith-heffa-paygate.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#C9A84C]"
            >
              Smith-Heffa Paygate
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Operations</p>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-neutral-300">
            <p>Infrastructure academique, IA et parcours pedagogiques sur une base claire, auditable et lisible.</p>
            <p>Paiements prevus pour mobile money, cartes, virement et distribution locale des outils IA mondiaux.</p>
            <a
              href="https://smith-heffa-paygate.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2 inline-flex w-fit"
            >
              Ouvrir le paiement
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-[10px] font-black uppercase tracking-[0.18em] text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Buttertech Inc. · Buttertech Academy</div>
          <div className="flex flex-wrap gap-4">
            <span>Confidentialite · Loi 25</span>
            <span>Google partner ecosystem</span>
            <span>Montreal · Cloud native</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
