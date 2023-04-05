import React, {useState, useContext} from 'react';
import ViewItem from './ViewItem';
import { GlobalContext } from '@/context/GlobalState';

const Item = ({item}) => {

  const { inventory, sellItem, deleteItem } = useContext(GlobalContext);
  const [showEditModal, setShowEditModal] = useState(false);   

  return (
    <li key={item.name} className='my-3 p-2 grid grid-cols-6 rounded-md items-center hover:bg-black hover:bg-opacity-20'>
        <span>{item.name}</span>
        <span>${item.purchasePrice}</span>
        <span>${item.listingPrice}</span>
        <span>{item.quantity}</span>
        <span>{item.id}</span>
        <span className="flex items-center gap-2">
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-1 px-2 rounded"
        onClick={() => setShowEditModal(true)}>Edit</button>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white py-1 px-2 rounded"
        onClick={() => sellItem(item)}>Sell</button>
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-1 px-2 rounded"
        onClick={() => deleteItem(item)}>Delete</button>
        </span>
        <ViewItem open={showEditModal} item={item} onClose={() => setShowEditModal(false)}/>
    </li>
  )
}

export default Item
