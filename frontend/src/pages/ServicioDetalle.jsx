// src/pages/ServicioDetalle.jsx
import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import HeroMedia from "../components/HeroMedia.jsx"
import VideoPlayer from "../components/VideoPlayer.jsx"
import BeforeAfter from "../components/BeforeAfter.jsx"
import MediaGallery from "../components/MediaGallery.jsx"
import AgendarEnServicios from "../components/AgendarEnServicios.jsx"

/* =========================
   ICONOS (ligeros / sólidos)
   ========================= */

function IconLimpieza(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M21 12h-8V4a1 1 0 0 0-2 0v8H3a1 1 0 0 0 0 2h8v8a1 1 0 0 0 2 0v-8h8a1 1 0 0 0 0-2z" fill="currentColor"/>
    </svg>
  )
}
function IconOrtodoncia(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M20 8h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-6 10v-4h-4v4H8v-4h4v-4H8V8h4V4h4v4h4v4h-4v4h4v4z" fill="currentColor"/>
    </svg>
  )
}
function IconResinas(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="currentColor"/>
      <path d="M12 6a6 6 0 1 0 6 6 6 6 0 0 0-6-6zm0 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4z" fill="currentColor"/>
    </svg>
  )
}
function IconImplante(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M20 9h-6V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z" fill="currentColor"/>
    </svg>
  )
}

