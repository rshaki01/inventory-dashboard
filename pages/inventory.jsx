import React from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { useContext } from 'react';
import { data } from 'autoprefixer';


const inventory = () => {

  const { inventory } = useContext(GlobalContext);

  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <p className='text-2xl'>Inventory</p>
            <h2>Welcome Back, Rafat</h2>
        </div>
        <div className='px-4'>
          <p>Manage your inventory of shoes, clothes, and collectibles.</p>
          <div className='w-full my-4 p-4 border rounded-lg bg-white h-[80vh] overflow-scroll'>
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
