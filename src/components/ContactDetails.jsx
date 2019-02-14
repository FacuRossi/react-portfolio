import React from 'react'

export default function ContactDetails(props) {
  const contactIcons = [
    {
      icon: 'fas fa-user-tie',
      text: props.resume.name,
    },
    {
      icon: 'fas fa-mobile-alt',
      text: props.resume.phone,
    },
    {
      icon: 'fas fa-at',
      text: props.resume.email,
    },
    {
      icon: 'fas fa-map-marked-alt',
      text: `${props.resume.city}, ${props.resume.state}`,
    }
  ]

  return (
    <div className="contact-details">
      {
        contactIcons.map(el => {
          return (<div key={el.text} className='contact-icons'>
            <i className={el.icon} />
            <span>{el.text}</span>
          </div>)
        })
      }
    </div>
  )
}
