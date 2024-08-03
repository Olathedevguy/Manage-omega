import React from 'react'

const Navitems = ({name, href}) => {
  return (
  <li>
    <a href={href}>{name}</a>
    </li>
  )
}

export default Navitems