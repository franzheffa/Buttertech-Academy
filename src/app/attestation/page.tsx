'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function AttestationPage() {
  const [nom, setNom] = useState('')
  const [editing, setEditing] = useState(true)
  const [certNum] = useState(`BTA-2026-${Math.random().toString(36).slice(2, 6).toUpperCase()}`)
  const now = new Date().toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })
  const displayNom = nom.trim() || '[ Prenom NOM du participant ]'

  return (
    <>
      <div className="no-print">
        <Navbar />
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link href="/espace" className="text-sm text-gray-500 transition-colors hover:text-black">← Mon espace</Link>
          <div className="flex gap-3">
            <button onClick={() => setEditing(!editing)} className={editing ? 'btn-gold text-xs' : 'btn-black text-xs'}>
              {editing ? 'Confirmer le nom' : 'Modifier le nom'}
            </button>
            <button onClick={() => window.print()} className="btn-gold text-xs">Imprimer / PDF</button>
          </div>
        </div>

        {editing ? (
          <div className="mx-auto max-w-3xl px-6 pb-4">
            <input
              value={nom}
              onChange={(event) => setNom(event.target.value)}
              placeholder="Entrez votre nom complet (ex: Marie Dupont)"
              className="w-full rounded border-2 border-[#C9A84C] px-4 py-3 text-center text-base font-bold focus:outline-none"
              autoFocus
            />
            <p className="mt-1 text-center text-xs text-gray-400">Ce nom apparaitra sur votre attestation Buttertech Academy.</p>
          </div>
        ) : null}
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-10">
        <div className="border-4 border-[#C9A84C] p-1 shadow-2xl">
          <div className="border border-[#F5E6B0] p-10">
            <div className="mb-10 bg-black py-4 text-center">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#C9A84C]">BUTTERTECH ACADEMY · GOOGLE FOR EDUCATION · GEMINI · NVIDIA INCEPTION</p>
            </div>

            <div className="text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#C9A84C]">ATTESTATION DE REUSSITE</p>
              <div className="mx-auto mb-8 h-0.5 w-24 bg-[#C9A84C]" />

              <p className="mb-5 text-sm italic text-gray-500">La presente atteste que</p>
              <div className="mx-12 mb-5 border-b-2 border-[#C9A84C] pb-2">
                <p className="text-3xl font-black italic text-gray-900">{displayNom}</p>
              </div>
              <p className="mb-4 text-sm italic text-gray-500">a complete avec succes la formation</p>
              <p className="mb-1 text-2xl font-black tracking-tighter">Formation 2 — IA Responsable & Loi 25</p>
              <p className="mb-10 text-sm italic text-gray-500">Conformite & gouvernance mondiale de l intelligence artificielle</p>

              <div className="mb-10 grid grid-cols-4 gap-4 text-center">
                {[
                  ['Duree', '7h · 5 modules'],
                  ['Credits', '0.7 UEC · BTA-IARG-002'],
                  ['Bloom', 'Analyser → Evaluer'],
                  ['Date', now],
                ].map(([label, value]) => (
                  <div key={label} className="rounded border border-[#F5E6B0] p-3">
                    <p className="mb-1 text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">{label}</p>
                    <p className="text-sm font-bold text-gray-800">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8 grid grid-cols-2 gap-16 px-8">
                {[
                  ['Franz Heffa', 'Direction programme et ecosysteme', 'Buttertech Academy'],
                  ['Unite education BTA', 'Coordination pedagogique', 'Buttertech Academy'],
                ].map(([name, title, org]) => (
                  <div key={title} className="text-center">
                    <p className="mb-1 font-black italic text-gray-800">{name}</p>
                    <div className="mb-1 border-b border-gray-400" />
                    <p className="text-xs text-gray-500">{title}</p>
                    <p className="text-xs font-bold text-gray-700">{org}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6 flex justify-center gap-6">
                {['Buttertech Academy', 'Google ecosystem', 'Gemini ready', 'Loi 25 aware'].map((label) => (
                  <div key={label} className="rounded border border-[#C9A84C] px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#C9A84C]">
                    {label}
                  </div>
                ))}
              </div>

              <div className="rounded bg-gray-50 p-3 text-xs text-gray-500">
                N° {certNum} · buttertech-academy.vercel.app · Archive pedagogique · Cloud Run Montreal · SOC2 Type II · Loi 25 Quebec
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
