import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../App.css';
import './Nav.css';

const Nav = () => {
    const [width, setWidth] = useState('0');

    return (
        <nav className='nav'>
            <Link to='/profile' className='nav-section'>Profile</Link>
        </nav>);
}

export default Nav;