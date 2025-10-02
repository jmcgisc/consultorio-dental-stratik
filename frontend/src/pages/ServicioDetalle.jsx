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

// Iconos extra (simples y ligeros) para nuevas especialidades
function IconProtesis(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="3" y="8" width="18" height="8" rx="2" fill="currentColor"/>
      <circle cx="8" cy="12" r="1.6" fill="#fff"/>
      <circle cx="12" cy="12" r="1.6" fill="#fff"/>
      <circle cx="16" cy="12" r="1.6" fill="#fff"/>
    </svg>
  )
}
function IconEstetica(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 2l1.6 4.5L18 8.3l-4.3 1.6L12 14l-1.7-4.1L6 8.3l4.3-1.6L12 2Z" fill="currentColor"/>
      <path d="M18 16l.8 1.9.2 1.8-1.7-.6L15.8 19 18 16Z" fill="currentColor" opacity=".6"/>
    </svg>
  )
}
function IconMaxilofacial(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M12 3a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h1.5c1.5 0 2.9-1 3.3-2.5L18 13l-4 1-2-2 1-4 4-1-.7-1.5C15.7 3.9 13.9 3 12 3Z" fill="currentColor"/>
    </svg>
  )
}
function IconPediatria(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="9" r="4" fill="currentColor"/>
      <path d="M5 19a7 7 0 0 1 14 0H5Z" fill="currentColor" opacity=".85"/>
      <circle cx="10" cy="9" r=".7" fill="#fff"/>
      <circle cx="14" cy="9" r=".7" fill="#fff"/>
    </svg>
  )
}
function IconPeriodoncia(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M4 16c3-2 5-3 8-3s5 1 8 3v2c-3-2-5-3-8-3s-5 1-8 3v-2Z" fill="currentColor"/>
      <path d="M12 5a4 4 0 0 0-4 4v3h8V9a4 4 0 0 0-4-4Z" fill="currentColor" opacity=".8"/>
    </svg>
  )
}
function IconEndodoncia(props){
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M8 3h8v6a6 6 0 1 1-12 0V7a4 4 0 0 1 4-4Z" fill="currentColor"/>
      <path d="M12 9c2 2 1 4-1 6s-3 4-1 6" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

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
      videos: [{ mp4: "/videos/servicios/video-implantes.mp4", poster: "/images/servicios/implantes-3f.jpg", caption: "Resinas y Coronas" }]
    }
  },

  // ============ NUEVAS ESPECIALIDADES ============

  "protesis-dental": {
    id: "servicio-protesis",
    title: "Prótesis dental",
    short: "Coronas, puentes y prótesis removibles para recuperar función, masticación y estética.",
    priceFrom: "consulta",
    duration: "Dependiendo del caso",
    gradient: "from-amber-600 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    Icon: IconProtesis,
    beneficios: [
      "Recupera la función masticatoria",
      "Mejora estética y fonación",
      "Opciones fijas y removibles según indicación"
    ],
    incluye: [
      "Valoración y plan protésico",
      "Pruebas de ajuste/oclusión",
      "Instrucciones de mantenimiento"
    ],
    faq: [
      ["¿Cuál es la diferencia entre puente y corona?","La corona restaura una pieza; el puente reemplaza una ausente apoyándose en dientes vecinos."],
      ["¿Requiere mantenimiento?","Sí, higiene rigurosa y controles periódicos."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/protesis-1.jpg" },
      gallery: [
        { src: "/images/servicios/protesis-1.jpg", alt: "Corona cerámica" },
        { src: "/images/servicios/protesis-2.jpg", alt: "Puente fijo" }
      ],
      beforeAfter: {
        before: "/images/servicios/protesis-before.jpg",
        after:  "/images/servicios/protesis-after.jpg",
        labelBefore: "Antes",
        labelAfter: "Después"
      },
      videos: []
    }
  },

  "odontologia-estetica": {
    id: "servicio-estetica",
    title: "Odontología estética",
    short: "Carillas, blanqueamiento y contorneado para un diseño de sonrisa mínimamente invasivo.",
    priceFrom: "consulta",
    duration: "1–3 citas",
    gradient: "from-pink-600 to-fuchsia-600",
    bgGradient: "from-pink-50 to-fuchsia-50",
    Icon: IconEstetica,
    beneficios: [
      "Mejora del color y forma dental",
      "Protocolos conservadores",
      "Plan estético personalizado"
    ],
    incluye: [
      "Análisis fotográfico/Mock-up",
      "Selección de tono",
      "Pulido y recomendaciones"
    ],
    faq: [
      ["¿El blanqueamiento daña el esmalte?","Con técnica y control adecuados, no."],
      ["¿Carillas en todos los dientes?","Solo donde esté indicado para armonía y función."]
    ],
    media: {
      hero: { type: "video", mp4: "/videos/servicios/odontologia-1.mp4", poster: "/images/servicios/implantes-hero.jpg", image: "/images/servicios/implantes-hero.jpg" },
      gallery: [
        { src: "/images/servicios/odontologia-1.jpg", alt: "Carillas" },
        { src: "/images/servicios/odontologia-2.jpg", alt: "Blanqueamiento" }
      ],
      beforeAfter: {
        before: "/images/servicios/estetica-before.jpg",
        after:  "/images/servicios/estetica-after.jpg"
      },
      videos: []
    }
  },

  "cirugia-maxilofacial": {
    id: "servicio-maxilofacial",
    title: "Cirugía maxilofacial",
    short: "Extracciones complejas, terceros molares y procedimientos de tejidos blandos.",
    priceFrom: "consulta",
    duration: "Según procedimiento",
    gradient: "from-slate-600 to-gray-700",
    bgGradient: "from-slate-50 to-gray-100",
    Icon: IconMaxilofacial,
    beneficios: [
      "Resolución segura de casos complejos",
      "Manejo del dolor y la inflamación",
      "Seguimiento postoperatorio"
    ],
    incluye: [
      "Estudios previos (RX/CBCT si aplica)",
      "Cirugía y control del dolor",
      "Indicaciones y control postoperatorio"
    ],
    faq: [
      ["¿Voy a hincharme?","Es normal leve-moderado, disminuye en 48–72 h."],
      ["¿Puedo trabajar al día siguiente?","Depende del caso; te orientamos en consulta."]
    ],
    media: {
      hero: { type: "video", image: "/images/servicios/odontologia-2.jpg" },
      gallery: [
        { src: "/images/servicios/odontologia-1.jpg" },
        { src: "/images/servicios/odontologia-2.jpg" }
      ],
      beforeAfter: null,
      videos: []
    }
  },

  "odontopediatria": {
    id: "servicio-odontopediatria",
    title: "Odontopediatría",
    short: "Atención integral para niñas y niños con enfoque preventivo y conductual.",
    priceFrom: "consulta",
    duration: "Variable",
    gradient: "from-sky-600 to-cyan-600",
    bgGradient: "from-sky-50 to-cyan-50",
    Icon: IconPediatria,
    beneficios: [
      "Prevención con selladores y flúor",
      "Restauraciones atraumáticas",
      "Educación y control de hábitos"
    ],
    incluye: [
      "Valoración pediátrica",
      "Profilaxis, selladores o restauraciones",
      "Guía para padres"
    ],
    faq: [
      ["¿A qué edad inicio controles?","Desde la erupción del primer diente o antes del año."],
      ["¿Anestesia?","Solo si es necesario y con técnicas seguras."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/odontopediatria-3.jpg" },
      gallery: [
        { src: "/images/servicios/odontopediatria-1.jpg" },
        { src: "/images/servicios/odontopediatria-2.jpg" }
      ],
      beforeAfter: null,
      videos: []
    }
  },

  "ortodoncia-general": {
    id: "servicio-ortodoncia-general",
    title: "Ortodoncia",
    short: "Corrección de alineación y mordida con distintos sistemas según tu caso.",
    priceFrom: "consulta",
    duration: "6–24 meses",
    gradient: "from-indigo-600 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    Icon: IconOrtodoncia,
    beneficios: [
      "Alineación dental y mejora funcional",
      "Opciones estéticas y convencionales",
      "Controles periódicos"
    ],
    incluye: [
      "Estudio ortodóncico",
      "Plan a medida",
      "Ajustes programados"
    ],
    faq: [
      ["¿Brackets o alineadores?","Depende del diagnóstico; lo definimos en valoración."],
      ["¿Retención al final?","Sí, es esencial para mantener resultados."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/ortodoncia-4.jpg" },
      gallery: [
        { src: "/images/servicios/ortodoncia-1.jpg" },
        { src: "/images/servicios/ortodoncia-2.jpg" }
      ],
      beforeAfter: {
        before: "/images/servicios/ortodoncia-general-before.jpg",
        after:  "/images/servicios/ortodoncia-general-after.jpg"
      },
      videos: []
    }
  },

  "implantologia": {
    id: "servicio-implantologia",
    title: "Implantología",
    short: "Planificación digital y rehabilitación protésica sobre implantes.",
    priceFrom: "consulta",
    duration: "2–4 meses",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    Icon: IconImplante,
    beneficios: [
      "Reemplazo fijo de alta estabilidad",
      "Conservación de hueso alveolar",
      "Integración con prótesis estética"
    ],
    incluye: [
      "Estudio 3D/guía quirúrgica (si aplica)",
      "Colocación del implante",
      "Pilar y corona (según plan)"
    ],
    faq: [
      ["¿Duele la cirugía?","Se realiza con anestesia local y cuidados postoperatorios."],
      ["¿Siempre puedo tener implante?","Depende de hueso y salud; lo confirmamos con estudio."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/implantologia-1.jpg" },
      gallery: [
        { src: "/images/servicios/implantologia-1.jpg" },
        { src: "/images/servicios/implantologia-2.jpg" }
      ],
      beforeAfter: {
        before: "/images/servicios/implantologia-before.jpg",
        after:  "/images/servicios/implantologia-after.jpg"
      },
      videos: []
    }
  },

  "periodoncia": {
    id: "servicio-periodoncia",
    title: "Periodoncia",
    short: "Tratamientos de encías: raspado y alisado radicular, mantenimiento y cirugía periodontal.",
    priceFrom: "consulta",
    duration: "1–2 citas",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    Icon: IconPeriodoncia,
    beneficios: [
      "Disminuye inflamación y sangrado",
      "Control de placa y biopelícula",
      "Mantenimiento periodontal"
    ],
    incluye: [
      "Valoración periodontal",
      "Raspado y alisado por cuadrante",
      "Plan de higiene y controles"
    ],
    faq: [
      ["¿Sangran mis encías, es normal?","Sangrado persistente suele indicar gingivitis/periodontitis; hay que tratar."],
      ["¿Cada cuánto mantenimiento?","Generalmente cada 3–6 meses."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/periodoncia-3.jpg" },
      gallery: [
        { src: "/images/servicios/periodoncia-1.jpg" },
        { src: "/images/servicios/periodoncia-2.jpg" }
      ],
      beforeAfter: null,
      videos: []
    }
  },

  "endodoncia": {
    id: "servicio-endodoncia",
    title: "Endodoncia",
    short: "Tratamiento de conductos para eliminar dolor y conservar piezas.",
    priceFrom: "consulta",
    duration: "60–120 min",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    Icon: IconEndodoncia,
    beneficios: [
      "Elimina dolor de origen pulpar",
      "Conserva la pieza dental",
      "Técnicas rotatorias y magnificación"
    ],
    incluye: [
      "Anestesia y aislamiento absoluto",
      "Limpieza/conformación de conductos",
      "Obturación y restauración"
    ],
    faq: [
      ["¿Duele la endodoncia?","Con anestesia adecuada, no debería doler."],
      ["¿Necesita corona después?","Según pérdida de estructura; se evalúa en consulta."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/endodoncia-3.jpg" },
      gallery: [
        { src: "/images/servicios/endodoncia-1.jpg" },
        { src: "/images/servicios/endodoncia-2.jpg" }
      ],
      beforeAfter: null,
      videos: []
    }
  },
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
