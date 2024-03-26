import { useState } from "react"

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
        avatar: 'https://simdeponline.vn/uploads/news/056-la-mang-gi-1.jpg',
        heading: 'Đầu số 056 là mạng gì? Địa chỉ mua sim 056 uy tín nhất hiện nay',
        shortDescription: 'Bạn đang phân vân 056 là mạng gì? Đây là số sim thuộc nhà mạng Vietnamobile, xuất hiện trên thị trường từ năm 2019. Hãy cùng tìm hiểu thông tin về sim đầu số 056 ở bài viết này ngay nhé, quý khách hàng sẽ biết vì sao mình nên mua số sim này dùng ngay!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/056-la-mang-gi-1.jpg',
        heading: 'Đầu số 056 là mạng gì? Địa chỉ mua sim 056 uy tín nhất hiện nay',
        shortDescription: 'Bạn đang phân vân 056 là mạng gì? Đây là số sim thuộc nhà mạng Vietnamobile, xuất hiện trên thị trường từ năm 2019. Hãy cùng tìm hiểu thông tin về sim đầu số 056 ở bài viết này ngay nhé, quý khách hàng sẽ biết vì sao mình nên mua số sim này dùng ngay!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/056-la-mang-gi-1.jpg',
        heading: 'Đầu số 056 là mạng gì? Địa chỉ mua sim 056 uy tín nhất hiện nay',
        shortDescription: 'Bạn đang phân vân 056 là mạng gì? Đây là số sim thuộc nhà mạng Vietnamobile, xuất hiện trên thị trường từ năm 2019. Hãy cùng tìm hiểu thông tin về sim đầu số 056 ở bài viết này ngay nhé, quý khách hàng sẽ biết vì sao mình nên mua số sim này dùng ngay!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/056-la-mang-gi-1.jpg',
        heading: 'Đầu số 056 là mạng gì? Địa chỉ mua sim 056 uy tín nhất hiện nay',
        shortDescription: 'Bạn đang phân vân 056 là mạng gì? Đây là số sim thuộc nhà mạng Vietnamobile, xuất hiện trên thị trường từ năm 2019. Hãy cùng tìm hiểu thông tin về sim đầu số 056 ở bài viết này ngay nhé, quý khách hàng sẽ biết vì sao mình nên mua số sim này dùng ngay!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
    {
        avatar: 'https://simdeponline.vn/uploads/news/056-la-mang-gi-1.jpg',
        heading: 'Đầu số 056 là mạng gì? Địa chỉ mua sim 056 uy tín nhất hiện nay',
        shortDescription: 'Bạn đang phân vân 056 là mạng gì? Đây là số sim thuộc nhà mạng Vietnamobile, xuất hiện trên thị trường từ năm 2019. Hãy cùng tìm hiểu thông tin về sim đầu số 056 ở bài viết này ngay nhé, quý khách hàng sẽ biết vì sao mình nên mua số sim này dùng ngay!',
        description1: 'Bạn đã biết 056 là mạng gì hay chưa? Đây là đầu số nhà mạng khá mới mẻ và phục vụ rất nhiều khách hàng hiện nay. 056 thực chất là số sim thuộc nhà mạng Vietnamobile, hoạt động từ năm 2009, thuộc top một trong 4 những đơn vị cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, được đầu tư bài bản về hạ tầng. Bạn có biết đầu số cũ của 056 là gì chưa? Đầu số cũ của 056 là 0186 thuộc quản lý của nhà mạng HT-Mobile, đã được đưa vào sử dụng từ năm 2006. Cho tới năm 2009 thì đầu số cũ này lại thuộc quản lý của nhà mạng Vietnamobile, cho tới năm 2018 thì 0186 lại chuyển thành đầu số mới 056 do nhà mạng Vietnamobile quản lý.',
        description2: 'Bạn có nên dùng sim đầu số 056 hay không khi mà đây được đánh giá là sim đầu số đẹp? Sim đầu số 056 thuộc sim đầu số đẹp, sóng khỏe và ổn định nhất hiện nay. Quý khách hàng hoàn toàn yên tâm về chất lượng dịch vụ khi sử dụng sim đầu số 056 về cuộc gọi và truy cập internet tốc độ cao, ổn định. Phí dịch vụ 3G và 4G của nhà mạng này rất rẻ, cho nên khách hàng có thể tận dụng gói cước của nhà mạng này để giảm thiểu chi phí mua data tốc độ sim số. Quý khách hàng cũng dễ dàng đăng ký sim cũng, thuận tiện khi sử dụng sim số như vậy.'
    },
]

export default function Blogs() {
    const [curBlog, setCurBlog] = useState({})

    return (
        <div className="wrapper">
            <div className="container">
                
            </div>
        </div>
    )
}