import classNames from "classnames/bind";

import styles from './Header.module.css'
import HeaderBanner from "./components/HeaderBanner";
import NavMenu from "../../../components/NavMenu";
import category from '../../../constants/category'

const cx = classNames.bind(styles)

export default function Header() {
    return (
        <div className="wrapper">
            <div>
                <HeaderBanner />
            </div>
            <div>
                <NavMenu
                    className={cx('flex bg-colorPrimary mt-2')} content={category}
                    classNameItem={cx('px-4 py-2 text-white text-md font-semibold uppercase hover:bg-colorSecondary transition-all duration-300')}
                    activeClass={cx('bg-colorSecondary')}
                />
            </div>
        </div>
    )
}