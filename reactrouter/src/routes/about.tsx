import { useContext } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { UserContext } from '../context/UserContext'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { nombre } = useContext(UserContext)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p className="mb-2">Esta es la página About.</p>
      {nombre ? (
        <p className="text-lg text-green-600 mb-4">
          Usuario conectado: <b>{nombre}</b>
        </p>
      ) : (
        <p className="text-gray-500 mb-4">No hay ningún usuario guardado.</p>
      )}
      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a Inicio
      </Link>
    </div>
  )
}
