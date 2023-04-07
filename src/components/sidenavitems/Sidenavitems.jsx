import React from 'react'
import "./sidenavitems.css"
const Sidenavitems = ({logo, title}) => {
  return (
    <div className='sidenav-item'>
        <div className="logo">
            {logo}
        </div>
        <div className="nav-text">
            {title}
        </div>
    </div>
  )
}

export default Sidenavitems