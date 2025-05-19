// src/components/PrivateRoute.jsx
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import  supabase  from '../services/supabaseClient'

export default function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Cargando...</p>
  if (!user) return <Navigate to="/login" replace />

  return children
}
