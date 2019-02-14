import React from 'react'
import PropTypes from 'prop-types'
import ProfilePicture from './ProfilePicture'
import ContactDetails from './ContactDetails'


function About(props) {
  return (
    <div className='about'>
      <div className='about-img-contact'>
        <ProfilePicture />
        <ContactDetails resume={props.resume} />
      </div>
      <div className='about-text'>
        <h2 className='about-title'>About me</h2>
        {
          props.resume.aboutMe.map((el, index) => {
            return (
              <p key={index} className='about-description'>
                {el.text}
              </p>
            )
          })
        }
      </div>
    </div>
  )
}

About.propTypes = {

}

export default About

