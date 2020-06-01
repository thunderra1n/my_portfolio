import React from 'react';
import { Container, Row } from 'react-bootstrap';

class Skills extends React.Component {
  render() {
    return (
  <Container className="container" id="skills">
    <h2 className="featurette-heading">Skills</h2><br />
    <h3 className="featurette-heading"><span className="text-muted">普段主に使用する言語・フレームワーク</span></h3>
    <p><span className="skill python">Python</span> <span className="skill python">Flask</span> <span className="skill js">JavaScript</span> <span className="skill js">jQuery</span> <span className="skill js">Node.js</span> <span className="skill electron">Electron</span> <span className="skill php">PHP</span> <span className="skill php">WordPress</span> <span className="skill html">HTML</span> <span className="skill css">CSS</span> <span className="skill clang">C, C++</span></p>
    <br />
    <h3 className="featurette-heading"><span className="text-muted">使用・勉強したことがある言語・フレームワーク</span></h3>
    <p><span className="skill python">scikit-learn</span> <span className="skill swift">Swift</span> <span className="skill ruby">Ruby</span> <span className="skill ruby">Ruby on Rails</span> <span className="skill js">React</span> <span className="skill php">Laravel</span> <span className="skill mysql">MySQL</span> <span className="skill clang">Unity</span> <span className="skill clang">C#</span></p>
    <br />
    <h4 className="featurette-heading">開発環境:  <span className="text-muted">Macbook Air(2015), GitHub(Desktop版)</span><br />エディタ:  <span className="text-muted">Xcode, Vim, Sublime Text</span><br />使用レンタルサーバー:  <span className="text-muted">Xserver, GitHub Pages</span></h4><br />
  </Container>
    );
  }
}

export default Skills;