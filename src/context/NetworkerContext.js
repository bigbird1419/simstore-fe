import { createContext, useState, useEffect } from 'react'

import { getNetworkers, postNetWorker, putNetWorker, deleNetworkerById } from '../services/networkersService'

export const NetworkerContext = createContext()

export function NetworkerProvider({ children }) {
    const [networkers, setNetworkers] = useState([])

    const getData = async () => {
        let res = await getNetworkers()
        setNetworkers(res?.data);
    }
    const postData = async (data) => {
        const res = await postNetWorker(data)
        getData()
        return res
    }
    const putData = async (id, data) => {
        const res = await putNetWorker(id, data)
        getData()
        return res
    }
    const deleteData = async (id) => {
        const res = await deleNetworkerById(id)
        getData()
        return res
    }

    useEffect(() => {
        getData()
    }, [])

    const val = {
        networkers,
        setNetworkers,
        postData,
        putData,
        deleteData
    }

    return (
        <NetworkerContext.Provider value={val}>
            {children}
        </NetworkerContext.Provider>
    )
}