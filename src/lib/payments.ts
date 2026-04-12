export function getPaymentRailLabel(paymentRail: string) {
  switch (paymentRail) {
    case 'orange_money':
      return 'Orange Money'
    case 'mobile_money':
      return 'Mobile Money'
    case 'interac':
      return 'Interac'
    case 'bank_transfer':
      return 'Virement bancaire'
    case 'card':
    default:
      return 'Carte'
  }
}

export function buildCheckoutUrl(input: {
  paygateBaseUrl?: string | null
  offerSlug: string
  productCode?: string | null
  paymentRail: string
  amountCents: number
  currency: string
  email?: string | null
  role?: string | null
}) {
  const baseUrl =
    input.paygateBaseUrl ||
    process.env.PAYGATE_BASE_URL ||
    process.env.NEXT_PUBLIC_PAYGATE_BASE_URL ||
    'https://smith-heffa-paygate.vercel.app'
  const url = new URL(baseUrl)

  url.searchParams.set('source', 'buttertech-academy')
  url.searchParams.set('offer', input.offerSlug)
  url.searchParams.set('rail', input.paymentRail)
  url.searchParams.set('amountCents', String(input.amountCents))
  url.searchParams.set('currency', input.currency)

  if (input.productCode) {
    url.searchParams.set('productCode', input.productCode)
  }

  if (input.email) {
    url.searchParams.set('email', input.email)
  }

  if (input.role) {
    url.searchParams.set('role', input.role)
  }

  return url.toString()
}
