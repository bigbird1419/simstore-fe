import classNames from "classnames/bind";

import styles from './Header.module.css'
import HeaderBanner from "./components/HeaderBanner";
import NavMenu from "../../../components/NavMenu";
import category from '../../../constants/category'

const cx = classNames.bind(styles)

export default function Header() {
    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    <HeaderBanner />
                </div>
                <div>
                    <NavMenu
                        className={cx('flex bg-colorPrimary mt-2 max-sm:overflow-y-auto')} content={category}
                        classNameItem={cx('md:px-4 md:py-2 text-white text-md font-semibold uppercase hover:bg-colorSecondary transition-all duration-300 max-sm:text-xs max-sm:px-2 max-sm:py-1 max-sm:whitespace-nowrap')}
                        activeClass={cx('bg-colorSecondary')}
                    />
                </div>
            </div>
        </div>
    )
}