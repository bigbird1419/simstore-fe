import classNames from "classnames/bind"
import { useContext, useEffect, useState } from "react"

import styles from './SideSimBar.module.css'
import NavMenu from "../../../components/NavMenu"
import { NetworkerContext } from '../../../context/NetworkerContext'
import { CategoryContext } from "../../../context/CategoryContext"

const cx = classNames.bind(styles)

export default function SideSimBar() {
    const [data, setData] = useState([])
    const { networkers } = useContext(NetworkerContext)
    const { categorys } = useContext(CategoryContext)

    useEffect(() => {
        let data1 = [], data2 = []
        if (categorys?.length > 0) {
            data1 = categorys.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        path: `/${cur.code}`,
                        title: `${cur.name}`
                    }
                ]
            }, [])
        }
        if (networkers?.length > 0) {
            data2 = networkers?.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        path: `/${cur.code}`,
                        title: `${cur.name}`
                    }
                ]
            }, [])
        }
        setData([...data1, ...data2])
    }, [categorys, networkers])

    return (
        <div className="wrapper">
            <div className="container">
                <div className="border">
                    <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">
                        SIM SỐ ĐẸP
                    </h1>
                    <div>
                        <NavMenu
                            className={cx('max-sm:flex max-sm:overflow-y-auto')}
                            content={data}
                            classNameItem={cx('md:px-4 md:py-2 hover:underline text-sm font-semibold text-colorDark border-b border-b-gray-300 w-100 max-sm:whitespace-nowrap max-sm:text-xs max-sm:px-2 max-sm:py-1 max-sm:mr-2')}
                            activeClass={cx('underline')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}