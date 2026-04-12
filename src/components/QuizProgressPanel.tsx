'use client'

import { useEffect, useState } from 'react'

type QuizProgressResponse = {
  summary: {
    attempts: number
    completed: number
    bestScore: number
    trackedItems: number
  }
  items: {
    id: string
    progressKey: string
    formationCode: string | null
    moduleKey: string | null
    bestScore: number
    lastScore: number
    attemptsCount: number
    completionStatus: string
  }[]
}

export default function QuizProgressPanel() {
  const [data, setData] = useState<QuizProgressResponse | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'signed-out' | 'error'>('loading')

  useEffect(() => {
    let active = true

    fetch('/api/quiz/progress', { cache: 'no-store' })
      .then(async (response) => {
        const payload = await response.json()

        if (!active) {
          return
        }

        if (response.status === 401) {
          setStatus('signed-out')
          return
        }

        if (!response.ok) {
          throw new Error(payload?.error || 'Erreur')
        }

        setData(payload)
        setStatus('ready')
      })
      .catch(() => {
        if (active) {
          setStatus('error')
        }
      })

    return () => {
      active = false
    }
  }, [])

  if (status === 'loading') {
    return <section className="shell-card"><p className="text-sm text-neutral-600">Chargement de la progression...</p></section>
  }

  if (status === 'signed-out') {
    return (
      <section className="shell-card">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Progression reelle</p>
        <h2 className="mt-2 text-2xl font-black tracking-tight">Connecte-toi pour synchroniser les quiz</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Les quiz fonctionnent deja localement, mais la sauvegarde des scores, des tentatives et de la progression
          Prisma se debloque une fois connecte a l espace Academy.
        </p>
      </section>
    )
  }

  if (status === 'error' || !data) {
    return <section className="shell-card"><p className="text-sm text-rose-600">Impossible de charger la progression pour le moment.</p></section>
  }

  return (
    <section className="shell-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Progression synchronisee</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Scores reels, tentatives et blocs completes</h2>
        </div>
        <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{data.summary.bestScore}% meilleur score</span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {[
          ['Tentatives', String(data.summary.attempts)],
          ['Quiz completes', String(data.summary.completed)],
          ['Elements suivis', String(data.summary.trackedItems)],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[1.25rem] border border-black/10 bg-[#fffaf0] p-4">
            <p className="text-3xl font-black tracking-tight text-black">{value}</p>
            <p className="mt-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        {data.items.slice(0, 4).map((item) => (
          <div key={item.id} className="rounded-[1.25rem] border border-black/10 bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-lg font-black tracking-tight">
                {item.moduleKey || item.formationCode || item.progressKey}
              </h3>
              <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">
                {item.completionStatus === 'completed' ? 'Complete' : 'En cours'}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Dernier score {item.lastScore}% · meilleur score {item.bestScore}% · {item.attemptsCount} tentative(s)
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
