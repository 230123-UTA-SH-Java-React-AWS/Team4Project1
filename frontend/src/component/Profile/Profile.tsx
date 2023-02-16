import React from 'react';
import '../../App.css';
import './Profile.css';
import axios from 'axios';

interface User {
    fname?:string,
    lname?:string,
    address?:string,
    username?:string,
    email?:string,
}

const Profile = () => {
    function submit() {
        const fname = document.querySelector<HTMLInputElement>('#fname')?.value;
        const lname = document.querySelector<HTMLInputElement>('#lname')?.value;
        const address = document.querySelector<HTMLInputElement>('#address')?.value;

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
            <form>
                <label className='form-label'>First Name</label>
                <input id='fname' className='form-control' type='text' />
                <label className='form-label'>Last Name</label>
                <input id='lname' className='form-control' type='text' />
                <label className='form-label'>Address</label>
                <input id='address' className='form-control' type='text' />
                {/* <label className='form-label'>Username</label>
                <input id='username' className='form-control' type='text' /> */}

                <button className='btn btn-primary' type='button' onClick={submit}>Submit</button>
            </form>
        </main>);
};

export default Profile;