import classNames from "classnames/bind"

import styles from './AdminSidebar.module.css'
import routes from "../../../constants/routes"
import Button from '../../../components/Button'

const cx = classNames.bind(styles)
const sidebars = [
    { title: 'Dashboard', path: routes.admin, icon: <i class="fas fa-home"></i> },
    { title: 'Networkers', path: routes.adminNetworker, icon: <i class="fas fa-credit-card"></i> },
    { title: 'Categorys', path: routes.adminCategory, icon: <i class="fas fa-th"></i> },
    { title: 'Sims', path: routes.adminSim, icon: <i class="fas fa-sim-card"></i> },
    { title: 'Client Orders', path: routes.adminClientOrder, icon: <i class="fas fa-shopping-cart"></i> },
]

export default function AdminSidebar() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <div>
                    {sidebars.map((sidebar, i) => (
                        <div key={i} className="px-4 py-2 border-b border-b-gray-200">
                            <Button
                                className={cx('text-xl font-bold', 'nav-side')}
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