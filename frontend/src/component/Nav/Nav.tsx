import { useState, useEffect, useRef } from 'react';
import './Nav.css';
import Logo from '../../resources/images/rev-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link }  from 'react-router-dom'; 
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
    
    const [showNav, setShowNav] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);
    
    const useChangeHeight = (navRef:HTMLDivElement | null ) => {
        useEffect(() => {
            if (navRef) {
                if (showNav) {
                    navRef.style.maxHeight = '300px';
                } else {
                    navRef.style.maxHeight = '0';
                }
            }
        }, [showNav]);
    }
    useChangeHeight(navRef.current);

    const handleShowNav = (navRef:HTMLDivElement | null) => {
        setShowNav(!showNav);
    }

    return (
        <nav className='nav-container'>
            <img src={Logo} className='logo' />
            <div id='nav' ref={navRef}>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <span className='nav-menu-close-icon' onClick={() => handleShowNav(navRef.current)}><AiOutlineClose /></span>
            </div>
            <span id='nav-menu-icon' onClick={() => handleShowNav(navRef.current)}><GiHamburgerMenu /></span>
        </nav>);
}

export default Nav;