let images = [
    "https://plus.unsplash.com/premium_photo-1782411868462-8d702914fb16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"
]
console.log(images)
let image = document.querySelector(".image")
let preBtn = document.querySelector(".pre")
let nxtBtn = document.querySelector(".nxt")

let index = 0;


nxtBtn.addEventListener("click",()=>{
    image.src = images[index]
index++
if(index === images.length){
    index = 0
}
})

preBtn.addEventListener("click",()=>{
    image.src = images[index]
    index--
    if(index < images[0]){
    index = images.length - 1
}
})



