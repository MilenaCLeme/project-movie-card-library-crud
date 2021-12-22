import React, { Component } from 'react';

class Loading extends Component {
  render() {
    const image = 'http://www.piradivers.com.br/images/camrarun.gif';

    return (
      <div className="flex-1 margin-10">
        <img alt="Movie" src={ image } />
        <p className="text-center fs-2">Carregando</p>
      </div>
    );
  }
}

export default Loading;
