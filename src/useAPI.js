import { useState, useEffect } from 'react'

export function useAPI (URL) {
    const [data, setData] = useState(null)
    useEffect(() => {
         fetch(URL)
            .then((data)=> setData(data))
            .catch((err)=> console.log(err.message))
            .finally(console.log(data))
    }, [])

    return {data};
}