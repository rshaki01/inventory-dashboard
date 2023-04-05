import React, {useState, useContext} from 'react';
import EditItem from './editmodal/EditItem';
import { GlobalContext } from '@/context/GlobalState';
import { HiPencil, HiCurrencyDollar } from 'react-icons/hi'
import { TbTrashFilled } from 'react-icons/tb'

const Item = ({item}) => {

  const { sellItem, deleteItem } = useContext(GlobalContext);
  const [showEditModal, setShowEditModal] = useState(false);   

  return (
    <li key={item.name} className='my-3 p-2 grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 rounded-md items-center hover:bg-black hover:bg-opacity-20'>
        <span className='sm:col-span-1 col-span-2'>{item.name}</span>
        <span className='sm:block hidden'>${item.purchasePrice.toFixed(2)}</span>
        <span  className='sm:block hidden'>${item.listingPrice.toFixed(2)}</span>
        <span className='md:block hidden'>{item.quantity}</span>
        <span className='lg:block hidden'>{item.id}</span>
        <span className="flex items-center gap-2 justify-center col-span-1">
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-2 rounded"
        onClick={() => setShowEditModal(true)}><HiPencil /></button>
        <button className="bg-emerald-500 hover:bg-emerald-400 text-white py-2 px-2 rounded"
        onClick={() => sellItem(item)}><HiCurrencyDollar /></button>
        <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-2 rounded"
        onClick={() => deleteItem(item)}><TbTrashFilled/></button>
        </span>
        <EditItem open={showEditModal} item={item} onClose={() => setShowEditModal(false)}/>
    </li>
  )
}

export default Item
