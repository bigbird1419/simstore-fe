import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './AdminSims.module.css'
import Button from "../../components/Button"
import { getSims, delSimById, postSim, putSim } from '../../services/simService'
import { getCategorys } from '../../services/categoryService'
import { getNetworkers } from '../../services/networkersService'
import { uploadImg } from '../../utils/uploadFile'
import Loader from "../../components/Loader"
import Messages from "../../components/Messages"
import Pagination from "../../components/Pagination"

const cx = classNames.bind(styles)

export default function AdminSims() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const [sims, setSims] = useState([])
    const [categorys, setCategorys] = useState([])
    const [networkers, setNetworkers] = useState([])
    const [curSim, setCurSim] = useState({})
    const [phoneNumber, setPhoneNumber] = useState('')
    const [price, setPrice] = useState('')
    const [fileImg, setFileImg] = useState()
    const [description, setDescription] = useState('')
    const [categoryId, setCategoryId] = useState('')
    const [networkerId, setNetworkerId] = useState('')
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [totalPage, setTotalPage] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [valSearch, setValSearch] = useState('')
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const handleToggleShowCreate = async () => {
        setIsShowCreate(val => !val)
        if (!isShowCreate) {
            setIsLoading(true)
            const resCategory = await getCategorys()
            const resNetworker = await getNetworkers()
            setCategorys(resCategory.data)
            setNetworkers(resNetworker.data)
            setIsLoading(false)
        }
    }
    const handleFileChange = e => {
        setFileImg(e.target.files[0])
    }
    const handleEditSim = (sim) => {
        setPhoneNumber(sim.phoneNumber)
        setDescription(sim.description)
        setPrice(sim.price)
        setCategoryId(sim.category.id)
        setNetworkerId(sim.networker.id)
        setCurSim(sim)
        setIsShowCreate(true)
    }
    const handleClearInfoInput = () => {
        setPhoneNumber('')
        setPrice('')
        setDescription('')
        setCurSim({})
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }
    const hanldeSearch = () => {
        setQuery(valSearch)
        setValSearch('')
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
            const imgURL = await uploadImg(phoneNumber, fileImg) || curSim.imgURL;
            const data = await putSim(curSim.id,
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
            const data = await delSimById(curSim.id)
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
            const res = await getSims(query, curPage, limit)
            setSims(res.data)
            setTotalPage(res.totalPage)
            setIsLoading(false)
        }
        getData()
    }, [totalPage, curPage, limit, query])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className="container">
                    <div>
                        <div>
                            <Button onClick={() => handleToggleShowCreate()} primary>Thêm sim</Button>
                        </div>
                        {isShowCreate &&
                            <div className="">
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
                                                <option value="" disabled selected>
                                                    Chọn nhà mạng
                                                </option>
                                                {networkers.map((networker) => (
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
                                                <option value="" disabled selected>
                                                    Chọn danh mục
                                                </option>
                                                {categorys.map((category) => (
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
                                    <div className="flex justify-end">
                                        <Button primary className={cx('mr-6 ')}
                                            onClick={hanldeCreateSim}
                                        >Thêm</Button>
                                        <Button primary className={cx('mr-6 ')}
                                            onClick={handleUpdateSim}
                                        >Sửa</Button>
                                        <Button primary className={cx(' ')}
                                            onClick={handleDelSim}
                                        >Xóa</Button>
                                    </div>
                                </div>
                            </div>
                        }
                        {sims.length > 0 &&
                            <div className="">
                                <div className="my-4 p-2">
                                    <div className="row">
                                        <div className="col-6">
                                            <select onChange={e => setLimit(e.target.value)}
                                                className="p-2 mr-10"
                                            >
                                                <option value={10}>10</option>
                                                <option value={25}>25</option>
                                                <option value={50}>50</option>
                                                <option value={100}>100</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <div className="relative">
                                                <input onChange={e => setValSearch(e.target.value)} value={valSearch} onKeyDown={e => setValSearch(e.target.value)} type="text" placeholder="Nhập sim cần tìm"
                                                    className="px-4 py-2 text-md outline-none w-full border-colorPrimary border-1 rounded-md"
                                                />
                                                <Button className={cx('absolute right-0 top-1/2 translate-y-[-50%] bg-colorPrimary block text-white px-3 py-1 mr-2 rounded-sm')} onClick={hanldeSearch} >
                                                    Tìm
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                    <thead>
                                        <tr>
                                            <td>
                                                <span className="text-xs">Số điện thoại</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Ảnh mô tả</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Giá</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Mô tả</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Thể loại</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Trạng thái</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Hành động</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {sims.map((sim, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <span className="text-xs">{sim.phoneNumber}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs"><img className="w-28" src={sim.imgUrl} alt={sim.phoneNumber} /></span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{sim.price}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{sim.description}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{sim.networker.name}, {sim.category.name}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{sim.status ? 'Còn hàng' : 'Hết hàng'}</span>
                                                </td>
                                                <td>
                                                    <Button className={cx('mr-6 text-xs hover:opacity-80')}
                                                        onClick={() => handleEditSim(sim)}
                                                    >
                                                        <i className="far fa-edit mr-2"></i> Sửa
                                                    </Button>
                                                    <Button
                                                        className={cx(' text-xs hover:opacity-80')}
                                                        onClick={async () => { await delSimById(sim.id) }}
                                                    >
                                                        <i className="fas fa-times mr-2"></i> Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {totalPage > 0 &&
                                    <Pagination
                                        totalPage={totalPage}
                                        curPage={curPage}
                                        setCurPage={setCurPage}
                                    />}
                                {isShowMessage &&
                                    <Messages type={contentMessage.type}
                                        message={contentMessage.message}
                                        onClick={handleHiddenMessage}
                                    />}
                            </div>
                        }
                    </div>
                </div>}
        </div>
    )
}