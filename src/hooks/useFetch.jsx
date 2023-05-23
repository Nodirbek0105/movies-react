import React, { useEffect, useState } from 'react'

export default function useFetch({URL}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchData(URL)

    }, [URL])
    async function fetchData(url) {
        setLoading(true)
        try {
            let data = await fetch(url)
            let res = await data.json()
            setData(res)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return {
        data,
        loading,
        error,
    }
}
