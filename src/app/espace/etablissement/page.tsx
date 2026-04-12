import Navbar from '@/components/Navbar'
import Link from 'next/link'

const campusStacks = [
  {
    emoji: '🏫',
    title: 'Campus starter',
    text: 'Cohortes, espaces, quizz, attestations et production pedagogique pour un premier deploiement.',
  },
  {
    emoji: '🤖',
    title: 'Campus AI pack',
    text: 'Gemini, outils de productivite, assistance de redaction et ateliers de prise en main pour les equipes.',
  },
  {
    emoji: '💼',
    title: 'Administration et licences',
    text: 'Pilotage des acces, reporting, bundles et strategie d adoption pour un etablissement ou un reseau.',
  },
]

const commerceRows = [
  ['Licences etudiants', 'Pack IA localement payable, onboarding, support et activations progressives.'],
  ['Packs professeurs', 'Workspace education, modeles de cours, prompts, kits de cohortes et automation.'],
  ['Direction et operations', 'Reporting, gouvernance, bundles premium et coordination avec le paygate.'],
]

export default function EspaceEtablissementPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="dark-shell gold-grid">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#C9A84C]">Espace etablissements</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Boucle fermee campus et institution</h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-300">
            Une surface de pilotage pour vendre, activer et operer des parcours IA, des outils Google et des bundles
            pedagogiques dans une logique campus, programme ou reseau d etablissements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/boutique-ia" className="btn-gold">Voir la boutique IA</Link>
            <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-black">
              Ouvrir le paiement
            </a>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {campusStacks.map((item) => (
            <article key={item.title} className="shell-card">
              <div className="text-3xl">{item.emoji}</div>
              <h2 className="mt-4 text-xl font-black tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Tableau d offre</p>
            <div className="mt-4 space-y-4">
              {commerceRows.map(([title, text]) => (
                <div key={title} className="rounded-[1.25rem] border border-black/10 bg-[#fffaf0] p-4">
                  <h2 className="text-lg font-black tracking-tight">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Go to market</p>
            <div className="mt-4 space-y-3">
              {[
                'Distribution locale d outils IA mondiaux pour etudiants et equipes pedagogiques.',
                'Paiement relie a Smith-Heffa Paygate pour bundles, packs campus et activation premium.',
                'Pilotage des licences, des cohortes et des cas d usage Google education dans un meme espace.',
              ].map((item) => (
                <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-6 text-neutral-300">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>
    </>
  )
}
