import React, { useState } from 'react';
import '../../App.css';
import './Profile.css';
import Nav from '../Nav/Nav';
import axios from 'axios';
import InputField from '../InputField/InputField';
import { selectUser } from '../Login/UserSlice';
import { useAppSelector } from '../../shared/Redux/hook';

const Profile = () => {
    const user = useAppSelector(selectUser);
    
    const [fname, setFname] = useState<string>('');
    const [lname, setLname] = useState<string>('');
    const [address, setAddress] = useState<string>('');

    function handleFname(event:React.ChangeEvent<HTMLInputElement>) {
        setFname(event.currentTarget.value);
    }

    function handleLname(event:React.ChangeEvent<HTMLInputElement>) {
        setLname(event.currentTarget.value);
    }

    function handleAddress(event:React.ChangeEvent<HTMLInputElement>) {
        setAddress(event.currentTarget.value);
    }
    
    function handleSubmit(event:React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        const username = 'test_user';
        const email = 'test@test.com';

        const data = {
            fname: fname,
            lname: lname,
            address: address,
            username: username,
            email: email
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
            console.log(res.data);
        })
    }

    return (
        <main className='main'>
            <Nav />
            <form className='form'>
                <InputField inputId='fname' labelValue='First Name' changeAction={(e) => handleFname(e)} placeholder={user.fname}/>
                <InputField inputId='lname' labelValue='Last Name' changeAction={(e) => handleLname(e)} placeholder={user.lname}/>
                <InputField inputId='address' labelValue='Address' changeAction={(e) => handleAddress(e)} placeholder={user.address}/>

                <button className='btn btn-primary' type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </main>);
};

export default Profile;