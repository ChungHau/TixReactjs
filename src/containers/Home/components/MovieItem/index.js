import React, { Component } from 'react'
export default class MovieItem extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="carouselMovie__items">
              <img src={data.hinhAnh} className="img-fluid" alt="" />
                <div className="ratingMovie">
                    <h6>C16</h6>
                </div>
                <div className="inforMovie" style={{ fontWeight: 600 }}>{data.tenPhim} - 120p</div>
                <div className="hoverEvent">
                    <button className="btn btn-primary">MUA VÉ</button>
                </div>
            </div>
        )
    }
}
