import classNames from "classnames/bind"

import styles from './Sim.module.css'
import Button from "../Button"

const cx = classNames.bind(styles)

export default function Sim({ sim }) {

    return (
        <Button
            to={`/sim/${sim.phoneNumber}`}
            className={cx('sim-box', 'block p-2 mb-2 border rounded-md border-colorPrimary')}
        >
            <div className={cx('flex justify-between')}>
                <img className="w-10" src={sim.networker.imgUrl} alt={sim.phoneNumber} />
                <div className="text-left">
                    <p className="text-left text-xl text-colorPrimary font-bold transition-all duration-300 hover:underline">{sim.phoneNumber}</p>
                    <p className="text-left text-md text-colorPrimary  transition-all duration-300 hover:underline">{sim.price}<sup>₫</sup></p>
                </div>
            </div>
        </Button>
    )
}