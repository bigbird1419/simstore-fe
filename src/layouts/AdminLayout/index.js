import AdminHeader from '../components/AdminHeader'
import AdminSidebar from "../components/AdminSidebar"

export default function AdminLayout({ children }) {
    return (
        <div className="wrapper">
            <div className='container'>
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12">
                        <div className=' sticky top-0 z-50'>
                            <AdminSidebar />
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12">
                        <div className=' sticky top-0 z-50'>
                            <AdminHeader />
                        </div>
                        <div className='min-h-screen mt-4'>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}