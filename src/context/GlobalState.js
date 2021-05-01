import React,{useEffect,createContext,useReducer} from 'react';
import AppReducer from "./AppReducer"
//Todo adding state to localtorage.


const InitialState={
    transactions:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
};
//create context
export const GlobalContext=createContext(InitialState);


//create provider
export const GlobalProvider=({children})=>{

    //similar to useState but we can have multiple functions rather than just setState with this.
    const[state,dispatch]=useReducer(AppReducer,InitialState);

    //actions which should be accessible to the children
    function addTransaction(new_transaction){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:new_transaction
        })
    }

    function deleteTransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload:id
        })
    }

    return <GlobalContext.Provider value={{
        transactions:state.transactions,
        addTransaction:addTransaction,
        deleteTransaction:deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>

}

