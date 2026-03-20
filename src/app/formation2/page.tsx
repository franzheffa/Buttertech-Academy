import Navbar from '@/components/Navbar'
import Link from 'next/link'

const modules = [
  { id: 1, titre: 'Loi 25 — Principes Fondamentaux au Québec', duree: '1h30', bloom: 'COMPRENDRE (2)', href: '/formation2/module1',
    points: ['Consentement explicite · RPP obligatoire · Déclaration CAI', 'Timeline : Phase 1 (2022) · Phase 2 (2023) · Phase 3 (2024)', 'Évaluation formative · quiz interactif'] },
  { id: 2, titre: 'RGPD & Équivalences Mondiales', duree: '1h30', bloom: 'COMPRENDRE (2)', href: '/formation2/module2',
    points: ['RGPD EU vs Loi 25 : tableau comparatif 5 critères', 'UK-GDPR · LGPD Brésil · CCPA Californie · PIPL Chine', 'Extraterritorialité · sanctions · autorités de contrôle'] },
  { id: 3, titre: 'AI Act UE — Classification par Niveaux de Risque', duree: '1h30', bloom: 'ANALYSER (4)', href: '/formation2/module3',
    points: ['4 niveaux : Inacceptable · Élevé · Limité · Minimal', 'Obligations systèmes à risque élevé · Registre EU · Marquage CE', 'Application progressive 2024 → 2027 · sanctions 35M€ / 7% CA'] },
  { id: 4, titre: 'Déploiement Cloud Conforme — Privacy by Design', duree: '1h30', bloom: 'ANALYSER (4)', href: '/formation2/module4',
    points: ['Cloud Run MTL · northamerica-northeast1 · 24ms · SOC2 II', 'AES-256 · TLS 1.3 · Secret Manager · journalisation 7 ans', '6 étapes déploiement · commandes gcloud prêtes'] },
  { id: 5, titre: 'Audit SOFEDUC & Certification — Quiz Final', duree: '1h00', bloom: 'ÉVALUER ★ (5)', href: '/formation2/module5',
    points: ['Checklist 25 critères · 5 catégories (A→E)', 'Quiz final 20 questions · seuil 70% · attestation SOFEDUC', '0.7 UEC · BTA-IARG-002 · archivage 7 ans Cloud Run MTL'] },
]

export default function Formation2Page() {
  return (
    <>
      <Navbar />
      <div className="bg-black border-b-2 border-[#C9A84C] no-print">
        <div className="max-w-5xl mx-auto px-6 py-2 flex items-center gap-3 text-xs">
          <Link href="/formations" className="text-[#C9A84C] font-bold hover:underline">← Formations</Link>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400 font-bold uppercase tracking-widest">Formation 2 · BTA-IARG-002 · IA Responsable & Loi 25</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 flex gap-8">
        {/* Sidebar */}
        <aside className="w-60 shrink-0 hidden lg:block">
          <div className="bg-gray-50 border border-gray-200 rounded p-4 sticky top-24">
            <div className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Modules du cours</div>
            <ul className="space-y-1">
              {modules.map((m) => (
                <li key={m.id}>
                  <Link href={m.href}
                    className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#C9A84C] py-2 transition-colors leading-tight">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">{m.id}</span>
                    <span>{m.titre.split(' — ')[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link href="/formation2/module1" className="btn-gold text-[10px] w-full text-center block">
                Commencer →
              </Link>
            </div>
          </div>
        </aside>

        {/* Contenu principal */}
        <section className="flex-1">
          <div class="mb-3 flex gap-2 flex-wrap">
            <span className="bloom-badge">BTA-IARG-002</span>
            <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>🎓 BLOOM : COMPRENDRE → ÉVALUER</span>
            <span className="bloom-badge" style={{background:'#1A7A4A',color:'white'}}>0.7 UEC SOFEDUC</span>
          </div>

          <h1 className="text-2xl font-black font-serif italic mb-2">
            IA RESPONSABLE & LOI 25 — GOUVERNANCE
          </h1>
          <p className="text-sm text-[#C9A84C] font-bold mb-2">
            Conformité & Gouvernance Mondiale de l'IA · 7 heures · 5 modules
          </p>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-2xl">
            Analysez les cadres réglementaires mondiaux (Loi 25, RGPD, AI Act UE) et évaluez la conformité d'un déploiement IA. 
            Formation 100% conforme SOFEDUC · Archivage 7 ans · Cloud Run Montréal · SOC2 Type II.
          </p>

          {/* Modules */}
          <div className="space-y-3">
            {modules.map((m) => (
              <Link key={m.id} href={m.href}
                className="block border border-gray-200 rounded-lg p-5 hover:border-[#C9A84C] hover:shadow-sm transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                      <div className="w-7 h-7 bg-[#C9A84C] rounded flex items-center justify-center text-black font-black text-xs shrink-0">
                        {m.id}
                      </div>
                      <span className="bloom-badge text-[10px]">{m.bloom}</span>
                      <span className="text-xs text-gray-400 font-bold">{m.duree}</span>
                    </div>
                    <h3 className="font-black text-gray-900 group-hover:text-[#C9A84C] transition-colors mb-2">{m.titre}</h3>
                    <ul className="space-y-0.5">
                      {m.points.map((p, i) => (
                        <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                          <span className="text-[#C9A84C] shrink-0 mt-0.5">›</span>{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="text-[#C9A84C] text-xl shrink-0 mt-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA inscription */}
          <div className="mt-8 bg-black rounded-lg p-6 border-2 border-[#C9A84C] text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Accès inclus dans le bundle</p>
            <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Accès Bundle Quintessence — 399$ CAD
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
