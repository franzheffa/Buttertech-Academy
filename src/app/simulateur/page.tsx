'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import PartnerProofBar from '@/components/PartnerProofBar'

export default function SimulateurPage() {
  const [journey, setJourney] = useState<'etudiants' | 'professeurs' | 'formations'>('etudiants')
  const [provider, setProvider] = useState<'auto' | 'gemini' | 'openai' | 'claude'>('auto')
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState('Prêt. Entrez votre question ci-dessus.')
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState<'live' | 'demo' | null>(null)
  const [activeProvider, setActiveProvider] = useState<string | null>(null)
  const [activeModel, setActiveModel] = useState<string | null>(null)

  const run = async () => {
    if (!prompt.trim() || loading) return
    setLoading(true)
    setOutput('Analyse pédagogique en cours...')
    try {
      const r = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          provider,
          journey,
          system: 'Tu es Agent Smith-Heffa pour Buttertech Academy. Réponds en français, de façon structurée, concise, très guidante pour la formation et le passage à l action. Maximum 450 mots.',
        }),
      })
      const d = await r.json()
      setMode(d.mode)
      setActiveProvider(d.provider ?? null)
      setActiveModel(d.model ?? null)
      setOutput(d.text ?? 'Aucune réponse.')
    } catch {
      setOutput('Le routage IA est indisponible. Vérifiez GOOGLE_API_KEY, OPENAI_API_KEY et ANTHROPIC_API_KEY.')
      setMode('demo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
        <section className="dark-shell gold-grid">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-3 flex gap-2 flex-wrap">
                <span className="bloom-badge">Routage auto · Gemini prioritaire</span>
                <span className="bloom-badge" style={{ background: '#000', color: '#C9A84C' }}>OpenAI · Claude · Google Cloud</span>
              </div>
              <h1 className="text-3xl font-black tracking-tighter sm:text-5xl">Simulateur stratégique des formations</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
                Un simulateur guidé pour aider les étudiants et les professeurs à choisir la bonne action, le bon cadre pédagogique
                et le bon moteur IA sans friction.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Guidage Academy</p>
              <div className="mt-4 grid gap-3">
                {[
                  'Étudiants: clarifier un devoir, préparer une remise, réviser avant l évaluation.',
                  'Professeurs: construire une activité, une grille, une relance de cohorte ou un feedback.',
                  'Formations: scénariser une séquence, un cas d usage, une démonstration ou un atelier.',
                ].map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-white/10 bg-black/30 px-4 py-4 text-sm leading-6 text-neutral-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PartnerProofBar emphasis="simulateur" />

        <section className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Configurer la demande</p>
            <div className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <label className="text-sm font-black">Parcours</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    ['etudiants', 'Étudiants'],
                    ['professeurs', 'Professeurs'],
                    ['formations', 'Formations'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => setJourney(value as 'etudiants' | 'professeurs' | 'formations')}
                      className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${
                        journey === value ? 'border-[#C9A84C] bg-[#C9A84C] text-black' : 'border-black/10 bg-white text-neutral-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-black">Moteur IA</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    ['auto', 'Auto Gemini'],
                    ['gemini', 'Gemini'],
                    ['openai', 'OpenAI'],
                    ['claude', 'Claude'],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      onClick={() => setProvider(value as 'auto' | 'gemini' | 'openai' | 'claude')}
                      className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${
                        provider === value ? 'border-black bg-black text-[#C9A84C]' : 'border-black/10 bg-white text-neutral-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) run()
                }}
                rows={7}
                placeholder="Ex: Construis un plan d’activité synchrone de 20 minutes pour aider des étudiants à préparer une étude de cas sur l’IA responsable."
                className="w-full rounded-[1.5rem] border border-black/10 bg-[#fffaf0] p-4 text-sm text-black outline-none transition focus:border-[#C9A84C] resize-none"
              />

              <button
                onClick={run}
                disabled={loading || !prompt.trim()}
                className="btn-gold w-full text-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? 'Analyse en cours...' : 'Lancer le guidage IA'}
              </button>
            </div>
          </article>

          <article className="dark-shell">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Réponse guidée</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-white">Orientation immédiate pour le parcours</h2>
              </div>
              {mode ? (
                <span className={`status-pill ${mode === 'live' ? 'border-emerald-400/30 text-emerald-300' : 'border-[#C9A84C]/40 text-[#f3d27a]'}`}>
                  {mode === 'live' ? 'Live' : 'Démo'}
                </span>
              ) : null}
            </div>

            {(activeProvider || activeModel) ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProvider ? <span className="status-pill border-white/15 text-white">{activeProvider}</span> : null}
                {activeModel ? <span className="status-pill border-white/15 text-neutral-300">{activeModel}</span> : null}
              </div>
            ) : null}

            <pre className="mt-5 min-h-[280px] whitespace-pre-wrap rounded-[1.5rem] border border-white/10 bg-black/30 p-5 text-sm leading-7 text-neutral-200">
              {output}
            </pre>
          </article>
        </section>

        <section className="shell-card">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Prompts stratégiques suggérés</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              'Prépare un plan de révision mobile first pour des étudiants avant une évaluation 2.',
              'Crée une relance pédagogique pour des étudiants qui n ont pas remis leur portfolio.',
              'Propose une activité synchrone de 15 minutes pour un professeur avec objectif, méthode et trace.',
              'Transforme un contenu de cours en atelier pratique avec consignes, durée et rétroaction.',
            ].map((q) => (
              <button
                key={q}
                onClick={() => setPrompt(q)}
                className="rounded-[1.25rem] border border-black/10 bg-[#fffaf0] px-4 py-4 text-left text-sm leading-6 text-neutral-700 transition hover:border-[#C9A84C]"
              >
                {q}
              </button>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
