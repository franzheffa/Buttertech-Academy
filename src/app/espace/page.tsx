'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function EspacePage() {
  const formations = [
    { num: 1, titre: 'Agents IA Gemini 3.0', code: 'BTA-AGENTS-001', uec: 0.6, total: 6, done: 0, href: '/formations/1' },
    { num: 2, titre: 'IA Responsable & Loi 25', code: 'BTA-IARG-002', uec: 0.7, total: 5, done: 0, href: '/formation2', featured: true },
    { num: 3, titre: 'Productivité Agentique', code: 'BTA-PA-001', uec: 0.6, total: 3, done: 0, href: '/formations/3' },
  ]

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black tracking-tighter mb-2">Mon Espace Apprenant</h1>
        <p className="text-gray-500 text-sm mb-10">Progression SOFEDUC · Attestations · Sondage · Archivage 7 ans · Loi 25</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-black border-2 border-[#C9A84C] rounded-lg p-6 text-center">
            <div className="text-4xl font-black text-[#C9A84C]">0.0</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">UEC obtenues</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl font-black">0</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Modules complétés</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl font-black">0/3</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Formations finalisées</div>
          </div>
        </div>

        {/* Formations */}
        <div className="space-y-3 mb-10">
          {formations.map((f) => (
            <div key={f.num} className={`border-2 rounded-lg p-5 ${f.featured ? 'border-[#C9A84C]' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="bloom-badge">Formation {f.num}</span>
                  <span className="font-bold text-sm">{f.titre}</span>
                  <span className="text-xs text-gray-400">{f.code}</span>
                </div>
                <span className="text-xs text-gray-500 font-bold">0%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-[#C9A84C] rounded-full" style={{width:'0%'}} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">0 / {f.total} modules · {f.uec} UEC</span>
                <Link href={f.href} className="text-xs font-black text-[#C9A84C] hover:underline uppercase tracking-widest">
                  Commencer →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          <Link href="/formation2" className="btn-gold">Commencer Formation 2 →</Link>
          <Link href="/sondage" className="btn-black">📋 Sondage SOFEDUC</Link>
          <Link href="/attestation" className="btn-black">🏛️ Attestation</Link>
        </div>
      </main>
    </>
  )
}
