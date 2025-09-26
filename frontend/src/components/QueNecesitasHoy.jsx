import { Link } from "react-router-dom"

const items = [
  { to: "/servicios#servicio-limpieza",   t: "Higiene / Limpieza", d: "Profilaxis y mantenimiento",   emoji: "🪥" },
  { to: "/servicios#servicio-ortodoncia", t: "Alineación",         d: "Brackets o alineadores",       emoji: "😬" },
  { to: "/servicios#servicio-resinas",    t: "Estética",           d: "Resinas, coronas, carillas",   emoji: "✨" },
  { to: "/servicios#servicio-implantes",  t: "Reemplazar pieza",   d: "Implantes dentales",           emoji: "🦷" },
  { to: "/#agendar",                       t: "Urgencia hoy",       d: "Te buscamos un espacio",       emoji: "⏱️" },
  { to: "/#faq",                            t: "Tengo dudas",        d: "Resolvemos tus preguntas",     emoji: "❓" },
]

export default function QueNecesitasHoy() {
  return (
    <section className="container-px py-12">
      <h2 className="text-3xl font-bold">¿Qué necesitas hoy?</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">Elige una opción para continuar.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({to,t,d,emoji}) => (
          <Link key={t} to={to} className="card group hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-2xl">{emoji}</span>
              <p className="font-semibold">{t}</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{d}</p>
            <span className="mt-3 inline-block text-sm text-brand-700 group-hover:underline">Ver más →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
