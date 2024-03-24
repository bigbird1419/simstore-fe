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
                <div className="flex flex-col  justify-between">
                    <p className="flex justify-end text-xl text-colorPrimary font-bold transition-all duration-300 hover:underline">{sim.phoneNumber}</p>
                    <p className="flex justify-end items-end text-md text-colorSecondary  transition-all duration-300 hover:underline">{sim.price}<sup>₫</sup></p>
                </div>
            </div>
        </Button>
    )
}