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
                    <NavMenu content={category} classNameItem={cx('px-4 py-2 text-white text-md font-semibold uppercase hover:bg-colorSecondary transition-all duration-300')} />
                </div>
            </div>
        </div>
    )
}