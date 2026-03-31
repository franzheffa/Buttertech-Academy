import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import AuthForm from './auth-form'

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-12">
        <Suspense fallback={<div className="shell-card">Chargement de la connexion...</div>}>
          <AuthForm />
        </Suspense>
      </main>
    </>
  )
}
