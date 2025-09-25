import { useMemo, useState } from "react"

function Paso({ n, titulo, desc }) {
  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 font-bold">
          {n}
        </span>
        <div>
          <p className="font-semibold">{titulo}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function AgendarEnTresPasos() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)

  // Fecha mínima = hoy (para input date)
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], [])

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    const data = Object.fromEntries(new FormData(e.currentTarget))
    // 🔗 Aquí luego haremos POST a /api/citas (backend)
    // await fetch("/api/citas", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    console.log("Solicitud de cita:", data)
    setTimeout(() => { setOk(true); setLoading(false) }, 600)
  }

  return (
    <section id="agendar" className="container-px py-16">
      <h2 className="text-3xl font-bold">Agenda en 3 pasos</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        Rápido, sencillo y con confirmación por WhatsApp o llamada.
      </p>

      {/* Pasos */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Paso n={1} titulo="Elige fecha y hora" desc="Selecciona el horario que mejor te acomode." />
        <Paso n={2} titulo="Confirma tus datos" desc="Nombre y teléfono para confirmar tu cita." />
        <Paso n={3} titulo="¡Listo!" desc="Te contactamos para confirmar en minutos." />
      </div>

      {/* Mini-form */}
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form onSubmit={onSubmit} className="card">
          <p className="text-lg font-semibold">Solicitar cita</p>
          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium">Nombre*</label>
              <input
                name="nombre" required
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Teléfono*</label>
              <input
                name="telefono" required inputMode="tel" pattern="[0-9+() -]{8,}"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
                placeholder="55 0000 0000"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email" name="email"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Fecha*</label>
              <input
                type="date" name="fecha" required min={minDate}
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Hora*</label>
              <input
                type="time" name="hora" required
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Motivo</label>
              <select
                name="motivo"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              >
                <option value="Limpieza">Limpieza</option>
                <option value="Ortodoncia">Ortodoncia</option>
                <option value="Resina/Corona">Resina/Corona</option>
                <option value="Implante">Implante</option>
                <option value="Valoración">Valoración</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Comentarios</label>
              <textarea
                name="comentarios" rows="3"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
                placeholder="¿Algo que debamos saber antes de tu visita?"
              />
            </div>
          </div>

          <button disabled={loading} className="btn btn-primary mt-6 w-full">
            {loading ? "Enviando…" : "Solicitar cita"}
          </button>

          {ok && (
            <p className="text-sm text-green-600 mt-3">
              ¡Gracias! Recibimos tu solicitud y te contactaremos para confirmar.
            </p>
          )}

          {/* Tip: botón alterno de WhatsApp prellenado */}
          <a
            className="btn mt-3 w-full"
            href={`https://wa.me/521000000000?text=${encodeURIComponent("Hola, quiero agendar una cita en la clínica dental.")}`}
            target="_blank" rel="noreferrer"
          >
            Prefiero confirmar por WhatsApp
          </a>
        </form>

        {/* Bloque informativo lado derecho */}
        <div className="card">
          <p className="text-lg font-semibold">Horarios y contacto</p>
          <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <li><strong>Lun–Vie:</strong> 9:00–19:00</li>
            <li><strong>Sábados:</strong> 9:00–14:00</li>
            <li><strong>Tel:</strong> (55) 0000 0000</li>
            <li><strong>Dirección:</strong> Av. Principal 123, CDMX</li>
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a className="btn w-full" href="tel:+525500000000">Llamar</a>
            <a className="btn w-full" href="https://maps.google.com" target="_blank" rel="noreferrer">Cómo llegar</a>
          </div>

          <p className="text-xs text-neutral-500 mt-6">
            *La hora seleccionada se confirmará según disponibilidad de agenda.
          </p>
        </div>
      </div>
    </section>
  )
}
