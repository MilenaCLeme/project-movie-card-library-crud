import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieForm extends React.Component {
  constructor(props) {
    console.log('MovieForm');
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_title" className="form-label">
          Título:
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate form-control"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_subtitle" className="form-label">
          Subtítulo:
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            type="text"
            className="form-control"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="row mb-3">
        <label htmlFor="movie_image" className="form-label">
          Imagem:
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="form-control"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_storyline" className="form-label">
          Sinopse:
          <textarea
            id="movie_storyline"
            value={ storyline }
            className="form-control"
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div>
        <label htmlFor="movie_genre" className="form-label">
          Gênero:
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
            className="form-select form-select mb-3"
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div>
        <label htmlFor="movie_rating" className="form-label">
          Avaliação:
          <input
            placeholder="Dê a avaliação do filme"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            className="form-control"
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <Link className="subli btn btn-outline-dark margin-button" to="/">Voltar</Link>
        <button
          type="button"
          onClick={ this.handleSubmit }
          className="btn btn-outline-dark margin-button"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="flex-1 margin-5">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
