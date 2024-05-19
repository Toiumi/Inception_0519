document.addEventListener('DOMContentLoaded', function() {
  const taskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');

  addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText === '') return;

    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  });
});
