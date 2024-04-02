import { createContext, useEffect, useState } from "react";

import { postClientOrder, getClientOrders } from '../services/clientOrderService'

export const ClientOrderContext = createContext()

export function ClientOrderProvider({ children }) {
    const [clientOrders, setClientOrders] = useState([])

    const getData = async () => {
        const res = await getClientOrders('', 1, 10, 'createdDate', 'desc')
        setClientOrders(res.data)
    }
    const postData = async (data) => {
        const res = await postClientOrder(data)
        await getData()
        return res
    }

    const val = {
        clientOrders,
        setClientOrders,
        postData
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <ClientOrderContext.Provider value={val}>
            {children}
        </ClientOrderContext.Provider>
    )
}