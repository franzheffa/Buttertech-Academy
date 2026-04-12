import type { Metadata } from 'next'
import EnterpriseFooter from '@/components/EnterpriseFooter'
import './globals.css'

export const metadata: Metadata = {
  title: 'Buttertech Academy | AI learning, Google ecosystem, local payments',
  description:
    'Buttertech Academy propose des parcours IA, des espaces etudiants, professeurs et etablissements, une boutique IA et des paiements locaux et internationaux.',
  keywords: ['Buttertech Academy', 'Gemini', 'Google Workspace for Education', 'Formation IA', 'Loi 25', 'Montreal'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white font-sans antialiased text-gray-900">
        <div className="min-h-screen">
          {children}
          <EnterpriseFooter />
        </div>
      </body>
    </html>
  )
}
