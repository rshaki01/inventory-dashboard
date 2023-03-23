import React from 'react'


const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white border p-4 flex justify-between rounded-lg'>
        <div className='flex flex-col justify-even w-full pb-4'>
          <p className='text-2xl font-bold'>$7,846</p>
          <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='bg-green-200 flex items-center p-2 rounded-xl'>+18%</p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col justify-even w-full pb-4'>
            <p className='text-2xl font-bold'>$1,206</p>
            <p className='text-gray-600'>YTD Revenue</p>
          </div>
          <p className='bg-green-200 flex items-center p-2 rounded-xl'>+11%</p>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col justify-even w-full pb-4'>
            <p className='text-2xl font-bold'>11,400</p>
            <p className='text-gray-600'>Customers</p>
        </div>
          <p className='bg-green-200 flex items-center p-2 rounded-xl'>+34%</p>
      </div>
    </div>
  )
}

export default TopCards
