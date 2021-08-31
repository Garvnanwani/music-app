import axios from 'axios'
import { useState, useCallback } from 'react'

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const callAPI = useCallback(async (url, host, urlParams) => {
        setIsLoading(true)

        const options = {
            method: 'GET',
            url: url,
            params: urlParams,
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_SHAZAM_API_KEY,
                'x-rapidapi-host': host,
            },
        }

        try {
            const response = await axios.request(options)
            const responseData = await response.data

            setIsLoading(false)
            return responseData
        } catch (error) {
            setError(error.message)
            console.log(error)
            setIsLoading(false)
        }
    }, [])

    return {
        error,
        callAPI,
        isLoading,
    }
}

export default useFetch
