import React from 'react'

const AddForm = ({open, onClose}) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
      <div className="w-1/2 bg-slate-900 p-4 rounded-md">
        <div className="flex justify-between">
          <h1 className="text-slate-50 text-xl">Create new item</h1>
          <button className="text-slate-50" onClick={onClose}>x</button>
        </div>
        <div className='my-2 gap-2'>
          <form>
            <div>
              <div>
                <label className="block mb-2 text-slate-400">Name</label>
                <input className="rounded-lg border border-gray-700  bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="text" />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-2 '>
              <div className="pr-4 pb-2">
                <label className="block mb-2 text-slate-400">Purchase Price ($)</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="number" />
              </div>
              <div className="">
                <label className="block mb-2 text-slate-400">Listing Price ($)</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="number" />
              </div>
            </div>
          </form>
        </div>
        
      </div>

    </div>
  )
}

export default AddForm
