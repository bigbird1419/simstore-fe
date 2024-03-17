import classNames from "classnames/bind"

import styles from './NavMenu.module.css'
import MenuItem from "./MenuItem"

const cx = classNames.bind(styles)

export default function NavMenu({ content, classNameItem }) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className={cx('flex bg-colorPrimary mt-2')}>
                    {content.map((nav, i) => (
                        <MenuItem
                            classname={cx(classNameItem, 'menu-item')} content={nav} key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}