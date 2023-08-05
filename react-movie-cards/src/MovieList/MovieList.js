import React, { Component } from 'react';
import Movie from '../Movies/Movie';
import classes from './MovieList.css';
import axios from 'axios';

class MovieList extends Component {
    state = {movies: []}

    componentDidMount () {
        this.getData()
    }

    async getData(){
        const res = await axios.get('http://localhost:8000/');
        console.log(res.data.data);
        this.setState({movies : res.data.data})
    }

    render(){
        let movieList = this.state.movies.map(movie => {
            return <Movie movieList = {movie} key= {movie.id}/>
        })
    return ( 
    <div className={classes.MovieList}>
        {movieList}
    </div> );
}
}
 
export default MovieList;