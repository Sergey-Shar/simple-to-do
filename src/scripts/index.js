const tasks = [
  {
    id: '1',
    text: ' learn HTML',
    data: '17/06/2022',
    name: 'task1',
    isCompleted: true
  },
  {
    id: '2',
    text: 'learn CSS',
    data: '17/09/2022',
    name: 'task2',
    isCompleted: true
  }
]

const root = document.querySelector('#root')
const container = document.createElement('main')
container.className = 'container'
const tasksList = document.createElement('div')
tasksList.className = 'tasks-list'
root.appendChild(container)

const noPlans = document.createElement('h3')
noPlans.className = 'no-plans'
noPlans.textContent = 'you have no plans'

const createAddTasksBlock = () => {
  const wrapper = document.createElement('div')
  wrapper.className = 'create-task-block-wrapper'

  const form = document.createElement('form')
  form.className = 'create-task-block'
  form.noValidate = true

  const deleteAllTasksBtn = document.createElement('button')
  deleteAllTasksBtn.className = 'delete-all-tasks__button'
  deleteAllTasksBtn.type = 'button'
  deleteAllTasksBtn.textContent = 'delete all'

  const addTasksInput = document.createElement('input')
  addTasksInput.className = 'add-tasks__input'
  addTasksInput.name = 'taskName'
  addTasksInput.type = 'text'
  addTasksInput.placeholder = 'task...'
  addTasksInput.value = ''
  addTasksInput.autofocus = true

  const addTasksBtn = document.createElement('button')
  addTasksBtn.className = 'add-tasks__button'
  addTasksBtn.type = 'submit'
  addTasksBtn.textContent = 'new'

  form.append(deleteAllTasksBtn, addTasksInput, addTasksBtn)
  wrapper.append(form)

  return wrapper
}

const createTasksCard = (id, task, date, name, isCompleted) => {
  const taskCard = document.createElement('div')
  taskCard.className = 'task-card'
  taskCard.id = id

  const taskText = document.createElement('div')
  taskText.className = 'task-text-wrapper'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = name
  checkbox.className = 'checked-task'
  checkbox.checked = isCompleted
  checkbox.name = name

  const checkStyle = document.createElement('span')
  checkStyle.className = 'check-style'

  const label = document.createElement('label')
  label.className = 'task-label'
  label.htmlFor = name
  label.textContent = task

  taskText.append(checkbox, checkStyle, label)

  const deleteCardBtn = document.createElement('button')
  deleteCardBtn.className = 'delete-card__button'
  deleteCardBtn.type = 'button'
  // deleteCardBtn.innerHTML = '&times'
  const deleteIcon = document.createElement('span')
  deleteCardBtn.className = 'delete-icon'
  deleteIcon.innerHTML = '&times'
  deleteCardBtn.appendChild(deleteIcon)

  const creationTaskDate = document.createElement('span')
  creationTaskDate.className = 'creation-task-date'
  creationTaskDate.textContent = date

  taskCard.append(taskText, deleteCardBtn, creationTaskDate)

  return taskCard
}

const renderTasks = (tasks) => {
  if (tasks.length > 0) {
    tasks.forEach(({ id, text, data, name, isCompleted }) => {
      const taskCard = createTasksCard(id, text, data, name, isCompleted)
      tasksList.append(taskCard)
    })
  } else {
    tasksList.append(noPlans)
  }
}

const addTasksBlock = createAddTasksBlock()
container.append(addTasksBlock, tasksList)

renderTasks(tasks)
