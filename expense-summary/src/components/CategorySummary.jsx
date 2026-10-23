import React, { useEffect, useState } from 'react'
import transactions from '../data/transactions'

export default function CategorySummary() {
const [categoryList,setCategoryList] = useState([])

function seprateCategory(){
  let category = [...new Set(transactions.map((t)=>t.category))]
  setCategoryList(category)
}
useEffect(()=>{
  
  seprateCategory()
},[])


  return (
    <>
     <div className='flex border-2 justify-center gap-7 bg-black '>

   
       {categoryList.map((item)=>{
        return <div key={item.id} className='  border-2  px-5 py-10 border-white text-white  '>
          <p>{item}</p>
          <h1 className='text-3xl'>{item.amount}</h1>
        </div>
      })}
       </div>
    </>
  )
}
