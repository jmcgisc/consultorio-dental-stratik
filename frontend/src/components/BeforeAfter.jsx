import { useState } from "react"

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  labelBefore = "Antes",
  labelAfter = "Después",
  alt = "Comparación antes y después",
}) {
  const [pct, setPct] = useState(50) // porcentaje visible del "Antes"

  return (
    <div className="relative rounded-3xl overflow-hidden aspect-[16/10] bg-neutral-200">
      {/* Imagen base = Después */}
      <img src={afterSrc} alt={alt} className="absolute inset-0 w-full h-full object-cover" />

      {/* Capa "Antes" recortada por porcentaje */}
      <img
        src={beforeSrc}
        alt={alt}
        className="absolute inset-0 h-full object-cover"
        style={{ width: `${pct}%` }}
      />

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
        style={{ left: `${pct}%` }}
      />

      {/* Etiquetas */}
      <span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-full bg-black/60 text-white">
        {labelBefore}
      </span>
      <span className="absolute right-3 top-3 text-xs px-2 py-1 rounded-full bg-black/60 text-white">
        {labelAfter}
      </span>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        aria-label="Control de comparación"
        className="absolute left-0 right-0 bottom-3 mx-auto w-[90%] appearance-none h-1 rounded-full bg-white/60 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-500 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-500"
      />
    </div>
  )
}
