import classNames from "classnames/bind"

import styles from './ClientOrder.module.css'
import clienOrders from '../../../constants/clientOrders'
import ClientOrderItems from "./ClientOrderItem"

const cx = classNames.bind(styles)

export default function ClientOrder() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="border">
                    <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">
                        ĐƠN HÀNG MỚI
                    </h1>
                    <div>
                        {clienOrders.map((order, i) => (
                            <ClientOrderItems className={cx('')} data={order} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}