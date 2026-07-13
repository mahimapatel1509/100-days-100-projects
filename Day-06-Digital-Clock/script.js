let showTime = document.querySelector(".time");
let fullScreenBtn = document.querySelector(".full-screen");
let topBar = document.querySelector(".topbar");
let removeBtn = document.querySelector(".remove-btn")
let colorBtn = document.querySelectorAll(".colour")
let settingBtn = document.querySelector(".setting-btn")
let sideBar = document.querySelector(".side-bar")


let time = setInterval(()=>{
let date = new Date()
let currentTime = date.toLocaleTimeString()

showTime.innerHTML = currentTime
},1000)

fullScreenBtn.addEventListener("click",()=>{
    topBar.style.visibility = "hidden"
    showTime.style.fontSize = "15em"
    removeBtn.style.display = "block"
})
removeBtn.addEventListener("click",()=>{
    topBar.style.visibility = "visible"
    removeBtn.style.display = "none"
    showTime.style.fontSize = "10em"
})

colorBtn.forEach((btn)=>{
    btn.style.backgroundColor = btn.innerHTML
     btn.style.color = "black"
     btn.addEventListener("click",()=>{
        showTime.style.color = btn.innerHTML
     })
})

settingBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
 
})