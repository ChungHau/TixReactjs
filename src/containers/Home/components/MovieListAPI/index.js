import React, { Component } from 'react'
import { actionFetchMovieList } from './modules/action';
import { connect } from 'react-redux';




export class MovieListAPI extends Component {
    componentDidMount() {
        this.props.getMovies();
    }
  
    render() {
        return (
            <>

            </>
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