import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('campus_connect_user')
    return stored ? JSON.parse(stored) : null
  })

  useEffect(() => {
    if (user) localStorage.setItem('campus_connect_user', JSON.stringify(user))
    else localStorage.removeItem('campus_connect_user')
  }, [user])

  function login(email) {
    const role = email.toLowerCase().includes('coordinator')
      ? 'coordinator'
      : 'student'
    setUser({
      name: email.split('@')[0],
      email,
      role
    })
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}
