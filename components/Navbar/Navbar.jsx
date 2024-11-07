import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='navLeftSide'>
        <NavLink to="/my-react-app/">NT.com</NavLink>
        </div>
        <div className="navRightSide">            
            <NavLink to="/my-react-app/about">About</NavLink>
            <NavLink to="/my-react-app/portfolio">Packages</NavLink>
            <NavLink to="/my-react-app/Blogs">Blogs</NavLink>
            <NavLink to="/my-react-app/Emails">Emails</NavLink>
            <NavLink to="/my-react-app/contact">Contact</NavLink>
        </div>
    </nav>
  )
}

export default Navbar