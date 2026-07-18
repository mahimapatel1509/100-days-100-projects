let inp = document.querySelector("input");
let addTaskBtn = document.querySelector(".add-task");
let tasksContainer = document.querySelector(".task-list");
let form = document.querySelector("form");
let tasks = [];

// form handler

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let inpVal = inp.value.trim();
  if (inpVal === "") return

  tasks.push(inpVal);
  inp.value = "";
  tasksContainer.innerHTML = "";

  tasks.forEach((item, index) => {
    let task = document.createElement("div");
    task.innerHTML = ` <div class="task">
       
          <p class="txt">${item}</p>
          <button class="del">Delete</button>
          <button class="complete">Complete Task</button>
        </div>`;
    tasksContainer.append(task);
    let delBtn = task.querySelector(".del");

    delBtn.addEventListener("click", () => {
      tasks.splice(0, 1);
      task.remove();
    });

    // complete task

    let colpleteBtn = task.querySelector(".complete");
    colpleteBtn.addEventListener("click", () => {
      let markComplete = task.querySelector("p");
      markComplete.style.textDecoration = "line-through";
    });
  });
});
