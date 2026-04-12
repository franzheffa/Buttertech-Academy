'use client'

import { signIn } from 'next-auth/react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

type AcademyRole = 'student' | 'teacher' | 'admin'

const roleLabels: Record<AcademyRole, string> = {
  student: 'Etudiants',
  teacher: 'Professeurs',
  admin: 'Etablissements',
}

const roleTarget: Record<AcademyRole, string> = {
  student: '/espace/apprenant',
  teacher: '/espace/formateur',
  admin: '/espace/etablissement',
}

export default function AuthForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || ''
  const error = searchParams.get('error')
  const [loading, setLoading] = useState(false)
  const [registering, setRegistering] = useState(false)
  const [tab, setTab] = useState<'login' | 'register'>('login')
  const [role, setRole] = useState<AcademyRole>('student')
  const [registerError, setRegisterError] = useState('')
  const [registerSuccess, setRegisterSuccess] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('email') || '')
    const password = String(formData.get('password') || '')

    await signIn('credentials', {
      email,
      password,
      role,
      callbackUrl: callbackUrl || roleTarget[role],
    })

    setLoading(false)
  }

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setRegistering(true)
    setRegisterError('')
    setRegisterSuccess('')

    const formData = new FormData(event.currentTarget)
    const email = String(formData.get('registerEmail') || '').trim()
    const password = String(formData.get('registerPassword') || '')
    const displayName = String(formData.get('displayName') || '').trim()

    try {
      const response = await fetch('/api/access/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, displayName, role }),
      })

      const payload = await response.json()

      if (!response.ok) {
        setRegisterError(payload?.error || 'Impossible de creer ton acces pour le moment.')
        setRegistering(false)
        return
      }

      setRegisterSuccess('Acces cree. Tu peux maintenant te connecter avec ce meme email et ce mot de passe.')
      setTab('login')

      await signIn('credentials', {
        email,
        password,
        role,
        callbackUrl: callbackUrl || roleTarget[role],
      })
    } catch {
      setRegisterError('Impossible de creer ton acces pour le moment.')
    }

    setRegistering(false)
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <section className="dark-shell gold-grid">
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Acces securise</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Connexion Academy</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-300">
          L acces aux espaces etudiants, professeurs, etablissements, attestations et suivi de cohortes passe par une session securisee Buttertech Academy.
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
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-neutral-300">Etudiants: progression, quiz, remises et attestations.</div>
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-neutral-300">Professeurs: cohortes, grilles, preuves et delivery.</div>
          <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-neutral-300">Etablissements: licences, bundles IA, achats et pilotage campus.</div>
        </div>
      </section>

      <section className="shell-card">
        <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Authentification</p>
        <div className="mt-4 flex gap-2">
          <button type="button" onClick={() => setTab('login')} className={`flex-1 rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.18em] ${tab === 'login' ? 'border-black bg-black text-[#C9A84C]' : 'border-black/10 bg-white text-neutral-500'}`}>Se connecter</button>
          <button type="button" onClick={() => setTab('register')} className={`flex-1 rounded-full border px-4 py-3 text-xs font-black uppercase tracking-[0.18em] ${tab === 'register' ? 'border-black bg-black text-[#C9A84C]' : 'border-black/10 bg-white text-neutral-500'}`}>Creer un acces</button>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {(Object.keys(roleLabels) as AcademyRole[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setRole(value)}
              className={`rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${role === value ? 'border-[#C9A84C] bg-[#C9A84C] text-black' : 'border-black/10 bg-white text-neutral-600'}`}
            >
              {roleLabels[value]}
            </button>
          ))}
        </div>

        {tab === 'login' ? (
          <>
            <h2 className="mt-5 text-2xl font-black tracking-tight">Ouvrir votre session</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Utilise ton email habituel, choisis le bon role Academy, puis entre le mot de passe du role qui t a ete active.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Email
                <input name="email" type="email" required autoComplete="username" className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]" placeholder="nom@organisation.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Mot de passe
                <input name="password" type="password" required autoComplete="current-password" className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]" placeholder="••••••••••" />
              </label>
              <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/8 px-4 py-3 text-sm text-neutral-700">Le role choisi determine automatiquement l espace d arrivee apres connexion.</div>
              {registerSuccess ? <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{registerSuccess}</div> : null}
              {error ? <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">Connexion refusee. Verifie le role choisi, ton email et le mot de passe du role active pour ton acces.</div> : null}
              <button type="submit" disabled={loading} className="btn-gold text-center disabled:opacity-60">{loading ? 'Connexion...' : 'Se connecter'}</button>
            </form>
          </>
        ) : (
          <div className="mt-5 grid gap-4">
            <h2 className="text-2xl font-black tracking-tight">Creer un acces Academy</h2>
            <p className="text-sm leading-7 text-neutral-600">Choisis ton role Academy, cree ton mot de passe, puis entre directement dans ton espace sans quitter le site.</p>
            <form onSubmit={handleRegister} className="grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Nom affiche
                <input name="displayName" type="text" className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]" placeholder="Prenom Nom" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Email
                <input name="registerEmail" type="email" required autoComplete="email" className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]" placeholder="nom@organisation.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-neutral-700">
                Mot de passe
                <input name="registerPassword" type="password" required minLength={8} autoComplete="new-password" className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#C9A84C]" placeholder="8 caracteres minimum" />
              </label>
              {registerError ? <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{registerError}</div> : null}
              <button type="submit" disabled={registering} className="btn-gold text-center disabled:opacity-60">{registering ? 'Creation...' : `Creer un acces ${roleLabels[role]}`}</button>
            </form>
          </div>
        )}
      </section>
    </div>
  )
}
