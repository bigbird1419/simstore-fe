import Header from '../components/Header'
import Search from '../components/Search'
import Sidebar from '../components/Sidebar'

export function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <div className='mt-2'>
                    <div className='row'>
                        <div className='col-3'>
                            <Sidebar />
                        </div>
                        <div className='col-6'>
                            <div>
                                <Search />
                            </div>
                            <div>{children}</div>
                        </div>
                        <div className='col-3'>
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}