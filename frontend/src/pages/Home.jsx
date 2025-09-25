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


export default function Home() {
  return (
    <>
      <SeoJsonLd />
      <HeroVideoDentista />
      <ServiciosGrid />
      <AntesDespuesSection />
      <AgendarSection />
      <Testimonios />
      <UbicacionMapa />
      <FaqAccordion />
      <CtaFinal />
      <FloatingWhatsApp />
    </>
  )
}
