import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './AdminCategorys.module.css'
import Button from '../../components/Button'
import { getCategorys, delCategoryById, postCategory, putCategory } from '../../services/categoryService'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'

const cx = classNames.bind(styles)

export default function AdminCategorys() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const [categorys, setCategorys] = useState([])
    const [curCategory, setCurCategory] = useState({})
    const [categoryName, setCategoryName] = useState('')
    const [categoryCode, setCategoryCode] = useState('')
    const [categoryDes, setCategoryDes] = useState('')
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleToggleShowCreate = () => {
        setIsShowCreate(val => !val)
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }
    const hanldeEditCategory = (category) => {
        setCurCategory(category)
        setCategoryName(category.name)
        setCategoryCode(category.code)
        setCategoryDes(category.description)
        setIsShowCreate(true)
    }
    const hanldeClearInfoInput = () => {
        setCurCategory({})
        setCategoryName('')
        setCategoryCode('')
        setCategoryDes('')
    }
    const hanldePostCategory = async () => {
        try {
            setIsLoading(true)
            const data = await postCategory({
                name: categoryName,
                code: categoryCode,
                description: categoryDes
            })
            setContentMessage({
                type: 'success',
                message: data.message
            })
            setIsShowMessage(true)
            hanldeClearInfoInput()
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setContentMessage({
                type: 'error',
                message: 'Có lỗi xảy ra, vui lòng thử lại!!!'
            })
            setIsShowMessage(true)
        }
    }
    const hanldePutCategory = async () => {
        try {
            setIsLoading(true)
            const data = await putCategory(curCategory.id, {
                name: categoryName,
                code: categoryCode,
                description: categoryDes
            })
            setContentMessage({
                type: 'success',
                message: data.message
            })
            setIsShowMessage(true)
            hanldeClearInfoInput()
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setContentMessage({
                type: 'error',
                message: 'Có lỗi xảy ra, vui lòng thử lại!!!'
            })
            setIsShowMessage(true)
        }
    }
    const handleDelCategory = async () => {
        try {
            setIsLoading(true)
            const data = await delCategoryById(curCategory.id)
            setContentMessage({
                type: 'success',
                message: data.message
            })
            setIsShowMessage(true)
            hanldeClearInfoInput()
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setContentMessage({
                type: 'error',
                message: 'Có lỗi xảy ra, vui lòng thử lại'
            })
            setIsShowMessage(true)
        }
    }

    useEffect(() => {
        const getData = async () => {
            let res = await getCategorys()
            setCategorys(res.data)
            setIsLoading(false)
        }
        getData()
    }, [categorys])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
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
                                            <label className="block text-md mb-2">Tên danh mục</label>
                                            <input className="w-100 px-4 py-2" type="text" placeholder="Tên danh mục"
                                                value={categoryName}
                                                onChange={e => setCategoryName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        <div className="mb-3">
                                            <label className="block text-md mb-2">Đường dẫn tĩnh</label>
                                            <input className="w-100 px-4 py-2" type="text" placeholder="Đường dẫn tĩnh"
                                                value={categoryCode}
                                                onChange={e => setCategoryCode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 ">
                                        <div className="mb-3">
                                            <label className="block text-md mb-2">Mô tả</label>
                                            <textarea className="w-100 px-4 py-2"
                                                value={categoryDes}
                                                onChange={e => setCategoryDes(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <Button primary className={cx('mr-6 hover:bg-colorSecondary transition-all duration-300')}
                                            onClick={hanldePostCategory}
                                        >
                                            Thêm
                                        </Button>
                                        <Button primary className={cx('mr-6 hover:bg-colorSecondary transition-all duration-300')}
                                            onClick={hanldePutCategory}
                                        >
                                            Sửa
                                        </Button>
                                        <Button primary className={cx('hover:bg-colorSecondary transition-all duration-300')}
                                            onClick={handleDelCategory}
                                        >
                                            Xóa
                                        </Button>
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
                                                <span >Ngày tạo - Ngày sửa</span>
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
                                                    <span className="">{category.createdDate} - {category.modifiedDate || 'Không có'}</span>
                                                </td>
                                                <td>
                                                    <Button className={cx('mr-6 hover:opacity-80')}
                                                        onClick={() => hanldeEditCategory(category)}
                                                    >
                                                        <i className="far fa-edit mr-2"></i> Sửa
                                                    </Button>
                                                    <Button className={cx('hover:opacity-80')}
                                                        onClick={async () => await delCategoryById(category.id)}
                                                    >
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
                    {isShowMessage && <Messages
                        type={contentMessage.type}
                        message={contentMessage.message}
                        onClick={handleHiddenMessage}
                    />}
                </div>
            }
        </div>
    )
}