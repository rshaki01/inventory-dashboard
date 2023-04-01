import React from 'react'

const AddForm = ({open, onClose}) => {
  if (!open) return null
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
      <div className="w-1/2 bg-black bg-opacity-20 p-4">
        <h1>Create new item</h1>
        <div className='my-2 p-2 flex flex-col gap-2'>
          <form>
              <input className="rounded-lg border" type="text" />
          </form>
          <form>
              <input type="text" />
          </form>
          <form>
              <input type="text" />
          </form>
        </div>
        <button onClick={onClose}>x</button>
      </div>
    </div>
  )
}

export default AddForm
