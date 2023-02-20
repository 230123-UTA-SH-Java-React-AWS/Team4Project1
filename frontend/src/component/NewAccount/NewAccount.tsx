import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../shared/Redux/hook";
import InputField from "../InputField/InputField";
import { selectUser } from "../Login/UserSlice";
import Nav from "../Nav/Nav";

const NewAccount = () => {
    const user = useAppSelector(selectUser);

    const [name, setName] = useState<string>('');
    const [balance, setBalance] = useState<string>('');
    const [type, setType] = useState<string>('');

    const navigate = useNavigate();

    const handleName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const handleBalance = (event:React.ChangeEvent<HTMLInputElement>) => {
        setBalance(event.currentTarget.value);
    }

    const handleType = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.currentTarget.value);
    }

    const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const data = {
            userId: user.id, 
            name: name,
            balance: balance,
            type:type
        }

        const contentLength = (new TextEncoder().encode(JSON.stringify(data))).length;
        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Content-Length': contentLength
            }
        };
        axios.put(`http://localhost:8000/accounts/new-account`, data, config)
        .then( () => {
            navigate('/accounts');
        })
        .catch( (err) => {
            console.log(err);
        })
    }
    
    return (
        <main className='main'>
            <Nav />
            <form className='form'>
                <InputField inputId='name' labelValue='Account Name' changeAction={(e) => handleName(e)} />
                <div className='form-group'>
                    <label htmlFor='balance' className='form-label'>Initial Account Balance</label>
                    <input id='balance' onChange={(e) => handleBalance(e)} className='form-control' type='number' />
                </div>
                <div className='form-group'>
                    <label htmlFor='type' className='form-label'>Account Type</label>
                    <select id='type' onChange={(e) => handleType(e)} className='form-control'>
                        <option value='CHECKING'>CHECKING</option>
                        <option value='SAVING'>SAVING</option>
                    </select>
                </div>
                <button className='btn btn-primary' type='submit' onClick={(e) => handleSubmit(e)}>Submit</button>
            </form>
        </main>
    )
}

export default NewAccount;