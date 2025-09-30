import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import HeroMedia from "../components/HeroMedia.jsx"
import VideoPlayer from "../components/VideoPlayer.jsx"
import BeforeAfter from "../components/BeforeAfter.jsx"
import MediaGallery from "../components/MediaGallery.jsx"
import AgendarEnServicios from "../components/AgendarEnServicios.jsx"

// Iconos (como ya tenías)
function IconLimpieza(props){return(<svg viewBox="0 0 24 24" {...props}><path d="M21 12h-8V4a1 1 0 0 0-2 0v8H3a1 1 0 0 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2z" fill="currentColor"/></svg>)}
function IconOrtodoncia(props){return(<svg viewBox="0 0 24 24" {...props}><path d="M20 8h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-6 10v-4h-4v4H8v-4h4v-4H8V8h4V4h4v4h4v4h-4v4h4v4z" fill="currentColor"/></svg>)}
function IconResinas(props){return(<svg viewBox="0 0 24 24" {...props}><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="currentColor"/><path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" fill="currentColor"/></svg>)}
function IconImplante(props){return(<svg viewBox="0 0 24 24" {...props}><path d="M20 9h-6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" fill="currentColor"/></svg>)}

// === Data por servicio con MEDIOS ===
const DATA = {
  limpieza: {
    id: "servicio-limpieza",
    title: "Limpieza Profesional",
    short: "Eliminación de placa y sarro con tecnología ultrasónica. Previene caries y gingivitis.",
    priceFrom: 650,
    duration: "30–45 min",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    Icon: IconLimpieza,
    beneficios: ["Remueve placa/sarro supragingival","Pulido para manchas superficiales","Refuerzo de higiene y prevención"],
    incluye: ["Valoración breve","Profilaxis ultrasónica","Pulido y enjuague","Plan de cuidado en casa"],
    faq: [
      ["¿Cada cuánto debo hacerme una limpieza?","Se recomienda cada 6 meses, o según tu indicación clínica."],
      ["¿Duele?","No debería doler. Puedes sentir sensibilidad leve que desaparece en horas."]
    ],
    media: {
      hero: {
        type: "video",
        mp4:  "/videos/servicios/limpieza-profilaxis.mp4",
        webm: "/videos/servicios/limpieza-hero.webm",
        poster: "/images/servicios/limpieza-hero.jpg",
        image: "/images/servicios/limpieza-hero.jpg"
      },
      gallery: [
        { src: "/images/servicios/limpieza-1.jpg", alt: "Higiene profesional" },
        { src: "/images/servicios/limpieza-2.jpg", alt: "Pulido dental" },
        { src: "/images/servicios/limpieza-3.jpg", alt: "Consejos de cepillado" }
      ],
      beforeAfter: {
        before: "/images/servicios/limpieza-before.jpg",
        after:  "/images/servicios/limpieza-after.jpg",
        labelBefore: "Antes",
        labelAfter:  "Después"
      },
      videos: [
        {
          mp4:  "/videos/servicios/limpieza-profilaxis.mp4",
          webm: "/videos/servicios/limpieza-profilaxis.webm",
          poster: "/images/servicios/limpieza-1.jpg",
          caption: "Profilaxis ultrasónica (demo)"
        }
      ]
    }
  },

  ortodoncia: {
    id: "servicio-ortodoncia",
    title: "Ortodoncia Avanzada",
    short: "Brackets metálicos, estéticos y alineadores invisibles para una sonrisa perfecta.",
    priceFrom: "consulta",
    duration: "6–18 meses",
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    Icon: IconOrtodoncia,
    beneficios: ["Alineación dental y mejora de mordida","Opciones estéticas y removibles","Control en cada etapa del tratamiento"],
    incluye: ["Valoración ortodóncica","Plan de tratamiento personalizado","Revisiones periódicas"],
    faq: [["¿Puedo usar alineadores?","Depende del caso. Se confirma en valoración."],["¿Cada cuánto son los ajustes?","Generalmente cada 4–8 semanas."]],
    media: {
      hero: {
        type: "image",
        image: "/images/servicios/ortodoncia-hero.jpg"
      },
      gallery: [
        { src: "/images/servicios/ortodoncia-1.jpg", alt: "Alineadores" },
        { src: "/images/servicios/ortodoncia-2.jpg", alt: "Brackets estéticos" }
      ],
      beforeAfter: {
        before: "/images/servicios/ortodoncia-before.jpg",
        after:  "/images/servicios/ortodoncia-after.jpg",
      },
      videos: [{ mp4: "/videos/servicios/ortodoncia.mp4", poster: "/images/servicios/implantes-2.jpg", caption: "Colocación de brackets (animación)" }]
    }
  },

  resinas: {
    id: "servicio-resinas",
    title: "Resinas y Coronas",
    short: "Restauraciones estéticas que imitan color y textura natural.",
    priceFrom: 1200,
    duration: "45–90 min",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    Icon: IconResinas,
    beneficios: ["Estética inmediata del color del diente","Recupera forma y función","Materiales de alta durabilidad"],
    incluye: ["Valoración y colorimetría","Aislamiento y adhesión","Pulido final estético"],
    faq: [["¿Cuánto dura una resina?","Bien cuidada, varios años."],["¿Coronas en un día?","Depende de laboratorio y caso."]],
    media: {
      hero: { type: "video", mp4: "/videos/servicios/resinas_coronas.mp4", poster: "/images/servicios/implantes-hero.jpg", image: "/images/servicios/implantes-hero.jpg" },
      gallery: [{ src: "/images/servicios/resinas-1.jpg" }, { src: "/images/servicios/resinas-2.jpg" }],
      beforeAfter: { before: "/images/servicios/resinas-before.jpg", after: "/images/servicios/resinas-after.jpg" },
      videos: [{ mp4: "/videos/servicios/resinas_coronas.mp4", poster: "/images/servicios/implantes-2.jpg", caption: "Colocación de implante (animación)" }]
    }
  },

  implantes: {
    id: "servicio-implantes",
    title: "Implantes Dentales",
    short: "Soluciones permanentes con tecnología 3D para recuperar funcionalidad y estética.",
    priceFrom: "consulta",
    duration: "2–4 meses",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    Icon: IconImplante,
    beneficios: 
    [ "1. Estética natural: Se ve y se siente como un diente real.", 
      "2. Estimula el hueso maxilar y evita su pérdida, a diferencia de puentes o dentaduras.", 
      "3. Durabilidad: Puede durar décadas con buen cuidado, incluso toda la vida.", 
      "4. Comodidad y estabilidad: No se mueve como una prótesis removible. ", 
      "5. Función masticatoria completa: Permite comer sin restricciones ni molestias.", 
      "6. No afecta dientes sanos: A diferencia de los puentes, no requiere desgastar dientes vecinos.", 
      "7. Mejora la confianza y el habla: No hay riesgo de que se deslice o cause inseguridad al hablar.",],
    incluye: ["Estudio radiográfico/3D","Plan quirúrgico","Corona sobre implante (según paquete)"],
    faq: [["¿Soy candidato?","Se confirma con valoración clínica e imagen."],["¿Cuánto tarda?","2–4 meses aprox."]],
    media: {
      hero: { type: "video", mp4: "/videos/servicios/implantes-hero.mp4", poster: "/images/servicios/implantes-hero.jpg", image: "/images/servicios/implantes-hero.jpg" },
      gallery: [{ src: "/images/servicios/implantes-1.jpg" }, { src: "/images/servicios/implantes-2.jpg" }],
      beforeAfter: { before: "/images/servicios/implantes-before.jpg", after: "/images/servicios/implantes-after.jpg" },
      videos: [{ mp4: "/videos/servicios/implantes-hero.mp4", poster: "/images/servicios/implantes-2.jpg", caption: "Resinas y Coronas" }]
    }
  }
}

export default function ServicioDetalle() {
  const { slug } = useParams()
  const s = DATA[slug]

  useEffect(() => {
    if (s?.title) document.title = `${s.title} | Clínica Dental`
  }, [s])

  if (!s) {
    return (
      <section className="container-px py-16">
        <h1 className="text-2xl font-bold">Servicio no encontrado</h1>
        <p className="mt-2">El servicio solicitado no existe.</p>
        <div className="mt-6">
          <Link to="/servicios" className="btn">Volver a servicios</Link>
        </div>
      </section>
    )
  }

  const { Icon } = s

  return (
    <>
      {/* HERO con media */}
      <section className="relative isolate overflow-hidden">
        {/* fondo media */}
        <HeroMedia media={s.media?.hero} />

        {/* degradado de marca adicional para cohesión */}
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${s.bgGradient} mix-blend-multiply`} />

        <div className="container-px py-10">
          <nav className="text-sm mb-4 text-neutral-100 drop-shadow">
            <Link to="/" className="hover:underline">Inicio</Link> <span className="mx-1">/</span>
            <Link to="/servicios" className="hover:underline">Servicios</Link> <span className="mx-1">/</span>
            <span className="text-white">{s.title}</span>
          </nav>

          <div className="flex items-start gap-4">
            <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${s.gradient} shadow-lg`}>
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">{s.title}</h1>
              <p className="mt-2 text-neutral-100/95 max-w-2xl drop-shadow">{s.short}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {s.priceFrom && (
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-white/90 text-neutral-900 ring-1 ring-neutral-200">
                    Desde {typeof s.priceFrom === "number" ? `$${s.priceFrom} MXN` : s.priceFrom}
                  </span>
                )}
                {s.duration && (
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-white/90 text-neutral-900 ring-1 ring-neutral-200">
                    {s.duration} aprox.
                  </span>
                )}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="/#agendar" className="btn btn-primary">Agendar valoración</a>
                <a
                  className="btn"
                  href={`https://wa.me/521000000000?text=Hola,%20quiero%20informes%20sobre%20${encodeURIComponent(s.title)}`}
                  target="_blank" rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="container-px py-12 grid lg:grid-cols-3 gap-8">
        {/* principal */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card">
            <h2 className="text-xl font-semibold">Beneficios</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-200">
              {s.beneficios.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>

          {/* Before/After si existe */}
          {s.media?.beforeAfter && (
            <BeforeAfter {...s.media.beforeAfter} />
          )}

          <div className="card">
            <h2 className="text-xl font-semibold">¿Cómo es el procedimiento?</h2>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-neutral-700 dark:text-neutral-200">
              <li>Valoración clínica y plan a medida.</li>
              <li>Explicación de alternativas, tiempos y costos.</li>
              <li>Ejecución del tratamiento y controles.</li>
            </ol>
          </div>

          {/* Videos (si hay) */}
          {s.media?.videos?.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Videos</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {s.media.videos.map((v) => (
                  <VideoPlayer key={v.mp4 || v.webm} {...v} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* lateral */}
        <aside className="space-y-6">
          {/* Galería */}
          {s.media?.gallery?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Galería</h3>
              <MediaGallery items={s.media.gallery} />
            </div>
          )}

          <div className="card">
            <h3 className="font-semibold">¿Dudas frecuentes?</h3>
            <div className="mt-3 space-y-3">
              {s.faq.map(([q,a]) => (
                <details key={q} className="group">
                  <summary className="cursor-pointer font-medium">{q}</summary>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{a}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold">Financiación</h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              Contamos con opciones de pago y planes mensuales. Consulta términos en clínica.
            </p>
            <a href="/#agendar" className="btn btn-primary mt-3">Solicitar plan</a>
          </div>
        </aside>

      </section>
        <AgendarEnServicios/>
    </>
  )
}
