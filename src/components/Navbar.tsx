'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      {/* Barre SOFEDUC */}
      <div className="bg-black text-[#C9A84C] text-[10px] py-2 text-center font-black tracking-[0.3em] uppercase border-b-2 border-[#C9A84C] no-print">
        BUTTERTECH ACADEMY · SOFEDUC AGRÉÉ · NVIDIA INCEPTION · GOOGLE FOR EDUCATION · LOI 25 · SOC2 TYPE II
      </div>

      {/* Nav principale */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#C9A84C] no-print">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-black flex items-center justify-center text-[#C9A84C] font-black text-xl">B</div>
            <div>
              <div className="font-black text-lg leading-none tracking-tighter">BUTTERTECH</div>
              <div className="text-[10px] font-black tracking-widest text-[#C9A84C]">ACADEMY</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-[10px] font-black uppercase tracking-widest">
            <Link href="/" className="text-gray-500 hover:text-[#C9A84C] transition-colors">Accueil</Link>
            <Link href="/formations" className="text-gray-500 hover:text-[#C9A84C] transition-colors">Formations</Link>
            <Link href="/simulateur" className="text-gray-500 hover:text-[#C9A84C] transition-colors">Simulateur IA</Link>
            <Link href="/espace" className="text-gray-500 hover:text-[#C9A84C] transition-colors">Mon Espace</Link>
          </div>

          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold text-[10px]">
            399$ · S'inscrire
          </a>
        </div>
      </nav>
    </>
  )
}
