import React,{useContext} from 'react';
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction.js"

export const TransactionList = () => {
    const {Transactions}=useContext(GlobalContext);
    console.log(Transactions);
    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {Transactions.map((transaction)=>(
                    <Transaction key= {transaction.id} transaction={transaction}/>
                    ))}
            </ul>
            
        </div>
    )
}
