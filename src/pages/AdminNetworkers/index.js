import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './AdminNetworkers.module.css'
import Button from '../../components/Button'
import { getNetworkers, saveNetWorker, createNetWorker, deleNetworkerById } from '../../services/networkersService'
import { uploadImg } from '../../utils/uploadFile'

const cx = classNames.bind(styles)

export default function AdminNetworkers() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const [networkers, setNetworkers] = useState([])
    const [curNetworker, setCurNetworker] = useState({})
    const [networkerName, setNetWorkerName] = useState('')
    const [networkerCode, setNetWorkerCode] = useState('')
    const [networkerDescript, setNetWorkerDescript] = useState('')
    const [fileImg, setFileImg] = useState()

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
        setIsShowCreate(true)
        setNetWorkerCode(networker.code)
        setNetWorkerDescript(networker.description)
        setNetWorkerName(networker.name)
        setCurNetworker(networker)
    }
    const handleSaveNetworker = async () => {
        const imgURL = await uploadImg(networkerName, fileImg);
        console.log('link: ', imgURL)

        const data = await saveNetWorker(curNetworker.id,
            {
                name: networkerName,
                description: networkerDescript,
                imgUrl: imgURL,
                code: networkerCode
            }
        )
        setCurNetworker({})
        setNetWorkerCode('')
        setNetWorkerDescript('')
        setNetWorkerName('')
    }
    const hanldeCreateNetworker = async () => {
        try {
            const imgURL = await uploadImg(networkerName, fileImg);
            const data = await createNetWorker(
                {
                    name: networkerName,
                    description: networkerDescript,
                    imgUrl: imgURL,
                    code: networkerCode
                }
            )
            setCurNetworker({})
            setNetWorkerCode('')
            setNetWorkerDescript('')
            setNetWorkerName('')
        } catch (error) {
            console.log(error)
        }
    }
    const handleDeleteNetworkers = async () => {
        const data = await deleNetworkerById(curNetworker.id)
        setCurNetworker({})
        setNetWorkerCode('')
        setNetWorkerDescript('')
        setNetWorkerName('')
    }

    useEffect(() => {
        const getData = async () => {
            let res = await getNetworkers()
            setNetworkers(res.data);
        }
        getData()
    }, [networkers])

    return (
        <div className="wrapper">
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
                                        <label className="block text-md">Tên nhà mạng</label>
                                        <input className="w-100 px-4 py-2" type="text" placeholder="Ten nha mang" value={networkerName} onChange={e => setNetWorkerName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-6 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Đường dẫn tĩnh</label>
                                        <input className="w-100 px-4 py-2" type="text" placeholder="Đường dẫn tĩnh"
                                            value={networkerCode}
                                            onChange={e => setNetWorkerCode(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Ảnh đại diện</label>
                                        <input type="file" onChange={e => handleFileChange(e)} />
                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="mb-3">
                                        <label className="block text-md">Mô tả</label>
                                        <textarea className="w-100 px-4 py-2"
                                            value={networkerDescript}
                                            onChange={e => setNetWorkerDescript(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button primary className={cx('mr-6')}
                                        onClick={hanldeCreateNetworker}
                                    >Thêm</Button>
                                    <Button primary className={cx('mr-6')}
                                        onClick={handleSaveNetworker}
                                    >Sửa</Button>
                                    <Button primary className={cx('')}
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
                                            <span >Tên nhà mạng</span>
                                        </td>
                                        <td>
                                            <span >Mô tả</span>
                                        </td>
                                        <td>
                                            <span>Ảnh đại diện</span>
                                        </td>
                                        <td>
                                            <span>Ngày tạo - Ngày sửa</span>
                                        </td>
                                        <td>
                                            <span>Hành động</span>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {networkers.map((networker, i) => (
                                        <tr key={i} >
                                            <td>
                                                <span className="uppercase">{networker.name}</span>
                                            </td>
                                            <td>
                                                <span className="uppercase">{networker.description}</span>
                                            </td>
                                            <td>
                                                <span><img className="w-32" src={networker.imgUrl} alt={networker.name} /></span>
                                            </td>
                                            <td>
                                                <span>{networker.createdDate} - {networker.modifiedDate || 'Không có'}</span>
                                            </td>
                                            <td>
                                                <Button className={cx('mr-8')} onClick={() => handleEditNetworker(networker)}>
                                                    <i className="far fa-edit mr-2"></i> Sửa
                                                </Button>
                                                <Button
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
            </div>
        </div>
    )
}