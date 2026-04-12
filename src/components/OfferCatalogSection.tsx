import CommerceCheckoutButton from '@/components/CommerceCheckoutButton'
import { formatOfferPrice, listActiveCatalogOffers, parseOfferMetadata } from '@/lib/catalog'

type OfferCatalogSectionProps = {
  audience?: 'student' | 'institution'
  title: string
  kicker: string
  description: string
}

export default async function OfferCatalogSection({
  audience,
  title,
  kicker,
  description,
}: OfferCatalogSectionProps) {
  const offers = await listActiveCatalogOffers(audience)

  return (
    <section className="shell-card">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">{kicker}</p>
          <h2 className="mt-2 text-2xl font-black tracking-tight">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">{description}</p>
        </div>
        <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{offers.length} offres actives</span>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {offers.map((offer) => {
          const metadata = parseOfferMetadata(offer.metadata)
          return (
            <article key={offer.slug} className="rounded-[1.6rem] border border-black/10 bg-[#fffaf0] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="text-3xl">{offer.emoji || '✨'}</div>
                  <h3 className="mt-4 text-2xl font-black tracking-tight">{offer.title}</h3>
                  {offer.subtitle ? <p className="mt-2 text-sm font-semibold text-neutral-600">{offer.subtitle}</p> : null}
                </div>
                {metadata.badge ? <span className="status-pill border-[#C9A84C]/40 text-[#7a5c12]">{metadata.badge}</span> : null}
              </div>

              <p className="mt-4 text-sm leading-7 text-neutral-700">{offer.description}</p>
              <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-neutral-500">Tarif</p>
                  <p className="mt-2 text-3xl font-black text-black">
                    {formatOfferPrice(offer.priceCents, offer.currency, offer.billingInterval)}
                  </p>
                </div>
                <p className="text-right text-[11px] font-black uppercase tracking-[0.16em] text-neutral-500">
                  {offer.audience === 'institution' ? 'Etablissement' : 'Etudiant'}
                </p>
              </div>

              {metadata.features?.length ? (
                <div className="mt-5 grid gap-2">
                  {metadata.features.map((feature) => (
                    <div key={feature} className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-neutral-700">
                      {feature}
                    </div>
                  ))}
                </div>
              ) : null}

              <CommerceCheckoutButton
                offerSlug={offer.slug}
                paymentRails={metadata.paymentRails?.length ? metadata.paymentRails : ['card']}
                externalUrl={offer.externalUrl}
                ctaLabel={metadata.ctaLabel || 'Choisir cette offre'}
              />
            </article>
          )
        })}
      </div>
    </section>
  )
}
