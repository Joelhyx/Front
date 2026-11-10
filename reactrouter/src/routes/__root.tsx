import '../styles.css'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { UserProvider } from '../context/UserContext'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <UserProvider>
      <div>
        <nav className="flex gap-4 p-4 bg-gray-200">
          <Link to="/" className="text-blue-600 hover:underline">
            Inicio
          </Link>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
          <Link to="/contacto" className="text-blue-600 hover:underline">
            Contacto
          </Link>
        </nav>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </UserProvider>
  )
}
