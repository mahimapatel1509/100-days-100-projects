let btns = document.querySelectorAll("button");
let inpDisplay = document.querySelector("input");
console.log(btns);

btns.forEach((btn) => {
  console.log(btn.innerHTML);
   let value = btn.innerHTML;
  btn.addEventListener("click", () => {
    console.log(btn.innerHTML);
  
   

    if (btn.innerHTML === "AC") {
      inpDisplay.value = "";
    } else if (btn.innerHTML === "=") {
      inpDisplay.value = eval(inpDisplay.value);
    } else if(btn.innerHTML === "DELETE"){
     inpDisplay.value = inpDisplay.value.slice(0,-1)
    }else {
      inpDisplay.value += value;
    }
  });
});
