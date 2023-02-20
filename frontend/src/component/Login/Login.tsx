import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import InputField from '../InputField/InputField';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../shared/Redux/hook';
import { selectUser, setUser , setDefault } from './UserSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const user = useAppSelector(selectUser);

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

    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        const contentLength = (new TextEncoder().encode(JSON.stringify(data))).length;
        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Content-Length': contentLength
            }
        };
        axios.post(`http://localhost:8000/login`, data, config)
        .then( (res) => {
            dispatch(setUser(res.data));
            navigate('/');
        })
        .catch((err) => {
            setBadRequest('Invalid Email or Password');
        })
    }

    return (
        <main className='main'>
            <Nav />
            <form className='form'>
                <InputField inputId='email' labelValue='Email' changeAction={(e) => handleEmail(e)} />
                <InputField inputId='password' labelValue='Password' changeAction={(e) => handlePassword(e)} />

                <button className='btn btn-primary' type='submit' onClick={(e) => handleSubmit(e)}>Login</button>
                <p className='bad-request'>{badRequest}</p>
            </form>
        </main>
    )
}

export default Login;