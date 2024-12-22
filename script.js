const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";

    // Add event listeners for the buttons
    const completeBtn = taskItem.querySelector(".complete-btn");
    const deleteBtn = taskItem.querySelector(".delete-btn");

    completeBtn.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });
});

// Press Enter to add task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTaskBtn.click();
    }
});
