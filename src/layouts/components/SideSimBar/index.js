import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './SideSimBar.module.css'
import NavMenu from "../../../components/NavMenu"
import { getCategorys } from '../../../services/categoryService'
import { getNetworkers } from '../../../services/networkersService'
import Loader from "../../../components/Loader"

const cx = classNames.bind(styles)

export default function SideSimBar() {
    const [categorys, setCategorys] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true)
            const res1 = await getCategorys()
            const res2 = await getNetworkers()
            const data1 = res1.data.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        path: `/${cur.code}`,
                        title: `${cur.name}`
                    }
                ]
            }, [])
            const data2 = res2.data.reduce((acc, cur) => {
                return [
                    ...acc,
                    {
                        path: `/${cur.code}`,
                        title: `sim ${cur.name}`
                    }
                ]
            }, [])
            setCategorys([...data1, ...data2])
            setIsLoading(false)
        }
        getData()
    }, [])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className="container">
                    <div className="border">
                        <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">
                            SIM SỐ ĐẸP
                        </h1>
                        <div>
                            <NavMenu
                                className={cx('')}
                                content={categorys}
                                classNameItem={cx('px-4 py-2 hover:underline text-sm font-semibold text-colorDark border-b border-b-gray-300 w-100')}
                                activeClass={cx('underline')}
                            />
                        </div>
                    </div>
                </div>}
        </div>
    )
}