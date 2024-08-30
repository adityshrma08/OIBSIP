let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            createdAt: new Date()
        };
        tasks.push(task);
        taskInput.value = '';
        taskInput.focus();
        renderTasks();
    } else {
        alert("Please enter a task!");
    }
}

function renderTasks() {
    const pendingTasks = document.getElementById('pendingTasks');
    const completedTasks = document.getElementById('completedTasks');
    pendingTasks.innerHTML = '';
    completedTasks.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span> 
            <span>${task.completed ? `Completed: ${new Date(task.completedAt).toLocaleString()}` : `Added: ${task.createdAt.toLocaleString()}`}</span>
            <div>
                ${!task.completed ? `<button class="complete" onclick="completeTask(${task.id})">Complete</button>` : ''}
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        if (task.completed) {
            li.classList.add('completed');
            completedTasks.appendChild(li);
        } else {
            pendingTasks.appendChild(li);
        }
    });
}

function completeTask(id) {
    const task = tasks.find(t => t.id === id);
    task.completed = true;
    task.completedAt = new Date();
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}
