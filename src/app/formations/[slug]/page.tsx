import Navbar from '@/components/Navbar'
import Link from 'next/link'

const FORMATIONS: Record<string, {
  titre: string, sousTitre: string, code: string, uec: number, bloom: string
  modules: { num: number, titre: string, duree: string, bloom: string }[]
}> = {
  '1': {
    titre: 'Agents IA Gemini 3.0',
    sousTitre: 'Architecture Multi-Agents · NVIDIA NIM H100 · Cloud Run Montréal',
    code: 'BTA-AGENTS-001', uec: 0.6, bloom: '1→6',
    modules: [
      { num: 1, titre: 'Architecture des Agents IA Gemini 3.0', duree: '20–45 min', bloom: 'SE RAPPELER (1)' },
      { num: 2, titre: 'Vision Artificielle & Infrastructures NVIDIA NIM', duree: '20–45 min', bloom: 'COMPRENDRE (2)' },
      { num: 3, titre: 'Orchestration Multi-Agents — Lab', duree: '20–45 min', bloom: 'APPLIQUER (3)' },
      { num: 4, titre: 'Déploiement Cloud Run Montréal', duree: '20–45 min', bloom: 'ANALYSER (4)' },
      { num: 5, titre: 'Conformité Loi 25 · SOFEDUC Norme 7', duree: '20–45 min', bloom: 'ÉVALUER (5)' },
      { num: 6, titre: 'Quiz Final — Visionnaire & Multimodal', duree: '30 min', bloom: 'CRÉER (6)' },
    ],
  },
  '3': {
    titre: 'Productivité Agentique',
    sousTitre: 'Prompt Engineering P.T.C.F. · Google Workspace for Education · Cloud Native',
    code: 'BTA-PA-001', uec: 0.6, bloom: '3→6',
    modules: [
      { num: 1, titre: 'Méthode P.T.C.F. — Prompt Engineering', duree: '2h30', bloom: 'APPLIQUER (3)' },
      { num: 2, titre: 'Google Workspace for Education', duree: '1h30', bloom: 'UTILISER (3)' },
      { num: 3, titre: 'Automatisation Cloud Native · Apps Script', duree: '2h00', bloom: 'CRÉER (6)' },
    ],
  },
}

export default function FormationPage({ params }: { params: { slug: string } }) {
  const f = FORMATIONS[params.slug]

  if (!f) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-black mb-4">Formation introuvable</h1>
          <Link href="/formations" className="btn-gold">← Toutes les formations</Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/formations" className="text-sm text-gray-500 hover:text-[#C9A84C] mb-6 inline-block">← Retour aux formations</Link>

        <div className="mb-3 flex gap-2 flex-wrap">
          <span className="bloom-badge">{f.code}</span>
          <span className="bloom-badge" style={{background:'#000', color:'#C9A84C'}}>Bloom {f.bloom} · {f.uec} UEC</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter mb-1">{f.titre}</h1>
        <p className="text-[#C9A84C] font-bold text-sm mb-10">{f.sousTitre}</p>

        <div className="space-y-3 mb-12">
          {f.modules.map((m) => (
            <div key={m.num} className="border border-gray-200 rounded-lg p-5 flex items-center justify-between hover:border-[#C9A84C] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#C9A84C] flex items-center justify-center text-black font-black text-sm rounded">{m.num}</div>
                <div>
                  <p className="font-bold text-sm text-gray-900">{m.titre}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{m.duree} · <span className="text-[#C9A84C] font-bold">{m.bloom}</span></p>
                </div>
              </div>
              <span className="text-[#C9A84C] text-lg">→</span>
            </div>
          ))}
        </div>

        <div className="bg-black rounded-lg p-8 text-center border-2 border-[#C9A84C]">
          <p className="text-[#C9A84C] font-bold mb-2 text-sm">Accédez à cette formation avec le Bundle Quintessence</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Bundle 399$ CAD → Démarrer
          </a>
        </div>
      </main>
    </>
  )
}
