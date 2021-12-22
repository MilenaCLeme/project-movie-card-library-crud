import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.apiForId();
  }

  /* Felipe Ventorim e Jeferson Oliveira ajudou a resolver */

  async apiForId() {
    const { match } = this.props;
    const movie = await movieAPI.getMovie(match.params.id);
    this.setState({
      loading: false,
      movie,
    });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie, loading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;
    if (loading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    }
    return (
      <div>
        <div data-testid="movie-details" className="flex-3 margin-5">
          <div>
            <img alt="Movie Cover" className="img-respon" src={ `../${imagePath}` } />
          </div>
          <div className="margin-inf">
            <h1>{ `Title: ${title}` }</h1>
            <p>{ `Subtitle: ${subtitle}` }</p>
            <p>{ `Storyline: ${storyline}` }</p>
            <p>{ `Genre: ${genre}` }</p>
            <p>{ `Rating: ${rating}` }</p>
          </div>
        </div>
        <div className="flex-2">
          <Link className="subli btn btn-outline-dark" to="/">Voltar</Link>
          <Link
            className="subli btn btn-outline-dark"
            to={ `/movies/${movie.id}/edit` }
          >
            Editar
          </Link>
          <Link
            className="subli btn btn-outline-dark"
            to="/"
            onClick={ () => movieAPI.deleteMovie(movie.id) }
          >
            Deletar
          </Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MovieDetails;
