import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Account } from "../../model/Account";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser, setTransactions } from "../Login/UserSlice";
import Nav from "../Nav/Nav";
import SingleTransaction from "./SingleTransaction";
import './Transactions.css';

const Transactions = () => {
    const user = useAppSelector(selectUser);

    let { id } = useParams();
    let oldAccount = user.accounts.filter((account) => account.id.toString() === id)[0]
    let oldAccounts = user.accounts.filter((account) => account.id.toString() !== id);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(user.id !== 0) {
            const data = {
                id: id,
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            };
            axios.post(`http://localhost:8000/accounts/transactions`, data, config)
            .then( (res) => {
                let newAccount:Account = {
                    id: oldAccount.id,
                    userId: oldAccount.userId,
                    name: oldAccount.name,
                    balance: oldAccount.balance,
                    type: oldAccount.type,
                    transactions: res.data
                };
                let newAccounts = [...oldAccounts, newAccount];
                dispatch(setTransactions(newAccounts));
            })
            .catch( (err) => {
                console.log(err);
            })
        }
    }, [])

    const handleAddTransaction = () => {
        navigate('new-transaction');
    }

    const handleTransferFunds = () => {
        navigate('transfer-funds');
    }

    return (
        <main className='main'>
            <Nav />
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th colSpan={2}>Balance: {oldAccount.balance}</th>
                    </tr>
                    <tr>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {user.accounts.filter((account) => account.id === oldAccount.id)[0].transactions.map((transaction) => <SingleTransaction transaction={transaction} key={transaction.id}/>)} 
                </tbody>
            </table>
            <button className='btn btn-primary' type='button' onClick={() => handleAddTransaction()}>Add Transaction</button>
            <button className='btn btn-primary' type='button' onClick={() => handleTransferFunds()}>Transfer Funds</button>
        </main>
    )
}

export default Transactions;
//