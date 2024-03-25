import img1 from '../../assets/7_1.jpg'
import Button from '../../components/Button'

export default function Contact() {

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="px-4 py-2  mt-4 bg-colorPrimary text-md font-bold text-white text-center">
                    LIÊN HỆ
                </h1>
                <div className='my-4'>
                    <p>
                        <strong>
                            Liên hệ Trung tâm SIMDEPONLINE xin chân thành cảm ơn quý khách hàng đã ghé thăm Website : https://simdeponline.vn/ Toàn thể đội ngũ nhân viên chúng tôi luôn nỗ lực phấn đấu không ngừng để đạt mục tiêu trở thành trang web kinh doanh sim số đẹp trực tuyến lớn nhất & uy tín nhất tại Việt Nam
                        </strong>
                    </p>
                    <br />
                    <p>
                        <strong>Trung tâm SIMDEPONLINE xin chân thành cảm ơn quý khách hàng đã ghé thăm Website</strong> : <Button href={'https://simdeponline.vn'} className={'text-colorPrimary underline font-semibold'}>https://simdeponline.vn</Button>. Với tổng kho sim hơn 3 triệu sim số đẹp giá gốc của 5 nhà mạng hiện nay bao gồm sim viettel, sim mobifone, sim vinaphone, sim vietnamobile và sim gmobile. Số lượng sim lớn cùng với thể loại đa dạng sẽ giúp quý khách mua sim số đẹp tại Hà Nôi tham khảo và chọn mua được những sim ưng ý nhất. Với dịch vụ cung cấp sim số đẹp chuyên nghiệp sẽ phục quý khách mua sim tại Hà Nội một cách chu đáo nhất.
                    </p>
                    <br />
                    <p>
                        <img src={img1} alt='...' className='m-auto' />
                    </p>
                    <br />
                    <p>
                        Quý khách có bất cứ nhu cầu hay thắc mắc gì đừng ngần ngại hãy gọi ngay cho chúng tôi theo thông tin đưới đây:
                    </p>
                    <br />
                    <p>
                        <strong>TRUNG TÂM SIM ĐẸP ONLINE</strong>
                    </p>
                    <br />
                    <p>
                        Trụ sở chính: 22 Mễ Trì Thượng - Nam Từ Liêm - Hà Nội
                    </p>
                    <br />
                    <p>
                        Cơ sở 2: Cửa Hàng Ủy Quyền Viettel - 209 Lý Thường Kiệt - Khu 6 - Thị Cầu - Bắc Ninh
                    </p>
                    <br />
                    <p>
                        <strong>TRUNG TÂM SIM ĐẸP ONLINE </strong>xin chân thành cảm ơn quý khách. Toàn thể đội ngũ nhân viên chúng tôi luôn nỗ lực phấn đấu không ngừng để đạt mục tiêu trở thành trang web kinh doanh sim số đẹp trực tuyến lớn nhất & uy tín nhất tại Việt Nam
                    </p>
                    <br />
                    <p>
                        <strong>Giá rẻ nhất - giao hàng nhanh nhất - Chăm sóc khách hàng tận tình nhất</strong>
                    </p>
                    <br />
                    <p>
                        Hãy giúp chúng tôi bằng cách nói thẳng cho chúng tôi nếu quý khách có bất kỳ điều gì không hài lòng, Chúng tôi mong muốn nhận được những góp ý chân thành từ quý khách để ngày càng hoàn thiện hơn.
                    </p>
                    <br />
                    <p>
                        <strong>“Sự hài lòng của quý khách là thành công lớn nhất của chúng tôi"</strong>
                    </p>
                    <br />
                    <p>Rất hân hạnh được phục vụ quý khách!</p>
                    <br />
                </div>
            </div>
        </div >
    )
}