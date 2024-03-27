import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, } from 'recharts';
import { useContext, useEffect, useState } from 'react'

import { CategoryContext } from '../../context/CategoryContext'
import { NetworkerContext } from '../../context/NetworkerContext'
import requireAuth from "../../hook/requireAuth"
import Card from "../../components/Card"
import { getTotalSim } from '../../services/simService'
import { getTotalClientOrders, getStatistical, getStatisticalByNetworker } from '../../services/clientOrderService'

function AdminHome() {
    const { networkers } = useContext(NetworkerContext)
    const { categorys } = useContext(CategoryContext)
    const [totalClientorders, setTotalClientorders] = useState(0)
    const [totalSims, setTotalSims] = useState(0)
    const [dataOrder, setDataOrder] = useState([])
    const [dataNetworker, setDataNetworker] = useState([])

    useEffect(() => {
        const getData = async () => {
            const totalSim = await getTotalSim()
            const totalClientorder = await getTotalClientOrders()
            const tmp1 = await getStatistical()
            const tmp2 = await getStatisticalByNetworker()
            setTotalSims(totalSim.data)
            setTotalClientorders(totalClientorder.data)
            setDataOrder(tmp1.data)
            setDataNetworker(tmp2.data)
        }
        getData()
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className='text-left font-bold text-xl mb-4'>Thông số</h1>
                <div className='row'>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                        <div className=''>
                            <Card heading={'Nhà mạng'} count={networkers.length} primary />
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                        <div className=''>
                            <Card heading={'Danh mục'} count={categorys.length} secondary />
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                        <div className=''>
                            <Card heading={'Sim hiện có'} count={totalSims} success />
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-12'>
                        <div className=''>
                            <Card heading={'Số đơn hàng'} count={totalClientorders} warning />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='my-4 w-full'>
                            <h1 className='text-left font-bold text-xl mb-4'>Tổng quan số đơn hàng</h1>
                            <LineChart data={dataOrder} width={400} height={320}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="0" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="1" stroke="#8884d8" />
                            </LineChart>
                        </div>
                    </div>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='my-4 w-full'>
                            <h1 className='text-left font-bold text-xl mb-4'>Tổng quan loại sim được đặt</h1>
                            <BarChart data={dataNetworker} width={400} height={320}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="0" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="1" fill="#8884d8" />
                            </BarChart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default requireAuth(AdminHome)