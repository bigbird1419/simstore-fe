import classNames from "classnames/bind"
import { useLocation } from 'react-router-dom'

import styles from './NavMenu.module.css'
import MenuItem from "./MenuItem"

const cx = classNames.bind(styles)

export default function NavMenu({ content, className, classNameItem, activeClass }) {
    const currentPage = useLocation().pathname

    return (
        <div className="wrapper navmenu">
            <div className={cx('', className)}>
                {content.map((nav, i) => (
                    <MenuItem
                        classname={cx(classNameItem, 'menu-item', currentPage === nav.path ? activeClass : '')}
                        content={nav} key={i}
                    />
                ))}
            </div>
        </div>
    )
}