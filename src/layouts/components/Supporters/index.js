import classNames from 'classnames/bind'
import { useState } from 'react'

import styles from './Supporters.module.css'
import supporters from '../../../constants/supporters'
import Button from '../../../components/Button'

const cx = classNames.bind(styles)

export default function Supporters() {
    const [isShowMore, setIsShowMore] = useState(false)

    const hanldeShowMore = () => {
        setIsShowMore(val => !val)
    }

    return (
        <div className="">
            <div className="container">
                <div className="border pb-4">
                    <h1 className="px-4 py-2 bg-colorPrimary text-md font-bold text-white text-center">CHĂM SÓC KHÁCH HÀNG</h1>
                    <div>
                        {supporters.map((supporter, i) => (
                            <div className='text-center p-2 mb-2' key={i}>
                                <h1 className='font-semibold text-sm'>{supporter.name}</h1>
                                <Button className={cx('text-xl text-colorPrimary font-bold hover:underline')} href={`tel:${supporter.phone}`}>
                                    {supporter.phone}
                                </Button>
                            </div>
                        ))}
                    </div>
                    {!isShowMore &&
                        <p className='text-center underline text-colorPrimary text-sm font-semibold cursor-pointer'
                            onClick={hanldeShowMore}
                        >
                            Xem Thêm
                        </p>
                    }
                    {isShowMore &&
                        <div className='text-center'>
                            <h1 className='mb-2 font-semibold'>Thời Gian Làm Việc</h1>
                            <h3 className='mb-4 text-colorSecondary font-semibold'>T2 - CN : 8h - 17h30</h3>
                            <p className='mb-2 italic font-semibold'>Quý Khách Mua Sim</p>
                            <p className='mb-2 font-semibold'>
                                <span className='mb-2 italic'>Xin Vui Lòng Nhấn Vào Chữ</span>
                                <br />
                                <span className='text-colorSecondary'>Đặt Mua</span>
                            </p>
                            <p className='mb-2 italic font-semibold'>Chúng Tôi Sẽ Liên Hệ Lại Cho Quý Khách</p>
                            <p className='mb-2 italic font-semibold'>Xin Chân Thành Cảm Ơn!</p>
                            <p className='text-right underline text-colorPrimary text-sm cursor-pointer'
                                onClick={hanldeShowMore}
                            >
                                Thu gọn
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}