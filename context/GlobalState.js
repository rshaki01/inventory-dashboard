import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    inventory: [{name: 'test', purchasePrice: 50, listingPrice: 80, quantity: 1}],
    sales: [],
    expenses: [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Item Actions

    function addItem(item) {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }

    function deleteItem(item) {
        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        })
    }

    function sellItem(item) {
        dispatch({
            type: 'SELL_ITEM',
            payload: item
        })
        deleteItem(item);
    }

    // Expense actions

    function addExpense(expense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: item
        })
    }

    return (<GlobalContext.Provider value={{inventory: state.inventory, sales: state.sales, expenses: state.expenses, addItem, sellItem, deleteItem}}>
        {children}
    </GlobalContext.Provider>)



}
