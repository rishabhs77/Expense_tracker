import React,{useEffect,createContext,useReducer} from 'react';
import {AppReducer} from "./AppReducer.js"

const InitialState={
    trasactions:[
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

    return <GlobalContext.Provider value={{
        Transactions:state.trasactions
    }}>
        {children}
    </GlobalContext.Provider>

}

