import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getSims } from '../../services/simService'
import Loader from '../../components/Loader'

export default function Sim() {
    const { phoneNumber } = useParams()
    const [sim, setSim] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
                        {sim.length > 0 &&
                            sim.map(sim => (
                                <div className="row" key={sim.phoneNumber}>
                                    <div className="col-7">
                                        <div className="p-2 border h-full p-4">
                                            <h3>Số sim: <span className="text-xl text-colorSecondary font-bold">{sim.phoneNumber}</span></h3>
                                            <h3>Giá bán: <span className="text-xl text-colorSecondary">{sim.price}<sub className="text-black text-xs text-bold">(VNĐ)</sub></span></h3>
                                            <h3>Mạng: <span className="text-xl text-colorPrimary">{sim.networker?.name}</span></h3>
                                            <p>{sim.description}</p>
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
                        {sim.length < 0 && <h1>Sim không tồn tại</h1>}
                    </div>
                }
            </div>
        </div>
    )
}