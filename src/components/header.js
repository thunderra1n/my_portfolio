import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
<Navbar className="navbar-expand-md navbar-dark fixed-top bg-dark">
  <a className="navbar-brand" href="#">Takuya Kawabata</a>
  <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </Button>

  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="#about_me">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#works">Works</a>
      </li>
    </ul>
  </div>
</Navbar>
    );
  }
}

export default Header;