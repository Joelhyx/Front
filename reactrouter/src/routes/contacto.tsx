import { useContext, useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { UserContext } from '../context/UserContext'

export const Route = createFileRoute('/contacto')({
  component: Contacto,
})

function ComponenteH1() {
  const [contador, setContador] = useState(0)

  return (
    <div className="border p-4 rounded my-4">
      <h1 className="text-2xl font-bold mb-2">Contador: {contador}</h1>
      <button
        onClick={() => setContador(contador + 1)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Sumar 1
      </button>
    </div>
  )
}

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

      <ComponenteH1 />

      <Link to="/" className="text-blue-600 hover:underline">
        ← Volver a Inicio
      </Link>
    </div>
  )
}
