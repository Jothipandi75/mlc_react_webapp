// Sidebar.js
import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar h-100 bg-white p-3">
      <ul role="nav" className='nav'>
      <li><Link to="/add_lab_preference">Add Lab Preference</Link></li>
      <li><Link to="/doctor_preference">Doctor Preference</Link></li>
      <li><Link to="/about_lab_profile">About Lab Profile</Link></li>
      <li><Link to="/doctor_onboarding_profile">Doctor Onboarding Profile</Link></li>
      <li><Link to="/mlc_landing_page">MLC Landing page</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/lab_search">Lab Search</Link></li>
      </ul>
    </div>
  )
}
export default Sidebar