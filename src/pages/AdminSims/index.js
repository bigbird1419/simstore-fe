import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './AdminSims.module.css'
import Button from "../../components/Button"
import { getSims, delSimById } from '../../services/simService'
import Pagination from "../../components/Pagination"
import requireAuth from "../../hook/requireAuth"
import EditSim from "./EditSim"

const cx = classNames.bind(styles)

function AdminSims() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const [sims, setSims] = useState([])
    const [curSim, setCurSim] = useState({})

    const [totalPage, setTotalPage] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [valSearch, setValSearch] = useState('')
    const [query, setQuery] = useState('')

    const getData = async (query, curPage, limit) => {
        const res = await getSims(query, curPage, limit)
        setSims(res.data)
        setTotalPage(res.totalPage)
    }
    const handleHiddenEdit = () => {
        setIsShowCreate(false)
    }
    const handleEditSim = (sim) => {
        setCurSim(sim)
        setIsShowCreate(true)
    }
    const hanldeSearch = () => {
        setQuery(valSearch)
        setValSearch('')
    }

    const hanldeDeleteSimById = async (id) => {
        await delSimById(id)
        await getData(query, curPage, limit)
    }

    useEffect(() => {
        getData(query, curPage, limit)
    }, [totalPage, curPage, limit, query])

    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    {isShowCreate ?
                        <EditSim sim={curSim} onHidden={handleHiddenEdit} />
                        :
                        <div>
                            {sims.length > 0 &&
                                <div className="">
                                    <div className="my-4 p-2">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="relative">
                                                    <input onChange={e => setValSearch(e.target.value)} value={valSearch} onKeyDown={e => setValSearch(e.target.value)} type="text" placeholder="Nhập sim cần tìm"
                                                        className="px-4 py-2 text-md outline-none w-full border-colorExtraPrimary border-1 rounded-md"
                                                    />
                                                    <Button className={cx('absolute right-0 top-1/2 translate-y-[-50%] bg-colorExtraPrimary block text-white px-3 py-1 mr-2 rounded-sm')} onClick={hanldeSearch} >
                                                        Tìm
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="col-6 flex justify-end">
                                                <select onChange={e => setLimit(e.target.value)}
                                                    className="p-2 mr-10 shadow-md outline-none" value={limit}
                                                >
                                                    <option value={10}>10</option>
                                                    <option value={25}>25</option>
                                                    <option value={50}>50</option>
                                                    <option value={100}>100</option>
                                                </select>
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
                                                            onClick={() => hanldeDeleteSimById(sim.id)}
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

                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default requireAuth(AdminSims)