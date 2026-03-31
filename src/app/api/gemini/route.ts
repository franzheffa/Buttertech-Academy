import { NextRequest, NextResponse } from 'next/server'

type Provider = 'auto' | 'gemini' | 'openai' | 'claude'

function normalizeProvider(value: unknown): Provider {
  const provider = String(value || 'auto').trim().toLowerCase()
  if (provider === 'gemini' || provider === 'openai' || provider === 'claude') {
    return provider
  }
  return 'auto'
}

function providerOrder(provider: Provider): Array<'gemini' | 'openai' | 'claude'> {
  if (provider === 'gemini') return ['gemini']
  if (provider === 'openai') return ['openai']
  if (provider === 'claude') return ['claude']
  return ['gemini', 'openai', 'claude']
}

async function runGemini(prompt: string, system: string) {
  const key = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY
  if (!key) throw new Error('Missing GOOGLE_API_KEY')

  const model = (process.env.GEMINI_MODEL || 'gemini-2.5-flash').trim()

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.4, maxOutputTokens: 900 },
      }),
    },
  )

  const data = await response.json()
  const text =
    data?.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text || '').join('') ||
    data?.error?.message

  if (!response.ok || !text) throw new Error(text || 'Gemini failed')

  return { provider: 'gemini', model, text }
}

async function runOpenAI(prompt: string, system: string) {
  const key = process.env.OPENAI_API_KEY
  if (!key) throw new Error('Missing OPENAI_API_KEY')

  const model = (process.env.OPENAI_MODEL || 'gpt-5').trim()

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    },
    body: JSON.stringify({
      model,
      input: [
        {
          role: 'system',
          content: [{ type: 'input_text', text: system }],
        },
        {
          role: 'user',
          content: [{ type: 'input_text', text: prompt }],
        },
      ],
    }),
  })

  const data = await response.json()
  const text =
    data?.output_text ||
    data?.error?.message ||
    data?.output
      ?.flatMap((item: { content?: Array<{ text?: string }> }) => item.content || [])
      .map((part: { text?: string }) => part.text || '')
      .join('')

  if (!response.ok || !text) throw new Error(text || 'OpenAI failed')

  return { provider: 'openai', model, text }
}

async function runClaude(prompt: string, system: string) {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) throw new Error('Missing ANTHROPIC_API_KEY')

  const model = (process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20251001').trim()

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model,
      max_tokens: 900,
      system,
      messages: [{ role: 'user', content: prompt }],
    }),
  })

  const data = await response.json()
  const text =
    data?.content?.map((part: { text?: string }) => part.text || '').join('') ||
    data?.error?.message

  if (!response.ok || !text) throw new Error(text || 'Claude failed')

  return { provider: 'claude', model, text }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const prompt = String(body?.prompt || body?.text || '').trim()
    const system = String(
      body?.system ||
        'Tu es Agent Smith-Heffa pour Buttertech Academy. Tu guides les etudiants et professeurs en francais, avec une reponse pedagogique, concise, actionnable, structuree en etapes.',
    )
    const provider = normalizeProvider(body?.provider)
    const journey = String(body?.journey || 'general')

    if (!prompt) {
      return NextResponse.json({ ok: false, mode: 'demo', text: 'Prompt vide.' }, { status: 400 })
    }

    const enrichedPrompt = `Contexte parcours: ${journey}\n\n${prompt}`
    const errors: string[] = []

    for (const current of providerOrder(provider)) {
      try {
        if (current === 'gemini') {
          const result = await runGemini(enrichedPrompt, system)
          return NextResponse.json({ ok: true, mode: 'live', ...result })
        }
        if (current === 'openai') {
          const result = await runOpenAI(enrichedPrompt, system)
          return NextResponse.json({ ok: true, mode: 'live', ...result })
        }
        const result = await runClaude(enrichedPrompt, system)
        return NextResponse.json({ ok: true, mode: 'live', ...result })
      } catch (error) {
        errors.push(error instanceof Error ? error.message : `Erreur ${current}`)
      }
    }

    return NextResponse.json({
      ok: true,
      mode: 'demo',
      provider: 'demo',
      model: 'fallback',
      text:
        'Aucun fournisseur IA n est disponible en direct. Configure GOOGLE_API_KEY, OPENAI_API_KEY et ANTHROPIC_API_KEY pour activer le routage complet du simulateur.',
      errors,
    })
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        mode: 'demo',
        text: 'Le simulateur n a pas pu traiter la demande.',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: '/api/gemini',
    providers: {
      gemini: Boolean(process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY),
      openai: Boolean(process.env.OPENAI_API_KEY),
      claude: Boolean(process.env.ANTHROPIC_API_KEY),
    },
    models: {
      gemini: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
      openai: process.env.OPENAI_MODEL || 'gpt-5',
      claude: process.env.CLAUDE_MODEL || 'claude-sonnet-4-5-20251001',
    },
    router: 'gemini-first',
  })
}
