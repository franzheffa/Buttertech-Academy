'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const QUESTIONS = [
  'Les objectifs de la formation ont été clairement présentés dès le départ',
  'Le contenu était adapté à mon niveau et à mes besoins professionnels',
  'Les exemples et cas pratiques étaient pertinents et immédiatement applicables',
  'Le formateur / la plateforme a facilité l\'apprentissage de façon efficace',
  'La durée de la formation était appropriée par rapport au contenu présenté',
  'L\'évaluation (quiz) reflétait bien les apprentissages de la formation',
  'Je recommanderais cette formation à un collègue ou à mon organisation',
  'Cette formation a renforcé ma compréhension de la conformité IA',
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

  if (submitted) return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="w-20 h-20 bg-[#C9A84C] rounded-full flex items-center justify-center text-4xl mx-auto mb-6">✓</div>
        <h1 className="text-2xl font-black mb-3">Merci pour votre retour !</h1>
        <p className="text-gray-600 mb-2 text-sm">Score moyen de satisfaction :</p>
        <p className="text-5xl font-black text-[#C9A84C] mb-2">{avg}<span className="text-xl">/5</span></p>
        <p className="text-xs text-gray-400 mb-10">Archivé · Cloud Run Montréal · Norme SOFEDUC 10 · 7 ans</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/attestation" className="btn-gold">🏛️ Obtenir mon attestation SOFEDUC</Link>
          <Link href="/espace" className="btn-black">← Mon espace</Link>
        </div>
      </main>
    </>
  )

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-3 flex gap-2 flex-wrap">
          <span className="bloom-badge">BTA-IARG-002</span>
          <span className="bloom-badge" style={{background:'#000',color:'#C9A84C'}}>Norme SOFEDUC 10</span>
        </div>
        <h1 className="text-2xl font-black tracking-tighter mb-2">Sondage d'Évaluation de la Formation</h1>
        <p className="text-gray-500 text-sm mb-8">Confidentiel · Anonymisé · Archivé 7 ans · Cloud Run Montréal · SOC2 Type II</p>

        {/* Barre de progression */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500 font-bold">{progress} / {QUESTIONS.length} questions répondues</span>
          <span className="text-xs text-[#C9A84C] font-bold">{Math.round((progress/QUESTIONS.length)*100)}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-8">
          <div className="h-full bg-[#C9A84C] rounded-full transition-all" style={{width:`${(progress/QUESTIONS.length)*100}%`}} />
        </div>

        {/* Légende */}
        <div className="flex gap-3 mb-4 text-xs text-gray-500 font-bold">
          <span>1 = Très insatisfait</span>
          <span>·</span>
          <span>3 = Neutre</span>
          <span>·</span>
          <span>5 = Très satisfait</span>
        </div>

        {/* Questions */}
        <div className="overflow-x-auto rounded border border-gray-200 mb-6">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr className="bg-black">
                <th className="text-left px-4 py-3 text-[#C9A84C] text-xs font-black uppercase tracking-wider">Question</th>
                {[1,2,3,4,5].map(n => (
                  <th key={n} className="px-4 py-3 text-[#C9A84C] text-xs font-black text-center w-12">{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {QUESTIONS.map((q, qi) => (
                <tr key={qi} className={qi % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-gray-800 leading-snug">
                    <span className="font-black text-[#C9A84C] mr-1.5">Q{qi+1}</span>{q}
                  </td>
                  {[1,2,3,4,5].map(v => (
                    <td key={v} className="px-4 py-3 text-center">
                      <button
                        onClick={() => setAnswers(prev => ({...prev, [qi]: v}))}
                        className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                          answers[qi] === v
                            ? 'bg-[#C9A84C] border-[#C9A84C] scale-110'
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

        {/* Commentaire */}
        <div className="mb-6">
          <label className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wider">
            Commentaires <span className="text-gray-400 font-normal normal-case tracking-normal">(facultatif)</span>
          </label>
          <textarea value={comment} onChange={e => setComment(e.target.value)} rows={3}
            placeholder="Vos suggestions d'amélioration ou points forts de la formation..."
            className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#C9A84C] resize-none transition-colors" />
        </div>

        <button onClick={submit} disabled={!allAnswered}
          className="btn-gold w-full text-center disabled:opacity-40 disabled:cursor-not-allowed text-sm">
          {allAnswered ? 'SOUMETTRE MON ÉVALUATION' : `Répondre aux ${QUESTIONS.length - progress} questions restantes...`}
        </button>
      </main>
    </>
  )
}
