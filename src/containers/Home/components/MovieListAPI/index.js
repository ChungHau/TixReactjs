import React, { Component } from 'react'
import { connect } from 'react-redux';
import MovieItem from '../MovieItem';
import { actionFetchMovieList } from './modules/action';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./movieList.scss"

import Slider from 'react-slick';




export class MovieListAPI extends Component {
    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        const { movieList, loading, error } = this.props;

        if (error) {
            return <p>{error || "Something went wrong"}</p>;
        }

        if (loading) {
            return <p>Loading...</p>;
        }

        const movieSlick = {
            infinite: true,
            slidesToShow: 1,
            speed: 500,
            rows: 2,
            slidesPerRow: 4
        };

        return (
            // <div className="container">
            //     <div className="row">
            //         {console.log(movieList)}

            //     </div>
            // </div>
            <section className="carouselMovie container">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}>
                    <h2 className="dc">Đang Chiếu</h2>
                    <h2 className="sc">Sắp Chiếu</h2>
                </div>
                <div className="carouselMovie__content">
                    <Slider {...movieSlick}>

                        {movieList.map((item) => (
                            <div key={item.maPhim} className="col-sm-3">
                                <MovieItem data={item} />
                            </div>
                        ))}
                    </Slider>

                </div>
            </section>


        )
    }
}

const mapStateToProps = (state) => ({
    movieList: state.movieListReducer.data,
    loading: state.movieListReducer.loading,
    error: state.movieListReducer.error,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => {
            dispatch(actionFetchMovieList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListAPI)