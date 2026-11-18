import { useContext, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { UserContext } from '../context/UserContext'

export const Route = createFileRoute('/')({
  component: Index,
})

function ComponenteH3() {
  const [activo, setActivo] = useState(false)

  return (
    <div className="border p-4 rounded my-4">
      <h3 className="text-xl font-bold mb-2">
        Estado: {activo ? 'Encendido' : 'Apagado'}
      </h3>
      <button
        onClick={() => setActivo(!activo)}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {activo ? 'OFF' : 'ON'}
      </button>
    </div>
  )
}

function Index() {
  const { nombre, setNombre } = useContext(UserContext)
  const [texto, setTexto] = useState('')

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault()
    setNombre(texto)
    setTexto('')
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inicio</h1>

      <form onSubmit={manejarEnvio} className="mb-4">
        <label className="block mb-2">Escribe tu nombre:</label>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Tu nombre..."
          className="border p-2 rounded mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Guardar nombre
        </button>
      </form>

      {nombre && (
        <p className="text-lg">
          El nombre guardado en el contexto es: <b>{nombre}</b>
        </p>
      )}

      <ComponenteH3 />
    </div>
  )
}
