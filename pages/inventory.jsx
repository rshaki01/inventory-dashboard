import React from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';
import AddForm from '../components/AddForm';


const inventory = () => {

  const { inventory } = useContext(GlobalContext);

  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <p className='text-2xl'>Inventory</p>
            <button class="bg-transparent hover:bg-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 border border-purple-600 hover:border-transparent rounded">
              +
            </button>        
        </div>
        <div className='px-4'>
          <p>Manage your inventory of shoes, clothes, and collectibles.</p>
          <div className='w-full my-4 p-4 border rounded-lg bg-white h-[65vh] overflow-scroll'>
            <div className='my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center cursor-pointer'>
              <span>Name</span>
              <span>Purchase Price</span>
              <span>Listing Price</span>
              <span>Purchase Date</span>
              <span>Action</span>              
            </div>
            <ul>
              {inventory.map((item) => (
                <li key={item.name} className='my-3 p-2 grid grid-cols-5'>
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>

  )
}

export default inventory
