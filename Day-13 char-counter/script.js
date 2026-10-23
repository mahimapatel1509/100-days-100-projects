let word = document.querySelector(".word")
let char = document.querySelector(".char")
let sentence = document.querySelector(".sentence")
let txtInp = document.querySelector("textarea")
let inpVal = ""
let count = 0

txtInp.addEventListener("input",(e)=>{
    console.log(e.target.value)
    inpVal = e.target.value
  countWord(inpVal)
  countChars(inpVal)
  countSentence(inpVal)
})

function countWord(val){
word.innerHTML = val.trim().length
}

function countChars(val){

let splitVal = val.trim().split(" ")
console.log(splitVal.length)
char.innerHTML = splitVal.length
}

function countSentence(val){
sentence.innerHTML =  val.split(/[.!?]+/).filter(Boolean).length
}
