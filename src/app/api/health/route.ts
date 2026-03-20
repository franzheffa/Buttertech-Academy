import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'buttertech-academy',
    version: '1.0.0',
    region: process.env.GOOGLE_CLOUD_REGION ?? 'northamerica-northeast1',
    sofeduc: 'BTA-PA-001 · BTA-IARG-002',
    timestamp: new Date().toISOString(),
  })
}
