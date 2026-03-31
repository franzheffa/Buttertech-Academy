import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="bg-black text-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-block border border-[#C9A84C] text-[#C9A84C] text-[10px] font-black px-4 py-2 tracking-widest uppercase mb-8">
              Leader IA Reglementee · Google & NVIDIA Partner · SOFEDUC Agree
            </div>
            <h1 className="text-4xl font-black tracking-tighter leading-tight mb-6 italic sm:text-6xl">
              L&apos;IA DE CONFIANCE.<br />
              <span className="text-[#C9A84C]">CERTIFIEE.</span>
            </h1>
            <p className="text-neutral-300 text-base max-w-2xl mb-10 leading-7">
              Une academie structuree selon les normes de planification, de delivery et d evaluation attendues en contexte SOFEDUC,
              avec des espaces dedies aux etudiants et aux professeurs pour le synchrone et l asynchrone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/formations" className="btn-gold">Voir les formations →</Link>
              <Link href="/espace/apprenant" className="btn-black">Entrer dans l&apos;espace étudiants</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C9A84C]/30 bg-white/[0.04] p-5 sm:p-6">
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Étudiants</p>
                <p className="mt-3 text-xl font-black">Cockpit de progression</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">Objectifs, blocs de cours, preuves, attestations et suivi de progression.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Professeurs</p>
                <p className="mt-3 text-xl font-black">Pilotage de cohortes</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">Analyse prealable, macrodesign, delivery, traces et qualite.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">AI Studio</p>
                <p className="mt-3 text-xl font-black">Studio IA séparé</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">Workflow, orchestration et experimentation IA en dehors du site Academy.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-black border-t-2 border-[#C9A84C] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[['3', 'Formations SOFEDUC'], ['15', 'Seances structurees'], ['4', 'Blocs pedagogiques'], ['2.7', 'UEC Certifiees']].map(([val, label]) => (
            <div key={val}>
              <div className="text-3xl font-black text-[#C9A84C]">{val}</div>
              <div className="text-gray-400 text-[10px] font-black tracking-widest uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 Formations */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
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

      <section className="py-10 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl grid gap-4 lg:grid-cols-3">
          <div className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Espace étudiants</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Experience mobile first</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Parcours, blocs de cours, evaluations, preuves d apprentissage et attestations.</p>
            <Link href="/espace/apprenant" className="mt-6 btn-black">Voir l&apos;espace étudiants</Link>
          </div>
          <div className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Espace professeurs</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Pilotage et qualite</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Analyse prealable, macrodesign, cohortes, preuves pedagogiques et satisfaction.</p>
            <Link href="/espace/formateur" className="mt-6 btn-black">Voir l&apos;espace professeurs</Link>
          </div>
          <div className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">AI Studio</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">Surface IA dédiée</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300">Accès séparé au studio IA Smith-Heffa pour les usages multimodaux et l’orchestration avancée.</p>
            <a href="https://aistudio-smith-heffa.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-6 btn-gold">Ouvrir AI Studio</a>
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
