import { useContext, useState } from 'react'

import { uploadImg, deleteImg } from '../../../utils/fileStorage'
import Button from '../../../components/Button'
import Messages from '../../../components/Messages'
import routes from '../../../constants/routes'
import { NetworkerContext } from '../../../context/NetworkerContext'

export default function EditNetworker({ networker = {}, onHidden = () => { } }) {
    const { postData, putData, deleteData } = useContext(NetworkerContext)
    const [networkerName, setNetWorkerName] = useState(networker.name)
    const [networkerCode, setNetWorkerCode] = useState(networker.code)
    const [networkerDescript, setNetWorkerDescript] = useState(networker.description)
    const [fileImg, setFileImg] = useState()
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleFileChange = (e) => {
        setFileImg(e.target.files[0])
    }
    const handleClearInfoInput = () => {
        setNetWorkerCode('')
        setNetWorkerDescript('')
        setNetWorkerName('')
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }

    const hanldeCreateNetworker = async () => {
        try {
            if (networkerName === '' || networkerDescript === '' || networkerCode === '') {
                setIsShowMessage(true)
                setContentMessage({
                    type: 'warning',
                    message: 'Vui lòng nhập đủ dữ liệu'
                })
                return
            }
            setIsLoading(true)
            const imgURL = await uploadImg(networkerName, fileImg);
            const data = await postData(
                {
                    name: networkerName,
                    description: networkerDescript,
                    imgUrl: imgURL,
                    code: networkerCode
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
    const hanldeUpdateNetworker = async () => {
        try {
            setIsLoading(true)
            let imgURL = ''
            if (!fileImg) imgURL = networker.imgURL
            else imgURL = await uploadImg(networkerName, fileImg)
            const data = await putData(networker.id,
                {
                    name: networkerName,
                    description: networkerDescript,
                    imgUrl: imgURL,
                    code: networkerCode
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
    const handleDeleteNetworkersById = async () => {
        try {
            setIsLoading(true)
            const data = await deleteData(networker.id)
            await deleteImg(networker.imgUrl)
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
        <div className="wrapper">
            <div className="mt-6">
                <div className="row">
                    <div className="col-6 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Tên nhà mạng</label>
                            <input className="w-100 px-4 py-2" type="text" placeholder="Tên nhà mạng" value={networkerName} onChange={e => setNetWorkerName(e.target.value)} />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Đường dẫn tĩnh</label>
                            <input className="w-100 px-4 py-2" type="text" placeholder="Đường dẫn tĩnh"
                                value={networkerCode}
                                onChange={e => setNetWorkerCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Ảnh đại diện</label>
                            <input type="file" onChange={e => handleFileChange(e)} />
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="mb-3">
                            <label className="block text-md mb-2">Mô tả</label>
                            <textarea className="w-100 px-4 py-2"
                                value={networkerDescript}
                                onChange={e => setNetWorkerDescript(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <Button adminBtn
                            onClick={hanldeCreateNetworker}
                        >Thêm</Button>
                        <Button adminBtn
                            onClick={hanldeUpdateNetworker}
                        >Sửa</Button>
                        <Button adminBtn
                            onClick={handleDeleteNetworkersById}
                        >Xóa</Button>
                        <Button adminBtn
                            onClick={onHidden} to={routes.adminNetworker}
                        >Hủy</Button>
                    </div>
                </div>
                {isShowMessage && <Messages
                    type={contentMessage.type}
                    message={contentMessage.message}
                    onClick={handleHiddenMessage}
                />}
            </div>
        </div>
    )
}