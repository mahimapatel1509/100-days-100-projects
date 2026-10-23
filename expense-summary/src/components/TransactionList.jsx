import React, { useEffect, useState } from "react";
import transactions from "../data/transactions";

export default function TransactionList() {
  const [amt, setAmt] = useState(0);

  function countTotalExp() {
    let getAmt = transactions.map((item, index) => {
      return item.amount;
    });

    let total = getAmt.reduce((acc, current) => {
      return acc + current;
    }, 0);
    setAmt(total);
 
  }

 useEffect(()=>{
   countTotalExp();
 },[])

  return (
    <>
      <h1>Expense Summary</h1>
      <p>Total Expenses</p>
      <h1>{amt}</h1>
      <p>{transactions.length} Transactions</p>
    </>
  );
}
