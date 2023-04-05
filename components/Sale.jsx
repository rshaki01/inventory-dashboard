import React, { useState } from 'react'
import { GlobalContext } from '@/context/GlobalState';
import { TbTrashFilled } from 'react-icons/tb';
import { HiPencil } from 'react-icons/hi';
import EditSale from './editmodal/EditSale';

const Sale = ({ sale }) => {

  const { deleteItem } = useState(GlobalContext);
  const [showEditModal, setShowEditModal] = useState(false);   

  return (
    <li key={sale.name} className='my-3 p-2 grid grid-cols-7 items-center'>
        <span>{sale.name}</span>
        <span>{sale.purchasePrice}</span>
        <span>{sale.listingPrice}</span>
        <span>{sale.quantity}</span>
        <span>{(sale.listingPrice - sale.purchasePrice) * sale.quantity}</span>
        <span>Date</span>
        <span className="flex items-center gap-2">
            <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 duration-300"
            onClick={() => setShowEditModal(true)}><HiPencil /></button>
            <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-2 rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-rose-800 duration-300" 
            onClick={() => deleteItem(item)}><TbTrashFilled/></button>
        </span>
        <EditSale open={showEditModal} sale={sale} onClose={() => setShowEditModal(false)}/>
    </li>
 ) 
}

export default Sale
