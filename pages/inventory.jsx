import React from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { useContext, useState } from 'react';
import AddItem from '@/components/addmodal/AddItem';
import Item from '@/components/Item';

const inventory = () => {


  const { inventory } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <p className='text-2xl'>Inventory</p>
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
          <p>Manage your inventory by adding, deleting, selling or exporting to a CSV.</p>
          <div className='w-full my-4 p-4 border rounded-lg bg-white h-[75vh] overflow-scroll'>
            <div className='p-2 grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 items-center shadow-md'>
              <span className='font-semibold sm:col-span-1 col-span-2'>Name</span>
              <span className='font-semibold sm:block hidden'>Purchase Price</span>
              <span className='font-semibold sm:block hidden'>Listing Price</span>
              <span className='font-semibold md:block hidden'>Quantity</span>
              <span className='font-semibold lg:block hidden'>Purchase Date</span>
              <span className='font-semibold'>Action</span>              
            </div>
            <ul>
              {inventory.map((item, index) => (
               <Item item={item} />
              ))}
            </ul>
          </div>
        </div>
        <AddItem open={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default inventory
