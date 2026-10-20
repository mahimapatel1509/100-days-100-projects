let searchBtn = document.querySelector(".srch-btn");
let inp = document.querySelector("input");
let cards = document.querySelector(".user-cards");
let allUsers = [];

inp.addEventListener("input", (e) => {
  getUser(e.target.value);
});


// fetch users
async function getUser() {
  try {
    let res = await fetch("https://dummyjson.com/users");
    if (!res.ok) {
      throw new Error("failed to fetch users");
    }
    let data = await res.json();
    allUsers = data.users;
    displayUsers(allUsers)
  } catch (error) {
    console.log(error);
  }
}

// STEP 2: Display user cards

function displayUsers(users) {
  cards.innerHTML = "";
  if (users.length === 0) {
    cards.innerHTML = "user not found";
  }

  users.forEach((user) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
  <img src=${user.image} alt="">
         <h3>${user.firstName} ${user.lastName}</h3>
        <p>${user.phone}</p>
        <p>${user.email}</p>
        <p>${user.university}</p>
       `;

    cards.appendChild(card);
  });
}


// filterUsers

function filterUsers(inpVal){
    console.log("filter executed")
    let filterUser = allUsers.filter((user)=>{
        return user.firstName.toLowerCase().includes(inpVal.toLowerCase())

    })
    displayUsers(filterUser)
}

function debounce(callback, delay) {

    let timer;

    return function (...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);

    };
}


// STEP 5: Create debounced search

const debouncedSearch = debounce(filterUsers, 500);


// STEP 6: Connect search input

inp.addEventListener("input", (e) => {

    debouncedSearch(e.target.value);

});


// STEP 7: Initial API call

getUser();