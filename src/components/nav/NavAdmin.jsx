import React,{useState, useEffect} from 'react'
import "./navs.css"
import {BiSearch} from "react-icons/bi"
import {IoMdNotifications} from "react-icons/io"
import {CgDarkMode} from "react-icons/cg"
import {FaUserCircle} from "react-icons/fa"
import {AiOutlineCaretDown} from "react-icons/ai"
import {CgMenuLeftAlt} from "react-icons/cg"
import SideNav from '../sidenav/SideNav'
import { Outlet } from 'react-router-dom'
const NavAdmin = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [sideNav, setSideNav] = useState(false)
  const handleResize = () => {
    if (window.innerWidth < 824) {
      setSideNav(false)
    } else {
        setSideNav(true)
    }
  }
  useEffect(()=>{
    window.addEventListener("resize", handleResize)
  },[])
  return (
    <div>
      <nav className='navbar'>
        <div className="col-left">
          <div className='logo'>
          <h1>Nolojia</h1>
          <CgMenuLeftAlt size={30} onClick={()=>{setSideNav(!sideNav)}}/>
          </div>
          
        </div>
        <div className='mobile-nav-toggler'>
          <AiOutlineCaretDown size={30} onClick={()=>{setMobileNav(!mobileNav)}}/>
          {mobileNav&&<div className='mobile-nav-box'>
            <div className='mobile-navitem'>
              <div className='search'>
                <input type="text" className='input-box' placeholder='Search...' />
                <button className='btn btn-white'><BiSearch/></button>
              </div>
            </div>
            <div className='mobile-navitem'>
              <div className='notifications'>
                <IoMdNotifications size={30}/>
                <p className='number'>4</p>
              </div>
            </div>
            <div className='mobile-navitem'>
              <div className='mode'>
                <CgDarkMode size={30}/>
              </div>
            </div>
            <div className='mobile-navitem'>
              <div className='user-profile'>
                <FaUserCircle size={30}/>
                <AiOutlineCaretDown size={20}/>
              </div>
            </div>
            
          </div>}
        </div>
        <div className="col-right">
          <div className='search'>
            <input type="text" className='input-box' placeholder='Search...' />
            <button className='btn btn-white'><BiSearch/></button>
          </div>
          <div className='notifications'>
            <IoMdNotifications size={30}/>
            <p className='number'>4</p>
          </div>
          <div className='mode'>
            <CgDarkMode size={30}/>
          </div>
          <div className='user-profile'>
            <FaUserCircle size={30}/>
            <AiOutlineCaretDown size={20}/>
          </div>
        </div>
      </nav>
      <SideNav setSideNav={sideNav}/>
      <Outlet/>
    </div>
  )
}

export default NavAdmin