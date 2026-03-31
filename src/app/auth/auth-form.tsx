'use client'

import { signIn } from 'next-auth/react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function AuthForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/espace'
  const error = searchParams.get('error')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')

    await signIn('credentials', {
      email,
      password,
      callbackUrl,
    })

    setLoading(false)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="dark-shell gold-grid">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Accès sécurisé</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Connexion Academy</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
          L’accès aux espaces étudiants, professeurs, attestations et suivi de cohorte passe par une session sécurisée Buttertech Academy.
        </p>
        <div className="mt-6 grid gap-3">
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-neutral-300">
            Étudiants: progression, blocs de cours, remises et attestations.
          </div>
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-neutral-300">
            Professeurs: cohorte, évaluation, rubriques, preuves et conformité.
          </div>
        </div>
      </section>

      <section className="shell-card">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Authentification</p>
        <h2 className="mt-3 text-2xl font-black tracking-tight">Ouvrir votre session</h2>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Utilise les identifiants Academy configurés côté production.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm font-semibold text-neutral-700">
            Email
            <input
              name="email"
              type="email"
              required
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]"
              placeholder="nom@buttertech.io"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-neutral-700">
            Mot de passe
            <input
              name="password"
              type="password"
              required
              className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]"
              placeholder="••••••••••"
            />
          </label>

          {error ? (
            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              Identifiants invalides ou session non autorisée.
            </div>
          ) : null}

          <button type="submit" disabled={loading} className="btn-gold text-center disabled:opacity-60">
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>
        </form>
      </section>
    </div>
  )
}
