import React, { useRef, useState } from 'react'
import ItemList from './ItemList'
import SearchBar from './SearchBar'


export default function TaskForm() {
    const [task,setTask] = useState({id:"",title:"",isComplete:false})
    const [taskList,setTaskList] = useState([])
    const [searchTask,setSearchTask] = useState("")
    const inpRef = useRef(null)

const completeTask = taskList.filter((item) => item.isComplete);

console.log(completeTask);

const getTask = (value)=>{
    inpRef.current.focus()
    setTask({...task,id: new Date().getTime() ,title : value})

}
const showTaskList = (e)=>{
    e.preventDefault()
setTaskList([...taskList,task])
setTask({id:"",title:"",isComplete:false})
  inpRef.current.focus()
}
const filterTask = taskList.filter((item)=>{
return item.title.toLowerCase().includes(searchTask.trim().toLowerCase())
})
console.log(filterTask)

  return (
    <>
      <h1 className='text-3xl text-center '>Smart Task Explorer</h1>
      <p className='p-3 text-center'>Interactive preview of the expected functionality. The actual React project will use localStorage.</p>

<form className='text-center '>
    <input className='border rounded-2xl w-2xl p-2 m-3 ' value={task.title} ref={inpRef} onInput={(e)=>getTask(e.target.value)} type="text" name="" placeholder='Add a new task...'  /> <button className='shadow-2xl bg-gray-600 px-3 py-2 rounded-2xl' onClick={(e)=>showTaskList(e)}>ADD</button>
    <br />
    <SearchBar searchTask={searchTask} setSearchTask={setSearchTask}  />

    <div className='flex gap-7 justify-center'>
        <button className="bg-gray-500 px-5 py-2 rounded-2xl ">All</button>
        <button  className="bg-gray-500 px-5 py-2 rounded-2xl ">Active</button>
        <button  className="bg-gray-500 px-5 py-2 rounded-2xl ">Completed</button>
      </div>

</form>
<ItemList taskList={filterTask} task={task} setTaskList={setTaskList} setTask={setTask}/>
    </>
  )
}
