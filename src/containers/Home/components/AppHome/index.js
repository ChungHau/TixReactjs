import React, { Component } from 'react'
import "./appHome.scss"
export default class AppHome extends Component {
    render() {
        return (
            <div className="appHomne">
                <div className="backgroundApp" style={{ backgroundImage: 'url(./images/backapp.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 left text-left">
                                <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
                                <p className="textLeft">người yêu điện ảnh</p>
                                <br />
                                <p className="textSmallLeft">Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi
                                quà
            hấp dẫn.</p>
                                <br />
                                <button className="buttonLeft">App miễn phí - Tải về ngay!</button>
                                <p className="textAppUnder">TIX có hai phiên bản
            <a className="os" href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8">iOS</a>
            &amp;&nbsp;<a className="os" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">Android</a>
                                </p>
                            </div>
                            {/* <div className="col-md-6 right">
                                <img className="phone-img" width="195px" src="./images/mobile.png" alt="Loading..." />
                                <div className="carouselMoblie">
                                    <img src="./images/slide16.jpg" />
                                    <img src="./images/slide1.jpg" />
                                    <img src="./images/slide2.jpg" />
                                    <img src="./images/slide3.jpg" />
                                    <img src="./images/slide4.jpg" />
                                    <img src="./images/slide5.jpg" />
                                    <img src="./images/slide6.jpg" />
                                    <img src="./images/slide7.jpg" />
                                    <img src="./images/slide8.jpg" />
                                    <img src="./images/slide9.jpg" />
                                    <img src="./images/slide10.jpg" />
                                    <img src="./images/slide11.jpg" />
                                    <img src="./images/slide12.jpg" />
                                    <img src="./images/slide13.jpg" />
                                    <img src="./images/slide14.jpg" />
                                    <img src="./images/slide15.jpg" />
                                    <img src="./images/slide16.jpg" />
                                    <img src="./images/slide1.jpg" />
                                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
