import React, { Component } from 'react';
import Header from './components/Header';
import { HashRouter } from "react-router-dom";
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'
import Contact from './components/Contact'

import './assets/css/fontawesome/css/all.css';
import './assets/sass/app.scss';



class App extends Component {
  render() {
    return <HashRouter>
        <div className="grid">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/works" component={Works} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>;
  }
}

export default App;
