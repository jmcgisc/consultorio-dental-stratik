import BeforeAfter from "./BeforeAfter.jsx"

const casos = [
  {
    before: "/images/caso1-antes.jpg",
    after:  "/images/caso1-despues.jpg",
    titulo: "Resina estética en incisivo",
  },
  {
    before: "/images/caso2-antes.jpg",
    after:  "/images/caso2-despues.jpg",
    titulo: "Blanqueamiento dental",
  },
  {
    before: "/images/caso3-antes.jpg",
    after:  "/images/caso3-despues.jpg",
    titulo: "Alineadores (6 meses)",
  },
]

export default function AntesDespuesSection() {
  return (
    <section id="antes-despues" className="container-px py-16">
      <h2 className="text-3xl font-bold">Antes y Después</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        Resultados reales con enfoque funcional y estético.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {casos.map((c) => (
          <div key={c.titulo} className="space-y-3">
            <BeforeAfter beforeSrc={c.before} afterSrc={c.after} />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{c.titulo}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-neutral-500 mt-6">
        * Imágenes publicadas con autorización de pacientes. Los resultados pueden variar.
      </p>
    </section>
  )
}
