import { NextResponse } from 'next/server'
import { getCurrentAcademyIdentity } from '@/lib/academy-session'
import { getCatalogOfferBySlug, parseOfferMetadata } from '@/lib/catalog'
import { buildCheckoutUrl } from '@/lib/payments'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const offerSlug = String(body?.offerSlug || '').trim()
    const paymentRail = String(body?.paymentRail || 'card').trim().toLowerCase()

    if (!offerSlug) {
      return NextResponse.json({ error: 'Offre manquante.' }, { status: 400 })
    }

    const offer = await getCatalogOfferBySlug(offerSlug)

    if (!offer || !offer.active) {
      return NextResponse.json({ error: 'Offre introuvable.' }, { status: 404 })
    }

    const metadata = parseOfferMetadata(offer.metadata)
    const allowedRails = metadata.paymentRails || []

    if (allowedRails.length && !allowedRails.includes(paymentRail)) {
      return NextResponse.json({ error: 'Rail de paiement non autorise pour cette offre.' }, { status: 400 })
    }

    const identity = await getCurrentAcademyIdentity()
    const checkoutUrl =
      offer.externalUrl ||
      buildCheckoutUrl({
        paygateBaseUrl: offer.paygateBaseUrl,
        offerSlug: offer.slug,
        productCode: offer.paygateProductCode,
        paymentRail,
        amountCents: offer.priceCents,
        currency: offer.currency,
        email: identity?.email,
        role: identity?.role,
      })

    const intent = await prisma.purchaseIntent.create({
      data: {
        offerId: offer.id,
        academyAccessId: identity?.academyAccessId ?? null,
        email: identity?.email ?? null,
        role: identity?.role ?? null,
        paymentRail,
        status: offer.externalUrl ? 'external_redirect_ready' : 'checkout_ready',
        amountCents: offer.priceCents,
        currency: offer.currency,
        checkoutUrl,
        metadata: {
          source: 'buttertech-academy',
          audience: offer.audience,
          title: offer.title,
        },
      },
      select: {
        id: true,
      },
    })

    return NextResponse.json({
      ok: true,
      intentId: intent.id,
      checkoutUrl,
      paymentRail,
      offer: {
        slug: offer.slug,
        title: offer.title,
        priceCents: offer.priceCents,
        currency: offer.currency,
      },
    })
  } catch (error) {
    console.error('payment intent route failed', error)
    return NextResponse.json({ error: 'Impossible de preparer le paiement pour le moment.' }, { status: 500 })
  }
}
