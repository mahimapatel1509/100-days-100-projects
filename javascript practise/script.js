// let fruits = ["mango","apple","banana","papaya","lichi"]
// let nums = [1,2,3,5,7]



// // map transform element

// fruits.map((fruit,index)=>{
//     console.log(fruit+1)
// })
// console.log(fruits)

// nums.map((item)=>{
//     console.log(item*2)
// })

// // filter

// let filterFruit = fruits.filter((fruit)=>{
//     return fruit.startsWith("m")
// })
// console.log(filterFruit)

// let countChar = fruits.filter((fruit)=>{
//     return fruit.length > 5
// })
// console.log(countChar)

// let even = nums.filter((num)=>{
//     return num % 2 != 0
// })
// console.log(even)


// // reduce

// let sum = nums.reduce((current,acc)=>{
//     return current + acc
// },100)
// console.log(sum)

// // find

// let studentNames = ["anuj","om","priya","anu","mahi","prakher","dolly","payal","divya"]
//  let filter = studentNames.find((student)=>{
//     return student.startsWith("p")
// })
// console.log(filter)

// let newNmaes = studentNames.some((value,index,array)=>{
//     return value.startsWith("z")
// })
// console.log(newNmaes)

// let check = nums.every((num)=>{
//     return num % 2 != 0
// })
// console.log(check)
//  let arr1 = [1,2,3,4,[5,6,7,8,[9,10,11,12]]]
//  console.log(arr1.flat(3))

//  let sortMethod = [1,2,1,5,8,6,4]
//  console.log(sortMethod.sort())



// objects methods

// const scores = {
//   JavaScript: 80,
//   React: 90,
//   CSS: 75
// };

// console.log(Object.keys(scores))
// console.log(Object.values(scores))
// console.log(Object.entries(scores))
// console.log(Object.fromEntries(scores))

// A frequency map counts how many times each value appears. 

// const fruits = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple"
// ];

// let blank = {}

// for(const fruit of fruits){
//     blank[fruit] = (blank[fruit] || 0 ) +1
// }
// console.log(blank)

// Question: Count how many times each number appears.

// const numbers = [2, 3, 2, 5, 3, 2, 5, 7];

// let blank = {}
// for(num of numbers){
//     blank[num] = (blank[num] || 0 ) + 1
// }
// console.log(blank)

// const arr = [1, [2, 3], [4, [5, 6]], 7];

// console.log(arr.flat(2))



// const users = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Riya" },
//   { id: 3, name: "Mahi" }
// ];

// const scores = [
//   { id: 1, score: 80 },
//   { id: 2, score: 95 },
//   { id: 3, score: 88 }
// ];


// strings

let str = " mahima"

// length
// console.log(str.length)
// console.log(str.trim())
// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// if(str.includes("p")){
//   console.log("yes")
// }else{
// console.log("no")
// }

// let result = str.slice(1,4)
// console.log(result)
// console.log(typeof(result))
// console.log(result.split())
// console.log(typeof(result))
// console.log(str.replace("m","p"))

// let sentence = "mahima have a red top with red jeans"
// console.log(sentence.replaceAll("red","blue"))


// let text = "  JavaScript Is Awesome  ";

// console.log(text.trim());

// console.log(text.toLowerCase());

// console.log(text.includes("Script"));

// console.log(text.slice(2, 12));

// console.log(text.trim().split(" "));

// console.log(text.replace("Awesome", "Powerful"));

// console.log(text.split(" ").reverse().join())

// console.log("Hello".slice(1, 4));
// console.log("JavaScript".toLowerCase().includes("script"));

// console.log("abc".split(""));

// console.log("hello".indexOf("z"));

// Problem 1: Find the longest word 

// let sentence = "I am learning JavaScript programming";
// let longestWord;
// function maximumLength(str){
// let convert = str.split(" ")
// console.log(convert)

// for(let i of convert){
//   console.log(i)

// }

// }

// maximumLength(sentence)


// Problem 2: Palindrome normalization 

// function checkPalindrome(str){
// let lowerTxt = str.toLowerCase().trim()
// let reverse = lowerTxt.reverse()
// console.log(reverse)

// }
// checkPalindrome("mom")
// checkPalindrome("anu")
// checkPalindrome("madam")

// let arr = [4, 12, 7, 20, 15, 3]; 

// let greater = 0
// for(let num of arr){
//   if(num > 10){
//     greater++
//   }
 
// }
//  console.log(greater)


// Problem 1: Find the longest word 

// let sentence = "I am learning JavaScript programming";
// let longestWord = ""

// function maximumLength(str){

// let convert = str.split(" ")
// for(let word of convert){
//   if(word.length > longestWord.length){
//     longestWord = word
//   }
// }
// console.log(longestWord)
// }
// maximumLength(sentence)


// Problem 2: Palindrome normalization 

// function checkPalindrome(str){
//   let splitStr = str.split(" ").reverse()

//   console.log(splitStr)

//   console.log(reverseStr)

//   if(str === splitStr){

//     console.log("yes")

//   }else{

//     console.log("no")

//   }
// }

// checkPalindrome("mom")
// checkPalindrome("mahi")

// let char = "mahima";
// let freq = {}
// for(let txt of char){
//   if(freq[txt]){
//     freq[txt]++
//   }else{
//     freq[txt] = 1
//   }
// }
// console.log(freq)


// function findLongestWord(str){
//   let longest = ""
//   let split = str.split(" ")
//   for(let txt of split){
//     if(txt.length > longest.length){
//       longest = txt
//     }
//   }


// console.log(longest)
// }

// findLongestWord("helllo everyone how are you all")
// findLongestWord("my name is mahima patel")


// check palindrome

// function checkPalindrome(str){
//   let changeCase = str.toLowerCase()
//   let split = changeCase.split("").reverse().join("")
  
//   console.log(split)
//   if(str == split){
//     console.log("yes palindrome")
//   }else{
//     console.log("no palindrome")
//   }
// }

// checkPalindrome("mahima")
// checkPalindrome("mom")
// checkPalindrome("dad")

// console.log("hello world".split(" "));

// let string = "i love js"
// let result = string.replace(/\s/g , "")
// console.log(result)


// console.log(c);
// const c = 30;

// const numbers = [12, 45, 7, 89, 23];
// let largest = numbers[0]
// for(let i = 0; i <= numbers.length; i++){
//    console.log(numbers[i])
//    if(numbers[i] > largest){
//     largest = numbers[i]

//    }
//    console.log(largest)
// }


const strs = "hello";
let freq = {}
for(let str of strs){
    freq[str] = (freq[str] || 0) + 1
   
}
 console.log(freq)