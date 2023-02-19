import { useState } from 'react';
import './Nav.css';
import Logo from '../../resources/images/rev-logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link }  from 'react-router-dom'; 
import { AiOutlineClose } from 'react-icons/ai';
import { selectUser } from '../Login/UserSlice';
import { useAppSelector } from '../../shared/Redux/hook';

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
                <Link to='/'>Home</Link>
                {
                    user.id === 0 ? (
                        <Link to='/login'>Login</Link>
                    ) : (
                        <Link to='/profile'>Profile</Link>
                    )
                }
                <span className='nav-menu-close-icon' onClick={() => handleOnClick()}><AiOutlineClose /></span>
            </div>
            <span className='nav-menu-icon' onClick={() => handleOnClick()}><GiHamburgerMenu /></span>
        </nav>);
}

export default Nav;