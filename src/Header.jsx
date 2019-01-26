import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.jpg';
import { Link } from "react-router-dom";


const social = [
  {
    name: "github",
    url: "https://github.com/FacuRossi",
    className: "fab fa-github"
  },
  {
    name: "linkedin",
    url: "http://www.linkedin.com/in/facundo-rossi",
    className: "fab fa-linkedin"
  },
  {
    name: "twitter",
    url: "https://twitter.com/FacuRossi4",
    className: "fab fa-twitter"
  }
];


const networks = social.map((network) => {
  return <a key={network.name} href={network.url}>
    <i className={network.className} />
  </a>;
}
)

function Header(props) {
  return <div className="header">
    <div className="logo-container">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
    </div>
    <div className="menu">
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/works">Works</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="links">{networks}</div>
  </div>;
}

Header.propTypes = {

}

export default Header

