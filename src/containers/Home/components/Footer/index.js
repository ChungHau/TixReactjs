import React, { Component } from 'react'
import "./footer.scss"
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <p className="title text-white hideOnMobile">TIX</p>
                            <div className="col-6 color-grey-1 hideOnMobile p-0 float-left w-50 ">
                                <a href="#" className="mb-2">FAQ</a>
                                <a href="#">Brand Guidelines</a>
                            </div>
                            <div className="col-6 color-grey-1  float-left w-50 ">
                                <a href="#" className="mb-2">Thỏa thuận sử dụng</a>
                                <a href="#">Chính sách bảo mật</a>
                            </div>
                        </div>
                        <div className="col-sm-4 hideOnMobile">
                            <p className="title text-white">ĐỐI TÁC</p>
                            <div className="row col-sm-12 linePartner">
                                <a href="https://www.cgv.vn/" title="CGV">
                                    <img className="iconConnect" src="./images/cgv.png" style={{ backgroundColor: '#fff' }} />
                                </a>
                                <a href="http://bhdstar.vn" title="BHD">
                                    <img className="iconConnect" src="./images/bhd.png" />
                                </a>
                                <a href="http://galaxycine.vn" title="Galaxy">
                                    <img className="iconConnect" src="./images/galaxycine.png" />
                                </a>
                                <a href="http://cinestar.com.vn" title="Cinestar">
                                    <img className="iconConnect" src="./images/cinestar.png" />
                                </a>
                                <a href="http://lottecinemavn.com" title="Lotte Cinema">
                                    <img className="iconConnect" ng-src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" src="https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png" />
                                </a>
                            </div>
                            <div className="row col-sm-12 linePartner">
                                <a href="https://www.megagscinemas.vn" title="MegaGS">
                                    <img className="iconConnect" src="./images/megags.png" />
                                </a>
                                <a href="https://www.betacineplex.vn/" title="Beta">
                                    <img className="iconConnect" src="./images/bt.jpg" />
                                </a>
                                <a href="http://ddcinema.vn" title="DDC">
                                    <img className="iconConnect" src="./images/dongdacinema.png" />
                                </a>
                                <a href="https://touchcinema.com/" title="Touch Cinema">
                                    <img className="iconConnect" src="./images/TOUCH.png" />
                                </a>
                                <a href="https://cinemaxvn.com/" title="Cinemax">
                                    <img className="iconConnect" src="./images/cnx.jpg" />
                                </a>
                            </div>
                            <div className="row col-sm-12 linePartner">
                                <a href="http://starlight.vn/" title="Starlight">
                                    <img className="iconConnect" src="./images/STARLIGHT.png" />
                                </a>
                                <a href="https://www.dcine.vn/" title="Dcine">
                                    <img className="iconConnect" src="./images/dcine.png" />
                                </a>
                                <a href="https://zalopay.vn/" title="ZaloPay">
                                    <img className="iconConnect" src="./images/zalopay_icon.png" />
                                </a>
                                <a href="https://www.payoo.vn/" title="Payoo">
                                    <img className="iconConnect" src="./images/payoo.jpg" />
                                </a>
                                <a href="https://www.vietcombank.com.vn/" title="Vietcombank">
                                    <img className="iconConnect" src="./images/VCB.png" />
                                </a>
                            </div>
                            <div className="row col-sm-12 linePartner">
                                <a href="http://www.agribank.com.vn/" title="Agribank">
                                    <img className="iconConnect" src="./images/AGRIBANK.png" />
                                </a>
                                <a href="https://www.vietinbank.vn/" title="Vietinbank">
                                    <img className="iconConnect" src="./images/VIETTINBANK.png" />
                                </a>
                                <a href="https://www.indovinabank.com.vn/" title="IVB">
                                    <img className="iconConnect" src="./images/IVB.png" />
                                </a>
                                <a href="http://123go.vn" title="123Go">
                                    <img className="iconConnect" src="./images/123go.png" />
                                </a>
                                <a href="http://laban.vn" title="La Bàn">
                                    <img className="iconConnect" src="./images/laban.png" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4 text-white">
                            <div className="col-sm-6 hideOnMobile textCenter float-left w-50">
                                <p className="title">MOBILE APP</p>
                                <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" title="Apple App">
                                    <img className="iconApp" src="./images/apple-logo.png" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123" title="Android App">
                                    <img className="iconApp" src="./images/android-logo.png" />
                                </a>
                            </div>
                            <div className="col-sm-6 textCenter float-left w-50">
                                <p className="title hideOnMobile text-center">SOCIAL</p>
                                <a href="https://www.facebook.com/tix.vn/" title="Facebook social" className="text-center">
                                    <img className="iconApp" src="./images/facebook-logo.png" />
                                </a>
                                <a href="https://zalo.me/tixdatve" title="Zalo social" className="text-center">
                                    <img className="iconApp" src="./images/zalo-logo.png" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr className="hrFooter container" />
                    <div className="row">
                        <div className="col-sm-1 imgFooter">
                            <img className="vngIcon" src="./images/zion-logo.jpg" style={{ borderRadius: 8 }} />
                        </div>
                        <div className="col-12 col-sm-9 pl-4 infoFooter">
                            <span className="text-white">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                            <span>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</span>
                            <span>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,<br />đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
          ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
          Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố Hồ Chí Minh cấp.</span>
                            <span>Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436<br />Email: <a href="mailto:support@tix.vn" style={{ color: '#FB4226' }}>support@tix.vn</a></span>
                        </div>
                        <div className="col-sm-2 col-xs-12 imgFooter1">
                            <a href="http://online.gov.vn/Home/WebDetails/62782"><img width="130px" className="imgBoCo" alt="Bộ Công Thương" title src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" /></a>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}
