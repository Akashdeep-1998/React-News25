import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News/>
        <Footer />
      </div>
    );
  }
}

export default App;
