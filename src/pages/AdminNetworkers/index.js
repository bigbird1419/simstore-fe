import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './AdminNetworkers.module.css'
import Button from '../../components/Button'
import { getNetworkers, saveNetWorker, createNetWorker, deleNetworkerById } from '../../services/networkersService'
import { uploadImg } from '../../utils/uploadFile'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'

const cx = classNames.bind(styles)

export default function AdminNetworkers() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const [networkers, setNetworkers] = useState([])
    const [curNetworker, setCurNetworker] = useState({})
    const [networkerName, setNetWorkerName] = useState('')
    const [networkerCode, setNetWorkerCode] = useState('')
    const [networkerDescript, setNetWorkerDescript] = useState('')
    const [fileImg, setFileImg] = useState()
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const handleFileChange = (e) => {
        setFileImg(e.target.files[0])
    }
    const handleToggleShowCreate = () => {
        setIsShowCreate(val => !val)
        setCurNetworker({})
        setNetWorkerCode('')
        setNetWorkerDescript('')
        setNetWorkerName('')
    }
    const handleEditNetworker = (networker) => {
        setNetWorkerCode(networker.code)
        setNetWorkerDescript(networker.description)
        setNetWorkerName(networker.name)
        setCurNetworker(networker)
        setIsShowCreate(true)
    }
    const handleClearInfoInput = () => {
        setCurNetworker({})
        setNetWorkerCode('')
        setNetWorkerDescript('')
        setNetWorkerName('')
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }
    const handleSaveNetworker = async () => {
        try {
            setIsLoading(true)
            const imgURL = await uploadImg(networkerName, fileImg) || curNetworker.imgURL
            const data = await saveNetWorker(curNetworker.id,
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
            const data = await createNetWorker(
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
    const handleDeleteNetworkers = async () => {
        try {
            setIsLoading(true)
            const data = await deleNetworkerById(curNetworker.id)
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


    useEffect(() => {
        const getData = async () => {
            let res = await getNetworkers()
            setNetworkers(res.data);
            setIsLoading(false)
        }
        getData()
    }, [networkers])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className="container">
                    <div>
                        <div>
                            <Button onClick={handleToggleShowCreate} primary>Show create</Button>
                        </div>
                        {isShowCreate &&
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
                                    <div className="flex justify-end">
                                        <Button primary className={cx('mr-6  hover:bg-colorSecondary transition-all duration-300')}
                                            onClick={hanldeCreateNetworker}
                                        >Thêm</Button>
                                        <Button primary className={cx('mr-6 hover:bg-colorSecondary transition-all duration-300')}
                                            onClick={handleSaveNetworker}
                                        >Sửa</Button>
                                        <Button primary className={cx(' hover:bg-colorSecondary transition-all duration-300')}
                                            onClick={handleDeleteNetworkers}
                                        >Xóa</Button>
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
                                                <span className="text-xs">Tên nhà mạng</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Đường dẫn tĩnh</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Mô tả</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Ảnh đại diện</span>
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
                                        {networkers.map((networker, i) => (
                                            <tr key={i} >
                                                <td>
                                                    <span className="text-xs">{networker.name}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{networker.code}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{networker.description}</span>
                                                </td>
                                                <td>
                                                    <span><img className="w-10" src={networker.imgUrl} alt={networker.name} /></span>
                                                </td>
                                                <td>
                                                    <span  className="text-xs">{networker.createdDate} - {networker.modifiedDate || 'Không có'}</span>
                                                </td>
                                                <td>
                                                    <Button className={cx('mr-8 hover:opacity-80 text-xs')} onClick={() => handleEditNetworker(networker)}>
                                                        <i className="far fa-edit mr-2"></i> Sửa
                                                    </Button>
                                                    <Button
                                                        className={cx('hover:opacity-80 text-xs')}
                                                        onClick={async () => await deleNetworkerById(networker.id)}
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