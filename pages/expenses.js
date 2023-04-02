import React, {useState, useContext} from 'react';
import { GlobalContext } from '@/context/GlobalState';
import AddExpense from '@/components/AddExpense';

const expenses = () => {

  const [showModal, setShowModal] = useState(false);
  const { expenses } = useContext(GlobalContext);

  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <p className='text-2xl'>Expenses</p>
            <div>
              <button onClick={() => setShowModal(true)} className="bg-transparent hover:bg-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 mr-2 border border-purple-600 hover:border-transparent rounded">
                +
              </button>
              <button className="bg-transparent hover:bg-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 border border-purple-600 hover:border-transparent rounded">
                Export
              </button>  
            </div>
        </div>
        <div className='px-4'>
          <p>Manage your expenses by adding, deleting, or exporting to a CSV.</p>
          <div className='w-full my-4 p-4 border rounded-lg bg-white h-[65vh] overflow-scroll'>
            <div className='my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center shadow-md'>
              <span className='font-semibold'>Name</span>
              <span className='font-semibold'>Purchase Price</span>
              <span className='font-semibold'>Listing Price</span>
              <span className='font-semibold'>Quantity</span>
              <span className='font-semibold'>Purchase Date</span>
              <span className='font-semibold'>Action</span>              
            </div>
            <ul>
              {expenses.map((expense, index) => (
                <li key={expense.name} className='my-3 p-2 grid grid-cols-6 rounded-md hover:bg-blue-200'>
                  <span>{expense.name}</span>
                  <span>{expense.purchasePrice}</span>
                  <span>{expense.listingPrice}</span>
                  <span>{expense.quantity}</span>
                  <span>{index}</span>
                  <span>
                    <button>Delete</button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <AddExpense open={showModal} onClose={() => setShowModal(false)}/>
        {/* <AddForm open={showModal} onClose={() => setShowModal(false)}/> */}
    </div>
  )
}

export default expenses
