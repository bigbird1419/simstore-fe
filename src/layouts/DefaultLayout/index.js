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
                        <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12'>
                            <div className='max-sm:mt-2 sticky top-10'>
                                <Sidebar>
                                    <SideSimBar />
                                </Sidebar>
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                            <div className='max-sm:mt-2'>
                                <Search />
                            </div>
                            <div className='max-sm:mt-2'>{children}</div>
                        </div>
                        <div className='col-xl-3 col-lg-3 col-md-12 col-sm-12'>
                            <div className='max-sm:mt-2'>
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
                <div className='max-sm:mt-2'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}