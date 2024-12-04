import { useState } from "react";

export default function useFetch ()  {
  const [data, setDate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async (url) => {
    if (!url) {
      setError("No URL provided!!")
      return
    }
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error("Network reponse was not OK!")
      }
      const result = await response.json()
      setDate(result)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
return {data, loading, error, fetchData}
}