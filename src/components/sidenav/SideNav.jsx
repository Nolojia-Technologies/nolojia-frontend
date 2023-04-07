import React from 'react'
import Sidenavitems from '../sidenavitems/Sidenavitems'
import "./sidenav.css"
import {MdSpaceDashboard} from "react-icons/md"
const SideNav = ({setSideNav}) => {
  
  
  return (
    <aside className={setSideNav?"sidenav":"sidenav-hidden"}>
      <div className='menu-items'>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Dashboard"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Tutors"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Schools"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Students"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Curriculum"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Schedules"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Staff"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Payments"/>
        <Sidenavitems logo={<MdSpaceDashboard/>} title="Calendar"/>

      </div>
      
      
    </aside>
  )
}

export default SideNav