import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: undefined,
    };
  }

  componentDidMount() {
    this.importingApiToState();
  }

  async importingApiToState() {
    const apiMovies = movieAPI.getMovies();
    const movies = await apiMovies;
    this.setState({
      movies,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div>
        <div className="pos-1">
          <Link to="/movies/new" className="btn btn-outline-dark">Add Movie</Link>
        </div>
        <div data-testid="movie-list" className="movie-list">
          {movies === undefined ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
