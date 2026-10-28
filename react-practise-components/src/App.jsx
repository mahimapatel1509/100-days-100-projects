
import { useEffect, useRef } from 'react'
import './App.css'



function App() {
 const inpRef = useRef(null)
const handleFocus = ()=>{
inpRef.current.focus()
}



  return (
    <>
<input ref={inpRef} type="text"  />
<button onClick={handleFocus} >Focus input</button>
    </>
  )
}

export default App
