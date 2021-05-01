import React,{useEffect,createContext,useReducer} from 'react';
import AppReducer from "./AppReducer"

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

export const GlobalProvider=({children})=>{

    const[state,dispatch]=useReducer(AppReducer,InitialState);
    //actions
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

