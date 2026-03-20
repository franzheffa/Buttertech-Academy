'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function SimulateurPage() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('Prêt. Entrez votre question ci-dessus.')
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'live' | 'demo' | null>(null)

  const run = async () => {
    if (!prompt.trim() || loading) return
    setLoading(true)
    setOutput('⚡ Analyse en cours...')
    try {
      const r = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          system: 'Tu es Agent Smith-Heffa, expert IA, conformité SOFEDUC et gouvernance mondiale. Réponds en français, de façon structurée, concise et actionnable. Maximum 400 mots.',
        }),
      })
      const d = await r.json()
      setMode(d.mode)
      setOutput(d.text ?? 'Aucune réponse.')
    } catch {
      setOutput('Gemini indisponible. Vérifiez la clé GEMINI_API_KEY.')
      setMode('demo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-3 flex gap-2 flex-wrap">
          <span className="bloom-badge">Gemini 3.0 · LIVE</span>
          <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>Cloud Run MTL · 24ms · SOC2 II</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter mb-2">Simulateur Stratégique IA</h1>
        <p className="text-gray-500 text-sm mb-8">
          Agent Smith-Heffa · Expert IA & Conformité SOFEDUC · northamerica-northeast1 · Loi 25
        </p>

        <div className="border-2 border-[#C9A84C] rounded-xl overflow-hidden mb-4">
          {/* Input */}
          <div className="bg-black p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"/>
              <div className="w-3 h-3 rounded-full bg-yellow-500"/>
              <div className="w-3 h-3 rounded-full bg-green-500"/>
              <span className="text-gray-600 text-xs ml-2 font-mono">agent-smith-heffa@buttertech:~$</span>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) run() }}
              rows={4}
              placeholder="Ex: Comment déployer une IA conforme Loi 25 sur Cloud Run Montréal ?"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-[#C9A84C] resize-none placeholder-gray-600 font-mono"
            />
            <button
              onClick={run}
              disabled={loading || !prompt.trim()}
              className="btn-gold mt-3 w-full text-center disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? '⚡ Analyse en cours...' : '⚡ SIMULER AVEC GEMINI'}
            </button>
            <p className="text-gray-700 text-xs text-center mt-2">⌘+Entrée ou Ctrl+Entrée pour lancer</p>
          </div>

          {/* Output */}
          <div className="bg-white p-6 border-t-2 border-[#C9A84C]">
            {mode && (
              <div className={`inline-flex items-center gap-1.5 text-xs font-black px-2 py-1 rounded mb-3 ${
                mode === 'live' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${mode === 'live' ? 'bg-green-600' : 'bg-yellow-600'}`}/>
                {mode === 'live' ? 'GEMINI LIVE' : 'MODE DÉMO'}
              </div>
            )}
            <pre className="whitespace-pre-wrap text-sm text-gray-800 min-h-24 font-mono leading-relaxed">{output}</pre>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center uppercase tracking-widest">
          Inférence · northamerica-northeast1 · SOC2 Type II · Loi 25 Québec
        </p>

        {/* Exemples */}
        <div className="mt-8">
          <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Questions suggérées :</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Quelles sont les obligations Loi 25 pour une plateforme de formation IA ?',
              'Comment classifier notre système IA selon l\'AI Act UE ?',
              'Quelle architecture multi-agents pour automatiser les RH ?',
              'Comment obtenir la certification SOFEDUC pour une formation IA ?',
            ].map((q) => (
              <button key={q} onClick={() => setPrompt(q)}
                className="text-xs border border-gray-200 rounded px-3 py-1.5 text-gray-600 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all text-left">
                {q}
              </button>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
