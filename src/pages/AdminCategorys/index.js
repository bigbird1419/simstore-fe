import classNames from "classnames/bind"
import { useState } from "react"

import styles from './AdminCategorys.module.css'
import Button from '../../components/Button'

const cx = classNames.bind(styles)

const categorys = [
    { name: 'Sim năm sinh', description: 'Sim năm sinh', code: 'sim-nam-sinh' },
    { name: 'Sim năm sinh', description: 'Sim năm sinh', code: 'sim-nam-sinh' },
    { name: 'Sim năm sinh', description: 'Sim năm sinh', code: 'sim-nam-sinh' },
    { name: 'Sim năm sinh', description: 'Sim năm sinh', code: 'sim-nam-sinh' },
    { name: 'Sim năm sinh', description: 'Sim năm sinh', code: 'sim-nam-sinh' },
    { name: 'Sim năm sinh', description: 'Sim năm sinh', code: 'sim-nam-sinh' },
]

export default function AdminCategorys() {
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
                                        <label className="block text-md">Tên danh mục</label>
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
                    {categorys.length > 0 &&
                        <div className="">
                            <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                <thead>
                                    <tr>
                                        <td>
                                            <span >Tên danh mục</span>
                                        </td>
                                        <td>
                                            <span >Mô tả</span>
                                        </td>
                                        <td>
                                            <span>Hành động</span>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {categorys.map((category, i) => (
                                        <tr key={i}>
                                            <td>
                                                <span className="uppercase">{category.name}</span>
                                            </td>
                                            <td>
                                                <span className="uppercase">{category.description}</span>
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