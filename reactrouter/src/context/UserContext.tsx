import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

interface UserContextType {
  nombre: string
  setNombre: (nombre: string) => void
}

export const UserContext = createContext<UserContextType>({
  nombre: '',
  setNombre: () => {},
})

export function UserProvider({ children }: { children: ReactNode }) {
  const [nombre, setNombre] = useState('')

  return (
    <UserContext.Provider value={{ nombre, setNombre }}>
      {children}
    </UserContext.Provider>
  )
}
