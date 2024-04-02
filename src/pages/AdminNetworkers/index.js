import classNames from "classnames/bind"
import { useContext, useState } from "react"

import styles from './AdminNetworkers.module.css'
import Button from '../../components/Button'
import FormatDate from '../../components/FormatDate'
import requireAuth from "../../hook/requireAuth"
import { NetworkerContext } from '../../context/NetworkerContext'
import EditNetworker from "./EditNetworker"

const cx = classNames.bind(styles)

function AdminNetworkers() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const { networkers, deleteData } = useContext(NetworkerContext)
    const [curNetworker, setCurNetworker] = useState({})

    const handleHiddenEdit = () => {
        setIsShowCreate(false)
    }
    const handleEditNetworker = (networker) => {
        setCurNetworker(networker)
        setIsShowCreate(true)
    }

    return (
        <div className="wrapper">
            <div className="container">
                <div>
                    {isShowCreate ?
                        <EditNetworker networker={curNetworker} onHidden={handleHiddenEdit} />
                        :
                        <div>
                            {networkers?.length > 0 &&
                            <div className="">
                                <table className="w-100 bg-white table table-striped table-hover nowrap mt-4 rouded p-2">
                                    <thead>
                                        <tr>
                                            <td>
                                                <span className="text-xs">Tên nhà mạng</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Đường dẫn tĩnh</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Mô tả</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Ảnh đại diện</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Ngày tạo - Ngày sửa</span>
                                            </td>
                                            <td>
                                                <span className="text-xs">Hành động</span>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {networkers.map((networker, i) => (
                                            <tr key={i} >
                                                <td>
                                                    <span className="text-xs">{networker.name}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{networker.code}</span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">{networker.description}</span>
                                                </td>
                                                <td>
                                                    <span><img className="w-10" src={networker.imgUrl} alt={networker.name} /></span>
                                                </td>
                                                <td>
                                                    <span className="text-xs">
                                                        <FormatDate createdDate={networker.createdDate} /> - {networker.modifiedDate ? <FormatDate createdDate={networker.modifiedDate} /> : 'Không có'}
                                                    </span>
                                                </td>
                                                <td>
                                                    <Button className={cx('mr-8 hover:opacity-80 text-xs')} onClick={() => handleEditNetworker(networker)}>
                                                        <i className="far fa-edit mr-2"></i> Sửa
                                                    </Button>
                                                    <Button
                                                        className={cx('hover:opacity-80 text-xs')}
                                                        onClick={async () => await deleteData(networker.id)}
                                                    >
                                                        <i className="fas fa-times mr-2"></i> Xóa
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default requireAuth(AdminNetworkers)