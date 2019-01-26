import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.jpg';

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
    </a>;}
)

function Header(props) {
  return <div className="header">
    <div className="logo-container">
      <img src={logo} className="logo" alt="logo" />
    </div>
    <div className="menu">
      <div id="about">About </div>
      <div id="resume">Resume </div>
      <div id="work">Works </div>
      <div id="contact">Contact</div>
    </div>
    <div className="links">
      {networks}
    </div>
  </div>;
}

Header.propTypes = {

}

export default Header

