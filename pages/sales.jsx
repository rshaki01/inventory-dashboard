import React, {useContext} from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { TbTrashFilled } from 'react-icons/tb'
import Sale from '@/components/Sale';

const sales = () => {

    const {sales} = useContext(GlobalContext);

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='flex justify-between p-4'>
                <p className='text-2xl'>Sales</p>
                <button className="bg-transparent hover:bg-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 border border-purple-600 hover:border-transparent rounded">
                  Export
                </button>        
            </div>
            <div className='px-4'>
              <p>Manage your sales of shoes, clothes, and collectibles.</p>
              <div className='w-full my-4 p-4 border rounded-lg bg-white h-[75vh] overflow-scroll'>
                <div className='p-2 grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 items-center shadow-md'>
                  <span className='font-semibold'>Name</span>
                  <span className='font-semibold'>Purchase Price</span>
                  <span className='font-semibold'>Listing Price</span>
                  <span className='font-semibold'>Quantity</span>
                  <span className='font-semibold'>Profit</span>
                  <span className='font-semibold'>Sold Date</span>
                  <span className='font-semibold'>Action</span>              
                </div>
                <ul>
                  {sales.map((sale) => (
                    <Sale sale={sale}/>
                  ))}
                </ul>
              </div>
            </div>
        </div>
      )
}

export default sales