/* ===== Iconos extra ===== */
function IconProtesis(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="8" width="18" height="8" rx="2" fill="currentColor"/>
      <circle cx="8" cy="12" r="1.6" fill="#fff"/>
      <circle cx="12" cy="12" r="1.6" fill="#fff"/>
      <circle cx="16" cy="12" r="1.6" fill="#fff"/>
    </svg>
  )
}
function IconEstetica(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2l1.6 4.5L18 8.3l-4.3 1.6L12 14l-1.7-4.1L6 8.3l4.3-1.6L12 2Z" fill="currentColor"/>
      <path d="M18 16l.8 1.9.2 1.8-1.7-.6L15.8 19 18 16Z" fill="currentColor" opacity=".6"/>
    </svg>
  )
}
function IconMaxilofacial(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3a7 7 0 0 0-7 7v2a7 7 0 0 0 7 7h1.5c1.5 0 2.9-1 3.3-2.5L18 13l-4 1-2-2 1-4 4-1-.7-1.5C15.7 3.9 13.9 3 12 3Z" fill="currentColor"/>
    </svg>
  )
}
function IconPediatria(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle cx="12" cy="9" r="4" fill="currentColor"/>
      <path d="M5 19a7 7 0 0 1 14 0H5Z" fill="currentColor" opacity=".85"/>
      <circle cx="10" cy="9" r=".7" fill="#fff"/>
      <circle cx="14" cy="9" r=".7" fill="#fff"/>
    </svg>
  )
}
function IconPeriodoncia(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4 16c3-2 5-3 8-3s5 1 8 3v2c-3-2-5-3-8-3s-5 1-8 3v-2Z" fill="currentColor"/>
      <path d="M12 5a4 4 0 0 0-4 4v3h8V9a4 4 0 0 0-4-4Z" fill="currentColor" opacity=".8"/>
    </svg>
  )
}
function IconEndodoncia(props){
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M8 3h8v6a6 6 0 1 1-12 0V7a4 4 0 0 1 4-4Z" fill="currentColor"/>
      <path d="M12 9c2 2 1 4-1 6s-3 4-1 6" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

/* =========================
   DATA DE SERVICIOS + MEDIOS
   ========================= */

const DATA = {
  limpieza: {
    id: "servicio-limpieza",
    title: "Limpieza Profesional",
    short: "Eliminación de placa y sarro con tecnología ultrasónica. Previene caries y gingivitis.",
    queHace: "La limpieza profesional (profilaxis) remueve placa y sarro supragingival con ultrasonido y pulido, reduciendo la inflamación de encías y el mal aliento.",
    trata: [
      "Acumulación de placa y sarro",
      "Manchas superficiales por café/te/tabaco",
      "Halitosis asociada a biopelícula"
    ],
    procedimiento: [
      "Valoración clínica y recomendaciones de higiene",
      "Profilaxis ultrasónica por cuadrante",
      "Pulido con pastas profilácticas",
      "Enjuague y plan de cuidado domiciliario"
    ],
    priceFrom: 650,
    duration: "30–45 min",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    Icon: IconLimpieza,
    beneficios: [
      "Remueve placa/sarro supragingival",
      "Pulido para manchas superficiales",
      "Refuerzo de higiene y prevención"
    ],
    incluye: ["Valoración breve","Profilaxis ultrasónica","Pulido y enjuague","Plan de cuidado en casa"],
    faq: [
      ["¿Cada cuánto debo hacerme una limpieza?","Cada 6 meses en promedio; puede variar según tu salud periodontal."],
      ["¿Duele?","No. Podrías sentir sensibilidad leve que desaparece en horas."]
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
    queHace: "Corrige la posición de los dientes y la mordida mediante fuerzas controladas con brackets o alineadores, mejorando función y estética.",
    trata: [
      "Dientes apiñados o separados",
      "Mordidas cruzadas/abiertas/sobremordidas",
      "Maloclusiones funcionales y estéticas"
    ],
    procedimiento: [
      "Valoración ortodóncica y estudios (fotografías/RX/escaneo)",
      "Plan de tratamiento personalizado",
      "Colocación de brackets o alineadores",
      "Ajustes periódicos y retención final"
    ],
    priceFrom: "consulta",
    duration: "6–18 meses",
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-50 to-pink-50",
    Icon: IconOrtodoncia,
    beneficios: [
      "Alineación dental y mejora de mordida",
      "Opciones estéticas y removibles",
      "Control en cada etapa del tratamiento"
    ],
    incluye: ["Valoración ortodóncica","Plan de tratamiento personalizado","Revisiones periódicas"],
    faq: [
      ["¿Puedo usar alineadores?","Depende del caso; se confirma en valoración."],
      ["¿Cada cuánto son los ajustes?","Generalmente cada 4–8 semanas."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/ortodoncia-hero.jpg" },
      gallery: [
        { src: "/images/servicios/ortodoncia-1.jpg", alt: "Alineadores" },
        { src: "/images/servicios/ortodoncia-2.jpg", alt: "Brackets estéticos" }
      ],
      beforeAfter: {
        before: "/images/servicios/ortodoncia-before.jpg",
        after:  "/images/servicios/ortodoncia-after.jpg",
      },
      videos: [
        { mp4: "/videos/servicios/ortodoncia.mp4", poster: "/images/servicios/implantes-2.jpg", caption: "Colocación de brackets (animación)" }
      ]
    }
  },

  resinas: {
    id: "servicio-resinas",
    title: "Resinas y Coronas",
    short: "Restauraciones estéticas que imitan color y textura natural.",
    queHace: "Restaura piezas dañadas por caries o fracturas con resinas compuestas o coronas, recuperando forma, función y estética.",
    trata: [
      "Caries y fracturas leves",
      "Desgastes y sensibilidad",
      "Dientes con grandes destrucciones (coronas)"
    ],
    procedimiento: [
      "Valoración y colorimetría",
      "Aislamiento, preparación y adhesión",
      "Modelado, fotocurado y pulido",
      "En coronas: toma de impresión/escaneo y colocación"
    ],
    priceFrom: 1200,
    duration: "45–90 min",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    Icon: IconResinas,
    beneficios: [
      "Estética inmediata del color del diente",
      "Recupera forma y función",
      "Materiales de alta durabilidad"
    ],
    incluye: ["Valoración y colorimetría","Aislamiento y adhesión","Pulido final estético"],
    faq: [
      ["¿Cuánto dura una resina?","Con buena higiene y control, puede durar varios años."],
      ["¿Coronas en un día?","Depende del laboratorio y tu caso clínico."]
    ],
    media: {
      hero: { type: "video", mp4: "/videos/servicios/resinas_coronas.mp4", poster: "/images/servicios/implantes-hero.jpg", image: "/images/servicios/implantes-hero.jpg" },
      gallery: [{ src: "/images/servicios/resinas-1.jpg" }, { src: "/images/servicios/resinas-2.jpg" }],
      beforeAfter: { before: "/images/servicios/resinas-before.jpg", after: "/images/servicios/resinas-after.jpg" },
      videos: [
        { mp4: "/videos/servicios/resinas_coronas.mp4", poster: "/images/servicios/implantes-2.jpg", caption: "Restauración estética (demo)" }
      ]
    }
  },

  implantes: {
    id: "servicio-implantes",
    title: "Implantes Dentales",
    short: "Soluciones permanentes con tecnología 3D para recuperar funcionalidad y estética.",
    queHace: "Reemplaza la raíz dental perdida con un tornillo de titanio integrado al hueso, sobre el cual se coloca una corona fija con aspecto natural.",
    trata: [
      "Pérdida de una o varias piezas dentales",
      "Inestabilidad de prótesis removibles",
      "Rehabilitaciones completas sobre implantes"
    ],
    procedimiento: [
      "Estudio radiográfico/3D y planeación",
      "Cirugía de colocación del implante",
      "Cicatrización e integración ósea",
      "Colocación de pilar y corona definitiva"
    ],
    priceFrom: "consulta",
    duration: "2–4 meses",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    Icon: IconImplante,
    beneficios: [
      "1. Estética natural: se ve y se siente como un diente real.",
      "2. Conserva el hueso maxilar y evita su pérdida.",
      "3. Durabilidad: puede durar décadas con buen cuidado.",
      "4. Comodidad y estabilidad: no se mueve como una prótesis removible.",
      "5. Función masticatoria completa.",
      "6. No afecta dientes sanos adyacentes.",
      "7. Mejora la confianza y el habla."
    ],
    incluye: ["Estudio radiográfico/3D","Plan quirúrgico","Corona sobre implante (según plan)"],
    faq: [
      ["¿Soy candidato?","Se confirma con valoración clínica e imagen (hueso, encía, salud)."],
      ["¿Cuánto tarda?","Entre 2–4 meses en promedio, dependiendo del caso."]
    ],
    media: {
      hero: { type: "video", mp4: "/videos/servicios/implantes-hero.mp4", poster: "/images/servicios/implantes-hero.jpg", image: "/images/servicios/implantes-hero.jpg" },
      gallery: [{ src: "/images/servicios/implantes-1.jpg" }, { src: "/images/servicios/implantes-2.jpg" }],
      beforeAfter: { before: "/images/servicios/implantes-before.jpg", after: "/images/servicios/implantes-after.jpg" },
      videos: [{ mp4: "/videos/servicios/video-implantes.mp4", poster: "/images/servicios/implantes-3f.jpg", caption: "Planeación 3D (demo)" }]
    }
  },

  /* ============ NUEVAS ESPECIALIDADES ============ */

  "protesis-dental": {
    id: "servicio-protesis",
    title: "Prótesis dental",
    short: "La especialidad de prótesis dental (prostodoncia o prostodoncia estomatológica) se encarga de la rehabilitación de la función y estética bucal mediante la reposición de dientes perdidos o dañados, usando diversos tipos de prótesis dentales.",
    queHace: "Rehabilita la estructura dental ausente o dañada con soluciones fijas (coronas/puentes) o removibles, devolviendo estabilidad y fonación.",
    trata: [
      "Prótesis fijas: coronas, puentes, carillas ",
      "Prótesis removibles: parciales o totales",
      "Prótesis sobre implantes",
    ],
    procedimiento: [
      "Rehabilita pacientes con pérdida dental total o parcial.",
      "Restaura la masticación, la fonética y la estética facial.",
      "Mejora la calidad de vida y autoestima del paciente. ",
      "Trata casos complejos junto con otras especialidades (cirugía, ortodoncia, endodoncia, etc.)."
    ],
    priceFrom: "consulta",
    duration: "Dependiendo del caso",
    gradient: "from-amber-600 to-orange-600",
    bgGradient: "from-amber-50 to-orange-50",
    Icon: IconProtesis,
    beneficios: [
      "Recuperar la función masticatoria y el habla ",
      "Mejorar la estética de la sonrisa y el rostro ",
      "Prevenir problemas oclusales y desgaste de los dientes restantes  ",
      "Mantener la salud de tejidos y estructuras bucales",
    ],
    incluye: [
      "Valoración y plan protésico",
      "Pruebas de ajuste/oclusión",
      "Instrucciones de mantenimiento"
    ],
    faq: [
      ["¿Puente o corona?","La corona restaura una pieza; el puente reemplaza una ausente apoyándose en dientes vecinos."],
      ["¿Requiere mantenimiento?","Sí: higiene rigurosa y controles periódicos."]
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
    short: "Carillas, blanqueamiento y contorneado para un diseño de sonrisa mínimamente invasivoLa odontología estética es la especialidad que se enfoca en mejorar la apariencia de los dientes, encías y sonrisa del paciente, combinando salud bucal con armonía facial.",
    queHace: "Evalúa la forma, color, tamaño y posición de los dientes. Diseña una sonrisa armónica y funcional adaptada a cada paciente. ",
    trata: [
      "Blanqueamiento dental  ",
      "Carillas dentales (de resina o porcelana)  ",
      "Contorneado estético de encías (gingivoplastía)",
      "Reconstrucciones con resinas estéticas  ",
      "Coronas libres de metal o de alta estética  ",
    ],
    procedimiento: [
      "Análisis fotográfico/Digital Smile Design",
      "Selección de tono y mock-up",
      "Carillas/contorneado o blanqueamiento guiado",
      "Pulido y mantenimiento"
    ],
    priceFrom: "consulta",
    duration: "1–3 citas",
    gradient: "from-pink-600 to-fuchsia-600",
    bgGradient: "from-pink-50 to-fuchsia-50",
    Icon: IconEstetica,
    beneficios: [
      "Mejorar la confianza y autoestima del paciente.",
      "Lograr una sonrisa natural, equilibrada y saludable.",
      "Corregir alteraciones de color, forma, alineación o desgaste dental.",
      "Integrar estética con función, sin comprometer la salud oral.",
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
    queHace: "Trata quirúrgicamente patologías y alteraciones dento-maxilares: terceros molares, quistes, frenillos y traumatismos menores en cavidad oral.",
    trata: [
      "Terceros molares incluidos",
      "Quistes y lesiones de tejidos blandos",
      "Frenillos y pequeños traumatismos"
    ],
    procedimiento: [
      "Valoración y estudios previos (RX/CBCT si aplica)",
      "Cirugía con control del dolor y sangrado",
      "Indicaciones y seguimiento postoperatorio"
    ],
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
      "Estudios previos",
      "Cirugía y control del dolor",
      "Indicaciones y control"
    ],
    faq: [
      ["¿Me voy a hinchar?","Puede haber inflamación leve-moderada, disminuye en 48–72 h con cuidados."],
      ["¿Puedo trabajar al día siguiente?","Depende del caso y el tipo de cirugía; lo indicamos en consulta."]
    ],
    media: {
      hero: { type: "image", image: "/images/servicios/odontologia-2.jpg" },
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
    short: "La odontopediatría es la especialidad de la odontología que se encarga de la prevención, diagnóstico y tratamiento de las enfermedades bucales en bebés, niños y adolescentes, incluyendo a pacientes con necesidades especiales.",
    queHace: "Controla el crecimiento y desarrollo bucodental desde la infancia.",

trata: [
      "Atiende la erupción de dientes temporales y permanentes.",
      "Trata caries infantiles, traumatismos dentales y maloclusiones.",
      "Aplica fluor, selladores y otros tratamientos preventivos.",
      "Enseña hábitos de higiene oral adecuados desde temprana edad.",
      "Maneja la consulta con técnicas psicológicas para evitar el miedo dental.  ",
      "Deriva a otras especialidades cuando es necesario (ortodoncia, cirugía, etc.).Acompaña el crecimiento bucodental con medidas preventivas, tratamientos conservadores y educación a padres e hijos.",
    ],
    procedimiento: [
      "Valoración pediátrica y adaptación del niño",
      "Profilaxis, selladores o restauraciones según necesidad",
      "Guía de hábitos y seguimiento semestral"
    ],
    priceFrom: "consulta",
    duration: "Variable",
    gradient: "from-sky-600 to-cyan-600",
    bgGradient: "from-sky-50 to-cyan-50",
    Icon: IconPediatria,
    beneficios: [
      "Control del desarrollo bucodental",
      "Prevención con fluor y selladores",
      "Manejo psicológico para evitar miedo dental"
    ],
    incluye: ["Valoración pediátrica","Profilaxis/selladores/restauraciones","Guía para padres"],
    faq: [
      ["¿Cuándo acudir por primera vez?","Desde la erupción del primer diente o antes del primer año."],
      ["¿Cada cuánto es el control?","Cada 6 meses, o antes si hay dolor o cambios en la mordida."]
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
    queHace: "Corrige discrepancias dentales y esqueléticas leves a moderadas para mejorar función y estética facial.",
    trata: [
      "Apiñamiento, espacios y rotaciones",
      "Mordidas abiertas, profundas y cruzadas",
      "Hábitos orales que afectan la oclusión"
    ],
    procedimiento: [
      "Estudio ortodóncico (RX/fotos/escaneo)",
      "Plan personalizado con sistema indicado",
      "Ajustes periódicos",
      "Retención final obligatoria"
    ],
    priceFrom: "consulta",
    duration: "6–24 meses",
    gradient: "from-indigo-600 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50",
    Icon: IconOrtodoncia,
    beneficios: [
      "Alineación y mejora funcional",
      "Opciones estéticas y convencionales",
      "Controles periódicos"
    ],
    incluye: ["Estudio ortodóncico","Plan a medida","Ajustes programados"],
    faq: [
      ["¿Brackets o alineadores?","Lo definimos tras diagnóstico integral."],
      ["¿Retención al final?","Sí, indispensable para mantener resultados."]
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
    short: "La implantología oral es la especialidad de la odontología que se encarga de reemplazar dientes perdidos mediante implantes dentales, que son estructuras de titanio (o materiales biocompatibles) colocadas en el hueso maxilar o mandibular para actuar como raíces artificiales.",
    queHace: "Evalúa si el paciente tiene suficiente hueso y salud bucal para colocar implantes.",
    trata: [
      "Realiza la colocación quirúrgica de los implantes dentales.",
      "Planifica y coloca las coronas, puentes o prótesis que se fijarán sobre los implantes. ",
      "Puede realizar injertos óseos o elevaciones de seno si hay pérdida ósea.",
      "Trabaja en conjunto con otras especialidades (prótesis, periodoncia, cirugía)",
    ],
    procedimiento: [
      "Estudio 3D/guía quirúrgica (si aplica)",
      "Colocación del implante",
      "Cicatrización e integración",
      "Pilar y corona/prótesis"
    ],
    priceFrom: "consulta",
    duration: "2–4 meses",
    gradient: "from-orange-600 to-red-600",
    bgGradient: "from-orange-50 to-red-50",
    Icon: IconImplante,
    beneficios: [
      "Reponen dientes perdidos de forma fija y natural ",
      "Ayudan a preservar el hueso y evitar su reabsorción ",
      "No afectan dientes vecinos (a diferencia de los puentes tradicionales)  ",
      "Permiten masticar, hablar y sonreír con confianza ",
      "Son de larga duración si se cuidan adecuadamente",
    ],
    incluye: ["Estudio 3D","Colocación del implante","Pilar y corona (según plan)"],
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
    short: "La periodoncia es la especialidad de la odontología que se encarga de la prevención, diagnóstico y tratamiento de las enfermedades de los tejidos que rodean y soportan los dientes, principalmente la encía y el hueso alveolar.",
    queHace: "Previene, diagnostica y trata la enfermedad periodontal para preservar el soporte del diente y la salud de las encías.",
    trata: [
        "Gingivitis: inflamación y sangrado de encías por acumulación de placa.  ",
        "Periodontitis: infección más profunda que causa pérdida de hueso y movilidad dental.  ",
        "Recesión de encías, bolsas periodontales y mal aliento crónico. ",
        "Cirugías periodontales: para regenerar hueso, corregir encía retraída o preparar para implantes. ",
        "Mantenimiento periodontal: limpiezas profundas periódicas para evitar recaídas.",
    ],
    procedimiento: [
      "Valoración periodontal y sondaje",
      "Raspado/alisado por cuadrante",
      "Mantenimiento cada 3–6 meses"
    ],
    priceFrom: "consulta",
    duration: "1–2 citas",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    Icon: IconPeriodoncia,
    beneficios: [

      "Disminuye inflamación y sangrado",
      "Conservar los dientes naturales el mayor tiempo posible.",
      "Eliminar infecciones y mejorar la salud de las encías.",
      "Prevenir la pérdida dental. ",
      "Garantizar una base saludable para prótesis o implantes.",
    ],
    incluye: [
      "Valoración periodontal",
      "Raspado y alisado por cuadrante",
      "Plan de higiene y controles"
    ],
    faq: [
      ["¿Sangrado de encías?","Es signo de inflamación; requiere valoración periodontal."],
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
    short: "La endodoncia es la especialidad de la odontología que se encarga del diagnóstico y tratamiento de las enfermedades de la pulpa dental (el nervio del diente) y de los tejidos que rodean la raíz.Diagnóstico y tratamiento de las enfermedades de la pulpa (nervio) y de los tejidos perirradiculares.La endodoncia es la especialidad de la odontología que se encarga del diagnóstico y tratamiento de las enfermedades de la pulpa dental (el nervio del diente) y de los tejidos que rodean la raíz.",
    queHace: "Realiza tratamientos de conductos (endodoncia), que consisten en: Remover el nervio dañado, inflamado o infectado Limpiar, desinfectar y sellar los conductos radiculares  ",
    trata: [
      "Caries profundas que llegan al nervio",
      "Fracturas dentales con exposición pulpar ",
      "Dolor dental severo",
      "Abscesos o infecciones en la raíz",
      "Retratamientos de endodoncia ",
    ],
    procedimiento: [
      "Anestesia y aislamiento absoluto",
      "Apertura y localización de conductos",
      "Limpieza y conformación mecánico-química",
      "Obturación y restauración coronaria"
    ],
    priceFrom: "consulta",
    duration: "60–120 min",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
    Icon: IconEndodoncia,
    beneficios: [
      "Eliminar el dolor  ",
      "Preservar el diente natural  ",
      "Evitar extracciones innecesarias  ",
      "Restaurar la función masticatoria",
    ],
    incluye: [
      "Aislamiento absoluto",
      "Instrumentación y desinfección",
      "Obturación y control",
      "Un diente con tratamiento de conducto puede seguir funcionando por muchos años si se restaura adecuadamente"
    ],
    faq: [
      ["¿Duele la endodoncia?","Se realiza con anestesia; el dolor disminuye tras el tratamiento."],
      ["¿Necesitaré corona?","Frecuente en dientes con gran destrucción; lo valoramos caso a caso."]
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

/* =========================
   COMPONENTE DE DETALLE
   ========================= */

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
        {/* degradado de marca */}
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
              {s.short && (
                <p className="mt-2 text-neutral-100/95 max-w-2xl drop-shadow">{s.short}</p>
              )}

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

          {/* ¿Qué hace [la especialidad]? (fallback a short) */}
          {(s.queHace || s.short) && (
            <div className="card">
              <h2 className="text-xl font-semibold">
                ¿Qué hace {s.title?.toLowerCase?.() || "esta especialidad"}?
              </h2>
              <p className="mt-3 text-neutral-700 dark:text-neutral-200">
                {s.queHace || s.short}
              </p>
            </div>
          )}

          {/* Trata */}
          {Array.isArray(s.trata) && s.trata.length > 0 && (
            <div className="card">
              <h2 className="text-xl font-semibold">Trata</h2>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-200">
                {s.trata.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          )}

          {/* Beneficios */}
          {Array.isArray(s.beneficios) && s.beneficios.length > 0 && (
            <div className="card">
              <h2 className="text-xl font-semibold">Beneficios</h2>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-neutral-700 dark:text-neutral-200">
                {s.beneficios.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          )}

          {/* Before/After */}
          {s.media?.beforeAfter && <BeforeAfter {...s.media.beforeAfter} />}

          {/* ¿Cómo es el procedimiento? */}
          {Array.isArray(s.procedimiento) && s.procedimiento.length > 0 && (
            <div className="card">
              <h2 className="text-xl font-semibold">¿Cómo es el procedimiento?</h2>
              <ol className="mt-3 list-decimal pl-5 space-y-2 text-neutral-700 dark:text-neutral-200">
                {s.procedimiento.map(p => <li key={p}>{p}</li>)}
              </ol>
            </div>
          )}

          {/* Videos */}
          {Array.isArray(s.media?.videos) && s.media.videos.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Videos</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {s.media.videos.map((v) => (
                  <VideoPlayer key={v.mp4 || v.webm || v.poster} {...v} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* lateral */}
        <aside className="space-y-6">
          {/* Galería */}
          {Array.isArray(s.media?.gallery) && s.media.gallery.length > 0 && (
            <div>
              <h3 className="font-semibold mb-3">Galería</h3>
              <MediaGallery items={s.media.gallery} />
            </div>
          )}

          {/* Dudas frecuentes */}
          {Array.isArray(s.faq) && s.faq.length > 0 && (
            <div className="card">
              <h3 className="font-semibold">Dudas frecuentes</h3>
              <div className="mt-3 space-y-3">
                {s.faq.map(([q, a]) => (
                  <details key={q} className="group">
                    <summary className="cursor-pointer font-medium">{q}</summary>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Financiación */}
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
