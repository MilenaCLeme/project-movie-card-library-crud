import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div
        data-testid="404-error"
        className="text-center fs-2 margin-10"
      >
        Página não encontrada
      </div>
    );
  }
}

export default NotFound;
