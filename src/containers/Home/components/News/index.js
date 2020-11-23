import React, { Component } from 'react'
import "./news.scss"
export default class News extends Component {
    render() {
        return (
            <section className="news container">
                <div className="news__content row">
                    <div className="news__items col-6">
                        <img className="imgNews" src="./images/carousel1.jpg" alt="" />
                        <h6>[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum: Bẫy Thực Tại Kinh Hoàng</h6>
                        <p>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu
                        chuyện kinh dị, có sự tham gia của nhà sản xuất đã làm nên thành công của loạt tác phẩm ấn tượng
                        “Get Out”, “Us” hay “BlacKkKlansman”, và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                        Ante
      </p>
                        <div className="likeComment">
                            <img className="imgLikeComment mr-3" src="./images/like.png" alt="" />
                            <h6 className="mr-3">0</h6>
                            <img className="imgLikeComment mr-3" src="./images/comment.png" alt="" />
                            <h6 className="mr-3">0</h6>
                        </div>
                    </div>
                    <div className="news__items col-6">
                        <img className="imgNews" src="./images/carousel2.jpg" alt="" />
                        <h6> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</h6>
                        <p>Vượt mặt Peninsula, Ác Quỷ Đối Đầu trở thành phim ăn khách nhất mùa hè 2020 tại Hàn Quốc. Chỉ sau 12
                        ngày, Ác Quỷ Đối Đầu chạm điểm hoà vốn với 3.5 triệu lượt xem. Ác Quỷ Đối Đầu giữ vững vị trí top 1
                        doanh thu 2 tuần liên tiếp tại quê nhà Hàn Quốc
      </p>
                        <div className="likeComment">
                            <img className="imgLikeComment mr-3" src="./images/like.png" alt="" />
                            <h6 className="mr-3">0</h6>
                            <img className="imgLikeComment mr-3" src="./images/comment.png" alt="" />
                            <h6 className="mr-3">0</h6>
                        </div>
                    </div>
                    <div className="news__items col-4">
                        <img className="imgNews" src="./images/news1.png" alt="" />
                        <h6>Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher Nolan</h6>
                        <p style={{ fontSize: 12 }}>
                            Làng phim đương đại những năm qua chứng kiến sự lên ngôi của cái tên Christopher Nolan,
                            được biết tới như một trong những đạo diễn thiên tài với khả năng tạo ra siêu phẩm
                            bạc tỉ chất lượng.
      </p>
                        <div className="likeComment">
                            <img className="imgLikeComment mr-3" src="./images/like.png" alt="" />
                            <h6 className="mr-3">0</h6>
                            <img className="imgLikeComment mr-3" src="./images/comment.png" alt="" />
                            <h6 className="mr-3">0</h6>
                        </div>
                    </div>
                    <div className="news__items col-4">
                        <img className="imgNews" src="./images/news.png" alt="" />
                        <h6>Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé' xứ Hàn</h6>
                        <p style={{ fontSize: 12 }}>Sau 7 năm kể từ New World – bộ phim đạt thành tích hơn 4.68 triệu vé,
                        hai tên tuổi lão làng trong
                        làng điện ảnh Hàn Quốc mới tiếp tục tái hợp trong Truy Cùng Giết Tận – một bộ phim hành động
                        siêu “nặng đô”.
      </p>
                        <div className="likeComment">
                            <img className="imgLikeComment mr-3" src="./images/like.png" alt="" />
                            <h6 className="mr-3">0</h6>
                            <img className="imgLikeComment mr-3" src="./images/comment.png" alt="" />
                            <h6 className="mr-3">0</h6>
                        </div>
                    </div>
                    <div className="news__items col-4">
                        <div className="news__items__right">
                            <div className="right__items">
                                <img style={{ borderRadius: 4, marginRight: 5 }} width="50px" height="50px" src="./images/movie4.jpg" alt="" />
                                <h6>6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám nhất Hollywood</h6>
                            </div>
                            <div className="right__items">
                                <img style={{ borderRadius: 4, marginRight: 5 }} width="50px" height="50px" src="./images/movie1.png" alt="" />
                                <h6>Gái Già Lắm Chiêu V – Những cuộc đời vương giả</h6>
                            </div>
                            <div className="right__items">
                                <img style={{ borderRadius: 4, marginRight: 5 }} width="50px" height="50px" src="./images/movie2.png" alt="" />
                                <h6>Kaity Nguyễn trở thành mỹ nhân mới của vũ trụ Gái Già Lắm Chiêu</h6>
                            </div>
                            <div className="right__items">
                                <img style={{ borderRadius: 4, marginRight: 5 }} width="50px" height="50px" src="./images/movie3.jpg" alt="" />
                                <h6>5 lý do khiến bạn không thể bỏ qua bộ phim Cậu Bé Người Gỗ Pinocchio</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
