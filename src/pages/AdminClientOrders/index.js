import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './AdminClientOrders.module.css'
import Button from "../../components/Button"
import Pagination from '../../components/Pagination'
import { getClientOrders, deleClientOrderById, putClientOrder } from '../../services/clientOrderService'
import Messages from "../../components/Messages"
import Loader from "../../components/Loader"
import FormatDate from '../../components/FormatDate'
import requireAuth from "../../hook/requireAuth"
import { ExportCSV } from "../../common/ExportCSV"

const cx = classNames.bind(styles)

function AdminClientOrders() {
    const [clientOrders, setClientOrders] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [curPage, setCurPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [direction, setDirection] = useState('desc')
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [contentMessage, setContentMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const getData = async (curPage, limit, direction) => {
        setIsLoading(true)
        const res = await getClientOrders('', curPage, limit, 'createdDate', direction)
        setClientOrders(res.data)
        setTotalPage(res.totalPage)
        setIsLoading(false)
    }
    const hanldeChangeStatus = (e, index) => {
        const updatedClientOrders = [...clientOrders];
        updatedClientOrders[index].status = e.target.value;
        setClientOrders(updatedClientOrders);
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }
    
    const handleEditClientOrder = async (i) => {
        try {
            const clientOrder = clientOrders[i]
            setIsLoading(true)
            const data = await putClientOrder(clientOrder.id, clientOrder)
            setIsShowMessage(true)
            setContentMessage({
                type: 'success',
                message: data.message
            })
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsShowMessage(true)
            setContentMessage({
                type: 'success',
                message: 'Có lỗi xảy ra, vui lòng thử lại!!!'
            })
        }
    }
    const hanldeDeleteOrderById = async (id) => {
        await deleClientOrderById(id)
        await getData(curPage, limit, direction)
    }

    useEffect(() => {
        getData(curPage, limit, direction)
    }, [curPage, limit, direction])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className="container">
                    <div>
                        {clientOrders?.length > 0 &&
                            <div className="">
                                <div className="my-4 p-2">
                                    <div className="row">
                                        <div className="col-6">
                                            <label>
                                                <select onChange={e => setLimit(e.target.value)}
                                                    className="p-2 mr-6 outline-none" value={limit}
                                                >
                                                    <option value={10}>10</option>
                                                    <option value={25}>25</option>
                                                    <option value={50}>50</option>
                                                    <option value={100}>100</option>
                                                </select>
                                            </label>
                                            <label>
                                                <select onChange={e => setDirection(e.target.value)} value={direction} className="p-2 outline-none">
                                                    <option value={'desc'}>Mới nhất</option>
                                                    <option value={'asc'}>Cũ nhất</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="col-6">
                                            <div className="text-right">
                                                <ExportCSV csvData={clientOrders} fileName={'DonHang'}/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                    <thead>
                                        <tr>
                                            <td>
                                                <span className="text-xs">Thông tin</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Sim mua</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Thể loại</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Mô tả</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Ngày mua</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Thanh toán</span>
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
                                        {clientOrders.map((clientOrder, i) => {
                                            return (
                                                <tr key={clientOrder.id}>
                                                    <td>
                                                        <span className="text-xs">{clientOrder.clientName}, {clientOrder.address}, {clientOrder.phone}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs">{clientOrder.sim.phoneNumber}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs">{clientOrder.sim.networker.name}, {clientOrder.sim.category.name}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs">{clientOrder.description}</span>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs">
                                                            <FormatDate createdDate={clientOrder.createdDate} />
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <span className=" text-xs">{clientOrder.payment}</span>
                                                    </td>
                                                    <td>
                                                        <input className="w-100 text-xs" type="text" value={clientOrder.status} onChange={e => hanldeChangeStatus(e, i)} />
                                                    </td>
                                                    <td>
                                                        <Button className={cx('mr-6 text-xs hover:opacity-80')}
                                                            onClick={() => handleEditClientOrder(i)}
                                                        >
                                                            <i className="far fa-edit mr-2"></i> Sửa
                                                        </Button>
                                                        <Button
                                                            className={cx(' text-xs hover:opacity-80')}
                                                            onClick={() => hanldeDeleteOrderById(clientOrder.id)}
                                                        >
                                                            <i className="fas fa-times mr-2"></i> Xóa
                                                        </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {totalPage > 0 &&
                                    <Pagination
                                        totalPage={totalPage}
                                        curPage={curPage}
                                        setCurPage={setCurPage}
                                    />
                                }
                            </div>
                        }
                    </div>
                    {isShowMessage &&
                        <Messages type={contentMessage.type}
                            message={contentMessage.message}
                            onClick={handleHiddenMessage}
                        />}
                </div>}
        </div>
    )
}

export default requireAuth(AdminClientOrders)