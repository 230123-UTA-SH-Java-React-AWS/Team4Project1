import React, { useState } from 'react';
import '../../App.css';
import './Profile.css';
import Nav from '../Nav/Nav';
import axios from 'axios';

const Profile = () => {
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
        // const fname = document.querySelector<HTMLInputElement>('#fname')?.value;
        // const lname = document.querySelector<HTMLInputElement>('#lname')?.value;
        // const address = document.querySelector<HTMLInputElement>('#address')?.value;

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
            <form>
                <div className="form-group">
                     <label htmlFor='fname' className='form-label'>First Name</label>
                    <input id='fname' onChange={(e) => handleFname(e)} className='form-control' type='text' />
                </div>
                <div className='form-group'>
                    <label htmlFor='lname' className='form-label'>Last Name</label>
                    <input id='lname' onChange={(e) => handleLname(e)} className='form-control' type='text' />
                </div>
                <div className='form-group'>
                    <label htmlFor='address' className='form-label'>Address</label>
                    <input id='address' onChange={(e) => handleAddress(e)} className='form-control' type='text' />
                </div>
                {/* <label className='form-label'>Username</label>
                <input id='username' className='form-control' type='text' /> */}

                <button className='btn btn-primary' type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </main>);
};

export default Profile;