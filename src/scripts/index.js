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

root.append(container)
container.append(tasksList)

const noTasks = document.createElement('h3')
noTasks.className = 'no-plans'
noTasks.textContent = 'You don`t have tasks'

const topButton = document.createElement('button')
topButton.type = 'button'
topButton.className = 'top-button'
topButton.innerHTML = '&#8593'

const addTasksBlock = createAddTasksBlock()
container.prepend(addTasksBlock)

function createTask (value) {
  return {
    id: Date.now(),
    text: value,
    data: '17/09/2022',
    name: 'task2',
    isCompleted: false
  }
}

function addTask (value, arr) {
  arr.push(createTask(value))
  renderTasks(arr)
}

function deleteTask (id, arr) {
  arr.forEach((task, index) => {
    task.id === id && tasks.splice(index, 1)
    // renderTasks(arr)
  })
}

function validate (value, arr) {
  if (arr.some((task) => task.text === value)) {
    return 'double'
  } else if (!value.trim()) {
    return 'empty'
  }
  return false
}

// eslint-disable-next-line no-unused-vars
function handlerTop () {
  tasksList.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
}
// eslint-disable-next-line no-unused-vars
function handlerBottom () {
  tasksList.scrollTo({
    left: 0,
    top: tasksList.scrollHeight - tasksList.clientHeight,
    behavior: 'smooth'
  })
}

function createAddTasksBlock () {
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

function createTasksCard (id, task, date, name, isCompleted) {
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
  const deleteIcon = document.createElement('span')
  deleteIcon.className = 'delete-icon'
  deleteIcon.innerHTML = '&times'
  deleteCardBtn.appendChild(deleteIcon)

  const creationTaskDate = document.createElement('span')
  creationTaskDate.className = 'creation-task-date'
  creationTaskDate.textContent = date

  taskCard.append(taskText, deleteCardBtn, creationTaskDate)

  return taskCard
}

function renderTasks (tasks) {
  tasksList.innerHTML = ''
  if (tasks.length > 0) {
    tasks.forEach(({ id, text, data, name, isCompleted }) => {
      const taskCard = createTasksCard(id, text, data, name, isCompleted)
      tasksList.append(taskCard)
    })
  } else {
    tasksList.append(noTasks)
  }
  tasksList.append(topButton)
}

// ------------------------

addTasksBlock.addEventListener('submit', (event) => {
  event.preventDefault()
  const input = addTasksBlock.querySelector('input')
  const isValidate = validate(input.value, tasks)

  if (isValidate === 'double') {
    alert('this case already exists!')
  } else if (isValidate === 'empty') {
    alert('field cannot be empty!')
  } else {
    addTask(input.value, tasks)
    input.value = ''
    tasksList.scrollTo({
      left: 0,
      top: tasksList.scrollHeight - tasksList.clientHeight,
      behavior: 'smooth'
    })
  }
})

tasksList.addEventListener('click', (event) => {
  const { target } = event
  const parent = target.closest('div')
  if (target.classList.contains('delete-icon')) {
    if (confirm('delete task?')) {
      deleteTask(parent.id, tasks)
      parent.remove()
    }
  }
  if (event.currentTarget.children.length === 1) {
    tasksList.append(noTasks)
  }
})

tasksList.addEventListener('scroll', (event) => {
  if (event.currentTarget.scrollTop > 100) {
    topButton.classList.add('active')
  } else {
    topButton.classList.remove('active')
  }
})

topButton.addEventListener('click', handlerTop)

renderTasks(tasks)
