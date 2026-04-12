import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export type AcademyIdentity = {
  academyAccessId: string | null
  email: string
  role: string
  displayName: string | null
}

export async function getCurrentAcademyIdentity(): Promise<AcademyIdentity | null> {
  const session = await getServerSession(authOptions)
  const email = session?.user?.email?.trim().toLowerCase()
  const role = String(session?.user?.role || '').trim().toLowerCase()

  if (!email || !role) {
    return null
  }

  const academyAccessId = session?.user?.id ?? null

  if (academyAccessId) {
    return {
      academyAccessId,
      email,
      role,
      displayName: session?.user?.name ?? null,
    }
  }

  const account = await prisma.academyAccess.findUnique({
    where: {
      email_role: {
        email,
        role,
      },
    },
    select: {
      id: true,
      displayName: true,
    },
  })

  return {
    academyAccessId: account?.id ?? null,
    email,
    role,
    displayName: session?.user?.name ?? account?.displayName ?? null,
  }
}
