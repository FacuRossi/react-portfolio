import React, { Component } from 'react';
import Header from './components/Header';
import { HashRouter } from "react-router-dom";
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Works from './components/Works'
import Contact from './components/Contact'
import { resumeData } from '../src/resumeData'

import './assets/css/fontawesome/css/all.css';
import './assets/sass/app.scss';


class App extends Component {
  render() {
    return <HashRouter>
        <div className="grid">
          <Header />
          <Switch>
            <Route exact path="/" component={(props) => <Home {...props}resume={resumeData}/>}/>
            <Route path="/about" component={(props) => <About {...props} resume={resumeData}/>}/>
            <Route path="/resume" component={(props) => <Resume {...props} resume={resumeData}/>}/>
            <Route path="/works" component={(props) => <Works {...props} resume={resumeData}/>}/>
            <Route path="/contact" component={(props) => <Contact {...props} resume={resumeData}/>}/>
          </Switch>
        </div>
      </HashRouter>;
  }
}

export default App;
