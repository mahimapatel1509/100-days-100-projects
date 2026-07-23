let textArea = document.querySelector("textarea");
let charCount = document.querySelector(".char");
let wordsCount = document.querySelector("p");
let clearBtn = document.querySelector(".clear-txt");
let modeBtn = document.querySelector(".mode");
let cont = document.querySelector(".container");

textArea.addEventListener("input",(e)=>{
    
    let chars = textArea.value.trim().length
    let words = textArea.value.split(' ').length -1
    charCount.innerHTML = `Characters: ${chars} / 100` 
  
    
  wordsCount.innerHTML = `Words : ${words}`
  if(textArea.value.length >= 80){
    charCount.style.color = "red"
  }

})
clearBtn.addEventListener("click",()=>{
    textArea.value = ""
    wordsCount.innerHTML = ""
    charCount.innerHTML = ""
})

// change mode 

modeBtn.addEventListener("click",()=>{

 if(modeBtn.innerHTML === "Dark Mode"){
 cont.classList.add("dark")
 modeBtn.innerHTML = 'Light Mode'
 }else{
    cont.classList.remove("dark")
    modeBtn.innerHTML = 'Dark Mode'
 }
})