import React, { useState } from 'react'

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 60000,
    img:"https://images.unsplash.com/photo-1547731030-cd126f44e9c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
  img:"https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  },
  {
    id: 3,
    name: "Headphones",
    price: 5000,
    img:"https://images.unsplash.com/photo-1660334742848-cc8113467932?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
  }
];

export default function ProductSelector() {
const [cart,SetCart] = useState([])

const addProductCart = (item)=>{
console.log(item)
SetCart([...cart,item])
console.log(cart)
}

const removeProduct = (item)=>{
console.log(item)
cart.filter((product)=>item!=product)
console.log(cart)
}

  return (
    <>
      <div className='flex justify-center p-2 '>
        {products.map((item)=>{
          return <div key={item.id} className='p-5  bg-black text-white text-center'>
            <img className='rounded h-96' src={item.img} alt="" />
            <h1>{item.name}</h1>
            <p>{item.price}</p>
            <button onClick={()=>addProductCart(item)} className='bg-blue-600 px-2 py-2 text-white  rounded-2xl'>{cart.includes(item)?"Added": " Add  to cart"}</button>
          </div>
        })}
      </div>

{/* cart */}

<div className='h-96 w-6xl'>
 
    {cart.map((item)=>{
      return <ul className='flex gap-5 p-10  justify-center'>
        <img className='h-40  w-40' src={item.img} alt="" />
      <li className='p-15 text-3xl'>{item.name}</li>
      <li className='p-15 text-3xl'>{item.price}</li>
      <li onClick={()=>removeProduct(item)} className='p-15 text-3xl'>remove from cart</li>
      </ul>
    })}
 
</div>

    </>
  )
}
