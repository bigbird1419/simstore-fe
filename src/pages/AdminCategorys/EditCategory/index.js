import { useContext, useState } from "react"

import Messages from "../../../components/Messages"
import Button from "../../../components/Button"
import routes from "../../../constants/routes"
import { CategoryContext } from "../../../context/CategoryContext"
import Loader from "../../../components/Loader"

export default function EditCategory({ category = {}, onHidden = () => { } }) {
    const { postData, putData, deleteData } = useContext(CategoryContext)
    const [categoryName, setCategoryName] = useState(category.name)
    const [categoryCode, setCategoryCode] = useState(category.code)
    const [categoryDes, setCategoryDes] = useState(category.description)
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const hanldeClearInfoInput = () => {
        setCategoryName('')
        setCategoryCode('')
        setCategoryDes('')
    }

    const hanldePostCategory = async () => {
        try {
            setIsLoading(true)
            const data = await postData({
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
            const data = await putData(category.id, {
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
            const data = await deleteData(category.id)
            setContentMessage({
                type: data.status === 'Ok' ? 'success' : 'error',
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
                    </div>
                    <div className="flex justify-around">
                        <Button adminBtn
                            onClick={hanldePostCategory}
                        >
                            Thêm
                        </Button>
                        <Button adminBtn
                            onClick={hanldePutCategory}
                        >
                            Sửa
                        </Button>
                        <Button adminBtn
                            onClick={handleDelCategory}
                        >
                            Xóa
                        </Button>
                        <Button onClick={onHidden} adminBtn to={routes.adminCategory}>
                            Hủy
                        </Button>
                    </div>
                    {isShowMessage && <Messages
                        type={contentMessage.type}
                        message={contentMessage.message}
                        onClick={() => setIsShowMessage(false)}
                    />}
                </div>}
        </div>
    )
}