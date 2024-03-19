import classNames from "classnames/bind"
import { useState } from "react"

import styles from './AdminClientOrders.module.css'
import Button from "../../components/Button"

const cx = classNames.bind(styles)
const clientOrders = [
    {
        clientName: 'trương tuấn',
        address: 'thái bình',
        phone: '098764567',
        payment: 'Thanh toán cod',
        description: 'Giao hàng nhanh giùm mình',
        status: 'Chưa giao',
        sim: { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' }
    },
    {
        clientName: 'trương tuấn',
        address: 'thái bình',
        phone: '098764567',
        payment: 'Thanh toán cod',
        description: 'Giao hàng nhanh giùm mình',
        status: 'Chưa giao',
        sim: { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' }
    },
    {
        clientName: 'trương tuấn',
        address: 'thái bình',
        phone: '098764567',
        payment: 'Thanh toán cod',
        description: 'Giao hàng nhanh giùm mình',
        status: 'Chưa giao',
        sim: { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' }
    },
    {
        clientName: 'trương tuấn',
        address: 'thái bình',
        phone: '098764567',
        payment: 'Thanh toán cod',
        description: 'Giao hàng nhanh giùm mình',
        status: 'Chưa giao',
        sim: { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' }
    },
    {
        clientName: 'trương tuấn',
        address: 'thái bình',
        phone: '098764567',
        payment: 'Thanh toán cod',
        description: 'Giao hàng nhanh giùm mình',
        status: 'Chưa giao',
        sim: { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' }
    }
]


export default function AdminClientOrders() {
    const [isShowCreate, setIsShowCreate] = useState(false)

    const handleToggleShowCreate = () => {
        setIsShowCreate(val => !val)
    }


    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    <div>
                        <Button onClick={handleToggleShowCreate} primary>Show create</Button>
                    </div>
                    {isShowCreate &&
                        <div className="">
                            <div className="row">
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Tên khách hàng</label>
                                        <input className="w-100 px-4 py-2" type="text" placeholder="Ten nha mang" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Điện thoại liên hệ</label>
                                        <input className="w-100 px-4 py-2" type="number" placeholder="Đường dẫn tĩnh" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Địa chỉ</label>
                                        <input className="w-100 px-4 py-2" type="number" placeholder="Đường dẫn tĩnh" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Phương thức thanh toán</label>
                                        <input className="w-100 px-4 py-2" type="number" placeholder="Đường dẫn tĩnh" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Trạng thái đơn hàng</label>
                                        <input className="w-100 px-4 py-2" type="number" placeholder="Đường dẫn tĩnh" />
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Mô tả</label>
                                        <textarea className="w-100 px-4 py-2" />
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <h3 className="block text-md">Thông tin sim</h3>
                                        <h3>Nhà mạng: Viettel</h3>
                                        <h3>Danh mục: Sim năm sinh</h3>
                                        <h3>Số sim: 875678987</h3>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button primary className={cx('mr-6')}>Tạo</Button>
                                    <Button primary className={cx('')}>Xóa</Button>
                                </div>
                            </div>
                        </div>
                    }
                    {clientOrders.length > 0 &&
                        <div className="">
                            <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                <thead>
                                    <tr>
                                        <td>
                                            <span >Thông tin</span>
                                        </td>
                                        <td>
                                            <span >Sim mua</span>
                                        </td>
                                        <td>
                                            <span >Thể loại</span>
                                        </td>
                                        <td>
                                            <span >Mô tả</span>
                                        </td>
                                        <td>
                                            <span >Thanh toán</span>
                                        </td>
                                        <td>
                                            <span>Hành động</span>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {clientOrders.map((clientOrder, i) => (
                                        <tr key={i}>
                                            <td>
                                                <span>{clientOrder.clientName}, {clientOrder.address}, {clientOrder.phone}</span>
                                            </td>
                                            <td>
                                                <span>{clientOrder.sim.phoneNumber}</span>
                                            </td>
                                            <td>
                                                <span>{clientOrder.sim.networker}, {clientOrder.sim.category}</span>
                                            </td>
                                            <td>
                                                <span>{clientOrder.description}</span>
                                            </td>
                                            <td>
                                                <span className="uppercase">{clientOrder.payment}</span>
                                            </td>
                                            <td>
                                                <Button className={cx('mr-6')}>
                                                    <i className="far fa-edit mr-2"></i> Sửa
                                                </Button>
                                                <Button>
                                                    <i className="fas fa-times mr-2"></i> Xóa
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}