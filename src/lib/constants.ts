// BUTTERTECH ACADEMY — Constantes SOFEDUC
export const BTA = {
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://buttertech-academy.vercel.app',
  VERSION: '1.0.0',
  SOFEDUC_MEMBRE: 'BTA-2026',
  REGION: 'northamerica-northeast1',
  REGION_LABEL: 'Cloud Run Montréal · SOC2 Type II · Loi 25',
} as const

export const FORMATIONS = {
  F1: { code: 'BTA-AGENTS-001', uec: 0.6, modules: 6, bloom: '1→6' },
  F2: { code: 'BTA-IARG-002',   uec: 0.7, modules: 5, bloom: '2→5' },
  F3: { code: 'BTA-PA-001',     uec: 0.6, modules: 3, bloom: '3→6' },
} as const
