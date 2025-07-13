const taskInput = document.getElementById("task-input");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskInput.value;

  // Toggle checked class when clicked
  li.addEventListener("click", function () {
    li.classList.toggle("checked");
  });

  // Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "×"; // Unicode cross symbol
  deleteBtn.classList.add("delete");
  deleteBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent toggling checked when clicking delete
    li.remove();
  });

  li.appendChild(deleteBtn);
  listContainer.appendChild(li);

  taskInput.value = "";
}