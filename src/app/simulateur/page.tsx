'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function SimulateurPage() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('Prêt. Entrez votre question ci-dessus.')
  const [loading, setLoading] = useState(false)

  const run = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setOutput('Analyse en cours...')
    try {
      const r = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          system: 'Tu es Agent Smith-Heffa, expert IA, conformité SOFEDUC et gouvernance. Réponds en français, de façon structurée et actionnable.',
        }),
      })
      const d = await r.json()
      setOutput((d.mode === 'live' ? '[LIVE]\n\n' : '[DEMO]\n\n') + (d.text ?? ''))
    } catch {
      setOutput('[ERREUR] Gemini indisponible.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-3 flex gap-2">
          <span className="bloom-badge">Gemini 3.0</span>
          <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>Cloud Run MTL · 24ms · SOC2</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter mb-2">Simulateur Stratégique IA</h1>
        <p className="text-gray-500 text-sm mb-8">Agent Smith-Heffa · Inférence validée · Loi 25 · northamerica-northeast1</p>

        <div className="border-2 border-[#C9A84C] rounded-xl overflow-hidden">
          <div className="bg-black p-6">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter' && e.metaKey) run() }}
              rows={4}
              placeholder="Posez votre défi stratégique IA, question de conformité, ou cas d'usage organisationnel..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg p-4 text-white text-sm focus:outline-none focus:border-[#C9A84C] resize-none placeholder-gray-500"
            />
            <button
              onClick={run}
              disabled={loading || !prompt.trim()}
              className="btn-gold mt-3 w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⚡ Analyse en cours...' : '⚡ SIMULER AVEC GEMINI'}
            </button>
            <p className="text-gray-600 text-xs text-center mt-2">⌘+Entrée pour lancer</p>
          </div>
          <div className="bg-white p-6 border-t-2 border-[#C9A84C]">
            <pre className="whitespace-pre-wrap text-sm text-gray-800 min-h-24 font-mono leading-relaxed">{output}</pre>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4 uppercase tracking-widest">
          Inférence Cloud Run Montréal · northamerica-northeast1 · SOC2 Type II · Loi 25
        </p>
      </main>
    </>
  )
}
