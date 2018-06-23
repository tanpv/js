// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM load
  document.addEventListener('DOMContentLoaded', getTasks);

  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask);

  // clear task event
  clearBtn.addEventListener('click', clearTasks);

  // filter tasks
  filter.addEventListener('keyup',filterTasks);
}

function getTasks(){
  let tasks;
  if(localStorage.getItem('tasks')===null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    
    // create li
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node
    li.appendChild(document.createTextNode(task));
    // create new link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
  });
}


// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
    return
  }

  // create li
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // create text node
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class = "fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);

  // store to local storage
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';

  e.preventDefault();
}

function storeTaskInLocalStorage(task){
  let tasks;
  if(localStorage.getItem('tasks')===null) {
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


// Remove task
function removeTask(e){
  if(e.target.classList.contains('fa-remove')) {
    if(confirm('Are You Sure?')){
      e.target.parentElement.parentElement.remove();

      // from from ls
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }    
  }
}

function removeTaskFromLocalStorage(taskItem){
  // console.log(taskItem);
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task,index){
    if(taskItem.textContent === task){
      tasks.splice(index,1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks(e){
  // taskList.innerHTML = '';
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }

  // 
  clearTasksFromLocalStorage();

}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  console.log(text);
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}