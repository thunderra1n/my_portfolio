import React from 'react';
import Jumbotron from './jumbotron'
import About_Me from './about_me';
import Skills from './skills';
import Works from './works';

class Main extends React.Component {
  render() {
    return (
      <div role="main">
        <Jumbotron />
        <hr className="featurette-divider" />
        <About_Me />
        <hr className="featurette-divider" />
        <Skills />
        <hr className="featurette-divider" />
        <Works />
        <hr className="featurette-divider" />
      </div>
    );
  }
}

export default Main;