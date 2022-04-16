import { useState } from 'react'
import Axios from '../../axiosInstance'

const usePut = (path) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [statusCode, setStatusCode] = useState(0)

  const fetch = async (object, id) => {
    setLoading(true)
    setStatusCode(0)
    error && setError(null)
    try {
      const { data: response, status } = await Axios.put(`${path}/${id}`, object, { validateStatus: false })
      setData(response)
      setStatusCode(status)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return { data, loading, error, statusCode, fetch }
}

export default usePut
