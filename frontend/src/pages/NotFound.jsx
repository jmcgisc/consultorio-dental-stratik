import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="container-px py-24 text-center">
      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">
        La página que buscas no existe.
      </p>
      <div className="mt-6">
        <Link to="/" className="btn btn-primary">Volver al inicio</Link>
      </div>
    </section>
  )
}
