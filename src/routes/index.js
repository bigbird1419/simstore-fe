import routes from '../constants/routes'
import Home from '../pages/Home'
import Sim from '../pages/Sim'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.sim, component: Sim },
]

export { publicRoutes }