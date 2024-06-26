import React, { useState } from 'react';
import '../Styles/navBar.css'
import HomeIcon from "../Assets/Images/home-button-for-interface.png";
import dashboardIcon from '../Assets/Images/dashboard (1).png';
import userIcon from '../Assets/Images/user.png';
import reportsIcon from '../Assets/Images/reports.png';

const Navbar = () => {
  return (
    <div className='nav-bar'>
        <div className='nav-container'>
            <div>
                <img src="" alt="" />
            </div>
            <div className='icons-container'>
                <img className='nav-icons' src={HomeIcon} alt="" />
                <img className='nav-icons' src={dashboardIcon} alt="" />
                <img className='nav-icons' src={reportsIcon} alt="" />
                <img className='nav-icons' src={userIcon} alt="" />
            </div>
        </div>
    </div>
  );
};

export default Navbar;
