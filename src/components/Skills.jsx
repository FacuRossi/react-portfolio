import React from 'react'
import PropTypes from 'prop-types'

function Skills(props) {
  return (
    <div>
      {props.skills.map(skill => {
        return <h4>{skill}</h4>
      })}
    </div>
  )
}

Skills.propTypes = {

}

export default Skills

