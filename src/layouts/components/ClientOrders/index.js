import classNames from "classnames/bind"

import styles from './ClientOrder.module.css'
import ClientOrderItems from "./ClientOrderItem"
import { getClientOrders } from '../../../services/clientOrderService'
import { useEffect, useState } from "react"

const cx = classNames.bind(styles)

export default function ClientOrder() {
    const [clientOrders, setClientOrders] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await getClientOrders()
            setClientOrders(res.data)
        }
        getData()
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                <div className="border">
                    <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">
                        ĐƠN HÀNG MỚI
                    </h1>
                    <div>
                        {clientOrders.map((order, i) => (
                            <ClientOrderItems className={cx('')} data={order} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}