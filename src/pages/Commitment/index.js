import img1 from '../../assets/dantri.png'
import img2 from '../../assets/doanhnghiepvathuonghieu.png'
import Button from '../../components/Button'

export default function Commitment() {

    return (
        <div className="wrapper">
            <div className="container">
                <h1 className="px-4 py-2  mt-4 bg-colorPrimary text-md font-bold text-white text-center">
                    CAM KẾT BÁN HÀNG
                </h1>
                <strong className="my-4 block">Cam kết bán hàng "Uy tín chính là sự sống còn của công ty"</strong>
                <div>
                    <strong className="my-4 block">6 Cam kết bán hàng của Sim Tuấn Hưởng:</strong>
                    <p>
                        <strong>Cam kết 1: </strong>Bán hàng không mập mờ. Luôn trả lời cho khách hàng biết sim có hay không có, còn hay đã bán.
                    </p>
                    <br />
                    <p>
                        <strong>Cam kết 2: </strong>Hoàn tiền 100% cho khách hàng nếu sim bị thất lạc hoặc do sai sót của Sim Tuấn Hưởng dẫn đến giao dịch không thành công.
                    </p>
                    <br />
                    <p>
                        <strong>Cam kết 3: </strong>Luôn đăng ký tên chính chủ cho khách hàng mua sim. Đảm bảo quyền sở hữu số thuê bao theo đúng quy định của pháp luật.
                    </p>
                    <br />
                    <p>
                        <strong>Cam kết 4: </strong>Giữ bí mật tuyệt đối thông tin của khách hàng. Không chia sẻ cho các cá nhân và tổ chức khác.
                    </p>
                    <br />
                    <p>
                        <strong>Cam kết 5: </strong>Bán đúng giá và luôn cố gắng bán giá thấp nhất có thể so với các số sim tương tự đang có trên thị trường.
                    </p>
                    <br />
                    <p>
                        <strong>Cam kết 6: </strong>Giao sim hoàn toàn miễn phí trên toàn quốc. Khách hàng không phải trả thêm bất cứ khoản phí nào khi nhận sim.
                    </p>
                    <br />
                    <p>
                        Toàn thể đội ngũ nhân viên chúng tôi luôn nỗ lực và không ngừng phấn đấu để đạt được mục tiêu trở thành đơn vị phân phối sim số đẹp <strong>lớn nhất & uy tín nhất</strong> tại Việt Nam. Hãy giúp chúng tôi bằng cách nói thẳng cho chúng tôi biết nếu quý khách có bất kỳ điều gì không hài lòng.
                    </p>
                    <br />
                    <strong className="block my-4">Các báo viết gì về chúng tôi !</strong>
                    <p>
                        <img className='m-auto' src={img1} alt='...' />
                        <img className='m-auto' src={img2} alt='...' />
                    </p>
                    <p>Chúng tôi mong muốn nhận được những góp ý chân thành để chúng tôi có thể phục vụ quý khách ngày càng tốt hơn!</p>
                    <br />
                    <p>Thắc mắc về chất lượng dịch vụ xin gọi đến số điện thoại ban giám đốc: <Button href={'tel:0377836549'} className={'text-colorPrimary font-bold'}>0987658888</Button></p>
                </div>
            </div>
        </div>
    )
}