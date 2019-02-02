import React from 'react'
import PropTypes from 'prop-types'

const occupation = "I'm a software engineer based in Córdoba, Argentina. I'm really enjoying the challenges that my profession involve, I take it as a great opportunity for continuing to grow as a person and professional."

function Home(props) {
  return (
    <div className="home">
      <div className="animate animationOne">
        <span>F</span>
        <span>a</span>
        <span>c</span>
        <span>u</span>
        <span>n</span>
        <span>d</span>
        <span>o</span>&nbsp;
				<span>R</span>
        <span>o</span>
        <span>s</span>
        <span>s</span>
        <span>i</span>
      </div>
      <span className="banner-text">
        {occupation}
      </span>
    </div>
  )
}

Home.propTypes = {

}

export default Home

