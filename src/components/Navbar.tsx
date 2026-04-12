'use client'

import Link from 'next/link'

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/formations', label: 'Formations' },
  { href: '/espace', label: 'Espace' },
  { href: '/espace/apprenant', label: 'Etudiants' },
  { href: '/espace/formateur', label: 'Professeurs' },
  { href: '/espace/etablissement', label: 'Etablissements' },
  { href: '/boutique-ia', label: 'Boutique IA' },
  { href: '/simulateur', label: 'Simulateur IA' },
]

export default function Navbar() {
  return (
    <>
      <div className="no-print border-b border-[#C9A84C] bg-black px-4 py-2 text-center text-[9px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">
        BUTTERTECH ACADEMY · GOOGLE FOR EDUCATION · GEMINI · NVIDIA INCEPTION · PAIEMENTS LOCAUX
      </div>

      <nav className="no-print sticky top-0 z-40 border-b border-[#C9A84C]/70 bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl font-black text-[#C9A84C]">B</div>
              <div>
                <div className="text-lg font-black leading-none tracking-tighter">BUTTERTECH</div>
                <div className="text-[10px] font-black tracking-widest text-[#C9A84C]">ACADEMY</div>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://aistudio-smith-heffa.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-black text-[10px]"
              >
                AI Studio
              </a>
              <a
                href="https://smith-heffa-paygate.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-[10px]"
              >
                Payer / S inscrire
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#C9A84C]/20 pt-3 text-[11px] font-black uppercase tracking-[0.16em] text-neutral-600">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-[#C9A84C]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
