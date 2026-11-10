import { useContext } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { UserContext } from '../context/UserContext'

export const Route = createFileRoute('/contacto')({
  component: Contacto,
})

function Contacto() {
  const { nombre } = useContext(UserContext)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contacto</h1>
      <p className="mb-2">Esta es la página de Contacto.</p>
      {nombre ? (
        <p className="text-lg text-green-600 mb-4">
          Hola <b>{nombre}</b>, gracias por contactar con nosotros.
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
