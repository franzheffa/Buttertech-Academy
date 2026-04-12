import { NextResponse } from 'next/server'
import { formatOfferPrice, listActiveCatalogOffers, parseOfferMetadata } from '@/lib/catalog'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const audience = searchParams.get('audience') || undefined
    const offers = await listActiveCatalogOffers(audience)

    return NextResponse.json({
      ok: true,
      offers: offers.map((offer) => ({
        id: offer.id,
        slug: offer.slug,
        title: offer.title,
        subtitle: offer.subtitle,
        description: offer.description,
        audience: offer.audience,
        category: offer.category,
        emoji: offer.emoji,
        currency: offer.currency,
        priceCents: offer.priceCents,
        priceLabel: formatOfferPrice(offer.priceCents, offer.currency, offer.billingInterval),
        billingInterval: offer.billingInterval,
        externalUrl: offer.externalUrl,
        metadata: parseOfferMetadata(offer.metadata),
      })),
    })
  } catch (error) {
    console.error('catalog route failed', error)
    return NextResponse.json({ error: 'Impossible de charger le catalogue pour le moment.' }, { status: 500 })
  }
}
