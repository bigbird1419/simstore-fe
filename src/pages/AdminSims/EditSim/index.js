import { useState, useContext } from 'react'

import { delSimById, postSim, putSim } from '../../../services/simService'
import { uploadImg, deleteImg } from '../../../utils/fileStorage'
import Button from '../../../components/Button'
import { CategoryContext } from '../../../context/CategoryContext'
import { NetworkerContext } from '../../../context/NetworkerContext'
import Messages from '../../../components/Messages'
import routes from '../../../constants/routes'
import Loader from '../../../components/Loader'

export default function EditSim({ sim = {}, onHidden = () => { } }) {
    const { categorys } = useContext(CategoryContext)
    const { networkers } = useContext(NetworkerContext)
    const [phoneNumber, setPhoneNumber] = useState(sim.phoneNumber)
    const [price, setPrice] = useState(sim.price)
    const [fileImg, setFileImg] = useState()
    const [description, setDescription] = useState(sim.description)
    const [categoryId, setCategoryId] = useState('')
    const [networkerId, setNetworkerId] = useState('')
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleFileChange = e => {
        setFileImg(e.target.files[0])
    }
    const handleClearInfoInput = () => {
        setPhoneNumber('')
        setPrice('')
        setDescription('')
    }

    const hanldeCreateSim = async () => {
        try {
            if (categoryId === '' || networkerId === '' || phoneNumber === '' || price === '') {
                setIsShowMessage(true)
                setContentMessage({
                    type: 'warning',
                    message: 'Vui lòng nhập đủ dữ liệu'
                })
                return
            }
            setIsLoading(true)
            const imgURL = await uploadImg(phoneNumber, fileImg);
            const data = await postSim(
                {
                    phoneNumber,
                    description,
                    imgUrl: imgURL,
                    price,
                    category: {
                        id: categoryId,
                    },
                    networker: {
                        id: networkerId
                    },
                    status: true
                }
            )
            handleClearInfoInput()
            setIsLoading(false)
            setIsShowMessage(true)
            setContentMessage({
                type: 'success',
                message: data.message
            })
        } catch (error) {
            console.log(error)
            setContentMessage({
                type: 'error',
                message: 'Có lỗi xảy ra, vui lòng thử lại!!!'
            })
        }
    }
    const handleUpdateSim = async () => {
        try {
            if (categoryId === '' || networkerId === '' || phoneNumber === '' || price === '') {
                setIsShowMessage(true)
                setContentMessage({
                    type: 'warning',
                    message: 'Vui lòng nhập đủ dữ liệu'
                })
                return
            }
            setIsLoading(true)
            let imgURL = ''
            if (!fileImg) imgURL = sim.imgURL
            else imgURL = await uploadImg(phoneNumber, fileImg)
            const data = await putSim(sim.id,
                {
                    phoneNumber,
                    description,
                    imgUrl: imgURL,
                    price,
                    category: {
                        id: categoryId,
                    },
                    networker: {
                        id: networkerId
                    },
                    status: true
                }
            )
            handleClearInfoInput()
            setIsLoading(false)
            setIsShowMessage(true)
            setContentMessage({
                type: 'success',
                message: data.message
            })
        } catch (error) {
            console.log(error)
            setContentMessage({
                type: 'error',
                message: 'Có lỗi xảy ra, vui lòng thử lại!!!'
            })
        }
    }
    const handleDelSim = async () => {
        try {
            setIsLoading(true)
            const data = await delSimById(sim.id)
            await deleteImg(sim.imgURL)
            handleClearInfoInput()
            setIsLoading(false)
            setIsShowMessage(true)
            setContentMessage({
                type: 'success',
                message: data.message
            })
        } catch (error) {
            console.log(error)
            setContentMessage({
                type: 'error',
                message: 'Có lỗi xảy ra, vui lòng thử lại!!!'
            })
        }
    }

    return (
        <div>
            {isLoading ? <Loader /> :
                <div className="wrapper">
                    <div className="row">
                        <div className="col-6 ">
                            <div className="mb-3">
                                <label className="block text-md">Số điện thoại</label>
                                <input className="w-100 px-4 py-2" type="text" placeholder="Số điện thoại" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="mb-3">
                                <label className="block text-md">Giá</label>
                                <input className="w-100 px-4 py-2" type="text" placeholder="Giá" onChange={e => setPrice(e.target.value)} value={price} />
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="mb-3">
                                <label className="block text-md">Nhà mạng</label>
                                <select className="w-100 p-2 text-md" id="networker"
                                    onChange={(e) => setNetworkerId(e.target.value)}
                                >
                                    <option value="" defaultValue={1} disabled selected>
                                        Chọn nhà mạng
                                    </option>
                                    {networkers?.map((networker) => (
                                        <option key={networker.id} value={networker.id}
                                            defaultValue={networkerId === networker.id}
                                        >{networker.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-6 ">
                            <div className="mb-3">
                                <label className="block text-md">Danh mục sim</label>
                                <select className="w-100 p-2 text-md" id="networker"
                                    onChange={(e) => setCategoryId(e.target.value)}
                                >
                                    <option value="" defaultValue={1} disabled selected>
                                        Chọn danh mục
                                    </option>
                                    {categorys?.map((category) => (
                                        <option key={category.id} value={category.id}
                                            defaultValue={networkerId === category.id}
                                        >{category.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="mb-3">
                                <label className="block text-md">Ảnh mô tả</label>
                                <input type="file" onChange={e => handleFileChange(e)} />
                            </div>
                        </div>
                        <div className="col-12 ">
                            <div className="mb-3">
                                <label className="block text-md">Mô tả</label>
                                <textarea className="w-100 px-4 py-2" value={description} onChange={e => setDescription(e.target.value)} placeholder="Nhập mô tả" />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <Button adminBtn
                                onClick={hanldeCreateSim}
                            >Thêm</Button>
                            <Button adminBtn
                                onClick={handleUpdateSim}
                            >Sửa</Button>
                            <Button adminBtn
                                onClick={handleDelSim}
                            >Xóa</Button>
                            <Button adminBtn
                                onClick={onHidden} to={routes.adminSim}
                            >Hủy</Button>
                        </div>
                    </div>
                    {isShowMessage &&
                        <Messages type={contentMessage.type}
                            message={contentMessage.message}
                            onClick={() => setIsShowMessage(false)}
                        />}
                </div>}
        </div>
    )
}