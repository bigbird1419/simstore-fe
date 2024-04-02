import classNames from "classnames/bind"
import { useContext } from "react"

import styles from './ClientOrder.module.css'
import ClientOrderItems from "./ClientOrderItem"
import { ClientOrderContext } from '../../../context/ClientOrderContext'

const cx = classNames.bind(styles)

export default function ClientOrder() {
    const { clientOrders } = useContext(ClientOrderContext)

    return (
        <div className="wrapper">
            <div className="container">
                <div className="border">
                    <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">
                        ĐƠN HÀNG MỚI
                    </h1>
                    {clientOrders?.length > 0 ?
                        <div>
                            {clientOrders?.map((order, i) => (
                                <ClientOrderItems className={cx('')} data={order} key={i} />
                            ))}
                        </div> :
                        <p>Chưa có đơn hàng mới</p>
                    }
                </div>
            </div>
        </div>
    )
}