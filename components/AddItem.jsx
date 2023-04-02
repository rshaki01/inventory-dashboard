import React, {useState, useContext} from 'react';
import { GlobalContext } from '@/context/GlobalState';


const AddItem = ({open, onClose}) => {

  const {addItem} = useContext(GlobalContext);

  const [name, setName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [listingPrice, setListingPrice] = useState(0)
  const [quantity, setQuantity] = useState(1);


  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please add an item name!')
      return;
    } else if (purchasePrice < 0) {
      alert('Please add a purchase price greater or equal to 0!')
      return;
    } else if (listingPrice < 0) {
      alert('Please add a listing price greater or equal to 0!')
    } else if (quantity <= 0 ) {
      alert('Please add a quantity greater than 0!')
    }
    const id = Math.floor(Math.random() * 100000) + 1;
    let newItem = {id, name, purchasePrice, listingPrice, quantity};
    addItem(newItem);
    setName('');
    setPurchasePrice(0);
    setListingPrice(0);
    setQuantity(1);
    
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 flex items-center justify-center">
      <div className="w-1/2 bg-slate-900 p-8 rounded-xl">
        <div className="flex justify-between">
          <h1 className="text-slate-50 text-xl pb-4">Create new item</h1>
          <button className="text-slate-50" onClick={onClose}>x</button>
        </div>
        <div className='my-2 gap-2'>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-slate-400">Name</label>
            <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="text" 
            value={name} onChange={(e) => setName(e.target.value)}/>
            <div className='grid grid-cols-1 md:grid-cols-2 my-2 gap-3'>
              <div className="">
                <label className="block mb-2 text-slate-400">Purchase Price ($)</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="number"
                value={purchasePrice} onChange={(e) => setPurchasePrice((parseInt(e.target.value)))}/>
              </div>
              <div className="">
                <label className="block mb-2 text-slate-400">Listing Price ($)</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="number"
                value={listingPrice} onChange={(e) => setListingPrice((parseInt(e.target.value)))}/>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-2 gap-3'>
              <div>
                <label className="block mb-2 text-slate-400">Quantity</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="number" 
                value={quantity} onChange={(e) => setQuantity((parseInt(e.target.value)))}/>
              </div>
              <div>
                <label className="block mb-2 text-slate-400">Date</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="date" 
                value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
              </div>
            </div>
            <input type="submit" className="mt-8 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" value="yo"/>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AddItem
