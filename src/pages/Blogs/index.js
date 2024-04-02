import { useEffect, useState } from "react"

import Loader from '../../components/Loader'

const blogs = [
    {
        avatar: 'https://simdeponline.vn/uploads/news/056-la-mang-gi-1.jpg',
        heading: 'Đầu số 056 là mạng gì? Địa chỉ mua sim 056 uy tín nhất hiện nay',
        shortDescription: 'Bạn đang phân vân 056 là mạng gì? Đây là số sim thuộc nhà mạng Vietnamobile, xuất hiện trên thị trường từ năm 2019. Hãy cùng tìm hiểu thông tin về sim đầu số 056 ở bài viết này ngay nhé, quý khách hàng sẽ biết vì sao mình nên mua số sim này dùng ngay!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/028-la-mang-gi-2.jpg',
        heading: '028 là mạng gì? Địa chỉ mua sim 028 uy tín và chất lượng nhất',
        shortDescription: 'Bạn đang tìm kiếm 028 là mạng gì khi mà thị trường đa dạng các sản phẩm sim này như vậy? Tham khảo ngay bài viết dưới đây chúng tôi sẽ tư vấn cho khách hàng chọn được số sim ưng ý, phù hợp với nhu cầu và túi tiền khách hàng nhất nhé!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/sim-Vietnamobile-khong-goi-duoc-2.jpg',
        heading: 'Nguyên nhân khiến sim Vietnamobile không gọi được là gì? Cách khắc phục',
        shortDescription: 'Có khá nhiều nguyên nhân khác nhau khiến cho sim Vietnamobile không gọi được. Bạn đã xác định cách khắc phục tình trạng này thế nào chưa? Hãy cùng tham khảo bài viết này, simdeponline.vn sẽ hướng dẫn cho quý khách khắc phục tình trạng sim Vietnamobile không thể liên lạc được đơn giản nhất nhé!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/095-la-mang-gi-2.jpg',
        heading: '095 là mạng gì? Địa chỉ bán sim 095 chất lượng cao, uy tín',
        shortDescription: 'Hiện nay, nhu cầu sim 095 được nhiều khách hàng quan tâm. Đầu số sim 095 là mạng gì mà nhiều người quan tâm tới vậy, ý nghĩa của đầu số này là gì và địa chỉ nào bán sim số chất lượng cao, uy tín nhất? Hãy tham khảo bài viết dưới đây quý khách hàng sẽ được giải đáp thắc mắc sớm nhất, nhanh nhất và hiệu quả nhất!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/phoi-sim-la-gi-1.jpg',
        heading: 'Giải đáp thắc mắc: phôi sim là gì? Giá thành và địa chỉ bán phôi sim',
        shortDescription: 'Quý khách hàng đang phân vân không biết phôi sim là gì? Giá thành của phôi sim và địa chỉ nào cung cấp phôi sim phù hợp với yêu cầu của khách hàng hiện đại hiện nay. Hãy cùng tham khảo bài viết dưới đây quý khách hàng sẽ có câu trả lời chính xác, nhanh chóng và hiệu quả nhất.',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/mua-sim-itelecom-o-dau-2.jpg',
        heading: 'Địa chỉ mua sim Itelecom ở đâu uy tín nhất năm 2024?',
        shortDescription: 'Bạn đang tìm kiếm địa chỉ để mua sim Itelecom ở đâu phù hợp nhất? Hiện nay có khá nhiều đơn vị bán sim số nhà mạng này, liệu khách hàng sẽ chọn địa chỉ nào tốt nhất, phục vụ quý khách với số sim ưng ý với chính bạn nhất? Tham khảo bài viết dưới đây để có được sự lựa chọn chính xác nhất.',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/mang-Vietnamobile-phu-song-o-dau-2.JPG',
        heading: 'Trả lời câu hỏi: Mạng Vietnamobile phủ sóng ở đâu?',
        shortDescription: 'Quý khách hàng phân vân không biết mạng Vietnamobile phủ sóng ở đâu? Thị trường nhà mạng Vietnamobile ngày càng mở rộng, số lượng khách hàng chọn mua sim số của nhà mạng này ngày càng nhiều, khiến cho nhiều người tìm kiếm sim số đẹp và các dịch vụ liên quan cũng không ít.',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
]

export default function Blogs() {
    const [curBlog, setCurBlog] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const hanldeSetBlog = (blog) => {
        setIsLoading(true)
        setCurBlog(blog)
    }
    const hanldeClearBlog = () => {
        setIsLoading(true)
        setCurBlog({})
    }

    useEffect(() => {
        const id = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(id)
    }, [curBlog])

    return (
        <div className="wrapper">
            {isLoading ? <Loader /> :
                <div className="container">
                    {Object.keys(curBlog)?.length > 0 ?
                        <div className="my-6">
                            <p onClick={hanldeClearBlog} className="text-colorPrimary font-semibold hover:underline">Tin tức</p>
                            <h1 className="px-4 py-2  mt-4 bg-colorPrimary text-md font-bold text-white text-center">
                                {curBlog.heading}
                            </h1>
                            <div className="my-4 text-sm">
                                <strong>{curBlog.shortDescription}</strong>
                            </div>
                            <div  className="my-2 text-sm">
                                <p>{curBlog.description1}</p>
                            </div>
                            <div  className="my-2">
                                <img src={curBlog.avatar} alt={curBlog.heading} className="w-full" />
                            </div>
                            <div  className="my-2 text-sm">
                                <p>{curBlog.description2}</p>
                            </div>
                        </div>
                        :
                        <div className="my-6">
                            {blogs.map((blog, i) => (
                                <div className="mb-4 border p-2" key={i}>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <div>
                                                <img src={blog.avatar} alt={blog.heading} className="w-full" />
                                            </div>
                                        </div>
                                        <div className="col-sm-9">
                                            <div>
                                                <h3 className="text-colorPrimary text-sm font-bold hover:underline mb-2 cursor-pointer"
                                                    onClick={() => hanldeSetBlog(blog)}
                                                >{blog.heading}</h3>
                                                <p className="text-xs">{blog.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            }
        </div>
    )
}