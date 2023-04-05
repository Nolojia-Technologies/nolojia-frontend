import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import './assets/sidebar.css';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import 'bootstrap/dist/css/bootstrap.css';


export default class SideBar extends Component {
    toggleOffcanvas() {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active');
      }
      toggleRightSidebar() {
        document.querySelector('.right-sidebar').classList.toggle('open');
      }
      render () {
        
        return (
          <container fluid>
            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar className='sidebar' textColor="#fff" backgroundColor="#0D0452;">
                <CDBSidebarHeader style={{ position: 'sticky' }}
                    prefix={
                        <i className="fa fa-bars fa-small"></i>
                    }
                    >
                </CDBSidebarHeader>
      
              <CDBSidebarContent className="sidebar-content">
                <CDBSidebarMenu>
                  <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/tutors" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="table">Tutors</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/school" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">School</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/students" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Students</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/curriculumn" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Curriculumn</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/schedules" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Schedules</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/staff" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Staff</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/analytics" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Payments</CDBSidebarMenuItem>
                  </NavLink>
                  <NavLink exact to="/calender" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="chart-line">Calender</CDBSidebarMenuItem>
                  </NavLink>
                </CDBSidebarMenu>
              </CDBSidebarContent>
      
              <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                  style={{
                    padding: '20px 5px',
                  }}
                >
                  Sidebar Footer
                </div>
              </CDBSidebarFooter>
            </CDBSidebar>
          </div>
          </container>
            )
        }
    }