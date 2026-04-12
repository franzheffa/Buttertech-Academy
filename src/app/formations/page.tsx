import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function FormationsPage() {
  const formations = [
    {
      num: 1,
      code: 'BTA-AGENTS-001',
      uec: 0.6,
      bloom: '1→6',
      modules: 6,
      titre: 'Agents IA Gemini 3.0',
      sousTitre: 'Architecture Multi-Agents · NVIDIA NIM H100 · Cloud Run Montreal',
      points: ['Architecture orchestrateur → agents specialises', 'NVIDIA NIM H100 · inference temps reel', 'Quiz final et schema d architecture'],
      href: '/formations/1',
      featured: false,
    },
    {
      num: 2,
      code: 'BTA-IARG-002',
      uec: 0.7,
      bloom: '2→5',
      modules: 5,
      titre: 'IA Responsable & Loi 25',
      sousTitre: 'Conformite & gouvernance mondiale de l IA',
      points: ['Loi 25 · RGPD EU · AI Act UE · UK-GDPR · LGPD', 'Privacy by Design · cloud conforme · journalisation', 'Quiz final 20Q et validation de preuves'],
      href: '/formation2',
      featured: true,
    },
    {
      num: 3,
      code: 'BTA-PA-001',
      uec: 0.6,
      bloom: '3→6',
      modules: 3,
      titre: 'Productivite Agentique',
      sousTitre: 'Prompt Engineering P.T.C.F. & automatisation cloud',
      points: ['Methode P.T.C.F. exclusive · Gemini Advanced', 'Google Workspace for Education · 6 agents', 'Cloud Run · Apps Script · quiz et automatismes'],
      href: '/formations/3',
      featured: false,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="bloom-badge">Mars 2026</span>
          <span className="bloom-badge" style={{ background: '#000', color: '#C9A84C' }}>2.7 UEC · 27 heures · 3 formations</span>
        </div>
        <h1 className="mb-2 text-3xl font-black tracking-tighter">Formations Buttertech Academy</h1>
        <p className="mb-10 text-sm text-gray-500">Taxonomie de Bloom · Cloud Run Montreal · Loi 25 · IA appliquee et productivite</p>

        <div className="mb-12 space-y-4">
          {formations.map((f) => (
            <Link
              key={f.num}
              href={f.href}
              className={`group flex items-start gap-6 rounded-lg border-2 p-6 transition-all hover:shadow-lg ${
                f.featured ? 'border-[#C9A84C] bg-black text-white' : 'border-gray-200 bg-white hover:border-[#C9A84C]'
              }`}
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded font-black text-xl ${
                  f.featured
                    ? 'bg-[#C9A84C] text-black'
                    : 'bg-gray-100 text-gray-500 transition-all group-hover:bg-[#C9A84C] group-hover:text-black'
                }`}
              >
                {f.num}
              </div>

              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="bloom-badge">{f.code}</span>
                  <span className="text-xs font-bold text-gray-400">
                    {f.modules} modules · {f.uec} UEC · Bloom {f.bloom}
                  </span>
                </div>
                <h2 className={`mb-1 text-xl font-black tracking-tighter ${f.featured ? 'text-[#C9A84C]' : 'text-gray-900 group-hover:text-[#C9A84C]'}`}>
                  {f.titre}
                </h2>
                <p className={`mb-3 text-sm ${f.featured ? 'text-gray-400' : 'text-gray-500'}`}>{f.sousTitre}</p>
                <ul className="space-y-1">
                  {f.points.map((p) => (
                    <li key={p} className={`flex items-center gap-2 text-sm ${f.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="shrink-0 text-[#C9A84C]">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`text-2xl transition-transform group-hover:translate-x-1 ${f.featured ? 'text-[#C9A84C]' : 'text-gray-300'}`}>→</div>
            </Link>
          ))}
        </div>

        <div className="rounded-lg border-2 border-[#C9A84C] bg-black p-8 text-center">
          <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">Acces complet aux 3 formations</p>
          <h2 className="mb-2 text-2xl font-black text-white">Bundle Quintessence IA</h2>
          <p className="mb-6 text-sm text-gray-400">27 heures · 3 parcours · quiz actifs · espaces etudiant, professeur et campus</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Acces complet — 399$ CAD
          </a>
        </div>
      </main>
    </>
  )
}
