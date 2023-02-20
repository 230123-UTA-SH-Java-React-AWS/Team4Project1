import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';
import Nav from '../Nav/Nav';
import axios from 'axios';
import InputField from '../InputField/InputField';
import { selectUser, setUser } from '../Login/UserSlice';
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hook';

const Profile = () => {
    const user = useAppSelector(selectUser);
    
    const [fname, setFname] = useState<string>('');
    const [lname, setLname] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (fname.trim().length > 0 || lname.trim().length > 0 || address.trim().length > 0 ) {
            setIsDisabled(false);
        } else setIsDisabled(true)
    }, [fname, lname, address])

    const handleFname = (event:React.ChangeEvent<HTMLInputElement>) => {
        setFname(event.currentTarget.value);
    }

    const handleLname = (event:React.ChangeEvent<HTMLInputElement>) => {
        setLname(event.currentTarget.value);
    }

    const handleAddress = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAddress(event.currentTarget.value);
    }
    
    const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const data = {
            fname: fname,
            lname: lname,
            address: address,
            email: user.email
        }

        const contentLength = (new TextEncoder().encode(JSON.stringify(data))).length;
        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Content-Length': contentLength
            }
        };
        axios.put(`http://localhost:8000/profile`, data, config)
        .then( (res) => {
            dispatch(setUser(res.data));
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    
    return (
        <main className='main'>
            <Nav />
            <form className='form'>
                <InputField inputId='fname' labelValue='First Name' changeAction={(e) => handleFname(e)} placeholder={user.fname}/>
                <InputField inputId='lname' labelValue='Last Name' changeAction={(e) => handleLname(e)} placeholder={user.lname}/>
                <InputField inputId='address' labelValue='Address' changeAction={(e) => handleAddress(e)} placeholder={user.address}/>

                <button className='btn btn-primary' type='submit' onClick={(e) => handleSubmit(e)} disabled={isDisabled}>Submit</button>
            </form>
        </main>);
};

export default Profile;