import { useNavigate } from 'react-router-dom';
import { Account } from '../../model/Account';

type Props = {
    account:Account,
}
const SingleAccount = ({account}:Props) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`transactions/${account.id}`);
    }

    return (
        <div className='account-group' onClick={() => handleClick()}>
            <span className='account-icon'></span>
            <h4>{account.name}</h4>
            <p>{account.type}</p>
            <p>Balance: {account.balance}</p>
          </div>
    )
}

export default SingleAccount;