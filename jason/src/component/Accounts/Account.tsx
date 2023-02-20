import React from "react";

type Props = {
    accountName:string,
    accountType:string,
    accountBalance:number,
}
const Account = ({accountName, accountType, accountBalance}:Props) => {
    return (
        <div className='account-group'>
            <span className='account-icon'></span>
            <h4>{accountName}</h4>
            <p>{accountType}</p>
            <p>Balance: {accountBalance}</p>
          </div>
    )
}

export default Account;