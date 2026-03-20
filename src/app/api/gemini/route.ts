// BUTTERTECH ACADEMY · API Gemini · Next.js App Router
// BTA-IARG-002 · Cloud Run Montréal · SOC2 Type II

import { NextRequest, NextResponse } from 'next/server'

function pickBestModel(list: { models?: Array<{ name: string; supportedGenerationMethods?: string[] }> }) {
  const models = list?.models ?? []
  const candidates = models.filter(m =>
    m.name.includes('gemini') &&
    (m.supportedGenerationMethods ?? []).includes('generateContent')
  )
  const flash = candidates.find(m => m.name.toLowerCase().includes('flash'))
  return (flash ?? candidates[0] ?? models[0])?.name ?? null
}

export async function POST(req: NextRequest) {
  try {
    const key = process.env.GEMINI_API_KEY
    if (!key) {
      return NextResponse.json({ text: 'MODE DEMO: clé API manquante.', mode: 'demo' })
    }

    const body = await req.json()
    const prompt = (body.prompt ?? body.text ?? '').toString().trim()
    const system = (body.system ?? 'Tu es Agent Smith-Heffa, expert IA et conformité SOFEDUC. Réponds en français, concis et structuré.').toString()

    if (!prompt) {
      return NextResponse.json({ text: 'MODE DEMO: prompt vide.', mode: 'demo' })
    }

    let model = (process.env.GEMINI_MODEL ?? '').trim()

    if (!model) {
      const lr = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${encodeURIComponent(key)}`)
      const list = await lr.json()
      if (!lr.ok) return NextResponse.json({ text: list?.error?.message ?? 'MODE DEMO: ListModels failed.', mode: 'demo' })
      model = pickBestModel(list) ?? ''
    }

    if (!model) return NextResponse.json({ text: 'MODE DEMO: aucun modèle compatible.', mode: 'demo' })

    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${encodeURIComponent(key)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: system + '\n\n' + prompt }] }
          ],
          generationConfig: { temperature: 0.4, maxOutputTokens: 768 },
        }),
      }
    )

    const data = await r.json()
    const text =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text).filter(Boolean).join('') ??
      data?.error?.message ??
      'Aucune réponse exploitable.'

    return NextResponse.json({ text, mode: r.ok ? 'live' : 'demo', model })
  } catch (e) {
    return NextResponse.json({ text: 'MODE DEMO: Gemini indisponible.', mode: 'demo', error: String(e) })
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
