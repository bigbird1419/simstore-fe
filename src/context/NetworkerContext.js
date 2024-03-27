import { createContext, useState, useEffect } from 'react'

import { getNetworkers } from '../services/networkersService'

export const NetworkerContext = createContext()

export function NetworkerProvider({ children }) {
    const [networkers, setNetworkers] = useState([])

    useEffect(() => {
        const getData = async () => {
            let res = await getNetworkers()
            setNetworkers(res.data);
        }
        getData()
    }, [])

    const val = {
        networkers,
        setNetworkers
    }

    return (
        <NetworkerContext.Provider value={val}>
            {children}
        </NetworkerContext.Provider>
    )
}