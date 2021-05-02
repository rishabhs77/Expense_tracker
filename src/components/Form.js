import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Form = () => {
    const [text,setText]=useState("");
    const [amount,setamount]=useState(0);
    const {addTransaction}=useContext(GlobalContext);

    const onsubmit = (e) =>{
        e.preventDefault();
        const new_trans={
            id:Math.floor(Math.random() * 100000000),
            text:text,
            amount:parseInt(amount)
        }
        //console.log(new_trans);
        addTransaction(new_trans);
        setText("");
        setamount(0);

    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onsubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=>{ setText(e.target.value) }} placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount
                    <br/>+(income) &nbsp;&nbsp; -(expense)</label>
                    <input type="number" value={amount} onChange={(e)=>{ setamount(e.target.value) }} placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add Transaction</button>

            </form>
            
        </div>
    )
}
