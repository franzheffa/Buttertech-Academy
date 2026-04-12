import { NextResponse } from 'next/server'
import { getCurrentAcademyIdentity } from '@/lib/academy-session'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const identity = await getCurrentAcademyIdentity()

    if (!identity) {
      return NextResponse.json({ error: 'Authentification requise.' }, { status: 401 })
    }

    const progress = await prisma.learningProgress.findMany({
      where: {
        email: identity.email,
        role: identity.role,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })

    const attempts = await prisma.quizAttempt.count({
      where: {
        email: identity.email,
        role: identity.role,
      },
    })

    const completed = progress.filter((item) => item.completionStatus === 'completed').length
    const bestScore = progress.length ? Math.max(...progress.map((item) => item.bestScore)) : 0

    return NextResponse.json({
      ok: true,
      summary: {
        attempts,
        completed,
        bestScore,
        trackedItems: progress.length,
      },
      items: progress.map((item) => ({
        id: item.id,
        progressKey: item.progressKey,
        formationCode: item.formationCode,
        moduleKey: item.moduleKey,
        bestScore: item.bestScore,
        lastScore: item.lastScore,
        attemptsCount: item.attemptsCount,
        completionStatus: item.completionStatus,
        completedAt: item.completedAt,
        updatedAt: item.updatedAt,
      })),
    })
  } catch (error) {
    console.error('quiz progress route failed', error)
    return NextResponse.json({ error: 'Impossible de charger la progression.' }, { status: 500 })
  }
}
