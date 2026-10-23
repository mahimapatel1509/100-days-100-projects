 const transactions = [
  { id: 1, title: "Pizza", category: "Food", amount: 500 },
  { id: 2, title: "Shoes", category: "Shopping", amount: 2000 },
  { id: 3, title: "Cab", category: "Travel", amount: 1500 },
  { id: 4, title: "Groceries", category: "Food", amount: 1500 },
  { id: 5, title: "T-shirt", category: "Shopping", amount: 1000 }
];

export default transactions

const totals = transactions.reduce((acc,t)=>{
   acc[t.category] = (acc[t.category] || 0) + t.amount
   return acc
},{})
console.log(totals)

for(let i = 0; i <= totals.length; i++){
  console.log(i)
}