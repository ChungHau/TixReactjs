import React, { Component } from "react";
import "./header.scss"
export default class index extends Component {
  render() {
    return (
      <header>
        <img src="./images/logo.png" alt />
        <div className="infomation">
          <a href="#">Lịch chiếu</a>
          <a href="#">Cụm rạp</a>
          <a href="#">Tin tức</a>
          <a href="#">Ứng dụng</a>
        </div>
        <div className="login">
          <div className="login-content">
            <img className="avatar" src="./images/avatar.png" alt />
            <a href="#">Đăng nhập</a>
          </div>
          <div className="dropdown-content">
            <div className="dropdown">
              <i className="fa fa-map-marker" />
              <a href="#">Hồ Chí Minh</a>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Hồ Chí Minh
                </a>
                <a className="dropdown-item" href="#">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#">
                  Đà Nẵng
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
