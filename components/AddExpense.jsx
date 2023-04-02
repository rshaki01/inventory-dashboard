import React, {useState, useContext} from 'react';
import { GlobalContext } from '@/context/GlobalState';

const AddExpense = ({open, onClose}) => {

    if (!open) return null

    const [expenseName, setExpenseName] = useState('');
    const [expenseAmount, setExpenseAmount] = useState(0);
    const [dateAdded, setDateAdded] = useState('');
    const {addExpense} = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100000) + 1;
        let newExpense = {id, expenseName, expenseAmount};
        addExpense(newExpense);
        setExpenseName('');
        setExpenseAmount(0);
        setDateAdded('');

    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-1/2 bg-slate-900 p-8 rounded-xl">
            <div className="flex justify-between">
              <h1 className="text-slate-50 text-xl pb-4">Create new expense</h1>
              <button className="text-slate-50" onClick={onClose}>x</button>
            </div>
            <div className='my-2 gap-2'>
              <form onSubmit={handleSubmit}>
                <label className="block mb-2 text-slate-400">Name</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="text" 
                value={expenseName} onChange={(e) => setExpenseName(e.target.value)}/>
                <div className='grid grid-cols-1 md:grid-cols-2 my-2 gap-3'>
                  <div className="">
                    <label className="block mb-2 text-slate-400">Amount ($)</label>
                    <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="number"
                    value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)}/>
                  </div>
                  <div>
                    <label className="block mb-2 text-slate-400">Date</label>
                    <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="date" 
                    value={dateAdded} onChange={(e) => setDateAdded(e.target.value)}/>
                  </div>
                </div>
                <input type="submit" className="mt-8 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" value="Add Expense"/>
              </form>
            </div>
          </div>
    
        </div>
      )
}

export default AddExpense
