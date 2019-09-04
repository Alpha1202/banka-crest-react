import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/user-dashboard.css';

const Toggle = () => (
  <div className="header" id="dashboard">
    <span className="open-slide">
      <Link to="#" id="openSlideMenu">
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
          <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
          <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
        </svg>
      </Link>
    </span>
    <h1 className="header-dashboard">Dashboard</h1>
  </div>
);

export default Toggle;
