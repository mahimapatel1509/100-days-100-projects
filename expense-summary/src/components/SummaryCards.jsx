import React from 'react'
import transactions from '../data/transactions'

export default function SummaryCards() {
 
return (
    <>
    <div className='flex border-2 justify-center gap-7 bg-black '>

   
       {transactions.map((item)=>{
        return <div key={item.id} className='  border-2  px-5 py-10 border-white text-white  '>
          <p>{item.title}</p>
          <h1 className='text-3xl'>{item.amount}</h1>
        </div>
      })}
       </div>
    </>
  )
}
