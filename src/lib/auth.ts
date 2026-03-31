import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

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
      },
      async authorize(credentials) {
        const email = credentials?.email?.trim().toLowerCase()
        const password = credentials?.password ?? ''

        if (!email || !password) {
          return null
        }

        const account = getConfiguredAccounts().find(
          (item) => item.email.trim().toLowerCase() === email && item.password === password,
        )

        if (!account) {
          return null
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
        token.role = (user as { role?: string }).role ?? 'student'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = typeof token.role === 'string' ? token.role : 'student'
      }
      return session
    },
  },
}
