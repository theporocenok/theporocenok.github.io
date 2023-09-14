const cases = document.getElementsByClassName('case-info');
const tasks = document.getElementsByClassName('task-title');
const clickHandler = (e) => {
  const parentNode = e.target.parentNode;

  parentNode.classList.toggle('opened');
}

Array.from(cases).forEach(function(caseItem) {
  caseItem.addEventListener('click', clickHandler);
});

Array.from(tasks).forEach(function(taskItem) {
  taskItem.addEventListener('click', clickHandler);
});

const openCaseById = (caseId) => {
  Array.from(cases).forEach(function(caseItem) {
    caseItem.parentNode.classList.remove('opened');
  });

  document.getElementById(caseId).classList.add('opened');
}

const checkHashAndOpenCase = () => {
  const windowHash = window.location.hash;

  if (windowHash.length) {
    const caseId = windowHash.slice(1);

    openCaseById(caseId);
  }
}

checkHashAndOpenCase();

window.addEventListener('hashchange', checkHashAndOpenCase);