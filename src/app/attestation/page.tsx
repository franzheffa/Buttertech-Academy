'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function AttestationPage() {
  const [nom, setNom] = useState('')
  const [editing, setEditing] = useState(true)
  const [certNum] = useState(`BTA-2026-${Math.random().toString(36).slice(2,6).toUpperCase()}`)
  const now = new Date().toLocaleDateString('fr-CA', {year:'numeric',month:'long',day:'numeric'})
  const displayNom = nom.trim() || '[ Prénom NOM du Participant ]'

  return (
    <>
      <div className="no-print">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/espace" className="text-sm text-gray-500 hover:text-black transition-colors">← Mon Espace</Link>
          <div className="flex gap-3">
            <button onClick={() => setEditing(!editing)}
              className={editing ? 'btn-gold text-xs' : 'btn-black text-xs'}>
              {editing ? '✓ Confirmer le nom' : '✏️ Modifier le nom'}
            </button>
            <button onClick={() => window.print()} className="btn-gold text-xs">🖨️ Imprimer / PDF</button>
          </div>
        </div>

        {editing && (
          <div className="max-w-3xl mx-auto px-6 pb-4">
            <input
              value={nom}
              onChange={e => setNom(e.target.value)}
              placeholder="Entrez votre nom complet (ex: Marie Dupont)"
              className="w-full border-2 border-[#C9A84C] rounded px-4 py-3 text-base focus:outline-none font-bold text-center"
              autoFocus
            />
            <p className="text-xs text-gray-400 text-center mt-1">Ce nom apparaîtra sur votre attestation officielle SOFEDUC</p>
          </div>
        )}
      </div>

      {/* ATTESTATION — Print-ready */}
      <div className="max-w-3xl mx-auto px-6 pb-10">
        <div className="border-4 border-[#C9A84C] p-1 shadow-2xl">
          <div className="border border-[#F5E6B0] p-10">

            {/* En-tête */}
            <div className="bg-black text-center py-4 mb-10">
              <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#C9A84C]">
                BUTTERTECH ACADEMY · SOFEDUC AGRÉÉ · NVIDIA INCEPTION · GOOGLE FOR EDUCATION
              </p>
            </div>

            {/* Corps */}
            <div className="text-center">
              <p className="text-xs font-black tracking-[0.3em] uppercase text-[#C9A84C] mb-3">
                ATTESTATION DE RÉUSSITE
              </p>
              <div className="w-24 h-0.5 bg-[#C9A84C] mx-auto mb-8" />

              <p className="text-gray-500 italic mb-5 text-sm">La présente atteste que</p>

              <div className="border-b-2 border-[#C9A84C] mx-12 pb-2 mb-5">
                <p className="text-3xl font-black italic text-gray-900">{displayNom}</p>
              </div>

              <p className="text-gray-500 italic mb-4 text-sm">a complété avec succès la formation</p>

              <p className="text-2xl font-black tracking-tighter mb-1">
                Formation 2 — IA Responsable & Loi 25
              </p>
              <p className="text-gray-500 italic text-sm mb-10">
                Conformité & Gouvernance Mondiale de l'Intelligence Artificielle
              </p>

              {/* Méta */}
              <div className="grid grid-cols-4 gap-4 mb-10 text-center">
                {[
                  ['DURÉE', '7h · 5 modules'],
                  ['UEC SOFEDUC', '0.7 UEC · BTA-IARG-002'],
                  ['BLOOM', 'Analyser → Évaluer'],
                  ['DATE', now],
                ].map(([l, v]) => (
                  <div key={l} className="border border-[#F5E6B0] rounded p-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#C9A84C] mb-1">{l}</p>
                    <p className="text-sm font-bold text-gray-800">{v}</p>
                  </div>
                ))}
              </div>

              {/* Signatures */}
              <div className="grid grid-cols-2 gap-16 px-8 mb-8">
                {[
                  ['Franz Heffa', 'Directeur de la formation', 'ButterTech Academy'],
                  ['Unité Éducation BTA', 'Coordinatrice pédagogique', 'SOFEDUC Agréé'],
                ].map(([name, titre, org]) => (
                  <div key={titre} className="text-center">
                    <p className="font-black text-gray-800 mb-1 italic">{name}</p>
                    <div className="border-b border-gray-400 mb-1" />
                    <p className="text-xs text-gray-500">{titre}</p>
                    <p className="text-xs font-bold text-gray-700">{org}</p>
                  </div>
                ))}
              </div>

              {/* Logos partenaires */}
              <div className="flex justify-center gap-6 mb-6">
                {['SOFEDUC Agréé', 'NVIDIA Inception', 'Google for Education', 'Loi 25 Conforme'].map((l) => (
                  <div key={l} className="border border-[#C9A84C] rounded px-3 py-1.5 text-[10px] font-black text-[#C9A84C] uppercase tracking-wider">
                    {l}
                  </div>
                ))}
              </div>

              {/* Numéro de certificat */}
              <div className="bg-gray-50 rounded p-3 text-xs text-gray-500">
                N° {certNum} · buttertech-academy.vercel.app/verify · Archivé 7 ans · Cloud Run Montréal · SOC2 Type II · Loi 25 Québec
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
