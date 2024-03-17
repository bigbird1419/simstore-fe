import classNames from "classnames/bind"

import styles from './SideSimBar.module.css'
import categorySim from '../../../constants/categorySim'
import NavMenu from "../../../components/NavMenu"

const cx = classNames.bind(styles)

export default function SideSimBar() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="border">
                    <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">
                        SIM SỐ ĐẸP
                    </h1>
                    <div>
                        <NavMenu
                            className={cx('')}
                            content={categorySim}
                            classNameItem={cx('px-4 py-2 hover:underline text-sm font-semibold text-colorDark border-b border-b-gray-300 w-100')}
                            activeClass={cx('underline')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}