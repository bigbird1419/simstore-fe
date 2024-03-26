import AdminHeader from '../components/AdminHeader'
import AdminSidebar from "../components/AdminSidebar"

export default function AdminLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className='mb-4'>
                    <AdminHeader />
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className='sticky top-4'>
                            <AdminSidebar />
                        </div>
                    </div>
                    <div className="col-9">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}