const input = document.getElementById("todo-input");
const todoLane = document.querySelector(".todo-lane");
const todoform = document.getElementById("todo-form");

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value } = input;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });
  // console.log("todolane", todoLane);
  todoLane.appendChild(newTask);
  input.value = "";
});
