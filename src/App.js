import React, { Component } from 'react';
import Header from './Header';
import './assets/css/fontawesome/css/all.css';
import './assets/sass/app.scss';

class App extends Component {
  render() {
    return (
      <div className="grid">
        <Header/>
        {/* <div className="main">
          lorem alasl ladlasldladsa dladlasd lasdl asdl asld asld as
        </div> */}
      </div>
    );
  }
}

export default App;
