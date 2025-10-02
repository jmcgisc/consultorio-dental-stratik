export default function AgendarEnServicios() {
  return (
    <section className="container-px py-10">
      <div className="card bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">¿Listo para agendar?</h3>
          <p className="text-neutral-600 dark:text-neutral-300 mt-1">
            Elige fecha y hora en el formulario y te confirmamos por WhatsApp o llamada.
          </p>
        </div>
        <div className="flex gap-3">
          <a href="/#agendar" className="btn btn-primary">Agendar ahora</a>
          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/5215560910802?text=Hola,%20quiero%20agendar%20una%20cita"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
