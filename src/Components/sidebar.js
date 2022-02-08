// Sidebar.js
import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function Sidebar() {
  return (
      <div className="sidebar h-100 bg-white p-3">
        <ul role="nav" className='nav'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/add_lab_preference">Add Lab Preference</Link></li>
        <li><Link to="/doctor_preference">Doctor Preference</Link></li>
        </ul>
      </div>
  )
}
export default Sidebar