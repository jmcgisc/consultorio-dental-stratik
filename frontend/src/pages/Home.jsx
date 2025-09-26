import HeroDentista from "../components/HeroDentista.jsx"
import HeroVideoDentista from "../components/HeroVideoDentista.jsx"

import ServiciosGrid from "../components/ServiciosGrid.jsx"
import AntesDespuesSection from "../components/AntesDespuesSection.jsx"
import AgendarSection from "../components/AgendarSection.jsx"
import Testimonios from "../components/Testimonios.jsx"
import UbicacionMapa from "../components/UbicacionMapa.jsx"
import FaqAccordion from "../components/FaqAccordion.jsx"
import CtaFinal from "../components/CtaFinal.jsx"
import FloatingWhatsApp from "../components/FloatingWhatsApp.jsx"
import SeoJsonLd from "../components/SeoJsonLd.jsx"
import QueNecesitasHoy from "../components/QueNecesitasHoy.jsx"       // ← nuevo
import FinanciacionWidget from "../components/FinanciacionWidget.jsx" // ← nuevo


export default function Home() {
  return (
    <>
      <SeoJsonLd />
      <HeroVideoDentista />
      <ServiciosGrid />
      <QueNecesitasHoy />        {/* ← nuevo */}
      <AntesDespuesSection />
      <FinanciacionWidget />     {/* ← nuevo */}
      <AgendarSection />
      <Testimonios />
      <UbicacionMapa />
      <FaqAccordion />
      <CtaFinal />
      <FloatingWhatsApp />
    </>
  )
}
