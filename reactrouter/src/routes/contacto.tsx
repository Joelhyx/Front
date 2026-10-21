import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contacto')({
  component: Contacto,
})

function Contacto() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <p className="mb-4">Esta es la página de Contacto</p>
      <Link to="/" className="text-blue-600 hover:underline">← Volver a Inicio</Link>
    </div>
  )
}