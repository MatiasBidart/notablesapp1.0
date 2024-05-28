import { useState, useEffect } from 'react'
import axios from 'axios'

// por ahora lo manejaremos así
export function getAPI (URL) {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.get(URL)
        .then(response => setData(response.data))
        .catch(err => console.log(err.message))
    }, [])

    return data;
}

export function postAPI (URL, body) {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.post(URL, body)
        .then(response => setData(response.data))
        .catch(err => console.log(err.message))
    }, [])

    return data;
}

export function patchAPI (URL, body) {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.patch(URL,body)
        .then(response => setData(response.data))
        .catch(err => console.log(err.message))
    }, [])

    return data;
}

export function deleteAPI (URL, id) {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios.delete(URL, id)
        .then(response => setData(response.data))
        .catch(err => console.log(err.message))
    }, [])

    return data;
}