import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionFetchMovieList } from './modules/action'



export class MovieListAPI extends Component {
    componentDidMount() {
        this.props.getMovies();
    }


    render() {
        return (
            <div>

            </div>
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