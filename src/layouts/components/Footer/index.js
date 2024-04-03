import classNames from "classnames/bind"

import styles from './Footer.module.css'
import Button from "../../../components/Button"

const cx = classNames.bind(styles)

const locations = [
    { address: 'Hà Nội', marketName: 'CH Viettel - 22 Mễ Trì Thượng - NTL - Hà Nội' },
    { address: 'Bắc Ninh', marketName: 'CHUQ Viettel - 209 LTK - Khu 6 - Thị Cầu - Bắc Ninh' },
]
const contacts = [
    { contactName: 'Số điện thoai', tel: '0973.26.9999' },
    { contactName: 'Gmail', mail: 'nghiemtuan@simdeponline.vn' },
    { contactName: 'Gmail nhận bảng số', mail: 'nghiemtuan@simdeponline.vn' },
]

export default function Footer() {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="text-center text-sm pt-10">
                    <p className="font-semibold">
                        © Sim Tuấn Hưởng - Hệ thống phân phối <Button className={cx('text-colorPrimary hover:underline')} to={'/'}>Sim Đẹp Online - Sim số đẹp</Button> lớn nhất Việt Nam!
                    </p>
                    <p className="font-semibold">Simdeponline.vn là trang web chuyên về số đẹp giá rẻ - Một dịch vụ của Công Ty CP DV Viễn Thông Tuấn Hưởng.</p>
                    <p>
                        GPKD số <Button className={cx('font-bold')} href={'tel:0108755951'}>0108755951</Button> cấp tại SKH và đầu tư Hà Nội
                    </p>
                    {locations.map((location, i) => (
                        <div className="mt-2" key={i}>
                            <strong>
                                <span className="block w-16 m-auto border-b-2 border-colorPrimary">{location.address}</span>
                            </strong>
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            <span>{location.marketName}</span>
                        </div>
                    ))}
                    <div className="mt-2">
                        {contacts.map((contact, i) => {
                            if (contact.tel) {
                                return (
                                    <p key={i} className={cx('')}>
                                        {contact.contactName} : <Button href={`tel:${contact.tel}`}>{contact.tel}</Button>
                                    </p>
                                )
                            } else {
                                return (
                                    <p key={i} className={cx('')}>
                                        {contact.contactName} : <Button href={`mailto:${contact.mail}`}>{contact.mail}</Button>
                                    </p>
                                )
                            }
                        })}
                    </div>
                    <p className="font-semibold mt-2">
                        Lưu ý: Mọi Thông tin của Quý Khách đều được bảo mật tuyệt đối, và tuân thủ theo nghị định của Nhà Nước
                    </p>
                </div>
            </div>
        </div>
    )
}