import classNames from "classnames/bind"
import { useContext, useState } from "react"

import styles from './AdminCategorys.module.css'
import Button from '../../components/Button'
import { delCategoryById, postCategory, putCategory } from '../../services/categoryService'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'
import FormatDate from '../../components/FormatDate'
import requireAuth from "../../hook/requireAuth"
import { CategoryContext } from "../../context/CategoryContext"

const cx = classNames.bind(styles)

function AdminCategorys() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const { categorys } = useContext(CategoryContext)
    const [curCategory, setCurCategory] = useState({})
    const [categoryName, setCategoryName] = useState('')
    const [categoryCode, setCategoryCode] = useState('')
    const [categoryDes, setCategoryDes] = useState('')
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

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
                                                <span className="text-xs">Tên danh mục</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Mô tả</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Ngày tạo - Ngày sửa</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Hành động</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {categorys.map((category, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <span className="text-xs">{category.name}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{category.description}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">
                                                        <FormatDate createdDate={category.createdDate} /> - {category.modifiedDate ? <FormatDate createdDate={category.modifiedDate} /> : 'Không có'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <Button className={cx('mr-6 hover:opacity-80 text-xs')}
                                                        onClick={() => hanldeEditCategory(category)}
                                                    >
                                                        <i className="far fa-edit mr-2"></i> Sửa
                                                    </Button>
                                                    <Button className={cx('hover:opacity-80 text-xs')}
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

export default requireAuth(AdminCategorys)