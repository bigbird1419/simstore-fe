import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getSims } from '../../services/simService'
import Loader from '../../components/Loader'
import Button from "../../components/Button"
import Messages from '../../components/Messages'
import { postClientOrder } from '../../services/clientOrderService'

export default function Sim() {
    const { phoneNumber } = useParams()
    const [sim, setSim] = useState([])
    const [clientName, setClientName] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')
    const [payment, setPayment] = useState('')
    const [contentMessage, setContentMessage] = useState({})
    const [isShowMessage, setIsShowMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handlePaymentChange = e => {
        setPayment(e.target.value)
    }
    const handleHiddenMessage = () => {
        setIsShowMessage(false)
    }
    const handleClearInfo = () => {
        setAddress('')
        setClientName('')
        setPhone('')
    }
    const handlePostOrder = async (e) => {
        e.preventDefault()
        console.log(clientName, address, phone, payment, description, sim)
        if (clientName === '' || phone === '' || address === '' || payment === '') {
            setContentMessage({
                type: 'warning',
                message: 'Vui lòng nhập đủ dữ liệu!!!'
            })
            setIsShowMessage(true)
            return
        }
        try {
            setIsLoading(true)
            const res = await postClientOrder({
                clientName: clientName,
                address: address,
                phone: phone,
                description: description,
                payment: payment,
                status: 'Chưa giao',
                sim: {
                    id: sim[0].id
                }
            })
            setContentMessage({
                type: 'success',
                message: res.message
            })
            setIsShowMessage(true)
            handleClearInfo()
        } catch (error) {
            setContentMessage({
                type: 'error',
                message: 'Sim đã được đặt, vui lòng chọn sản phẩm khác !!!'
            })
            setIsShowMessage(true)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        const getData = async () => {
            const res = await getSims(phoneNumber)
            setSim(res.data)
            setIsLoading(false)
        }
        getData()
    }, [phoneNumber])

    return (
        <div className="wrapper">
            <div className="container">
                {isLoading ? <Loader /> :
                    <div className="my-4">
                        {sim?.length > 0 &&
                            sim.map(sim => (
                                <div className="row" key={sim.phoneNumber}>
                                    <div className="col-7">
                                        <div className="p-2 border h-full p-4">
                                            <h3 className="mb-1">Số sim: <Button to={`/sim/${sim.phoneNumber}`} className="text-2xl text-colorSecondary font-bold hover:text-colorPrimary duration-300 transition-all">{sim.phoneNumber}</Button></h3>
                                            <h3 className="mb-1">Giá bán: <span className="text-md text-colorSecondary">{sim.price}<sub className="text-black text-xs text-bold">(VNĐ)</sub></span></h3>
                                            <h3 className="mb-1">Mạng: <Button to={`/${sim.networker.code}`} className="uppercase text-xl text-colorPrimary hover:underline">{sim.networker?.name}</Button></h3>
                                            <p className="">{sim.description}</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="relative border h-full p-4">
                                            <img src={sim.imgUrl} alt={sim.phoneNumber} />
                                            <p className="absolute text-xs font-semibold top-1/2 left-1/2 translate-y-[-100%]">{sim.phoneNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {sim?.length === 1 &&
                            <div>
                                <div className="form-box">
                                    <h1 className="py-2 bg-colorPrimary text-md font-bold text-white text-center">Đặt mua sim</h1>
                                    <form className="p-4 bg-colorThinPrimary">
                                        <div className="row my-3">
                                            <label className="col-3" htmlFor="name">Họ tên:</label>
                                            <input className="px-4 py-2 col-8 border outline-none" id="name" type="text" required placeholder="Nhập tên của bạn" value={clientName} onChange={e => setClientName(e.target.value)} />
                                        </div>
                                        <div className="row my-3">
                                            <label className="col-3" htmlFor="phone">Điện thoại liên hệ:</label>
                                            <input className="px-4 py-2 col-8 border outline-none" id="phone" type="text" required placeholder="Số điện thoại" value={phone} onChange={e => setPhone(e.target.value)} />
                                        </div>
                                        <div className="row my-3">
                                            <label className="col-3" htmlFor="address">Địa chỉ:</label>
                                            <input className="px-4 py-2 col-8 border outline-none" id="address" type="text" required placeholder="Địa chỉ" value={address} onChange={e => setAddress(e.target.value)} />
                                        </div>
                                        <div className="row my-3">
                                            <label className="col-3" htmlFor="description">Lời nhắn:</label>
                                            <input className="px-4 py-2 col-8 border outline-none" id="description" type="text" required placeholder="Lời nhắn" value={description} onChange={e => setDescription(e.target.value)} />
                                        </div>
                                        <div className=" my-3">
                                            <div className="flex items-center mb-2">
                                                <input className="w-5 h-5" id="cod" type="radio" name="thanh-toan-nhan-hang" value={'cod'} onChange={e => handlePaymentChange(e)} />
                                                <label className="ml-2" htmlFor="cod">Thanh toán khi nhận hàng</label>
                                            </div>
                                            <div className="flex items-center mb-2">
                                                <input className="w-5 h-5" id="atm" type="radio" name="thanh-toan-nhan-hang" value={'atm'} onChange={e => handlePaymentChange(e)} />
                                                <label className="ml-2" htmlFor="atm">Chuyển khoản ngân hàng</label>
                                            </div>
                                        </div>
                                        <div className="text-center mt-4">
                                            <Button className={''} primary onClick={e => handlePostOrder(e)}>Xác nhận</Button>
                                        </div>
                                    </form>
                                </div>
                                <div className="tutorial-box border border-sx text-sm p-4 my-4">
                                    <strong>Hướng dẫn cách thức mua sim {sim[0].phoneNumber} {sim[0].networker.name}</strong>
                                    <br />
                                    <br />
                                    <strong>1. Nhận sim tại nhà trong 1h. ( Phụ phí 30k ) </strong>
                                    <br />
                                    * Chúng tôi sẽ có giao dịch viên giao sim và đăng ký chính chủ tại nơi quý khách đang ở hiện tại.
                                    <br />
                                    * Quý khách kiểm tra đúng chính chủ, đúng số sim {sim[0].phoneNumber} quý khách mới phải thanh toán.
                                    <br />
                                    <strong>2. Nhận sim qua bưu điện. ( Miễn phí giao )</strong>
                                    <br />
                                    - Nhân viên Bưu Điện sẽ giao sim tận nơi và thu tiền tại địa chỉ quý khách .
                                    <br />
                                    - Soạn TTTB gửi 1414 để kiểm tra đúng thông tin chính chủ.
                                    <br />
                                    <br />
                                    <strong>Chúc quý khách gặp nhiều may mắn khi sở hữu thuê bao {sim[0].phoneNumber} {sim[0].networker.name}</strong>
                                </div>
                                {isShowMessage &&
                                    <Messages
                                        type={contentMessage.type}
                                        message={contentMessage.message}
                                        onClick={handleHiddenMessage}
                                    />
                                }
                            </div>
                        }
                        {sim?.length < 0 && <h1 className="text-center text-xl font-bold text-colorSecondary">Sim không tồn tại</h1>}
                    </div>
                }
            </div>
        </div>
    )
}