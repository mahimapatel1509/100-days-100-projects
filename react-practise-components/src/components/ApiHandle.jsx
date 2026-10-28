import React, { useEffect, useState } from "react";

export default function ApiHandle() {
  const [data, setData] = useState([]);

  useEffect(() => {
   
      const getData = async () => {
        let response = await fetch(
          "https://dummyjson.com/users?limit=6&skip=0",
        );
        let resData = await response.json();
        console.log(resData);
        setData(resData.users);
      };
   
    getData();
  }, []);

  console.log(data);
  return <> 
 {data ? <div className="flex flex-wrap gap-7 mt-5 p-5 ">
    {data.map((item)=>{
        return <div className="bg-blue-400 p-5 text-center justify-center rounded-2xl  text-white"  key={item.id}>
            <img className="px-8" src={item.image} alt={item.username} />
            <h1 className="text-2xl">{item.firstName} {item.lastName}</h1>
            <p>{item.age} years</p>
            <p className="font-bold">{item.gender}</p>
            <p className="font-bold">{item.role}</p>
            <p>{item.university}</p>
            <p>{item.company.name}</p>
            <p className="font-bold">{item.address.address}</p>
            <p className="font-bold">{item.address.city}</p>
            <p className="font-bold">{item.company.department}</p>
        </div>
    })}
  </div> : <h1 className="text-black text-8xl">loading...</h1>}
  </>
}
