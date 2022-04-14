import { useCallback, useState } from 'react'
import Axios from '../../axiosInstance'

const usePost = (path) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [statusCode, setStatusCode] = useState(0)

  const fetch = async (object) => {
    setLoading(true)
    setStatusCode(0)
    try {
      const { data: response, status } = await Axios.post(path, object, { validateStatus: false })
      setData(response)
      setStatusCode(status)
    } catch (error) {
      setError(error.message)
    }
    setLoading(false)
  }

  return { data, loading, error, statusCode, fetch }
}

export default usePost
