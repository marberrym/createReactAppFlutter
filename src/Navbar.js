import React from 'react';
import { Link } from 'react-router-dom';

let NavBar = () =>
    <div className="navBar">
        <Link to='/' className="navLink">Home</Link>
        <Link to='/About' className="navLink">About Flutter</Link>
        <Link to='/Register' className="navLink">Register</Link>
    </div>

export default NavBar;