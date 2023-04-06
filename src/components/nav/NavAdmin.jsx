import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../sidenav/SideNav'

const NavAdmin = () => {
  return (
    <div>
        <SideNav/>
        <Outlet/>
    </div>
  )
}

export default NavAdmin