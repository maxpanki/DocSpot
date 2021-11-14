import { useState, useCallback } from 'react'

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<null | string>(null)

    const request = useCallback(async (url: string, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const res = await fetch(url, {method, body, headers})
            const data = await res.json()

            if(!res.ok) {
                throw new Error(data.message || 'Something went wrong.')
            }

            setLoading(false)

            return data
        } catch (e) {
            setLoading(false)
            setError((e as Error).message)

            throw e
        }
    }, [])

    const clearError = () => setError(null)


    return { loading, request, error, clearError }
}