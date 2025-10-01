import BeforeAfter from "./BeforeAfter.jsx"

const casos = [
  {
    before: "/images/fotos/antes_despues/dientes_antes.png",
    after:  "/images/fotos/antes_despues/dientes_despues.png",
    titulo: "Implantes dentales",
  },
  {
    before: "/images/fotos/antes_despues/blanqueamiento_antes.png",
    after:  "/images/fotos/antes_despues/blanqueamiento_despues.png",
    titulo: "Blanqueamiento dental",
  },
  {
    before: "/images/fotos/antes_despues/limpieza_antes.png",
    after:  "/images/fotos/antes_despues/limpieza_despues.png",
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
