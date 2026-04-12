import Navbar from '@/components/Navbar'

const products = [
  {
    emoji: '✨',
    title: 'Gemini Student Pack',
    subtitle: 'Assistant 24/7 pour revision, recherche, redaction et productivite.',
    cta: 'Demarrer avec le bundle',
    href: 'https://smith-heffa-paygate.vercel.app',
  },
  {
    emoji: '🧑‍💻',
    title: 'Google Workspace for Education',
    subtitle: 'Collaboration, docs, mail, calendrier et environnement de travail educatif.',
    cta: 'Ouvrir l offre Google',
    href: 'https://referworkspace.app.goo.gl/HF4K',
  },
  {
    emoji: '📚',
    title: 'Notebook et revision assistee',
    subtitle: 'Resumes, fiches, extraction de points cles et accompagnement a la preparation des cours.',
    cta: 'Voir les formations',
    href: '/formations',
  },
  {
    emoji: '🏫',
    title: 'Campus AI Bundle',
    subtitle: 'Offre etablissement pour packs IA, licences, onboarding et adoption par cohortes.',
    cta: 'Voir l espace etablissements',
    href: '/espace/etablissement',
  },
]

export default function BoutiqueIaPage() {
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

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {products.map((product) => {
            const external = product.href.startsWith('http')
            return (
              <article key={product.title} className="shell-card">
                <div className="text-4xl">{product.emoji}</div>
                <h2 className="mt-4 text-2xl font-black tracking-tight">{product.title}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{product.subtitle}</p>
                {external ? (
                  <a href={product.href} target="_blank" rel="noopener noreferrer" className="mt-6 btn-gold inline-flex">
                    {product.cta}
                  </a>
                ) : (
                  <a href={product.href} className="mt-6 btn-gold inline-flex">
                    {product.cta}
                  </a>
                )}
              </article>
            )
          })}
        </section>

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
