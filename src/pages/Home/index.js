import classNames from "classnames/bind"

import styles from './Home.module.css'
import Sims from "../../components/Sims"

const cx = classNames.bind(styles)

export default function Home() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className={cx('sim-box', 'mb-4')}>
                    <h1>Sim phổ biến</h1>
                    <Sims />
                </div>
                <div className={cx('sim-box', 'mb-4')}>
                    <h1>Sim phổ biến</h1>
                    <Sims />
                </div>
                <div className={cx('sim-box', 'mb-4')}>
                    <h1>Sim phổ biến</h1>
                    <Sims />
                </div>
            </div>
        </div>
    )
}