
const form = document.getElementById('todo-form');
const input = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const taskText = input.value.trim();
  if (taskText === "") return;

  
  const li = document.createElement('li');
  li.textContent = taskText;

  
  const doneBtn = document.createElement('button');
  doneBtn.textContent = "✔";
  doneBtn.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener('click', function() {
    taskList.removeChild(li);
  });

  
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  
  taskList.appendChild(li);

  
  input.value = "";
});
