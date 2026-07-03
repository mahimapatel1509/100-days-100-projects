// navbar variables

let removeMenu = document.querySelector(".remove");
let menulist = document.querySelector(".menu-items");
let menuBtn = document.querySelector(".menu");


// form varibles
 const form = document.querySelector("form");
  const nameInput = document.querySelector(".name-inp");
  const emailInput = document.querySelector(".email-imp");
  const messageInput = document.querySelector(".textarea");
  const submitMsg = document.querySelector(".submit-msg");
  let errMsg = document.querySelector(".err-msg");
  let userDetails;

let dark = document.querySelector(".moon");
let blackItem = document.querySelectorAll(".black");
let borders = document.querySelectorAll(".dark-border");
let moon = document.querySelector(".fa-regular fa-moon");
let contactForm = document.querySelector(".contact-form");
let contactBtn = document.querySelector(".contact-btn");
let nav = document.querySelector(".navbar");
let project = document.querySelector(".projects");
let projectCol = document.querySelectorAll(".col1");
let experienceBox = document.querySelectorAll(".col");
let mode = true;

 // contact btn function

contactBtn.addEventListener("click",()=>{
  contactForm.scrollIntoView({ behavior: "smooth" });
})

// menu list show

menuBtn.addEventListener("click",()=>{
  menulist.style.display = "block"
   menulist.scrollIntoView({ behavior: "smooth" });
})

// remove menu list

removeMenu.addEventListener("click",()=>{
  menulist.style.display = "none"
  
})

// dark mode or light mode functionality

dark.addEventListener("click", () => {
  if (mode == true) {
    document.body.style.backgroundColor = "white";
    blackItem.forEach((black) => {
      black.style.color = "black";
      nav.style.backgroundColor = "white";
       
    });
    borders.forEach((border) => {
      border.style.border = "1px solid black";
      border.style.color = "black";
      border.style.backgroundColor = "transparent";
      mode = false;
    });
    projectCol.forEach((project)=>{
      project.style.backgroundColor = "white"
    })
    experienceBox.forEach((box)=>{
      box.style.border = "1px dashed black"
    })
  } else if (mode == false) {
    document.body.style.backgroundColor = "black";
    blackItem.forEach((black) => {
      black.style.color = "white";
      nav.style.backgroundColor = "black";
    });
     projectCol.forEach((project)=>{
      project.style.backgroundColor = "black"
    })
    borders.forEach((border) => {
      border.style.border = "1px solid white";
      border.style.color = "white";
      border.style.backgroundColor = "black";
      mode = true;
    });
     experienceBox.forEach((box)=>{
      box.style.border = "1px dashed white"
    })
  }
});

function myProjects() {
    if (project.style.display === "none" || project.style.display === "") {
    project.style.display = "grid"; // or "block"
    project.scrollIntoView({ behavior: "smooth" });
  } else {
    project.style.display = "none";
  }
}


// const toggleIcon = document.querySelector(".moon");

  dark.addEventListener("click", () => {
    if (dark.classList.contains("fa-moon")) {
      dark.classList.remove("fa-moon");
      dark.classList.add("fa-sun");
    } else {
      dark.classList.remove("fa-sun");
      dark.classList.add("fa-moon");
    }
  });


  // form validation
 

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    // get input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // regex for email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check validation
    if (name === "") {
      alert("Please enter your name");
      nameInput.focus();
      return;
    }

    if (email === "") {
      alert("Please enter your email");
      emailInput.focus();
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      emailInput.focus();
      return;
    }

    if (message === "") {
      alert("Please enter your message");
      messageInput.focus();
      return;
    }

    // if all valid
  
    submitMsg.style.display = "block"
    form.reset();

  });


  