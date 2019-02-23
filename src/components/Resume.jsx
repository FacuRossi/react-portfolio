import React, { Component } from "react";
import PropTypes from "prop-types";
import Skills from './Skills';

class Resume extends Component {
  componentDidMount() {
    let el = document.getElementsByTagName('html')
    el[0].style.overflow = 'hidden';
  }
  componentWillUnmount() {
    let el = document.getElementsByTagName('html')
    el[0].style.overflow = 'auto';
  }
  render() {
    const { resume: { cv }} = this.props
    const education = cv.Education.map(el => {
      return (
        <div id={el.title}>
          <h1>{el.title}</h1>
          <span>{el.subtitle}</span>
          <p>{el.description}</p>
        </div>
      )
    })
    const works = cv.Work.map(el => {
      return (
        <div id={el.title}>
          <h1>{el.title}</h1>
          <span>{el.subtitle}</span>
          <p>{el.description}</p>
        </div>
      )
    })
    const skills = <Skills skills={cv.Skills} />
    return (
      <div className="resume">
        {Object.getOwnPropertyNames(cv).map(el => {
          const cardBack = (el === 'Education') ? education :
            (el === 'Work' ? works : skills)
          return (
            <div id={el} class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <h1>{el}</h1>
                </div>
                <div class="flip-card-back">
                  {cardBack}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

Resume.propTypes = {};

export default Resume;
