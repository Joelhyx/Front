import { useContext, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { UserContext } from '../context/UserContext'

export const Route = createFileRoute('/about')({
  component: About,
})

const colores = ['text-red-600', 'text-green-600', 'text-blue-600', 'text-purple-600']

function ComponenteH2() {
  const [indice, setIndice] = useState(0)

  return (
    <div className="border p-4 rounded my-4">
      <h2 className={`text-2xl font-bold mb-2 ${colores[indice]}`}>
        Este texto cambia de color
      </h2>
      <button
        onClick={() => setIndice((indice + 1) % colores.length)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Cambiar color
      </button>
    </div>
  )
}

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

      <ComponenteH2 />

      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a Inicio
      </Link>
    </div>
  )
}
