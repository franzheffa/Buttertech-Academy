'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const QUESTIONS = [
  'Les objectifs de la formation ont ete clairement presentes des le depart',
  'Le contenu etait adapte a mon niveau et a mes besoins professionnels',
  'Les exemples et cas pratiques etaient pertinents et applicables',
  'Le formateur ou la plateforme a facilite l apprentissage de facon efficace',
  'La duree de la formation etait appropriee par rapport au contenu presente',
  'L evaluation par quiz refletait bien les apprentissages de la formation',
  'Je recommanderais cette formation a un collegue ou a mon organisation',
  'Cette formation a renforce ma comprehension de la conformite IA',
]

export default function SondagePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [avg, setAvg] = useState(0)

  const progress = Object.keys(answers).length
  const allAnswered = progress === QUESTIONS.length

  const submit = () => {
    const vals = Object.values(answers)
    setAvg(parseFloat((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1)))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-2xl px-6 py-20 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A84C] text-4xl">✓</div>
          <h1 className="mb-3 text-2xl font-black">Merci pour votre retour.</h1>
          <p className="mb-2 text-sm text-gray-600">Score moyen de satisfaction :</p>
          <p className="mb-2 text-5xl font-black text-[#C9A84C]">{avg}<span className="text-xl">/5</span></p>
          <p className="mb-10 text-xs text-gray-400">Archive pedagogique · Cloud Run Montreal · 7 ans</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/attestation" className="btn-gold">Obtenir mon attestation</Link>
            <Link href="/espace" className="btn-black">← Mon espace</Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <div className="mb-3 flex flex-wrap gap-2">
          <span className="bloom-badge">BTA-IARG-002</span>
          <span className="bloom-badge" style={{ background: '#000', color: '#C9A84C' }}>Evaluation de satisfaction</span>
        </div>
        <h1 className="mb-2 text-2xl font-black tracking-tighter">Sondage d evaluation de la formation</h1>
        <p className="mb-8 text-sm text-gray-500">Confidentiel · Anonymise · Archive 7 ans · Cloud Run Montreal · SOC2 Type II</p>

        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-bold text-gray-500">{progress} / {QUESTIONS.length} questions repondues</span>
          <span className="text-xs font-bold text-[#C9A84C]">{Math.round((progress / QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-gray-100">
          <div className="h-full rounded-full bg-[#C9A84C] transition-all" style={{ width: `${(progress / QUESTIONS.length) * 100}%` }} />
        </div>

        <div className="mb-4 flex gap-3 text-xs font-bold text-gray-500">
          <span>1 = Tres insatisfait</span>
          <span>·</span>
          <span>3 = Neutre</span>
          <span>·</span>
          <span>5 = Tres satisfait</span>
        </div>

        <div className="mb-6 overflow-x-auto rounded border border-gray-200">
          <table className="min-w-[500px] w-full text-sm">
            <thead>
              <tr className="bg-black">
                <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider text-[#C9A84C]">Question</th>
                {[1, 2, 3, 4, 5].map((n) => (
                  <th key={n} className="w-12 px-4 py-3 text-center text-xs font-black text-[#C9A84C]">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QUESTIONS.map((question, qi) => (
                <tr key={question} className={qi % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 leading-snug text-gray-800"><span className="mr-1.5 font-black text-[#C9A84C]">Q{qi + 1}</span>{question}</td>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <td key={value} className="px-4 py-3 text-center">
                      <button
                        onClick={() => setAnswers((prev) => ({ ...prev, [qi]: value }))}
                        className={`h-8 w-8 rounded-full border-2 transition-all hover:scale-110 ${answers[qi] === value ? 'scale-110 border-[#C9A84C] bg-[#C9A84C]' : 'border-gray-300 hover:border-[#C9A84C]'}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <label className="mb-2 block text-sm font-black uppercase tracking-wider text-gray-900">
            Commentaires <span className="normal-case tracking-normal text-gray-400 font-normal">(facultatif)</span>
          </label>
          <textarea value={comment} onChange={(event) => setComment(event.target.value)} rows={3} placeholder="Vos suggestions d amelioration ou points forts de la formation..." className="w-full resize-none rounded border border-gray-300 px-4 py-3 text-sm transition-colors focus:border-[#C9A84C] focus:outline-none" />
        </div>

        <button onClick={submit} disabled={!allAnswered} className="btn-gold w-full text-center text-sm disabled:cursor-not-allowed disabled:opacity-40">
          {allAnswered ? 'Soumettre mon evaluation' : `Repondre aux ${QUESTIONS.length - progress} questions restantes...`}
        </button>
      </main>
    </>
  )
}
