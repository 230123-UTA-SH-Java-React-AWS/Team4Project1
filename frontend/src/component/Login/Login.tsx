import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import InputField from '../InputField/InputField';
import axios from 'axios';
import { useAppDispatch } from '../../shared/Redux/hook';
import { setUser } from './UserSlice';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [badRequest, setBadRequest] = useState<string>('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        };

       

        axios.post(`http://localhost:8000/login`, data, config)
        .then( (res) => {
            dispatch(setUser(res.data));
            navigate('/');
        })
        .catch((err) => {
            console.log(err);
            setBadRequest('Invalid Email or Password');
        })
    }

    return (
        <main className='main'>
            <Nav />
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <InputField inputId='email' labelValue='Email' inputType='email' changeAction={(e) => handleEmail(e)} required={true}/>
                <InputField inputId='password' labelValue='Password' inputType='password' changeAction={(e) => handlePassword(e)} required={true}/>

                <button className='btn btn-primary' type='submit'>Login</button>
                <p className='bad-request'>{badRequest}</p>
            </form>
        </main>
    )
}

export default Login;