import classNames from "classnames/bind"
import { useLocation } from "react-router-dom"

import styles from './AdminSidebar.module.css'
import routes from "../../../constants/routes"
import Button from '../../../components/Button'

const cx = classNames.bind(styles)
const sidebars = [
    { title: 'Dashboard', path: routes.admin, icon: <i className="fas fa-home"></i> },
    { title: 'Networkers', path: routes.adminNetworker, icon: <i className="fas fa-credit-card"></i> },
    { title: 'Categorys', path: routes.adminCategory, icon: <i className="fas fa-th"></i> },
    { title: 'Sims', path: routes.adminSim, icon: <i className="fas fa-sim-card"></i> },
    { title: 'Client Orders', path: routes.adminClientOrder, icon: <i className="fas fa-shopping-cart"></i> },
]

export default function AdminSidebar() {
    const currentPage = useLocation().pathname

    return (
        <div className='wrapper'>
            <div className='container'>
                <div className="">
                    {sidebars.map((sidebar, i) => (
                        <div key={i} className="border-b border-b-gray-200">
                            <Button
                                className={cx('block bg-colorPrimary text-xl text-white font-bold px-4 py-2 hover:bg-colorSecondary transition duration-300', 'nav-side', currentPage === sidebar.path ? 'bg-colorSecondary' : '')}
                                to={sidebar.path}
                            >
                                <span className="flex justify-center items-center w-6 h-6 text-xs mr-3">{sidebar.icon}</span>
                                <span className="text-right">{sidebar.title}</span>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}