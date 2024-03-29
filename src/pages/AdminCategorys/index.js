import classNames from "classnames/bind"
import { useContext, useState } from "react"

import styles from './AdminCategorys.module.css'
import Button from '../../components/Button'
import { delCategoryById } from '../../services/categoryService'
import FormatDate from '../../components/FormatDate'
import requireAuth from "../../hook/requireAuth"
import { CategoryContext } from "../../context/CategoryContext"
import EditCategory from "./EditCategory"

const cx = classNames.bind(styles)

function AdminCategorys() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const { categorys } = useContext(CategoryContext)
    const [curCategory, setCurCategory] = useState({})

    const handleHiddenEdit = () => {
        setIsShowCreate(false)
    }
    const hanldeEditCategory = (category) => {
        setCurCategory(category)
        setIsShowCreate(true)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    {isShowCreate ?
                        <div className="">
                            <EditCategory category={curCategory} onHidden={handleHiddenEdit} />
                        </div> :
                        <div>
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
                    }
                </div>
            </div>
        </div>
    )
}

export default requireAuth(AdminCategorys)