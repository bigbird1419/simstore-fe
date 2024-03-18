import classNames from "classnames/bind"
import { useState } from "react"

import styles from './AdminNetworkers.module.css'
import Button from '../../components/Button'

const cx = classNames.bind(styles)

const networkers = [
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
    { name: 'viettel', description: 'viettel number one', code: 'viettel', img: 'https://simdeponline.vn/images/viettel.gif' },
]

export default function AdminNetworkers() {
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
                                        <label className="block text-md">Tên nhà mạng</label>
                                        <input className="w-100 px-4 py-2" type="text" placeholder="Ten nha mang" />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Đường dẫn tĩnh</label>
                                        <input className="w-100 px-4 py-2" type="text" placeholder="Đường dẫn tĩnh" />
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Ảnh đại diện</label>
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
                    {networkers.length > 0 &&
                        <div className="">
                            <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                <thead>
                                    <tr>
                                        <td>
                                            <span >Tên nhà mạng</span>
                                        </td>
                                        <td>
                                            <span >Mô tả</span>
                                        </td>
                                        <td>
                                            <span>Ảnh đại diện</span>
                                        </td>
                                        <td>
                                            <span>Hành động</span>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {networkers.map((networker, i) => (
                                        <tr key={i}>
                                            <td>
                                                <span className="uppercase">{networker.name}</span>
                                            </td>
                                            <td>
                                                <span className="uppercase">{networker.description}</span>
                                            </td>
                                            <td>
                                                <span><img className="w-32" src={networker.img} alt={networker.name}/></span>
                                            </td>
                                            <td>
                                                <Button className={cx('mr-8')}>
                                                    <i class="far fa-edit mr-2"></i> Sua
                                                </Button>
                                                <Button>
                                                    <i class="fas fa-times mr-2"></i>Xoa
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