import React, {createContext, useReducer} from 'react'; 
import Appreducer from './AppReducer'; 

// initial state 

const initialState = {
    transactions: []
        
}

// create context 
export const GlobalContext = createContext(initialState);

// provider components 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState); 
// Actions 
function deleteTransaction(id) {
    dispatch({
        type: 'DELETE_TRANSACTION', 
        payload: id
    });
}

function addTransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION', 
        payload: transaction
    });
}
    return (<GlobalContext.Provider value={{
        transactions: state.transactions, 
        deleteTransaction, 
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>); 
}


