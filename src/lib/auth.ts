import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import { verifyPassword } from '@/lib/passwords'

type AcademyAccount = {
  id: string
  name: string
  email: string
  password: string
  role: 'student' | 'teacher' | 'admin'
}

function getConfiguredAccounts(): AcademyAccount[] {
  const accounts: AcademyAccount[] = []

  if (process.env.ACADEMY_STUDENT_EMAIL && process.env.ACADEMY_STUDENT_PASSWORD) {
    accounts.push({
      id: 'academy-student',
      name: 'Espace Etudiants',
      email: process.env.ACADEMY_STUDENT_EMAIL,
      password: process.env.ACADEMY_STUDENT_PASSWORD,
      role: 'student',
    })
  }

  if (process.env.ACADEMY_TEACHER_EMAIL && process.env.ACADEMY_TEACHER_PASSWORD) {
    accounts.push({
      id: 'academy-teacher',
      name: 'Espace Professeurs',
      email: process.env.ACADEMY_TEACHER_EMAIL,
      password: process.env.ACADEMY_TEACHER_PASSWORD,
      role: 'teacher',
    })
  }

  if (process.env.ACADEMY_ADMIN_EMAIL && process.env.ACADEMY_ADMIN_PASSWORD) {
    accounts.push({
      id: 'academy-admin',
      name: 'Administration Academy',
      email: process.env.ACADEMY_ADMIN_EMAIL,
      password: process.env.ACADEMY_ADMIN_PASSWORD,
      role: 'admin',
    })
  }

  return accounts
}

function getSharedRoleAccount(email: string, password: string, role: string) {
  const normalizedRole = role === 'teacher' ? 'teacher' : role === 'student' ? 'student' : null
  const normalizedEmail = email.trim().toLowerCase()

  if (!normalizedRole || !normalizedEmail.includes('@')) {
    return null
  }

  if (normalizedRole === 'student' && process.env.ACADEMY_STUDENT_PASSWORD && password === process.env.ACADEMY_STUDENT_PASSWORD) {
    return {
      id: `academy-student-${normalizedEmail}`,
      name: 'Espace Etudiants',
      email: normalizedEmail,
      role: 'student' as const,
    }
  }

  if (normalizedRole === 'teacher' && process.env.ACADEMY_TEACHER_PASSWORD && password === process.env.ACADEMY_TEACHER_PASSWORD) {
    return {
      id: `academy-teacher-${normalizedEmail}`,
      name: 'Espace Professeurs',
      email: normalizedEmail,
      role: 'teacher' as const,
    }
  }

  return null
}

async function getDatabaseAccount(email: string, password: string, role: string) {
  const normalizedRole = role === 'teacher' ? 'teacher' : role === 'student' ? 'student' : role === 'admin' ? 'admin' : null
  const normalizedEmail = email.trim().toLowerCase()

  if (!normalizedRole || !normalizedEmail.includes('@')) {
    return null
  }

  try {
    const account = await prisma.academyAccess.findUnique({
      where: {
        email_role: {
          email: normalizedEmail,
          role: normalizedRole,
        },
      },
    })

    if (!account || !verifyPassword(password, account.passwordHash)) {
      return null
    }

    return {
      id: account.id,
      name:
        account.displayName ||
        (normalizedRole === 'teacher'
          ? 'Espace Professeurs'
          : normalizedRole === 'admin'
            ? 'Administration Academy'
            : 'Espace Etudiants'),
      email: account.email,
      role: normalizedRole as 'student' | 'teacher' | 'admin',
    }
  } catch (error) {
    console.error('academy auth database lookup failed', error)
    return null
  }
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth',
  },
  providers: [
    CredentialsProvider({
      name: 'Buttertech Academy',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
        role: { label: 'Role', type: 'text' },
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase()
        const password = credentials?.password ?? ''
        const role = String(credentials?.role || '').trim().toLowerCase()

        if (!email || !password) {
          return null
        }

        const databaseAccount = await getDatabaseAccount(email, password, role)

        if (databaseAccount) {
          return databaseAccount
        }

        const account = getConfiguredAccounts().find(
          (item) => item.email.trim().toLowerCase() === email && item.password === password,
        )

        if (!account) {
          const sharedAccount = getSharedRoleAccount(email, password, role)
          if (!sharedAccount) {
            return null
          }
          return sharedAccount
        }

        return {
          id: account.id,
          name: account.name,
          email: account.email,
          role: account.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = (user as { role?: string }).role ?? 'student'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = typeof token.id === 'string' ? token.id : typeof token.sub === 'string' ? token.sub : undefined
        session.user.role = typeof token.role === 'string' ? token.role : 'student'
      }
      return session
    },
  },
}
