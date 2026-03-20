'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

export default function AttestationPage() {
  const [nom, setNom] = useState('[ Prénom NOM du Participant ]')
  const [editing, setEditing] = useState(false)
  const now = new Date().toLocaleDateString('fr-CA', {year:'numeric',month:'long',day:'numeric'})
  const num = `BTA-IARG-002-${Math.random().toString(36).slice(2,8).toUpperCase()}`

  return (
    <>
      <div className="no-print">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/espace" className="text-sm text-gray-500 hover:text-black">← Mon Espace</Link>
          <div className="flex gap-3">
            {!editing
              ? <button onClick={() => setEditing(true)} className="btn-black text-xs">✏️ Modifier le nom</button>
              : <button onClick={() => setEditing(false)} className="btn-gold text-xs">✓ Confirmer</button>
            }
            <button onClick={() => window.print()} className="btn-gold text-xs">🖨️ Imprimer / PDF</button>
          </div>
        </div>
        {editing && (
          <div className="max-w-3xl mx-auto px-6 pb-4">
            <input value={nom === '[ Prénom NOM du Participant ]' ? '' : nom}
              onChange={e => setNom(e.target.value || '[ Prénom NOM du Participant ]')}
              placeholder="Entrez votre nom complet"
              className="w-full border-2 border-[#C9A84C] rounded px-4 py-3 text-sm focus:outline-none font-bold" />
          </div>
        )}
      </div>

      {/* Attestation */}
      <div className="max-w-3xl mx-auto px-6 pb-10">
        <div className="border-4 border-[#C9A84C] p-1">
          <div className="border border-[#F5E6B0] p-8">
            <div className="bg-black text-center py-3 mb-8">
              <p className="text-[10px] font-black tracking-widest uppercase text-[#C9A84C]">
                BUTTERTECH ACADEMY · SOFEDUC AGRÉÉ · NVIDIA INCEPTION · GOOGLE FOR EDUCATION
              </p>
            </div>

            <div className="text-center mb-8">
              <p className="text-xs font-black tracking-widest uppercase text-[#C9A84C] mb-2">ATTESTATION DE RÉUSSITE</p>
              <div className="w-20 h-0.5 bg-[#C9A84C] mx-auto mb-6" />
              <p className="text-gray-500 italic mb-4 text-sm">La présente atteste que</p>
              <div className="border-b-2 border-[#C9A84C] mx-8 pb-2 mb-4">
                <p className="text-2xl font-black italic text-gray-900">{nom}</p>
              </div>
              <p className="text-gray-500 italic mb-3 text-sm">a complété avec succès la formation</p>
              <p className="text-2xl font-black tracking-tighter mb-1">Formation 2 — IA Responsable & Loi 25</p>
              <p className="text-gray-500 italic text-sm mb-8">Conformité & Gouvernance Mondiale de l'Intelligence Artificielle</p>

              <div className="grid grid-cols-4 gap-4 mb-8 text-center">
                {[['DURÉE','7h · 5 modules'],['UEC SOFEDUC','0.7 UEC · BTA-IARG-002'],['BLOOM','Analyser → Évaluer'],['DATE', now]].map(([l,v]) => (
                  <div key={l}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">{l}</p>
                    <p className="text-sm mt-1 text-gray-800">{v}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-12 px-8 mb-6">
                {[['Directeur de Formation','ButterTech Academy'],['Responsable Accréditation','SOFEDUC']].map(([t,o]) => (
                  <div key={t} className="text-center">
                    <div className="border-b border-gray-400 h-8 mb-1" />
                    <p className="text-xs text-gray-500">{t}</p>
                    <p className="text-xs font-bold text-gray-800">{o}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400">
                N° {num} · buttertech-academy.vercel.app/verify · Archivé 7 ans · Cloud Run Montréal · SOC2 Type II
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
