import inventory from "@/pages/inventory"

export default (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {...state, inventory: [...state.inventory, action.payload]}
        case 'SELL_ITEM':
            return {...state, sales: [...state.sales, action.payload]}
        case 'DELETE_ITEM':
            return {...state, inventory: state.inventory.filter(item => item.name != action.payload.name)}
        case 'ADD_EXPENSE':
             return {...state, expenses: [...state.expenses, action.payload]}
        case 'DELETE_EXPENSE':
             return {...state, expenses: state.expenses.filter(expense => expense.id != action.payload.id)}
    }
}