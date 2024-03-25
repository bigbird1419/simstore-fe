import routes from '../constants/routes'
import NoContentLayout from '../layouts/NoContentLayout'
import Home from '../pages/Home'
import Sim from '../pages/Sim'
import Category from '../pages/Category'
import AdminHome from '../pages/AdminHome'
import AdminCategorys from '../pages/AdminCategorys'
import AdminClientOrders from '../pages/AdminClientOrders'
import AdminNetworkers from '../pages/AdminNetworkers'
import AdminSims from '../pages/AdminSims'
import Login from '../pages/Login'
import Blogs from '../pages/Blogs'
import Commitment from '../pages/Commitment'
import Contact from '../pages/Contact'
import PayPage from '../pages/PayPage'
import RegisterInternet from '../pages/RegisterInternet'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.category, component: Category },
    { path: routes.sim, component: Sim },
    { path: routes.login, component: Login, layout: NoContentLayout },
    { path: routes.blogs, component: Blogs },
    { path: routes.commit, component: Commitment },
    { path: routes.contact, component: Contact },
    { path: routes.pay, component: PayPage },
    { path: routes.register, component: RegisterInternet },
]

const privateRoutes = [
    { path: routes.admin, component: AdminHome },
    { path: routes.adminCategory, component: AdminCategorys },
    { path: routes.adminClientOrder, component: AdminClientOrders },
    { path: routes.adminNetworker, component: AdminNetworkers },
    { path: routes.adminSim, component: AdminSims },
]

export { publicRoutes, privateRoutes }