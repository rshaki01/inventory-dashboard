import React from 'react';
import {data} from './data.js';
import {FaShoppingBag} from 'react-icons/fa';

const RecentOrders = () => {
  return (
    <div className='col-span-1 lg:h-[70vh] h-[50vh] bg-white border p-4 rounded-lg overflow-scroll'>
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg cursor-pointer p-1.5 my-3 flex items-center '>
            <div className='bg-purple-100 rounded-lg p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-3'>
              <p className='text-gray-800 font-bold'>{order.total}</p>
              <p className='text-gray-400 font-sm'>{order.name.first}</p>
              <p className='hidden md:flex text-sm'>{order.date}</p>

            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentOrders
