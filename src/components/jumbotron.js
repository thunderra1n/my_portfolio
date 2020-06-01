import React from 'react';
import { Container } from 'react-bootstrap';

class Jumbotron extends React.Component {
  render() {
    return (
  <div className="jumbotron">
    <Container>
      <div className="inner mx-auto text-center">
      <h1 className="display-4">Takuya Kawabata's</h1>
      <h5>&lt; 川畑拓也 a.k.a. ThunderRa1n &#047;&gt;</h5>
      <h1 className="display-4">Portfolio</h1>
      <p><a className="btn btn-primary btn-lg" href="https://github.com/thunderra1n?tab=repositories" target="_blank" role="button">My GitHub &raquo;</a></p>
      </div>
    </Container>
  </div>
    );
  }
}

export default Jumbotron;