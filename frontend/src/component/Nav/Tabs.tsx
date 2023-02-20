import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useAppDispatch } from "../../shared/Redux/hook";
import { setDefault } from "../Login/UserSlice";

type Props = {
    isLoggedIn:boolean
}

const Tabs = ({isLoggedIn}:Props) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        useEffect(() => {
            dispatch(setDefault);
        });
    }
    
    if (isLoggedIn) {
        return(
            <div className='nav-tabs'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/accounts'>Accounts</Link>
                <Link to='/' className='logout' onClick={() => handleClick()}>Logout</Link>
            </div>
        )
    } else {
        return(
            <div className='nav-tabs'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default Tabs;