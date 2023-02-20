import React from "react"
import { Link } from "react-router-dom"

type Props = {
    isLoggedIn:boolean
}

const Tabs = ({isLoggedIn}:Props) => {
    if (isLoggedIn) {
        return(
            <div className='nav-tabs'>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/accounts'>Accounts</Link>
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