//Logic how the state will change with the given action
export default (state,action)=>{
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [...state.transactions,action.payload]
                
            }
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((t) => (t.id!==action.payload))
            }

    
        default:
            return state;
    }
}