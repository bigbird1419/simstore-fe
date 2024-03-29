import classNames from "classnames/bind"
import { useLocation } from "react-router-dom"

import styles from './AdminSidebar.module.css'
import routes from "../../../constants/routes"
import Button from '../../../components/Button'

const cx = classNames.bind(styles)
const sidebars = [
    { title: 'Bảng điều khiển', path: routes.admin, icon: <i className="fas fa-home"></i> },
    {
        title: 'Nhà mạng', path: routes.adminNetworker, icon: <i className="fas fa-credit-card"></i>,
        children: [
            { title: 'Thêm mới', path: routes.adminNetworkerEdit, icon: <i class="fas fa-plus"></i> },
            { title: 'Xem thống kê', path: routes.admin, icon: <i class="fas fa-exclamation"></i> }
        ]
    },
    {
        title: 'Danh mục', path: routes.adminCategory, icon: <i className="fas fa-th"></i>,
        children: [
            { title: 'Thêm mới', path: routes.adminCategoryEdit, icon: <i class="fas fa-plus"></i> },
            { title: 'Xem thống kê', path: routes.admin, icon: <i class="fas fa-exclamation"></i> }
        ]
    },
    {
        title: 'Quản lý sim', path: routes.adminSim, icon: <i className="fas fa-sim-card"></i>,
        children: [
            { title: 'Thêm mới', path: routes.adminSimEdit, icon: <i class="fas fa-plus"></i> },
            { title: 'Xem thống kê', path: routes.admin, icon: <i class="fas fa-exclamation"></i> }
        ]
    },
    { title: 'Đơn hàng', path: routes.adminClientOrder, icon: <i className="fas fa-shopping-cart"></i> },
]

export default function AdminSidebar() {
    const currentPage = useLocation().pathname

    return (
        <div className='wrapper'>
            <div className=" bg-colorExtraPrimary">
                <div className="border-b border-b-white flex justify-center items-center">
                    <Button className={cx('text-xl font-bold text-white  p-2 my-4')} to={'/'}>Về cửa hàng</Button>
                </div>
                {sidebars.map((sidebar, i) => (
                    <div key={i} className="border-b border-b-gray-200">
                        <Button
                            className={cx('block text-md text-white font-bold px-3 py-2 my-1 opacity-100 transition duration-300', 'nav-side')}
                            to={sidebar.path}
                        >
                            <span className="flex justify-center items-center w-6 h-6 text-xs mr-3">{sidebar.icon}</span>
                            <span className="text-right">{sidebar.title}</span>
                        </Button>
                        {/* {currentPage.includes(sidebar.path) && */}
                        <div className="ml-4">
                            {sidebar.children?.map((sc, i) => (
                                <Button key={i} className={cx('block w-4/5 bg-white rounded-md text-sm text-colorExtraPrimary font-bold mb-2 px-4 py-2', 'nav-side')} to={sc.path}>
                                    <span className="text-right">{sc.title}</span>
                                    <span className="flex justify-center items-center w-6 h-6 mr-3">{sc.icon}</span>
                                </Button>
                            ))}
                        </div>
                        {/* } */}
                    </div>
                ))}
            </div>
        </div>
    )
}