import imgNew from '../../assets/new.png'
import Button from '../../components/Button'

const dataps = [
    { name: 'V120', data: '60GB', price: '120.000đ', day: '30 ngày', description: 'miễn phí gọi nội mạng và 50\' gọi ngoại mạng', register: 'Soan V120 0338942179 gui 9123', hot: true },
    { name: 'V90', data: '60GB', price: '90.000đ', day: '30 ngày', description: 'miễn phí gọi nội mạng và 50\' gọi ngoại mạng', register: 'Soan V120 0338942179 gui 9123', hot: true },
    { name: 'ST200', data: '60GB', price: '200.000đ', day: '30 ngày', description: 'miễn phí gọi nội mạng và 200\' gọi ngoại mạng', register: 'Soan V120 0338942179 gui 9123', hot: true },
    { name: 'ST120', data: '60GB', price: '60.000đ', day: '60 ngày', register: 'Soan V120 0338942179 gui 9123' },
    { name: 'ST30K', data: '7GB', price: '30.000đ', day: '30 ngày', register: 'Soan V120 0338942179 gui 9123' },
    { name: 'ST5K', data: '500MB', price: '5.000đ', day: 'Đến 24h cùng ngày đăng ký', register: 'Soan V120 0338942179 gui 9123' },
    { name: 'ST10K', data: '2GB', price: '10.000đ', day: 'Đến 24h cùng ngày đăng ký', register: 'Soan V120 0338942179 gui 9123' },
]

export default function RegisterInternet() {

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="px-4 py-2 mt-4 bg-colorPrimary text-md font-bold text-white text-center">
                    ĐĂNG KÝ 3G 4G VIETTEL
                </h1>
                <div>
                    <h1 className="text-center text-2xl text-colorPrimary">GÓI HOT 4G VIETTEL</h1>
                    <p className="text-center">Gói cước giá rẻ, dung lượng khủng, được yêu thích nhất hiện nay!</p>
                    <div className='row my-4'>
                        {dataps.map((datap, i) => (
                            <div key={i} className='col-4 relative'>
                                <div className=' mb-4 py-4 rounded-xl shadow-md'>
                                    {datap.hot &&
                                        <div className='absolute top-0 right-0'>
                                            <img className='w-12' src={imgNew} alt='new' />
                                        </div>
                                    }
                                    <div className='text-center text-xs text-md mb-4'>
                                        <h3 className='border-b p-2 text-colorPrimary font-semibold'>{datap.name}</h3>
                                        <h3 className='border-b p-2'>{datap.data} tốc độ cao</h3>
                                        <h3 className='border-b p-2'><strong>{datap.price}</strong></h3>
                                        <h3 className='border-b text-xs p-2'><strong>{datap.day}</strong></h3>
                                        <h3 className='text-xs'>{datap?.description}</h3>
                                    </div>
                                    <div className='flex justify-center'>
                                        <Button onClick={() => { alert(`${datap.register}`) }} className={'rounded-full block bg-colorPrimary text-xs text-white px-4 py-1 hover:text-black shadow-md'}>
                                            Đăng Ký Qua SMS
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}