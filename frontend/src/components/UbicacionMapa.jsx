export default function UbicacionMapa() {
  return (
    <section id="ubicacion" className="container-px py-16">
      <h2 className="text-3xl font-bold">Ubicación y horario</h2>
      <p className="mt-2 text-blue-800 dark:text-neutral-200">
        Joyas 120, letra C, col. Estrella, Gustavo A. Madero, 07810 Ciudad de México, CDMX • Esquina con Calle Turquesa
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card">
          <p className="font-semibold">Cómo llegar</p>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-200">
            <li>🛝 Frente al parque de los cocodrilos”.</li>
            <li>🅿️ Estacionamiento accesible.</li>
            <li>♿ Accesibilidad para silla de ruedas.</li>
          </ul>

          <div className="mt-6">
            <p className="font-semibold">Horario</p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
              Lun–Vie 10:00–19:00 · Sáb 9:00–18:00· Dom 11:00–17:00
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn" href="tel:+52 55 5577 0687">Llamar</a>
            <a
              className="btn"
              target="_blank" rel="noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Joyas 120, Col. Estrella, Gustavo A. Madero, 07810 Ciudad de México, CDMX"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="card p-0 overflow-hidden">
          {/* Reemplaza el src con tu embed real de Google Maps */}
          <iframe
            title="Mapa clínica dental"
            className="w-full h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Joyas 120, Col. Estrella, Gustavo A. Madero, 07810 Ciudad de México, CDMX&output=embed"
          />
        </div>
      </div>
    </section>
  )
}
