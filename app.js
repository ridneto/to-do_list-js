const inputNewTask = document.querySelector("#container-new-task > input");
const btnAddTask = document.querySelector("#container-new-task > button");
const ulTasks = document.querySelector("ul");
const labelFooter = document.querySelector("footer > label");
const btnCleanAllTasks = document.querySelector("footer > button");

inputNewTask.onkeyup = () => {
  let lenghtValueInput = inputNewTask.value.trim().length;

  if(lenghtValueInput){
    btnAddTask.disabled = false;
    return;
  }

  btnAddTask.disabled = true;
}

btnAddTask.onclick = () => {
  let newTask = inputNewTask.value.trim();

  let newLi = document.createElement("li");
  newLi.innerHTML = `${newTask}<button onclick="removeTask(this)"><i class="fas fa-trash-alt"></i></button>`;

  ulTasks.appendChild(newLi);
  updateFooter();
  inputNewTask.value = "";
};

btnCleanAllTasks.onclick = () => {
  ulTasks.innerHTML = "";
  updateFooter();
}

removeTask = (el) => {
  el.parentNode.remove();
  updateFooter();
}

updateFooter = () => {
  let lenghtTasks = document.querySelectorAll("ul > li").length;
  let messageFooter = "You dont have any task yet";

  if(lenghtTasks){
    messageFooter = `You have ${lenghtTasks} pending tasks`;
  }

  labelFooter.innerHTML = messageFooter;
}
