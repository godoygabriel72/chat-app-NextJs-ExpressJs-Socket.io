import { useState, useEffect, useCallback } from 'react'
import Axios from '../../axiosInstance'

const useGetAll = (path) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [statusCode, setStatusCode] = useState(0)

  const handleGetAll = async () => {
    setLoading(true)
    setStatusCode(0)
    error && setError(null)
    try {
      const { data: response, status } = await Axios.get(path, { validateStatus: false })
      setData(response)
      setStatusCode(status)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  const fetch = useCallback(() => {
    handleGetAll()
  }, [handleGetAll])

  useEffect(() => fetch(), [])

  return { data, loading, error, statusCode, fetch }
}

export default useGetAll
