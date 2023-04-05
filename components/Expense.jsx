import React, {useState, useContext} from 'react';
import EditExpense from './editmodal/EditExpense'
import { GlobalContext } from '@/context/GlobalState';

const Expense = ({expense}) => {

  const { deleteExpense } = useContext(GlobalContext);
  const [showEditModal, setShowEditModal] = useState(false);   


  return (
    <li key={expense.id} className='my-3 p-2 grid grid-cols-4 rounded-md hover:bg-blue-200 items-center'>
        <span>{expense.expenseName}</span>
        <span className="text-rose-700">{expense.expenseAmount}</span>
        <span>{expense.dateAdded}</span>
        <span className="flex items-center gap-2">
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-1 px-2 rounded"
        onClick={() => setShowEditModal(true)}>Edit</button>
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-1 px-2 rounded"
        onClick={() => deleteExpense(expense)}>Delete</button>
        </span>
        <EditExpense open={showEditModal} expense={expense} onClose={() => setShowEditModal(false)}/>
    </li>
  )
}

export default Expense
