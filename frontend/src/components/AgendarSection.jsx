import { useMemo, useState } from "react"
import { supabase } from "../lib/supabase.js"

function Step({ n, title, desc }) {
  return (
    <div className="card">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 font-bold">
          {n}
        </span>
        <p className="font-semibold">{title}</p>
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
    </div>
  )
}

export default function AgendarSection() {
  // fecha mínima (hoy) para el input date
  const minDate = useMemo(() => {
    const d = new Date()
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const dd = String(d.getDate()).padStart(2, "0")
    return `${d.getFullYear()}-${mm}-${dd}`
  }, [])

  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [error, setError] = useState("")

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError("")
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form)

    // Honeypot anti-spam: si viene lleno, respondemos OK silencioso
    if (data.website) {
      setOk(true)
      setLoading(false)
      e.currentTarget.reset()
      return
    }

    // Validación simple
    if (!data.nombre?.trim()) { setLoading(false); return setError("Por favor, escribe tu nombre.") }
    if (!/^[0-9+\-\s()]{8,}$/.test(data.telefono || "")) { setLoading(false); return setError("Teléfono no válido.") }
    if (!data.fecha) { setLoading(false); return setError("Selecciona una fecha.") }
    if (!data.hora) { setLoading(false); return setError("Selecciona una hora.") }
    if (!data.motivo?.trim()) { setLoading(false); return setError("Selecciona o escribe un motivo.") }

    try {
      // Combinar fecha+hora locales → guardar en UTC (timestamptz)
      const startsLocal = new Date(`${data.fecha}T${data.hora}:00`)
      const startsISO = startsLocal.toISOString()

      const { error: insertError } = await supabase
        .from('citas')
        .insert([{
          nombre: data.nombre,
          telefono: data.telefono,
          email: data.email || null,
          motivo: data.motivo,
          comentarios: data.comentarios || null,
          starts_at: startsISO,
          status: 'PENDING',
          source: 'landing',
        }])

      if (insertError) throw insertError

      setOk(true)
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setError('No se pudo registrar la cita. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="agendar" className="container-px py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Columna izquierda: pasos */}
        <div>
          <h2 className="text-3xl font-bold">Agendar en 3 pasos</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Rápido, sencillo y con confirmación por WhatsApp o llamada.
          </p>

          <div className="mt-8 grid gap-4">
            <Step n="1" title="Elige fecha y hora" desc="Selecciona el horario que mejor te acomode." />
            <Step n="2" title="Confirma tus datos" desc="Nombre y teléfono para contactarte." />
            <Step n="3" title="¡Listo!" desc="Te confirmamos por WhatsApp/llamada y te esperamos." />
          </div>

          <div className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
            ¿Prefieres hablar?{" "}
            <a className="underline" href="tel:+525500000000">Llámanos</a> o escríbenos por{" "}
            <a
              className="underline"
              target="_blank" rel="noreferrer"
              href="https://wa.me/521000000000?text=Hola,%20quiero%20agendar%20una%20cita"
            >
              WhatsApp
            </a>.
          </div>
        </div>

        {/* Columna derecha: mini formulario */}
        <div className="card">
          <p className="text-xl font-semibold">Solicitar cita</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Te contactamos para confirmar el horario.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            {/* Honeypot anti-spam */}
            <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex="-1"
              aria-hidden="true"
              style={{ position:'absolute', left:'-9999px', top:'-9999px' }}
            />

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Nombre</label>
              <input
                name="nombre"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Teléfono</label>
              <input
                name="telefono"
                inputMode="tel"
                placeholder="55 0000 0000"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email (opcional)</label>
              <input
                type="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Fecha</label>
              <input
                type="date"
                name="fecha"
                min={minDate}
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Hora</label>
              <input
                type="time"
                name="hora"
                required
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Motivo</label>
              <select
                name="motivo"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
                defaultValue="Limpieza"
                required
              >
                <option value="Limpieza">Limpieza</option>
                <option value="Ortodoncia">Ortodoncia</option>
                <option value="Resina/Corona">Resina/Corona</option>
                <option value="Implante">Implante</option>
                <option value="Valoración">Valoración</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-medium">Comentarios (opcional)</label>
              <textarea
                name="comentarios"
                rows="3"
                className="mt-1 w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-300"
              />
            </div>

            {error && (
              <div className="sm:col-span-2 text-sm text-red-600">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary sm:col-span-2"
            >
              {loading ? "Enviando…" : "Solicitar cita"}
            </button>

            {ok && (
              <p className="sm:col-span-2 text-sm text-green-600">
                ¡Recibimos tu solicitud! Te contactaremos para confirmar.
              </p>
            )}
          </form>

          <div className="mt-4 text-xs text-neutral-500">
            Al enviar aceptas nuestro tratamiento de datos para contactarte.{" "}
            <a className="underline" href="/politica-privacidad">Aviso</a>
          </div>
        </div>
      </div>
    </section>
  )
}
