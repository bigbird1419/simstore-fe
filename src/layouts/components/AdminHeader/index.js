import classNames from 'classnames/bind'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './AdminHeader.module.css'
import { auth } from '../../../services/firebase'
import { AuthContext } from '../../../context/AuthContext'
import Button from '../../../components/Button'

const cx = classNames.bind(styles)

export default function AdminHeader() {
    const { setIsLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const hanldeSignOut = async () => {
        await signOut(auth)
        setIsLogin(false)
        navigate('/login')
    }

    return (
        <div className="wrapper">
            <div className='flex justify-end items-center px-4 py-2 bg-white shadow-md'>
                <div className='flex justify-end'>
                    <div className='mr-6 text-white text-xl '>
                        <i className="far fa-bell text-colorExtraPrimary"></i>
                    </div>
                    <div className={cx('user', ' ')}>
                        <Button onClick={hanldeSignOut} className={cx('text-md bg-colorExtraPrimary text-white px-4 py-1 rounded')}>Thoát</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
