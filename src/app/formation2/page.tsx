import Navbar from '@/components/Navbar'
import Link from 'next/link'

const modules = [
  { id: 1, titre: 'Loi 25 — Principes fondamentaux au Quebec', duree: '1h30', bloom: 'Comprendre (2)', href: '/formation2/module1', points: ['Consentement explicite · RPRP obligatoire · declaration CAI', 'Timeline et obligations progressives', 'Evaluation formative · quiz interactif'] },
  { id: 2, titre: 'RGPD & equivalences mondiales', duree: '1h30', bloom: 'Comprendre (2)', href: '/formation2/module2', points: ['RGPD EU vs Loi 25 : tableau comparatif', 'UK-GDPR · LGPD · CCPA · PIPL', 'Extraterritorialite · sanctions · autorites de controle'] },
  { id: 3, titre: 'AI Act UE — Classification par niveaux de risque', duree: '1h30', bloom: 'Analyser (4)', href: '/formation2/module3', points: ['4 niveaux de risque', 'Obligations pour les systemes a risque eleve', 'Applications concretes pour les usages IA'] },
  { id: 4, titre: 'Deploiement cloud conforme — Privacy by Design', duree: '1h30', bloom: 'Analyser (4)', href: '/formation2/module4', points: ['Cloud Run MTL · Secret Manager · journalisation', 'Chiffrement, IAM et architecture responsable', 'Etapes de deploiement prêtes'] },
  { id: 5, titre: 'Quiz final et validation', duree: '1h00', bloom: 'Evaluer (5)', href: '/formation2/module5', points: ['Checklist de preuves et synthese', 'Quiz final 20 questions', 'Attestation et archivage pedagogique'] },
]

export default function Formation2Page() {
  return (
    <>
      <Navbar />
      <div className="no-print border-b-2 border-[#C9A84C] bg-black">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-6 py-2 text-xs">
          <Link href="/formations" className="font-bold text-[#C9A84C] hover:underline">← Formations</Link>
          <span className="text-gray-600">·</span>
          <span className="font-bold uppercase tracking-widest text-gray-400">Formation 2 · BTA-IARG-002 · IA Responsable & Loi 25</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl gap-8 px-6 py-10">
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-24 rounded border border-gray-200 bg-gray-50 p-4">
            <div className="mb-4 text-xs font-black uppercase tracking-widest text-gray-500">Modules du cours</div>
            <ul className="space-y-1">
              {modules.map((module) => (
                <li key={module.id}>
                  <Link href={module.href} className="flex items-start gap-2 py-2 text-xs leading-tight text-gray-600 transition-colors hover:text-[#C9A84C]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gray-300 text-[10px] font-black">{module.id}</span>
                    <span>{module.titre}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <Link href="/formation2/module1" className="btn-gold block w-full text-center text-[10px]">Commencer →</Link>
            </div>
          </div>
        </aside>

        <section className="flex-1">
          <div className="mb-3 flex flex-wrap gap-2">
            <span className="bloom-badge">BTA-IARG-002</span>
            <span className="bloom-badge" style={{ background: '#000', color: '#C9A84C' }}>Bloom : Comprendre → Evaluer</span>
            <span className="bloom-badge" style={{ background: '#1A7A4A', color: 'white' }}>0.7 UEC</span>
          </div>

          <h1 className="mb-2 text-2xl font-black italic">IA RESPONSABLE & LOI 25 — GOUVERNANCE</h1>
          <p className="mb-2 text-sm font-bold text-[#C9A84C]">Conformite & gouvernance mondiale de l IA · 7 heures · 5 modules</p>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600">
            Analysez les cadres reglementaires mondiaux et evaluez la conformite d un deploiement IA. Formation orientee
            preuves, gouvernance, cloud responsable et quiz actifs sur chaque sequence.
          </p>

          <div className="space-y-3">
            {modules.map((module) => (
              <Link key={module.id} href={module.href} className="group block rounded-lg border border-gray-200 p-5 transition-all hover:border-[#C9A84C] hover:shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-1.5 flex flex-wrap items-center gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#C9A84C] text-xs font-black text-black">{module.id}</div>
                      <span className="bloom-badge text-[10px]">{module.bloom}</span>
                      <span className="text-xs font-bold text-gray-400">{module.duree}</span>
                    </div>
                    <h3 className="mb-2 font-black text-gray-900 transition-colors group-hover:text-[#C9A84C]">{module.titre}</h3>
                    <ul className="space-y-0.5">
                      {module.points.map((point) => (
                        <li key={point} className="flex items-start gap-1.5 text-xs text-gray-500">
                          <span className="mt-0.5 shrink-0 text-[#C9A84C]">›</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-1 shrink-0 text-xl text-[#C9A84C] transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 rounded-lg border-2 border-[#C9A84C] bg-black p-6 text-center">
            <p className="mb-2 text-xs uppercase tracking-widest text-gray-400">Acces inclus dans le bundle</p>
            <a href="https://smith-heffa-paygate.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Acces Bundle Quintessence — 399$ CAD
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
