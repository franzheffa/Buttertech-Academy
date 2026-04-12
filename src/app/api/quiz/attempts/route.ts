import { NextResponse } from 'next/server'
import { getCurrentAcademyIdentity } from '@/lib/academy-session'
import { prisma } from '@/lib/prisma'
import { getQuizDefinition } from '@/lib/quiz-registry'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const identity = await getCurrentAcademyIdentity()

    if (!identity) {
      return NextResponse.json({ error: 'Connecte-toi pour enregistrer la progression.' }, { status: 401 })
    }

    const body = await request.json()
    const quizKey = String(body?.quizKey || '').trim()
    const rawAnswers = body?.answers

    if (!quizKey || !rawAnswers || typeof rawAnswers !== 'object' || Array.isArray(rawAnswers)) {
      return NextResponse.json({ error: 'Reponses invalides.' }, { status: 400 })
    }

    const definition = getQuizDefinition(quizKey)

    if (!definition) {
      return NextResponse.json({ error: 'Quiz introuvable.' }, { status: 404 })
    }

    const answers = rawAnswers as Record<string, number>
    const score = definition.questions.reduce((total, question) => {
      return total + (answers[question.id] === question.answerIndex ? 1 : 0)
    }, 0)
    const totalQuestions = definition.questions.length
    const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0
    const passed = percentage >= 70

    await prisma.quizAttempt.create({
      data: {
        academyAccessId: identity.academyAccessId,
        email: identity.email,
        role: identity.role,
        quizKey,
        formationCode: definition.formationCode,
        moduleKey: definition.moduleKey,
        score,
        totalQuestions,
        percentage,
        passed,
        answers,
      },
    })

    const existingProgress = await prisma.learningProgress.findFirst({
      where: {
        progressKey: quizKey,
        email: identity.email,
        role: identity.role,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })

    if (existingProgress) {
      await prisma.learningProgress.update({
        where: { id: existingProgress.id },
        data: {
          academyAccessId: identity.academyAccessId ?? existingProgress.academyAccessId,
          bestScore: Math.max(existingProgress.bestScore, percentage),
          lastScore: percentage,
          attemptsCount: existingProgress.attemptsCount + 1,
          completionStatus: passed ? 'completed' : 'in_progress',
          completedAt: passed ? new Date() : existingProgress.completedAt,
        },
      })
    } else {
      await prisma.learningProgress.create({
        data: {
          academyAccessId: identity.academyAccessId,
          email: identity.email,
          role: identity.role,
          progressKey: quizKey,
          formationCode: definition.formationCode,
          moduleKey: definition.moduleKey,
          bestScore: percentage,
          lastScore: percentage,
          attemptsCount: 1,
          completionStatus: passed ? 'completed' : 'in_progress',
          completedAt: passed ? new Date() : null,
        },
      })
    }

    return NextResponse.json({
      ok: true,
      result: {
        score,
        totalQuestions,
        percentage,
        passed,
      },
    })
  } catch (error) {
    console.error('quiz attempt route failed', error)
    return NextResponse.json({ error: 'Impossible d enregistrer le quiz pour le moment.' }, { status: 500 })
  }
}
