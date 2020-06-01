import React  from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <>
            <Header />
            <Main />
            <Footer />
      </>

    );
  }
}

export default App;