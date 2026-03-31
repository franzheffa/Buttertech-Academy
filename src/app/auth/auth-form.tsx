'use client'

import { signIn } from 'next-auth/react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function AuthForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || ''
  const error = searchParams.get('error')
  const [loading, setLoading] = useState(false)
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [role, setRole] = useState<'student' | 'teacher'>('student')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')
    const targetUrl = callbackUrl || (role === 'teacher' ? '/espace/formateur' : '/espace/apprenant')

    await signIn('credentials', {
      email,
      password,
      role,
      callbackUrl: targetUrl,
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
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="flex min-h-[112px] items-center justify-center rounded-[1.25rem] border border-white/10 bg-white p-4">
            <img src="/partners/google-for-education-partner-horizontal-wide.png" alt="Google for Education Partner" className="max-h-16 w-auto object-contain" />
          </div>
          <div className="flex min-h-[112px] items-center justify-center rounded-[1.25rem] border border-white/10 bg-white p-4">
            <img src="/partners/google-chromebook.svg" alt="Google Chromebook" className="max-h-14 w-auto object-contain" />
          </div>
        </div>
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
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => setTab('login')}
            className={`flex-1 rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.18em] ${
              tab === 'login' ? 'border-black bg-black text-[#C9A84C]' : 'border-black/10 bg-white text-neutral-500'
            }`}
          >
            Se connecter
          </button>
          <button
            type="button"
            onClick={() => setTab('register')}
            className={`flex-1 rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.18em] ${
              tab === 'register' ? 'border-black bg-black text-[#C9A84C]' : 'border-black/10 bg-white text-neutral-500'
            }`}
          >
            Créer un accès
          </button>
        </div>

        {tab === 'login' ? (
          <>
            <h2 className="mt-5 text-2xl font-black tracking-tight">Ouvrir votre session</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">
              Utilise ton email habituel, choisis le bon rôle Academy, puis entre le mot de passe du rôle qui t’a été activé.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                ['student', 'Étudiants'],
                ['teacher', 'Professeurs'],
              ].map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setRole(value as 'student' | 'teacher')}
                  className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${
                    role === value ? 'border-[#C9A84C] bg-[#C9A84C] text-black' : 'border-black/10 bg-white text-neutral-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="soft-panel">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Étudiants</p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  Accès à la progression, aux blocs, aux remises, aux attestations et aux activités synchrones et asynchrones.
                </p>
              </div>
              <div className="soft-panel">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Professeurs</p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  Accès aux cohortes, aux grilles d’évaluation, aux preuves pédagogiques et au pilotage qualité.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <input name="role" type="hidden" value={role} />

              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="username"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]"
                  placeholder="nom@entreprise.com"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Mot de passe
                <input
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]"
                  placeholder="••••••••••"
                />
              </label>

              <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/8 px-4 py-3 text-sm text-neutral-700">
                Le rôle choisi détermine automatiquement l’espace d’arrivée après connexion.
              </div>

              {error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  Connexion refusée. Vérifie le rôle choisi, ton email et le mot de passe du rôle activé pour ton accès.
                </div>
              ) : null}

              <button type="submit" disabled={loading} className="btn-gold text-center disabled:opacity-60">
                {loading ? 'Connexion...' : 'Se connecter'}
              </button>
            </form>
          </>
        ) : (
          <div className="mt-5 grid gap-4">
            <h2 className="text-2xl font-black tracking-tight">Créer un accès Academy</h2>
            <p className="text-sm leading-7 text-neutral-600">
              L’activation passe par un accès étudiants ou professeurs. Choisis ton rôle, puis demande l’activation du mot de passe correspondant.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="soft-panel">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Étudiants</p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">Accès progression, remises, attestations, révisions et parcours synchrones/asynchrones.</p>
              </div>
              <div className="soft-panel">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#C9A84C]">Professeurs</p>
                <p className="mt-3 text-sm leading-6 text-neutral-700">Accès cohortes, évaluations, rubriques, feedback, conformité et suivi qualité.</p>
              </div>
            </div>
            <a
              href="mailto:franzheffa@buttertech.io?subject=Demande%20d%27acc%C3%A8s%20Buttertech%20Academy&body=Bonjour%2C%0AJe%20souhaite%20cr%C3%A9er%20mon%20acc%C3%A8s%20Academy.%0AR%C3%B4le%20souhait%C3%A9%20%3A%20%C3%89tudiants%20ou%20Professeurs.%0AEmail%20Buttertech%20%3A%20"
              className="btn-black text-center"
            >
              Demander mon accès
            </a>
          </div>
        )}
      </section>
    </div>
  )
}
