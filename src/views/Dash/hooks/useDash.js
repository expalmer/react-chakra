import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { rickAndMortyService } from '../../../services/rickAndMortyService'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const useDash = () => {
  const page = useQuery()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(Number(page.get('page') || 1))

  useEffect(() => {
    setLoading(true)

    rickAndMortyService
      .getCharacters({ page: currentPage })
      .then(data => {
        setCharacters(data)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [currentPage])

  const prev = () => setCurrentPage(currentPage - 1)
  const next = () => setCurrentPage(currentPage + 1)

  return {
    data: characters,
    error,
    loading,
    prev,
    next,
    page: currentPage,
  }
}
