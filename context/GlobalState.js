import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    inventory: [
        {id: 0, name: 'Cropped Hoodie', purchasePrice: 56, listingPrice: 90, quantity: 1},
        {id: 1, name: 'Waxed Denim', purchasePrice: 64, listingPrice: 120, quantity: 50},
        {id: 2,name: 'Waxed Canvas Jacket', purchasePrice: 60, listingPrice: 100, quantity: 30},
        {id: 3, name: 'Chore Jacket', purchasePrice: 59, listingPrice: 95, quantity: 40},
        {id: 4, name: 'Mohair Beanies', purchasePrice: 25, listingPrice: 45, quantity: 25},
        {id: 5, name: 'Twill Cargos', purchasePrice: 63, listingPrice: 110, quantity: 50},
        {id: 6, name: 'Nylon Cargos', purchasePrice: 50, listingPrice: 90, quantity: 10},
    ],
    sales: [],
    expenses: [
        {id: 0, expenseName: 'Shopify', expenseAmount: 44.90, dateAdded: "1-1-1"}
    ],
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

    function editItem(item) {
        dispatch({
            type: 'EDIT_ITEM',
            payload: item
        })
    }

    // Expense actions

    function addExpense(expense) {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        })
    }

    function deleteExpense(expense) {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: expense
        })
    }

    function editExpense(expense) {
        dispatch({
            type: 'EDIT_EXPENSE',
            payload: expense
        })
    }

    // Delete Sale

    function deleteSale(sale) {
        dispatch({
            type: 'DELETE_SALE',
            payload: sale
        })
    }

    return (<GlobalContext.Provider value={{inventory: state.inventory, sales: state.sales, expenses: state.expenses, addItem, sellItem, deleteItem, editItem, addExpense, deleteExpense, editExpense, deleteSale}}>
        {children}
    </GlobalContext.Provider>)



}
