import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="bg-black text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block border border-[#C9A84C] text-[#C9A84C] text-[10px] font-black px-4 py-2 tracking-widest uppercase mb-8">
            Leader IA Réglementée · Google & NVIDIA Partner · SOFEDUC Agréé
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6 italic">
            L'IA DE CONFIANCE.<br />
            <span className="text-[#C9A84C]">CERTIFIÉE.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            NVIDIA Inception · Google for Education · Rigueur académique SOFEDUC · Conformité Loi 25 & RGPD
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/formations" className="btn-gold">Voir les formations →</Link>
            <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-black">Bundle Quintessence 399$</a>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-black border-t-2 border-[#C9A84C] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['3', 'Formations SOFEDUC'], ['2.7', 'UEC Certifiées'], ['24ms', 'Cloud Run Montréal'], ['SOC2', 'Type II · Loi 25']].map(([val, label]) => (
            <div key={val}>
              <div className="text-3xl font-black text-[#C9A84C]">{val}</div>
              <div className="text-gray-400 text-[10px] font-black tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Formations */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-center tracking-tighter mb-3">Parcours Certifiés SOFEDUC</h2>
          <p className="text-center text-gray-500 mb-14 text-sm">Taxonomie de Bloom · Session Mars 2026</p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* F1 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-[#C9A84C] hover:shadow-lg transition-all">
              <div className="flex justify-between mb-6">
                <span className="bloom-badge">Bloom 1→6 · 0.6 UEC</span>
              </div>
              <h3 className="text-xl font-black tracking-tighter mb-4">Formation 1<br />Agents IA Gemini 3.0</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ Architecture multi-agents</li>
                <li>✓ NVIDIA NIM H100 · Cloud Run MTL</li>
                <li>✓ Orchestration & déploiement</li>
              </ul>
              <Link href="/formations/1" className="btn-black block text-center text-[10px]">Commencer →</Link>
            </div>
            {/* F2 — Featured */}
            <div className="border-2 border-[#C9A84C] rounded-lg p-8 shadow-xl bg-black text-white">
              <div className="flex justify-between mb-6">
                <span className="bloom-badge">Bloom 2→5 · 0.7 UEC</span>
              </div>
              <h3 className="text-xl font-black tracking-tighter mb-4 text-[#C9A84C]">Formation 2<br />IA Responsable & Loi 25</h3>
              <ul className="text-sm text-gray-400 space-y-2 mb-6">
                <li>✓ Loi 25 · RGPD · AI Act UE</li>
                <li>✓ Conformité mondiale IA</li>
                <li>✓ Audit SOFEDUC 25 critères</li>
              </ul>
              <Link href="/formation2" className="btn-gold block text-center text-[10px]">Commencer →</Link>
            </div>
            {/* F3 */}
            <div className="border border-gray-200 rounded-lg p-8 hover:border-[#C9A84C] hover:shadow-lg transition-all">
              <div className="flex justify-between mb-6">
                <span className="bloom-badge">Bloom 3→6 · 0.6 UEC</span>
              </div>
              <h3 className="text-xl font-black tracking-tighter mb-4">Formation 3<br />Productivité Agentique</h3>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ Méthode P.T.C.F. exclusive</li>
                <li>✓ Google Workspace for Education</li>
                <li>✓ Automatisation Cloud Native</li>
              </ul>
              <Link href="/formations/3" className="btn-black block text-center text-[10px]">Commencer →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black tracking-tighter mb-4 text-[#C9A84C]">Bundle Quintessence IA</h2>
          <p className="text-gray-400 mb-2">3 formations · 27 heures · 2.7 UEC SOFEDUC</p>
          <p className="text-gray-500 text-sm mb-8">Cloud Run Montréal · SOC2 Type II · Loi 25 · RGPD · AI Act UE</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
            Accès complet — 399$ CAD
          </a>
        </div>
      </section>

      <footer className="bg-black border-t-2 border-[#C9A84C] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
          <div>
            <div className="text-white font-black text-base tracking-tighter mb-1">BUTTERTECH ACADEMY</div>
            <div className="text-[#C9A84C]">Gemini 3.0 · Montréal · SOFEDUC Agréé</div>
          </div>
          <div className="flex gap-6 mt-6 md:mt-0">
            <span>© 2026 Buttertech Inc.</span>
            <a href="#" className="hover:text-[#C9A84C]">Confidentialité · Loi 25</a>
            <a href="#" className="hover:text-[#C9A84C]">Audit SOFEDUC 2026</a>
          </div>
        </div>
      </footer>
    </>
  )
}
