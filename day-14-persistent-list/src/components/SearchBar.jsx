import React, { useState } from 'react'

export default function SearchBar({setSearchTask,searchTask }) {
  



  return (
    <>
      <input  value={searchTask} onChange={(e) => setSearchTask(e.target.value)}  className='border rounded-2xl w-4xl p-2 m-3' type="text" placeholder='Search task...' name="" id="" />
    </>
  )
}
