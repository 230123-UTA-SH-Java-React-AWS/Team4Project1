import { useState } from 'react';
import './Nav.css';
import Logo from '../../resources/images/rev-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { selectUser } from '../Login/UserSlice';
import { useAppSelector } from '../../shared/Redux/hook';
import Tabs from './Tabs';
import React from 'react';

const Nav = () => {
    const user = useAppSelector(selectUser);
     
    const [navHeight, setNavHeight] = useState<string>('0');

    const handleOnClick = () => {
        setNavHeight(navHeight == '0' ? '300px' : '0');
    }

    return (
        <nav className='nav-container'>
            <img src={Logo} className='logo' />
            <div className='nav' style={{maxHeight: navHeight}}>
                {
                    user.id === 0 ? (
                        <Tabs isLoggedIn={false} />
                    ) : (
                        <Tabs isLoggedIn={true} />
                    )
                }
                <span className='nav-menu-close-icon' onClick={() => handleOnClick()}><AiOutlineClose /></span>
            </div>
            <span className='nav-menu-icon' onClick={() => handleOnClick()}><GiHamburgerMenu /></span>
        </nav>);
}

export default Nav;