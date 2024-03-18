import classNames from "classnames/bind"
import { useState } from "react"

import styles from './AdminSims.module.css'
import Button from "../../components/Button"

const cx = classNames.bind(styles)
const sims = [
    { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' },
    { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' },
    { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' },
    { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' },
    { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' },
    { phoneNumber: '0987654345', price: '678909879', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel2.webp', networker: 'viettel', category: 'Sim năm sinh' },
]

export default function AdminSims() {
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
                                        <label className="block text-md">Số điện thoại</label>
                                        <input className="w-100 px-4 py-2" type="text" placeholder="Ten nha mang" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Giá</label>
                                        <input className="w-100 px-4 py-2" type="number" placeholder="Đường dẫn tĩnh" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Nhà mạng</label>
                                        <select className="w-100 p-2 text-md" id="networker">
                                            <option value="volvo">Viettel</option>
                                            <option value="saab">Mobiphone</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Danh mục sim</label>
                                        <select className="w-100 p-2 text-md" id="networker">
                                            <option value="volvo">Sim năm sinh</option>
                                            <option value="saab">Sim tứ quý</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Ảnh mô tả</label>
                                        <input type="file" />
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Mô tả</label>
                                        <textarea className="w-100 px-4 py-2" />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button primary className={cx('')}>Tạo</Button>
                                </div>
                            </div>
                        </div>
                    }
                    {sims.length > 0 &&
                        <div className="">
                            <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                <thead>
                                    <tr>
                                        <td>
                                            <span >Số điện thoại</span>
                                        </td>
                                        <td>
                                            <span >Ảnh mô tả</span>
                                        </td>
                                        <td>
                                            <span >Giá</span>
                                        </td>
                                        <td>
                                            <span >Mô tả</span>
                                        </td>
                                        <td>
                                            <span >Thể loại</span>
                                        </td>
                                        <td>
                                            <span>Hành động</span>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {sims.map((sim, i) => (
                                        <tr key={i}>
                                            <td>
                                                <span>{sim.phoneNumber}</span>
                                            </td>
                                            <td>
                                                <span><img className="w-32" src={sim.img} alt={sim.phoneNumber} /></span>
                                            </td>
                                            <td>
                                                <span>{sim.price}</span>
                                            </td>
                                            <td>
                                                <span>{sim.description}</span>
                                            </td>
                                            <td>
                                                <span className="uppercase">{sim.networker}, {sim.category}</span>
                                            </td>
                                            <td>
                                                <Button className={cx('mr-6')}>
                                                    <i class="far fa-edit mr-2"></i> Sửa
                                                </Button>
                                                <Button>
                                                    <i class="fas fa-times mr-2"></i> Xóa
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