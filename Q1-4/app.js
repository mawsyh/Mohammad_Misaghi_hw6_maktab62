const maincontainerEl = document.createElement("div");
const bodyEl = document.querySelector("body");

maincontainerEl.classList.add("main-container");
bodyEl.appendChild(maincontainerEl);

maincontainerEl.innerHTML = `
        <span class="main">
            <div class="task-container">
                <h1 class="heading">My Tasks</h1>
                <ul class="main-tasks">
                    <li>user dashboard</li>
                    <li>admin dashboard</li>
                    <li>authentication
                        <ul class="child-tasks">
                            <li>login</li>
                            <li>register</li>
                            <li>logout</li>
                        </ul>
                    </li>
                    <li>about page</li>
                    <li>contact page</li>
                </ul>
            </div>
            <div>
                <input id="task-input" type="text">
                <button id="task-add">add task</button>
                <button id="subtask-add">add sub task</button>
            </div>
        </span>
        <div class="description">click on the task if it is done</div>
        <div class="description">right click to remove</div>
        `;

const inputEl = maincontainerEl.querySelector("#task-input");
const subtaskBtn = maincontainerEl.querySelector("#subtask-add");
const taskBtn = maincontainerEl.querySelector("#task-add");
const maintasksEl = maincontainerEl.querySelector(".main-tasks");
let liEl = maintasksEl.querySelectorAll(".main-tasks li");

function adding() {
  liEl.forEach((li) => {
    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });
  });

  liEl.forEach((li) => {
    li.addEventListener(
      "contextmenu",
      (e) => {
        e.preventDefault();
        li.remove();
      },
      false
    );
  });
}

adding();

taskBtn.addEventListener("click", () => {
  if (inputEl.value === "") alert("Input box can not be empty!");
  else {
    maintasksEl.innerHTML += `<li>${inputEl.value}</li>`;
    liEl = maintasksEl.querySelectorAll(".main-tasks li");
    adding();
    inputEl.value = "";
  }
});

subtaskBtn.addEventListener("click", () => {
  if (inputEl.value === "") alert("Input box can not be empty!");
  else {
    maintasksEl.innerHTML += `<ul class="child-tasks"><li>${inputEl.value}</li></ul>`;
    liEl = maintasksEl.querySelectorAll(".main-tasks li");
    adding();
    inputEl.value = "";
  }
});
