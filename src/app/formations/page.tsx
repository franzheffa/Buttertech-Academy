import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function FormationsPage() {
  const formations = [
    {
      num: 1, code: 'BTA-AGENTS-001', uec: 0.6, bloom: '1→6', modules: 6,
      titre: 'Agents IA Gemini 3.0',
      sousTitre: 'Architecture Multi-Agents · NVIDIA NIM H100 · Cloud Run Montréal',
      points: ['Architecture orchestrateur → agents spécialisés', 'NVIDIA NIM H100 · inférence 24ms SOC2', 'Déploiement serverless Cloud Run Montréal'],
      href: '/formations/1', featured: false,
    },
    {
      num: 2, code: 'BTA-IARG-002', uec: 0.7, bloom: '2→5', modules: 5,
      titre: 'IA Responsable & Loi 25',
      sousTitre: 'Conformité & Gouvernance Mondiale de l\'IA',
      points: ['Loi 25 · RGPD EU · AI Act UE · UK-GDPR · LGPD', 'Audit SOFEDUC 25 critères · Privacy by Design', 'Quiz final 20Q · Attestation certifiée SOFEDUC'],
      href: '/formation2', featured: true,
    },
    {
      num: 3, code: 'BTA-PA-001', uec: 0.6, bloom: '3→6', modules: 3,
      titre: 'Productivité Agentique',
      sousTitre: 'Prompt Engineering P.T.C.F. & Automatisation Cloud',
      points: ['Méthode P.T.C.F. exclusive · Gemini Advanced', 'Google Workspace for Education · 6 agents', 'Cloud Run · Apps Script · Automatisation native'],
      href: '/formations/3', featured: false,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-3 flex gap-2 flex-wrap">
          <span className="bloom-badge">SOFEDUC · Mars 2026</span>
          <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>2.7 UEC · 27 heures · 3 formations</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter mb-2">Formations Certifiées SOFEDUC</h1>
        <p className="text-gray-500 mb-10 text-sm">Taxonomie de Bloom · Cloud Run Montréal · Loi 25 · RGPD · AI Act UE</p>

        <div className="space-y-4 mb-12">
          {formations.map((f) => (
            <Link key={f.num} href={f.href}
              className={`flex items-start gap-6 border-2 rounded-lg p-6 transition-all hover:shadow-lg group ${
                f.featured
                  ? 'border-[#C9A84C] bg-black text-white'
                  : 'border-gray-200 hover:border-[#C9A84C] bg-white'
              }`}>
              {/* Numéro */}
              <div className={`w-12 h-12 rounded flex items-center justify-center font-black text-xl shrink-0 ${
                f.featured ? 'bg-[#C9A84C] text-black' : 'bg-gray-100 text-gray-500 group-hover:bg-[#C9A84C] group-hover:text-black transition-all'
              }`}>{f.num}</div>

              {/* Contenu */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="bloom-badge">{f.code}</span>
                  <span className={`text-xs font-bold ${f.featured ? 'text-gray-400' : 'text-gray-400'}`}>
                    {f.modules} modules · {f.uec} UEC · Bloom {f.bloom}
                  </span>
                </div>
                <h2 className={`font-black text-xl tracking-tighter mb-1 ${f.featured ? 'text-[#C9A84C]' : 'text-gray-900 group-hover:text-[#C9A84C] transition-colors'}`}>
                  {f.titre}
                </h2>
                <p className={`text-sm mb-3 ${f.featured ? 'text-gray-400' : 'text-gray-500'}`}>{f.sousTitre}</p>
                <ul className="space-y-1">
                  {f.points.map((p, i) => (
                    <li key={i} className={`text-sm flex items-center gap-2 ${f.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-[#C9A84C] shrink-0">✓</span>{p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Flèche */}
              <div className={`text-2xl transition-transform group-hover:translate-x-1 ${f.featured ? 'text-[#C9A84C]' : 'text-gray-300'}`}>→</div>
            </Link>
          ))}
        </div>

        {/* CTA Bundle */}
        <div className="bg-black rounded-lg p-8 text-center border-2 border-[#C9A84C]">
          <p className="text-[10px] font-black tracking-widest text-[#C9A84C] uppercase mb-2">Accès complet aux 3 formations</p>
          <h2 className="text-2xl font-black text-white mb-2">Bundle Quintessence IA</h2>
          <p className="text-gray-400 text-sm mb-6">27 heures · 2.7 UEC SOFEDUC · Cloud Run Montréal · SOC2 · Loi 25</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Accès complet — 399$ CAD
          </a>
        </div>
      </main>
    </>
  )
}
