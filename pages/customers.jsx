import React from 'react';
import {BsPersonFill, BsThreeDotsVertical} from 'react-icons/bs';
import {data} from '../components/data.js'


const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Customers</h2>
        <h2>Welcome Back, Rafat</h2>
      </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-white h-[80vh]  overflow-scroll'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center cursor-pointer'>
            <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
            <ul>
              {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-2 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center'>
                  <div className='flex items-center'>
                    <div className='bg-purple-100 p-3 rounded-lg flex'>
                      <BsPersonFill className='text-purple-800' />
                    </div>
                    <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                  </div>
                  <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                  <p className='hidden md:grid'>{order.date}</p>
                  <div className='hidden sm:flex justify-between'>
                    <p>{order.method}</p>
                    <BsThreeDotsVertical className="cursor-pointer"/>
                  </div>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>

  )
}

export default customers
