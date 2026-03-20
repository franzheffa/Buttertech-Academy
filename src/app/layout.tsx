import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Buttertech Academy | SOFEDUC Agréé · IA Responsable',
  description: 'Formations certifiées SOFEDUC · NVIDIA Inception · Google for Education · Loi 25 · RGPD · AI Act UE',
  keywords: ['SOFEDUC', 'IA Responsable', 'Loi 25', 'RGPD', 'Formation IA', 'Montréal'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
