'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const QUESTIONS = [
  'Les objectifs de la formation ont été clairement présentés',
  'Le contenu était adapté à mon niveau et mes besoins professionnels',
  'Les exemples et cas pratiques étaient pertinents et applicables',
  'Le formateur / la plateforme a facilité l\'apprentissage efficacement',
  'La durée de la formation était appropriée au contenu',
  'L\'évaluation (quiz) reflétait bien les apprentissages',
  'Je recommanderais cette formation à un collègue',
  'Cette formation a renforcé ma compréhension de la conformité IA',
]

export default function SondagePage() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [avg, setAvg] = useState(0)

  const allAnswered = Object.keys(answers).length === QUESTIONS.length

  const submit = () => {
    const vals = Object.values(answers)
    setAvg(parseFloat((vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1)))
    setSubmitted(true)
  }

  if (submitted) return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
        <h1 className="text-2xl font-black mb-2">Merci pour votre retour !</h1>
        <p className="text-gray-500 mb-2 text-sm">Score moyen de satisfaction : <strong className="text-[#C9A84C] text-lg">{avg}/5</strong></p>
        <p className="text-xs text-gray-400 mb-8">Archivé · Cloud Run Montréal · Norme SOFEDUC 10 · 7 ans</p>
        <Link href="/attestation" className="btn-gold">🏛️ Obtenir mon attestation SOFEDUC</Link>
      </main>
    </>
  )

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-3 flex gap-2">
          <span className="bloom-badge">BTA-IARG-002</span>
          <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>Norme SOFEDUC 10</span>
        </div>
        <h1 className="text-2xl font-black tracking-tighter mb-2">Sondage d'Évaluation de la Formation</h1>
        <p className="text-gray-500 text-sm mb-8">Confidentiel · Archivé 7 ans · Cloud Run Montréal · SOC2 Type II</p>

        <div className="overflow-x-auto rounded border border-gray-200 mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-black">
                <th className="text-left px-4 py-3 text-[#C9A84C] text-xs font-black uppercase tracking-wider">Question</th>
                {[1,2,3,4,5].map(n => (
                  <th key={n} className="px-3 py-3 text-[#C9A84C] text-xs font-black text-center">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QUESTIONS.map((q, qi) => (
                <tr key={qi} className={qi % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-800">
                    <span className="font-black text-[#C9A84C] mr-1">Q{qi+1}</span> {q}
                  </td>
                  {[1,2,3,4,5].map(v => (
                    <td key={v} className="px-3 py-3 text-center">
                      <button
                        onClick={() => setAnswers(prev => ({...prev, [qi]: v}))}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          answers[qi] === v
                            ? 'bg-[#C9A84C] border-[#C9A84C]'
                            : 'border-gray-300 hover:border-[#C9A84C]'
                        }`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold text-gray-900 mb-2">
            Commentaires <span className="text-gray-400 font-normal">(facultatif)</span>
          </label>
          <textarea value={comment} onChange={e => setComment(e.target.value)} rows={3}
            placeholder="Vos suggestions d'amélioration..."
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none resize-none" />
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">{Object.keys(answers).length} / {QUESTIONS.length} questions répondues</span>
          <div className="h-2 w-48 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#C9A84C] transition-all rounded-full"
              style={{width: `${(Object.keys(answers).length / QUESTIONS.length) * 100}%`}} />
          </div>
        </div>

        <button onClick={submit} disabled={!allAnswered}
          className="btn-gold w-full text-center disabled:opacity-40 disabled:cursor-not-allowed">
          SOUMETTRE MON ÉVALUATION
        </button>
      </main>
    </>
  )
}
