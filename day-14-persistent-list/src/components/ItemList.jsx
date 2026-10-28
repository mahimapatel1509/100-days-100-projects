import React, { useRef } from "react";
import { GoTrash } from "react-icons/go";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";

export default function ItemList({ taskList,setTaskList }) {

  const completeTask = (id)=>{
    console.log(id)
setTaskList((prev)=>prev.map((item)=>item.id === id ? {...item, isComplete: !item.isComplete} : item))

  }

  console.log(taskList);

  const delTask = (id)=>{
console.log(id)
setTaskList((prev)=>prev.filter((item)=>item.id != id))
  }

  

  return (
    <>
 
      {taskList.map((item) => {
        return (
          <ul
            className="flex gap-56  mx-44 my-12 rounded text-center border py-4 px-20  "
            key={item.id}
          >
            <li onClick={()=>{completeTask(item.id)}}>{item.isComplete ?<IoIosCheckmarkCircleOutline className="text-4xl"/> : <IoIosRadioButtonOff className="text-4xl"/>}</li>
            <li className="text-2xl">{item.title}</li>
            <li className="text-2xl">
              <GoTrash onClick={()=>{delTask(item.id)}} />
            </li>
          </ul>
        );
      })}
    </>
  );
}
