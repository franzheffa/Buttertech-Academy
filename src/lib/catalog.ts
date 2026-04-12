import { prisma } from '@/lib/prisma'

export type CatalogOfferMetadata = {
  ctaLabel?: string
  features?: string[]
  paymentRails?: string[]
  badge?: string
}

const paygateBaseUrl =
  process.env.PAYGATE_BASE_URL ||
  process.env.NEXT_PUBLIC_PAYGATE_BASE_URL ||
  'https://smith-heffa-paygate.vercel.app'

const defaultCatalogOffers = [
  {
    slug: 'student-lite',
    title: 'AI Student Lite',
    subtitle: 'Revision, resumes, aide a la redaction et parcours academiques essentiels.',
    description:
      'Pack d entree pour etudiants avec acces aux formations Buttertech Academy, revision assistee, quiz actifs et paiements locaux.',
    audience: 'student',
    category: 'ai_pack',
    emoji: '🎓',
    priceCents: 500,
    currency: 'CAD',
    billingInterval: 'month',
    active: true,
    position: 10,
    paygateProductCode: 'BTA-STUDENT-LITE',
    paygateBaseUrl,
    externalUrl: null,
    metadata: {
      badge: 'Starter',
      ctaLabel: 'Activer le pack',
      paymentRails: ['card', 'orange_money', 'mobile_money'],
      features: ['Assistant IA d etude', 'Quiz et progression', 'Acces mobile first'],
    },
  },
  {
    slug: 'student-pro',
    title: 'AI Student Pro',
    subtitle: 'Gemini, prompts structures, coaching IA et productivite premium.',
    description:
      'Le pack principal pour un etudiant qui veut centraliser son apprentissage, ses outils IA et ses activations payables localement.',
    audience: 'student',
    category: 'ai_pack',
    emoji: '🚀',
    priceCents: 2000,
    currency: 'CAD',
    billingInterval: 'month',
    active: true,
    position: 20,
    paygateProductCode: 'BTA-STUDENT-PRO',
    paygateBaseUrl,
    externalUrl: null,
    metadata: {
      badge: 'Plus populaire',
      ctaLabel: 'Passer en Pro',
      paymentRails: ['card', 'orange_money', 'mobile_money', 'interac'],
      features: ['Gemini + outils premium', 'Coaching IA 24/7', 'Workspace et productivite'],
    },
  },
  {
    slug: 'workspace-education',
    title: 'Google Workspace for Education',
    subtitle: 'Collaboration, mail, docs, calendrier et environnement educatif Google.',
    description:
      'Offre partenaire avec lien de referral Google Workspace pour activer les plans eligibles avec remise integree.',
    audience: 'student',
    category: 'google_product',
    emoji: '☁️',
    priceCents: 0,
    currency: 'CAD',
    billingInterval: null,
    active: true,
    position: 30,
    paygateProductCode: null,
    paygateBaseUrl: null,
    externalUrl: 'https://referworkspace.app.goo.gl/HF4K',
    metadata: {
      badge: 'Google',
      ctaLabel: 'Ouvrir l offre Google',
      paymentRails: ['external'],
      features: ['Referral officiel', '10% integre si eligible', 'Activation Google directe'],
    },
  },
  {
    slug: 'campus-ai-bundle',
    title: 'Campus AI Bundle',
    subtitle: 'Packs cohortes, activation institutionnelle, administration et pilotage.',
    description:
      'Offre etablissement pour vendre des licences, structurer des cohortes et piloter l adoption des outils IA et Google.',
    audience: 'institution',
    category: 'campus_bundle',
    emoji: '🏫',
    priceCents: 39900,
    currency: 'CAD',
    billingInterval: 'one_time',
    active: true,
    position: 40,
    paygateProductCode: 'BTA-CAMPUS-BUNDLE',
    paygateBaseUrl,
    externalUrl: null,
    metadata: {
      badge: 'Campus',
      ctaLabel: 'Demarrer le bundle campus',
      paymentRails: ['card', 'bank_transfer', 'interac'],
      features: ['Gestion d etablissement', 'Licences par cohorte', 'Activation avec paygate'],
    },
  },
  {
    slug: 'campus-premium',
    title: 'Campus Premium',
    subtitle: 'Licences, gouvernance, reporting et accompagnement multi-sites.',
    description:
      'Pack premium pour un etablissement ou reseau qui veut deployer l ecosysteme Buttertech avec un pilotage plus avance.',
    audience: 'institution',
    category: 'campus_bundle',
    emoji: '🏛️',
    priceCents: 99000,
    currency: 'CAD',
    billingInterval: 'one_time',
    active: true,
    position: 50,
    paygateProductCode: 'BTA-CAMPUS-PREMIUM',
    paygateBaseUrl,
    externalUrl: null,
    metadata: {
      badge: 'Enterprise',
      ctaLabel: 'Planifier le deploiement',
      paymentRails: ['bank_transfer', 'card'],
      features: ['Pilotage multi-campus', 'Reporting et adoption', 'Support prioritaire'],
    },
  },
] as const

export async function ensureCatalogSeed() {
  await Promise.all(
    defaultCatalogOffers.map((offer) =>
      prisma.catalogOffer.upsert({
        where: { slug: offer.slug },
        update: {
          title: offer.title,
          subtitle: offer.subtitle,
          description: offer.description,
          audience: offer.audience,
          category: offer.category,
          emoji: offer.emoji,
          priceCents: offer.priceCents,
          currency: offer.currency,
          billingInterval: offer.billingInterval,
          active: offer.active,
          position: offer.position,
          paygateProductCode: offer.paygateProductCode,
          paygateBaseUrl: offer.paygateBaseUrl,
          externalUrl: offer.externalUrl,
          metadata: offer.metadata,
        },
        create: offer,
      }),
    ),
  )
}

export async function listActiveCatalogOffers(audience?: string) {
  await ensureCatalogSeed()

  return prisma.catalogOffer.findMany({
    where: {
      active: true,
      ...(audience ? { audience } : {}),
    },
    orderBy: [{ position: 'asc' }, { createdAt: 'asc' }],
  })
}

export async function getCatalogOfferBySlug(slug: string) {
  await ensureCatalogSeed()

  return prisma.catalogOffer.findUnique({
    where: { slug },
  })
}

export function parseOfferMetadata(input: unknown): CatalogOfferMetadata {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return {}
  }

  const value = input as Record<string, unknown>

  return {
    ctaLabel: typeof value.ctaLabel === 'string' ? value.ctaLabel : undefined,
    badge: typeof value.badge === 'string' ? value.badge : undefined,
    features: Array.isArray(value.features) ? value.features.filter((item): item is string => typeof item === 'string') : [],
    paymentRails: Array.isArray(value.paymentRails) ? value.paymentRails.filter((item): item is string => typeof item === 'string') : [],
  }
}

export function formatOfferPrice(priceCents: number, currency: string, billingInterval?: string | null) {
  if (priceCents <= 0) {
    return 'Activation externe'
  }

  const amount = new Intl.NumberFormat('fr-CA', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(priceCents / 100)

  if (!billingInterval || billingInterval === 'one_time') {
    return amount
  }

  return `${amount}/${billingInterval === 'month' ? 'mois' : billingInterval}`
}
