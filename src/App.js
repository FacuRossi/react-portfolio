import React, { Component } from 'react';
import Header from './Header';
import { HashRouter } from "react-router-dom";
import { Switch, Route } from 'react-router'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Works from './Works'
import Contact from './Contact'

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
