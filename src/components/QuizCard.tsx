'use client'

import { useMemo, useState } from 'react'
import type { QuizQuestion } from '@/lib/quiz-data'

type QuizCardProps = {
  storageKey: string
  quizKey: string
  title: string
  description: string
  questions: QuizQuestion[]
}

export default function QuizCard({ storageKey, quizKey, title, description, questions }: QuizCardProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [submitted, setSubmitted] = useState(false)
  const [syncMessage, setSyncMessage] = useState<string | null>(null)
  const [syncing, setSyncing] = useState(false)

  const answeredCount = Object.keys(answers).length
  const ready = answeredCount === questions.length

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return total + (answers[question.id] === question.answerIndex ? 1 : 0)
    }, 0)
  }, [answers, questions])

  const percentage = questions.length ? Math.round((score / questions.length) * 100) : 0

  return (
    <section className="shell-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Quiz actif</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">{title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600">{description}</p>
        </div>
        <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{answeredCount}/{questions.length} repondues</span>
      </div>

      <div className="mt-6 space-y-4">
        {questions.map((question, index) => (
          <article key={question.id} className="rounded-[1.5rem] border border-black/10 bg-[#fffaf0] p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Question {index + 1}</p>
            <h3 className="mt-2 text-lg font-black tracking-tight">{question.prompt}</h3>
            <div className="mt-4 grid gap-3">
              {question.options.map((option, optionIndex) => {
                const selected = answers[question.id] === optionIndex
                const revealed = submitted && optionIndex === question.answerIndex
                const missed = submitted && selected && optionIndex !== question.answerIndex
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                    className={`rounded-[1.25rem] border px-4 py-3 text-left text-sm font-semibold transition ${
                      revealed
                        ? 'border-emerald-300 bg-emerald-50 text-emerald-900'
                        : missed
                          ? 'border-rose-300 bg-rose-50 text-rose-900'
                          : selected
                            ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-black'
                            : 'border-black/10 bg-white text-neutral-700 hover:border-[#C9A84C]'
                    }`}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            {submitted ? (
              <p className="mt-3 text-sm leading-6 text-neutral-600">
                <span className="font-black text-black">Repere:</span> {question.explanation}
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-black/10 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Resultat</p>
            <p className="mt-2 text-sm leading-7 text-neutral-600">
              Seuil conseille: 70%. Ce quiz garde un mode local pour la stabilite et enregistre aussi la progression Prisma
              quand l utilisateur est connecte.
            </p>
          </div>
          {submitted ? <div className="text-right"><p className="text-3xl font-black text-black">{percentage}%</p><p className="text-xs font-black uppercase tracking-[0.16em] text-neutral-500">{score}/{questions.length} bonnes reponses</p></div> : null}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={!ready || syncing}
            onClick={async () => {
              window.localStorage.setItem(storageKey, JSON.stringify(answers))
              setSubmitted(true)
              setSyncMessage(null)

              setSyncing(true)

              try {
                const response = await fetch('/api/quiz/attempts', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ quizKey, answers }),
                })

                const data = await response.json()

                if (response.ok) {
                  setSyncMessage(`Progression enregistree · ${data.result?.percentage ?? percentage}%`)
                } else if (response.status === 401) {
                  setSyncMessage('Mode local actif. Connecte-toi pour synchroniser les scores et la progression.')
                } else {
                  setSyncMessage(data?.error || 'Correction effectuee, mais la synchronisation serveur a echoue.')
                }
              } catch {
                setSyncMessage('Correction locale enregistree. Synchronisation temporairement indisponible.')
              } finally {
                setSyncing(false)
              }
            }}
            className="btn-gold disabled:cursor-not-allowed disabled:opacity-50"
          >
            {ready ? (syncing ? 'Synchronisation...' : 'Corriger le quiz') : `Repondre aux ${questions.length - answeredCount} questions restantes`}
          </button>
          <button
            type="button"
            onClick={() => {
              window.localStorage.removeItem(storageKey)
              setAnswers({})
              setSubmitted(false)
              setSyncMessage(null)
            }}
            className="btn-black"
          >
            Reinitialiser
          </button>
        </div>
        {syncMessage ? <p className="mt-4 text-sm leading-6 text-neutral-600">{syncMessage}</p> : null}
      </div>
    </section>
  )
}
