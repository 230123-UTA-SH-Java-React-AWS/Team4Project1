import { Transaction } from "../../model/Transaction";

type Props = {
    transaction:Transaction
}

const SingleTransaction = ({transaction}:Props) => {
    return (
        <tr>
            <td>{transaction.amount}</td>
            <td>{transaction.type == "EXPENSE" ? "WITHDRAWAL": "DEPOSIT"}</td>
        </tr>
    )
}

export default SingleTransaction;