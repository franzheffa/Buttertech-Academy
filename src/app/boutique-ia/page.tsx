import Navbar from '@/components/Navbar'
import OfferCatalogSection from '@/components/OfferCatalogSection'

export const dynamic = 'force-dynamic'

export default async function BoutiqueIaPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="shell-card">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Boutique IA</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Produits IA et Google pour education</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
            Une vitrine simple pour vendre des packs IA, orienter vers Google Workspace for Education et preparer des offres
            campus appuyees par Buttertech Academy et Smith-Heffa Paygate.
          </p>
        </section>

        <div className="mt-8">
          <OfferCatalogSection
            audience="student"
            kicker="Offres etudiantes"
            title="Catalogue student pack et Google education"
            description="Les packs IA, l offre Google Workspace referral et les activations locales sont maintenant portes par un catalogue persistant avec prix, rail de paiement et CTA dynamiques."
          />
        </div>

        <div className="mt-8">
          <OfferCatalogSection
            audience="institution"
            kicker="Offres campus"
            title="Bundles campus et pilotage institutionnel"
            description="La boutique expose aussi les offres etablissement pour pack campus, administration, licences et deploiement a plus grande echelle."
          />
        </div>

        <section className="mt-8 dark-shell">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Proposition de valeur</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              'Rendre l intelligence artificielle mondiale payable localement pour les etudiants et les campus.',
              'Cacher la complexite des modeles derriere une UX claire et des parcours de valeur concrets.',
              'Relier formation, outils premium, paiements et adoption institutionnelle dans un meme ecosysteme.',
            ].map((item) => (
              <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-neutral-300">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
