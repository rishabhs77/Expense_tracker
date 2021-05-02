import React,{useEffect,createContext,useReducer} from 'react';
import AppReducer from "./AppReducer"
//Todo adding state to localtorage.

const InitialState={
    transactions:[]
};
//getting from localstorage
const localState=JSON.parse(localStorage.getItem("EXP"));
//console.log(localState);

//create context
export const GlobalContext=createContext(InitialState);


//create provider
export const GlobalProvider=({children})=>{
    
    //similar to useState but we can have multiple functions rather than just setState with this.
    const[state,dispatch]=useReducer(AppReducer,localState || InitialState);
    

    useEffect( ()=>{
        localStorage.setItem("EXP",JSON.stringify(state));
    },[state]);
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

