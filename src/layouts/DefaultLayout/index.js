import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <Header />
                <div className='row'>
                    <div className='col-3'>
                        <Sidebar />
                    </div>
                    <div className='col-6'>
                        {children}
                    </div>
                    <div className='col-3'>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}