let tasks = [];
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ text: task, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.classList.add('task');
        if (task.completed) {
            taskElement.classList.add('completed');
        }
        taskElement.innerHTML = `
            <span>${task.text}</span>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
        `;
        taskElement.querySelector('.complete-btn').addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        taskElement.querySelector('.delete-btn').addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        taskList.appendChild(taskElement);
    });
}