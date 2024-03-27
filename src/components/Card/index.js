import classNames from "classnames/bind"

import styles from './Card.module.css'

const cx = classNames.bind(styles)

export default function Card({
    heading,
    count,
    primary = false,
    secondary = false,
    warning = false,
    success = false,
    className,
    ...passProps
}) {

    const classes = cx('border-l-4 rounded shadow-md p-3', {
        'border-colorPrimary text-colorPrimary': primary,
        'border-colorSecondary text-colorSecondary': secondary,
        'border-colorWarning text-colorWarning': warning,
        'border-colorSuccess text-colorSuccess': success,
        [className]: className,
    })

    return (
        <div className={classes} {...passProps}>
            <div className="container">
                <div className="text-xs font-semibold uppercase mb-1">{heading}</div>
                <div className="text-xl font-semibold text-gray-800">{count}</div>
            </div>
        </div>
    )
}