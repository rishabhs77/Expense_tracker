import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const{transactions}=useContext(GlobalContext);
    const amounts= transactions.map((trans)=>(trans.amount));
    const total= amounts.reduce((acc,item)=>(acc+=item),0);
    //filter
    const incomeamount=transactions.map((trans)=>(trans.amount>0?trans.amount:0));
    const expenseamouont=transactions.map((trans)=>(trans.amount<0?trans.amount:0));
    //accumulate
    const inc = incomeamount.reduce((acc,item)=>(acc+=item),0);
    const exp = expenseamouont.reduce((acc,item)=>(acc-=item),0);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        <div className="inc-exp-container">
            <h4>Income</h4>
                <div>
                <p className="money plus">${inc}</p>
                </div>

            <h4>Expense</h4>
                <div>
                <p className="money minus">${Math.abs(exp)}</p>
                </div>     
        </div>
        </div>
    )
}
