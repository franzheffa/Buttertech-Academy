import { formationQuizzes, moduleQuizzes } from '@/lib/quiz-data'

export type QuizDefinition = {
  quizKey: string
  formationCode: string | null
  moduleKey: string | null
  title: string
  questions: { id: string; answerIndex: number }[]
}

export function getQuizDefinition(quizKey: string): QuizDefinition | null {
  if (quizKey.startsWith('formation:')) {
    const slug = quizKey.replace('formation:', '')
    const questions = formationQuizzes[slug]

    if (!questions) {
      return null
    }

    const formationCode =
      slug === '1' ? 'BTA-AGENTS-001' :
      slug === '2' ? 'BTA-IARG-002' :
      slug === '3' ? 'BTA-PA-001' :
      null

    return {
      quizKey,
      formationCode,
      moduleKey: null,
      title: `formation-${slug}`,
      questions: questions.map((question) => ({ id: question.id, answerIndex: question.answerIndex })),
    }
  }

  if (quizKey.startsWith('module:')) {
    const moduleKey = quizKey.replace('module:', '')
    const questions = moduleQuizzes[moduleKey]

    if (!questions) {
      return null
    }

    return {
      quizKey,
      formationCode: 'BTA-IARG-002',
      moduleKey,
      title: moduleKey,
      questions: questions.map((question) => ({ id: question.id, answerIndex: question.answerIndex })),
    }
  }

  return null
}
