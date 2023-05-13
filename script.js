const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

function addTask() {
	if (taskInput.value === "") {
		alert("Please enter a task!");
		return;
	}

	const li = document.createElement("li");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.addEventListener("click", function() {
		if (this.checked) {
			li.classList.add("completed");
		} else {
			li.classList.remove("completed");
		}
	});
  
  const label = document.createElement("label");
	label.textContent = taskInput.value;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "x";
	deleteButton.addEventListener("click", function() {
		li.remove();
	});

	li.appendChild(checkbox);
	li.appendChild(label);
	li.appendChild(deleteButton);

	taskList.appendChild(li);

	taskInput.value = "";
	taskInput.focus();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addTask();
	}
});
