'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function EspacePage() {
  const [progress] = useState({ f1: 0, f2: 0, f3: 0 })

  const formations = [
    { num: 1, titre: 'Agents IA Gemini 3.0', code: 'BTA-AGENTS-001', uec: 0.6, total: 6, done: progress.f1, href: '/formations/1' },
    { num: 2, titre: 'IA Responsable & Loi 25', code: 'BTA-IARG-002', uec: 0.7, total: 5, done: progress.f2, href: '/formation2', featured: true },
    { num: 3, titre: 'Productivité Agentique', code: 'BTA-PA-001', uec: 0.6, total: 3, done: progress.f3, href: '/formations/3' },
  ]

  const totalDone = progress.f1 + progress.f2 + progress.f3
  const totalModules = 14
  const totalUec = (
    (progress.f1 / 6) * 0.6 +
    (progress.f2 / 5) * 0.7 +
    (progress.f3 / 3) * 0.6
  ).toFixed(2)

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-black tracking-tighter mb-2">Mon Espace Apprenant</h1>
        <p className="text-gray-500 text-sm mb-10">Progression SOFEDUC · Attestations · Sondage d'évaluation · Archivage 7 ans</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-black border-2 border-[#C9A84C] rounded-lg p-6 text-center">
            <div className="text-4xl font-black text-[#C9A84C]">{totalUec}</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">UEC obtenues</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl font-black text-gray-900">{totalDone}</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Modules complétés</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-4xl font-black text-gray-900">{formations.filter(f => f.done === f.total && f.total > 0).length}/3</div>
            <div className="text-gray-400 text-xs font-black uppercase tracking-widest mt-2">Formations finalisées</div>
          </div>
        </div>

        {/* Progression formations */}
        <div className="space-y-3 mb-10">
          {formations.map((f) => {
            const pct = f.total > 0 ? Math.round((f.done / f.total) * 100) : 0
            return (
              <div key={f.num} className={`border-2 rounded-lg p-5 ${f.featured ? 'border-[#C9A84C]' : 'border-gray-200'}`}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="bloom-badge mr-2">Formation {f.num}</span>
                    <span className="font-bold text-sm text-gray-900">{f.titre}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-bold">{pct}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-[#C9A84C] rounded-full transition-all" style={{ width: `${pct}%` }} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{f.done} / {f.total} modules</span>
                  <Link href={f.href} className="text-xs font-black text-[#C9A84C] hover:underline uppercase tracking-widest">
                    {pct === 0 ? 'Commencer →' : pct === 100 ? 'Terminé ✓' : 'Continuer →'}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 flex-wrap">
          <Link href="/formation2" className="btn-gold">Reprendre Formation 2 →</Link>
          <Link href="/sondage" className="btn-black">📋 Sondage SOFEDUC</Link>
          <Link href="/attestation" className="btn-black">🏛️ Attestation</Link>
        </div>
      </main>
    </>
  )
}
