import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div className="inc-exp-container">
            <h4>Income</h4>
                <div>
                <p className="money plus">$200</p>
                </div>

            <h4>Expense</h4>
                <div>
                <p className="money minus">$200</p>
                </div>     
        </div>
    )
}
