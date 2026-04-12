import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { hashPassword } from '@/lib/passwords'

type AcademyRole = 'student' | 'teacher' | 'admin'

function normalizeRole(input: string): AcademyRole | null {
  if (input === 'teacher') return 'teacher'
  if (input === 'student') return 'student'
  if (input === 'admin') return 'admin'
  return null
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = String(body?.email || '').trim().toLowerCase()
    const password = String(body?.password || '')
    const displayName = String(body?.displayName || '').trim()
    const role = normalizeRole(String(body?.role || '').trim().toLowerCase())

    if (!email || !email.includes('@') || !password || password.length < 8 || !role) {
      return NextResponse.json(
        { error: 'Informations invalides. Utilise un email valide, un mot de passe de 8 caracteres minimum et un role autorise.' },
        { status: 400 },
      )
    }

    const passwordHash = hashPassword(password)

    const account = await prisma.academyAccess.upsert({
      where: { email_role: { email, role } },
      update: { displayName: displayName || null, passwordHash },
      create: { email, role, displayName: displayName || null, passwordHash },
    })

    return NextResponse.json({ ok: true, account: { id: account.id, email: account.email, role: account.role } })
  } catch (error) {
    console.error('academy access register failed', error)
    return NextResponse.json({ error: 'Impossible de creer l acces pour le moment.' }, { status: 500 })
  }
}
