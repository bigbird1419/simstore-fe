import classNames from "classnames/bind"

import styles from './Home.module.css'
import Sims from "../../components/Sims"
import { getNetworkers } from '../../services/networkersService'
import { useEffect, useState } from "react"

const cx = classNames.bind(styles)

export default function Home() {
    const [networkers, setNetworkers] = useState([])

    useEffect(() => {
        const getData = async () => {
            const res = await getNetworkers();
            setNetworkers(res.data)
        }
        getData()
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                <div className={cx('sim-box', 'my-4')}>
                    <h1 className="text-center text-lg font-semibold text-white bg-colorPrimary py-1">Sim phổ biến</h1>
                    <Sims />
                </div>
                {networkers.map(networker => (
                    <div className={cx('sim-box', 'mb-4')} key={networker.id}>
                        <h1 className="text-center text-lg font-semibold text-white bg-colorPrimary py-1">Sim {networker.name}</h1>
                        <Sims category={networker.code} />
                    </div>
                ))}
            </div>
        </div>
    )
}