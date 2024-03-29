import ClientOrders from '../components/ClientOrders'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'
import SideSimBar from '../components/SideSimBar'
import Supporters from '../components/Supporters'

export default function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    <Header />
                </div>
                <div className='mt-2'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className=' sticky top-10'>
                                <Sidebar>
                                    <SideSimBar />
                                </Sidebar>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div>
                                <Search />
                            </div>
                            <div>{children}</div>
                        </div>
                        <div className='col-3'>
                            <div>
                                <Sidebar>
                                    <ClientOrders />
                                </Sidebar>
                            </div>
                            <div className='mt-2'>
                                <Sidebar>
                                    <Supporters />
                                </Sidebar>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}