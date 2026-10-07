import { useEffect, useState } from 'react'
import { fetchCommunities } from '../data/communities'

export function useCommunities() {
  const [communities, setCommunities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function reloadCommunities() {
    setLoading(true)
    setError(null)
    fetchCommunities()
      .then(setCommunities)
      .catch(() => setError('Unable to load communities. Please try again.'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    reloadCommunities()
  }, [])

  return { communities, loading, error, reloadCommunities }
}
