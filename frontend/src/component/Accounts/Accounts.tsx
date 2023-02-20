import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser, setAccounts } from "../Login/UserSlice";
import Nav from "../Nav/Nav";
import Account from "./Account";
import { useNavigate } from 'react-router-dom';
import './Accounts.css';


const Accounts = () => {
    const user = useAppSelector(selectUser);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if(user.id !== 0) {
            const data = {
                id: user.id, 
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                }
            };
            axios.post(`http://localhost:8000/accounts`, data, config)
            .then( (res) => {
                dispatch(setAccounts(res.data));
            })
            .catch( (err) => {
                console.log(err);
            })
        }
    }, [])
    
    const handleNavigate = (e:React.MouseEvent<HTMLButtonElement>) => {
        navigate('new-account')
    }
    return (
        <main className='main'>
            <Nav />
            <div className='accounts'>
                {user.accounts.map(account => (<Account key={account.id} accountName={account.name} accountType={account.type} accountBalance={account.balance} />))}
            </div>
            <button className='btn btn-primary' type='button' onClick={(e) => handleNavigate(e)}>New Account</button>
        </main>
    )
}

export default Accounts;