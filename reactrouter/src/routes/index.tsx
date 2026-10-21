import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inicio</h1>
      <nav className="flex gap-6">
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        <Link to="/contacto" className="text-blue-600 hover:underline">Contacto</Link>
      </nav>
    </div>
  )
}