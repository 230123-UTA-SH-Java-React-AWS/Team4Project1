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
    const [balance, setBalance] = useState<number>(0);
    const [type, setType] = useState<string>('CHECKING');

    const navigate = useNavigate();

    const handleName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const handleBalance = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (+event.currentTarget.value >= 0) {
            setBalance(+event.currentTarget.value);
        }
    }

    const handleType = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setType(event.currentTarget.value);
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            userId: user.id, 
            name: name,
            balance: balance,
            type: type
        }

        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
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

    const handleCancel = () => {
        navigate('/accounts');
    }
    
    return (
        <main className='main'>
            <Nav />
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <InputField inputId='name' labelValue='Account Name' changeAction={(e) => handleName(e)} placeholder='Name your account'required={true}/>
                <InputField inputId='balance' labelValue='Initial Account Balance' inputType='number' changeAction={(e) => handleBalance(e)} inputDefault={balance}/>
                <div className='form-group'>
                    <label htmlFor='type' className='form-label'>Account Type</label>
                    <select id='type' onChange={(e) => handleType(e)} className='form-control' value={type}>
                        <option value='CHECKING'>CHECKING</option>
                        <option value='SAVING'>SAVING</option>
                    </select>
                </div>
                <button className='btn btn-primary' type='submit' >Submit</button>
                <button className='btn btn-secondary' type='button' onClick={() => handleCancel()}>Cancel</button>
            </form>
        </main>
    )
}

export default NewAccount;