'use client'

import { useState } from 'react'
import { getPaymentRailLabel } from '@/lib/payments'

type CommerceCheckoutButtonProps = {
  offerSlug: string
  paymentRails: string[]
  externalUrl?: string | null
  ctaLabel: string
}

export default function CommerceCheckoutButton({
  offerSlug,
  paymentRails,
  externalUrl,
  ctaLabel,
}: CommerceCheckoutButtonProps) {
  const [selectedRail, setSelectedRail] = useState(paymentRails[0] || 'card')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (externalUrl) {
    return (
      <a href={externalUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex">
        {ctaLabel}
      </a>
    )
  }

  return (
    <div className="mt-6">
      <div className="mb-3 flex flex-wrap gap-2">
        {paymentRails.map((rail) => (
          <button
            key={rail}
            type="button"
            onClick={() => setSelectedRail(rail)}
            className={`rounded-full border px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] transition ${
              selectedRail === rail
                ? 'border-[#C9A84C] bg-[#C9A84C] text-black'
                : 'border-black/10 bg-white text-neutral-600 hover:border-[#C9A84C]'
            }`}
          >
            {getPaymentRailLabel(rail)}
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={loading}
        onClick={async () => {
          setLoading(true)
          setError(null)

          try {
            const response = await fetch('/api/payments/intents', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ offerSlug, paymentRail: selectedRail }),
            })

            const data = await response.json()

            if (!response.ok || !data?.checkoutUrl) {
              throw new Error(data?.error || 'Paiement indisponible')
            }

            window.location.href = data.checkoutUrl
          } catch (cause) {
            setError(cause instanceof Error ? cause.message : 'Paiement indisponible')
          } finally {
            setLoading(false)
          }
        }}
        className="btn-gold inline-flex disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? 'Preparation...' : `${ctaLabel} · ${getPaymentRailLabel(selectedRail)}`}
      </button>

      {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}
    </div>
  )
}
