import React from 'react'

const inventory = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <p className='text-2xl'>Inventory</p>
            <h2>Welcome Back, Rafat</h2>
        </div>
        <div className='px-4'>
          <p>Manage your inventory of shoes, clothes, and collectibles.</p>
          <div className='w-full my-4 p-4 border rounded-lg bg-white h-[80vh] overflow-scroll'>
            <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center cursor-pointer'>
              <span>Name</span>
              <p></p>
              <p>yo</p>

            </div>

          </div>
        </div>
    </div>

  )
}

export default inventory
