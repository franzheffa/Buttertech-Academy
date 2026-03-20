import Navbar from '@/components/Navbar'
import Link from 'next/link'

const FORMATIONS: Record<string, {
  titre: string; sousTitre: string; code: string; uec: number; bloom: string; duree: string
  description: string
  modules: { num: number; titre: string; duree: string; bloom: string; points: string[] }[]
}> = {
  '1': {
    titre: 'Agents IA Gemini 3.0',
    sousTitre: 'Architecture Multi-Agents',
    code: 'BTA-AGENTS-001', uec: 0.6, bloom: '1→6', duree: '6 heures',
    description: 'Concevez une architecture multi-agents Gemini 3.0 déployée sur Cloud Run Montréal avec inférence NVIDIA NIM H100. Formation complète de l\'identification des composants jusqu\'à la conception d\'un schéma d\'architecture certifié SOFEDUC.',
    modules: [
      { num: 1, titre: 'Architecture des Agents IA Gemini 3.0', duree: '20–45 min', bloom: 'SE RAPPELER (1)',
        points: ['Définir Agent IA, Orchestrateur, Gemini 3.0, NVIDIA NIM', 'Agent IA vs Simple Chatbot : autonomie, mémoire, actions', 'Sources : Google Cloud Enterprise Guide Multi-Agent 2026'] },
      { num: 2, titre: 'Vision Artificielle & Infrastructures NVIDIA NIM', duree: '20–45 min', bloom: 'COMPRENDRE (2)',
        points: ['Architecture Vision : analyse images, OCR, transcription audio', 'NVIDIA NIM : 2 400 tokens/sec · latence < 50ms P95', 'Container NIM depuis NGC · endpoint REST API standardisé'] },
      { num: 3, titre: 'Orchestration Multi-Agents — Lab', duree: '20–45 min', bloom: 'APPLIQUER (3)',
        points: ['Flux orchestrateur → agents spécialisés · délégation', 'Atelier : construire un pipeline 3 agents Gemini', 'Google ADK · protocole A2A · Memory Bank persistante'] },
      { num: 4, titre: 'Déploiement Cloud Run Montréal', duree: '20–45 min', bloom: 'ANALYSER (4)',
        points: ['northamerica-northeast1 · 24ms P95 · SOC2 Type II', 'Docker + Artifact Registry · gcloud run deploy', 'Variables d\'env : Secret Manager · IAM least privilege'] },
      { num: 5, titre: 'Conformité Loi 25 · SOFEDUC Norme 7', duree: '20–45 min', bloom: 'ÉVALUER (5)',
        points: ['Loi 25 : consentement, RPP, déclaration incidents CAI', 'WCAG 2.1 AA · sous-titrage FR/EN · archivage 7 ans', 'Évaluation SOFEDUC Norme 7 · checklist conformité'] },
      { num: 6, titre: 'Quiz Final — Visionnaire & Multimodal', duree: '30 min', bloom: 'CRÉER (6)',
        points: ['20 questions · seuil réussite 70% · attestation SOFEDUC', 'Concevoir un schéma d\'architecture multi-agents complet', '0.6 UEC SOFEDUC · BTA-AGENTS-001 · archivage 7 ans'] },
    ],
  },
  '3': {
    titre: 'Productivité Agentique',
    sousTitre: 'Prompt Engineering P.T.C.F. & Automatisation Cloud',
    code: 'BTA-PA-001', uec: 0.6, bloom: '3→6', duree: '6 heures',
    description: 'Maîtrisez la méthode P.T.C.F. (Persona · Tâche · Contexte · Format) pour rédiger des prompts structurés et performants. Intégrez Gemini dans Google Workspace et automatisez vos flux via Cloud Run et Apps Script.',
    modules: [
      { num: 1, titre: 'Prompt Engineering P.T.C.F.', duree: '2h30', bloom: 'APPLIQUER (3)',
        points: ['Méthode P.T.C.F. : Persona · Tâche · Contexte · Format', 'Atelier méta-prompting Gemini Advanced · itération', 'Avant/Après : transformer un prompt faible en prompt puissant'] },
      { num: 2, titre: 'Google Workspace for Education × SOFEDUC', duree: '1h30', bloom: 'UTILISER (3)',
        points: ['6 agents : Gmail · Calendar · Sheets · Docs · Classroom · Vault', 'Conformité Loi 25 · données hébergées Montréal northamerica-northeast1', 'Cas d\'usage enseignants & administration · 3 ateliers pratiques'] },
      { num: 3, titre: 'Automatisation Cloud Native · Apps Script', duree: '2h00', bloom: 'CRÉER (6)',
        points: ['Cloud Run vs Zapier · Cloud Functions · triggers', 'Apps Script : script fonctionnel + sécurité + déploiement', 'Atelier final : pipeline automatisé complet · certification'] },
    ],
  },
}

export default function FormationSlugPage({ params }: { params: { slug: string } }) {
  const f = FORMATIONS[params.slug]

  if (!f) {
    return (
      <>
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h1 className="text-2xl font-black mb-4">Formation introuvable</h1>
          <p className="text-gray-500 mb-8 text-sm">La formation demandée n'existe pas ou n'est pas encore disponible.</p>
          <Link href="/formations" className="btn-gold">← Toutes les formations</Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/formations" className="text-sm text-gray-500 hover:text-[#C9A84C] mb-6 inline-block transition-colors">
          ← Retour aux formations
        </Link>

        {/* En-tête */}
        <div className="mb-3 flex gap-2 flex-wrap">
          <span className="bloom-badge">{f.code}</span>
          <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>Bloom {f.bloom} · {f.uec} UEC</span>
          <span className="bloom-badge" style={{background:'#1A7A4A',color:'white'}}>{f.duree}</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter mb-1">{f.titre}</h1>
        <p className="text-[#C9A84C] font-bold text-sm mb-4">{f.sousTitre}</p>
        <p className="text-gray-600 text-sm mb-10 max-w-2xl leading-relaxed">{f.description}</p>

        {/* Modules */}
        <h2 className="text-lg font-black tracking-tighter mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-[#C9A84C] inline-block"/>
          Plan de formation — {f.modules.length} modules
        </h2>

        <div className="space-y-3 mb-12">
          {f.modules.map((m) => (
            <div key={m.num} className="border border-gray-200 rounded-lg p-5 hover:border-[#C9A84C] transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 bg-[#C9A84C] flex items-center justify-center text-black font-black text-sm rounded shrink-0 mt-0.5">{m.num}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-black text-gray-900 group-hover:text-[#C9A84C] transition-colors">{m.titre}</h3>
                    <span className="text-xs text-gray-400 font-bold">{m.duree}</span>
                  </div>
                  <p className="text-xs font-black text-[#C9A84C] mb-2">{m.bloom}</p>
                  <ul className="space-y-1">
                    {m.points.map((p, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-[#C9A84C] shrink-0 mt-0.5">›</span>{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-black rounded-lg p-8 text-center border-2 border-[#C9A84C]">
          <p className="text-xs font-black tracking-widest text-[#C9A84C] uppercase mb-2">
            Disponible avec le Bundle Quintessence IA
          </p>
          <h3 className="text-xl font-black text-white mb-2">{f.titre} · {f.uec} UEC SOFEDUC</h3>
          <p className="text-gray-400 text-sm mb-6">{f.duree} · Bloom {f.bloom} · Cloud Run Montréal · SOC2 · Loi 25</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
            Accès Bundle Quintessence — 399$ CAD
          </a>
        </div>
      </main>
    </>
  )
}
