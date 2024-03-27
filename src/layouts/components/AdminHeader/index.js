import classNames from 'classnames/bind'
import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './AdminHeader.module.css'
import Button from '../../../components/Button'
import { auth } from '../../../services/firebase'
import { AuthContext } from '../../../context/AuthContext'

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
            <div className="container">
                <div className='flex justify-between items-center px-4 py-2 bg-colorPrimary  shadow-md'>
                    <div className="border-r border-r-white my-2 p-2">
                        <Button className={cx('text-2xl font-bold text-white')} to={'/'}>SimStore</Button>
                    </div>
                    <div className='flex'>
                        <div className='mr-4 text-white text-xl'>
                            <i className="far fa-bell"></i>
                        </div>
                        <div className={cx('user', 'text-xl  text-white ')} onClick={hanldeSignOut}>
                            Thoát
                            <i className="far fa-user ml-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
