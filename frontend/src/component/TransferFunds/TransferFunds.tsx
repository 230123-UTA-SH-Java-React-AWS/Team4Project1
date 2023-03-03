import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../shared/Redux/hook";
import InputField from "../InputField/InputField";
import { selectUser } from "../Login/UserSlice";
import Nav from "../Nav/Nav";

const TransferFunds = () => {
     const user = useAppSelector(selectUser);

    let { id } = useParams();
    let balance = user.accounts.filter((account) => account.id.toString() === id)[0].balance;

    const [amount, setAmount] = useState<number>(1);
    const [destinationAccount, setDestinationAccount] = useState<string>('');
    const [badRequest, setBadRequest] = useState<string>('');

    const navigate = useNavigate();

    const handleBalance = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (+event.currentTarget.value > 0) {
            setAmount(+event.currentTarget.value);
        }
    }

    const handleDestinationAccount = (event:React.ChangeEvent<HTMLSelectElement>) => {
        setDestinationAccount(event.currentTarget.value);
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            id: id, 
            amount: amount
        }

        Object.assign(data, {destinationAccountId: destinationAccount});

        const config = {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        };
        axios.put(`http://localhost:8000/accounts/transactions/transfer-funds`, data, config)
        .then( () => {
            navigate('/accounts');
        })
        .catch( (err) => {
            console.log(err);
            setBadRequest('Account Overdrawn');
        })
    }
    
    const handleCancel = () => {
        navigate(`/accounts/transactions/${id}`);
    }
    
    return (
        <main className='main'>
            <Nav />
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <h4>Account Balance: {balance}</h4>
                <InputField inputId='amount' labelValue='Transaction Amount' inputType='number' changeAction={(e) => handleBalance(e)} inputDefault={amount}/>
                <div className='form-group'>
                    <label htmlFor='type' className='form-label'>Account Type</label>
                    <select id='type' onChange={(e) => handleDestinationAccount(e)} className='form-control' value={destinationAccount}>
                        <option value=''>Accounts</option>
                        {user.accounts.filter((account) => account.id.toString() !== id).map((account) => <option key={account.id} value={account.id}>{account.name}</option>)}
                    </select>
                </div>
                <p className='bad-request'>{badRequest}</p>
                <button className='btn btn-primary' type='submit' >Submit</button>
                <button className='btn btn-secondary' type='button' onClick={() => handleCancel()}>Cancel</button>
            </form>
        </main>
    )
}

export default TransferFunds;