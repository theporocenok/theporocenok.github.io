const cases = document.getElementsByClassName('case-info');
const caseClickHandler = (e) => {
  const parentNode = e.target.parentNode;

  parentNode.classList.toggle('opened');
}

Array.from(cases).forEach(function(caseItem) {
  caseItem.addEventListener('click', caseClickHandler);
});

const tasks = document.getElementsByClassName('task-title');
const taskClickHandler = (e) => {
  const parentNode = e.target.parentNode;

  parentNode.classList.toggle('opened');
}

Array.from(tasks).forEach(function(taskItem) {
  taskItem.addEventListener('click', taskClickHandler);
});

