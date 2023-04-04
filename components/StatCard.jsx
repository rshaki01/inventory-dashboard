import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

const StatCard = ({type}) => {

  const { sales, inventory, expenses } = useContext(GlobalContext);
  let data;

  switch (type) {
    case "inventory":
        data = {
            title: "Inventory Value",
            description: "Total value (purchase price) of all the items in your inventory tab.",
            isMoney: true,
            amount: (inventory.reduce((acc, item) => acc + item.purchasePrice * item.quantity, 0))
        };
        break;
    case "num-inventory":
        data = {
            title: "Total Items",
            description: "Total number of items in your inventory tab.",
            isMoney: false,
             amount: inventory.reduce((accumulator, currentValue) => accumulator + 1,0)
                  
        };
        break;
    case "net-profit":
        data = {
            title: "Net Profit",
            description: "Total sales after subtracting COGS and expenses.",
            isMoney: true,
            amount: sales.reduce((acc, sale) => acc + (sale.listingPrice - sale.purchasePrice) * sale.quantity, 0) - expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
        };
        break;
    case "sales":
        data = {
            title: "Gross Sales",
            description: "Total amount of sales before subtracting COGS and expenses.",
            isMoney: true,
            amount: (sales.reduce((acc, sale) => acc + (sale.listingPrice - sale.purchasePrice) * sale.quantity, 0)) 
        };
        break;
    case "expenses":
        data = {
            title: "Total Expenses",
            description: "Total spending on everything in your expense tab.",
            isMoney: true,
            amount: expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
        };
        break;
    case "num-sales":
        data = {
            title: "Total Sales",
            description: "Total number of sales in your sales tab.",
            isMoney: false,
            amount: sales.reduce((accumulator, currentValue) => accumulator + 1,0)
        };
        break;
    case "num-expenses":
        data = {
            title: "Total Expenses",
            description: "Total number of sales in your sales tab.",
            isMoney: false,
            amount: expenses.reduce((accumulator, currentValue) => accumulator + 1,0)
        };
        break;
    default:
        break;
  }

  return (
    <div className='col-span-2 bg-white border p-4 flex justify-between rounded-xl'>
        <div className='flex flex-col items-center justify-even w-full py-2'>
          <p className='text-2xl font-bold'>{data.isMoney && '$'}{data.amount}</p>
          <p className='text-gray-600'>{data.title}</p>
        </div>
        
    </div>
  )
}

export default StatCard
