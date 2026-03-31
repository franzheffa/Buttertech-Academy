'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Barre SOFEDUC */}
      <div className="bg-black px-4 py-2 text-center text-[10px] font-black uppercase tracking-[0.28em] text-[#C9A84C] border-b border-[#C9A84C] no-print">
        BUTTERTECH ACADEMY · SOFEDUC AGRÉÉ · NVIDIA INCEPTION · GOOGLE FOR EDUCATION · GEMINI ENTERPRISE
      </div>

      {/* Nav principale */}
      <nav className="sticky top-0 z-50 border-b border-[#C9A84C] bg-white/95 backdrop-blur no-print">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-xl font-black text-[#C9A84C]">B</div>
              <div>
                <div className="font-black text-lg leading-none tracking-tighter">BUTTERTECH</div>
                <div className="text-[10px] font-black tracking-widest text-[#C9A84C]">ACADEMY</div>
              </div>
            </Link>

            <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold text-[10px]">
              399$ · S'inscrire
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-[11px] font-black uppercase tracking-[0.16em] text-neutral-600">
            <Link href="/" className="hover:text-[#C9A84C] transition-colors">Accueil</Link>
            <Link href="/formations" className="hover:text-[#C9A84C] transition-colors">Formations</Link>
            <Link href="/espace" className="hover:text-[#C9A84C] transition-colors">Espace</Link>
            <Link href="/espace/apprenant" className="hover:text-[#C9A84C] transition-colors">Apprenant</Link>
            <Link href="/espace/formateur" className="hover:text-[#C9A84C] transition-colors">Formateur</Link>
            <Link href="/go-to-market" className="hover:text-[#C9A84C] transition-colors">Go To Market</Link>
            <Link href="/simulateur" className="hover:text-[#C9A84C] transition-colors">Simulateur IA</Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-[#C9A84C]/30 bg-black px-3 py-3 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A84C]">Academy</p>
              <p className="mt-1 text-sm font-semibold">Google for Education</p>
            </div>
            <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#fffaf0] px-3 py-3">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A84C]">AI</p>
              <p className="mt-1 text-sm font-semibold">Gemini Enterprise</p>
            </div>
            <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#fffaf0] px-3 py-3">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A84C]">Productivite</p>
              <p className="mt-1 text-sm font-semibold">Workspace Education</p>
            </div>
            <div className="rounded-2xl border border-[#C9A84C]/30 bg-black px-3 py-3 text-white">
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A84C]">Enterprise</p>
              <p className="mt-1 text-sm font-semibold">Trust, Loi 25, SOC2</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
