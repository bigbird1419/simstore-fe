import classNames from 'classnames/bind'
import { signOut } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import styles from './AdminHeader.module.css'
import { auth } from '../../../services/firebase'
import { AuthContext } from '../../../context/AuthContext'
import { ClientOrderContext } from '../../../context/ClientOrderContext'
import Button from '../../../components/Button'

const cx = classNames.bind(styles)

export default function AdminHeader() {
    const { setIsLogin } = useContext(AuthContext)
    const { clientOrders } = useContext(ClientOrderContext)
    const [noti, setNoti] = useState([])
    const [isShowNoti, setIsShowNoti] = useState(false)
    const navigate = useNavigate()

    const hanldeSignOut = async () => {
        await signOut(auth)
        setIsLogin(false)
        navigate('/login')
    }
    const handleShowNoti = () => {
        setIsShowNoti(e => !e)
    }

    useEffect(() => {
        let tmp = clientOrders.filter(e => e.status.toUpperCase() === 'Chưa giao'.toUpperCase())
        setNoti(e => {
            return [
                {
                    content: `Có ${tmp.length} đơn hàng chưa được giao`,
                    path: '/admin/clientorder'
                }
            ]
        })
    }, [clientOrders])

    return (
        <div className="wrapper">
            <div className='flex justify-end items-center px-4 py-2 bg-white shadow-md'>
                <div className='flex justify-end'>
                    <div className='mr-6 text-white text-xl relative cursor-pointer' >
                        <i className="far fa-bell text-colorExtraPrimary" onClick={handleShowNoti}></i>
                        {noti.length > 0 && !isShowNoti &&
                            <span className='absolute right-0 top-0 translate-x-[50%] bg-colorSecondary text-white block w-4 h-4 rounded-full flex justify-center items-center text-sml'>{noti.length}</span>
                        }
                        {isShowNoti &&
                            <div className='absolute top-100 right-0 p-2 rounded shadow-md min-w-28 bg-white'>
                                {noti.map((e, i) => (
                                    <Link to={e.path} className='text-xs text-black whitespace-nowrap' key={i} onClick={handleShowNoti}>{e.content}</Link>
                                ))}
                            </div>
                        }
                    </div>
                    <div className={cx('user-control', ' ')}>
                        <Button onClick={hanldeSignOut} className={cx('text-md bg-colorExtraPrimary text-white px-4 py-1 rounded')}>Thoát</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
