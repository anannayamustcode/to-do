document.getElementById("addTaskButton").addEventListener("click", function () {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = ""; // Clear input after adding
    }
});

function addTask(taskText) {
    let taskList = document.getElementById("taskList");

    // Create new list item
    let li = document.createElement("li");
    li.textContent = taskText;

    // Add delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
        playTingSound(); // Play sound when the task is deleted
        showInsaneText(); // Show "INSANE" text
        taskList.removeChild(li);
    });

    // Append delete button to list item
    li.appendChild(deleteBtn);

    // Add list item to task list
    taskList.appendChild(li);
}

function playTingSound() {
    document.getElementById("tingSound").play();
}

function showInsaneText() {
    const insaneText = document.getElementById("insaneText");
    insaneText.style.display = 'block';

    // Hide after 1 second
    setTimeout(() => {
        insaneText.style.display = 'none';
    }, 1000);
}

// Add functionality for "I'm donee (finally)" button
document.getElementById("doneButton").addEventListener("click", function () {
    const cowText = document.getElementById("cowText");
    cowText.style.display = 'block';

    // Hide after 1 second
    setTimeout(() => {
        cowText.style.display = 'none';
    }, 1000);
});
