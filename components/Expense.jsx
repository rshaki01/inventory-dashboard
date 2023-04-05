import React, {useState, useContext} from 'react';
import EditExpense from './editmodal/EditExpense'
import { GlobalContext } from '@/context/GlobalState';
import { HiPencil } from 'react-icons/hi'
import { TbTrashFilled } from 'react-icons/tb'

const Expense = ({expense}) => {

  const { deleteExpense } = useContext(GlobalContext);
  const [showEditModal, setShowEditModal] = useState(false);   


  return (
    <li key={expense.id} className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 rounded-md hover:bg-blue-200 items-center'>
        <span>{expense.expenseName}</span>
        <span className="text-rose-700">{expense.expenseAmount}</span>
        <span className="md:block hidden">{expense.dateAdded}</span>
        <span className="flex items-center gap-2">
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-2 rounded"
        onClick={() => setShowEditModal(true)}><HiPencil /></button>
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-2 rounded"
        onClick={() => deleteExpense(expense)}><TbTrashFilled/></button>
        </span>
        <EditExpense open={showEditModal} expense={expense} onClose={() => setShowEditModal(false)}/>
    </li>
  )
}

export default Expense
