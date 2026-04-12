import Navbar from '@/components/Navbar'
import PartnerProofBar from '@/components/PartnerProofBar'
import Link from 'next/link'

const aiShopCards = [
  {
    emoji: '🎓',
    title: 'Pack IA etudiant',
    text: 'Gemini, revision, resumes, traduction, code et espace documents dans une experience accessible localement.',
  },
  {
    emoji: '🏫',
    title: 'Workspace education',
    text: 'Collaboration, production pedagogique et administration dans une pile simple pour classes et cohortes.',
  },
  {
    emoji: '💳',
    title: 'Paiements hybrides',
    text: 'Parcours prevu pour mobile money, cartes, virement et paiement international via Smith-Heffa Paygate.',
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />

      <header className="bg-black px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="mb-8 inline-block border border-[#C9A84C] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#C9A84C]">
              Ecosysteme education · Google ecosystem · enterprise grade
            </div>
            <h1 className="text-4xl font-black italic leading-tight tracking-tighter sm:text-6xl">
              L IA DE CONFIANCE.<br />
              <span className="text-[#C9A84C]">ACCESSIBLE.</span>
            </h1>
            <p className="mb-10 mt-6 max-w-2xl text-base leading-7 text-neutral-300">
              Buttertech Academy relie formation, IA, productivite, boutique education et paiements locaux pour offrir une vraie
              experience etudiante, professorale et institutionnelle, sans casser la lisibilite du site.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/formations" className="btn-gold">Voir les formations →</Link>
              <Link href="/espace/apprenant" className="btn-black">Entrer dans l espace etudiant</Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C9A84C]/30 bg-white/[0.04] p-5 sm:p-6">
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Etudiants</p>
                <p className="mt-3 text-xl font-black">Cockpit de progression</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">Cours, quiz, preuves, attestations et outils IA dans une meme surface.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Professeurs</p>
                <p className="mt-3 text-xl font-black">Pilotage de cohortes</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">Macrodesign, delivery, rubriques, preuves et qualite pedagogique.</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Etablissements</p>
                <p className="mt-3 text-xl font-black">Boucle fermee campus</p>
                <p className="mt-2 text-sm leading-6 text-neutral-300">Licences, gouvernance, reporting, vente d outils Google et paiement integre.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="border-t-2 border-[#C9A84C] bg-black py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 text-center sm:px-6 md:grid-cols-4">
          {[
            ['3', 'Parcours actifs'],
            ['15', 'Seances structurees'],
            ['24/7', 'Support IA'],
            ['399$', 'Bundle premium'],
          ].map(([val, label]) => (
            <div key={val}>
              <div className="text-3xl font-black text-[#C9A84C]">{val}</div>
              <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-3 text-center text-3xl font-black tracking-tighter">Parcours IA et productivite</h2>
          <p className="mb-14 text-center text-sm text-gray-500">Taxonomie de Bloom · Cloud Run Montreal · Loi 25 · gouvernance practicale</p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-8 transition-all hover:border-[#C9A84C] hover:shadow-lg">
              <div className="mb-6 flex justify-between">
                <span className="bloom-badge">Bloom 1→6 · 0.6 UEC</span>
              </div>
              <h3 className="mb-4 text-xl font-black tracking-tighter">Formation 1<br />Agents IA Gemini</h3>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>✓ Architecture multi-agents</li>
                <li>✓ NVIDIA NIM H100 · Cloud Run MTL</li>
                <li>✓ Quiz final et schema d architecture</li>
              </ul>
              <Link href="/formations/1" className="btn-black block text-center text-[10px]">Commencer →</Link>
            </div>
            <div className="rounded-lg border-2 border-[#C9A84C] bg-black p-8 text-white shadow-xl">
              <div className="mb-6 flex justify-between">
                <span className="bloom-badge">Bloom 2→5 · 0.7 UEC</span>
              </div>
              <h3 className="mb-4 text-xl font-black tracking-tighter text-[#C9A84C]">Formation 2<br />IA Responsable & Loi 25</h3>
              <ul className="mb-6 space-y-2 text-sm text-gray-400">
                <li>✓ Loi 25 · RGPD · AI Act UE</li>
                <li>✓ Privacy by Design</li>
                <li>✓ Modules et quiz actifs</li>
              </ul>
              <Link href="/formation2" className="btn-gold block text-center text-[10px]">Commencer →</Link>
            </div>
            <div className="rounded-lg border border-gray-200 p-8 transition-all hover:border-[#C9A84C] hover:shadow-lg">
              <div className="mb-6 flex justify-between">
                <span className="bloom-badge">Bloom 3→6 · 0.6 UEC</span>
              </div>
              <h3 className="mb-4 text-xl font-black tracking-tighter">Formation 3<br />Productivite Agentique</h3>
              <ul className="mb-6 space-y-2 text-sm text-gray-600">
                <li>✓ Methode P.T.C.F.</li>
                <li>✓ Google Workspace for Education</li>
                <li>✓ Automatisation cloud et quiz</li>
              </ul>
              <Link href="/formations/3" className="btn-black block text-center text-[10px]">Commencer →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <PartnerProofBar />
      </section>

      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
          <div className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Espace etudiants</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Experience mobile first</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Parcours, revisions, quiz, packs IA, remises et attestations dans une surface simple.</p>
            <Link href="/espace/apprenant" className="mt-6 btn-black">Voir l espace etudiants</Link>
          </div>
          <div className="shell-card">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Espace professeurs</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight">Pilotage et qualite</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-600">Cohortes, rubriques, preuves pedagogiques, relances et qualite de delivery.</p>
            <Link href="/espace/formateur" className="mt-6 btn-black">Voir l espace professeurs</Link>
          </div>
          <div className="dark-shell">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Espace etablissements</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white">Boucle fermee campus</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-300">Licences, gouvernance, bundles IA, equipements et paiements relies a Buttertech.</p>
            <Link href="/espace/etablissement" className="mt-6 btn-gold">Ouvrir l espace etablissements</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#C9A84C]">Boutique IA</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">Produits education et IA a distribuer</h2>
            </div>
            <Link href="/boutique-ia" className="btn-black">Voir la boutique IA</Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aiShopCards.map((card) => (
              <article key={card.title} className="shell-card">
                <div className="text-3xl">{card.emoji}</div>
                <h3 className="mt-4 text-xl font-black tracking-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-black tracking-tighter text-[#C9A84C]">Bundle Quintessence IA</h2>
          <p className="mb-2 text-gray-400">3 formations · 27 heures · espaces etudiant, professeur et IA</p>
          <p className="mb-8 text-sm text-gray-500">Cloud Run Montreal · Google ecosystem · parcours premium et paiements hybrides</p>
          <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
            Acces complet — 399$ CAD
          </a>
        </div>
      </section>
    </>
  )
}
