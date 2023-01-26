// функция для запуска приложения

function initApp() {
  const root = document.querySelector('#root')

  const container = document.createElement('main')
  container.className = 'container'

  const tasksList = document.createElement('div')
  tasksList.className = 'tasks-list'

  const addTasksBlock = createAddTasksBlock()

  root.append(container)
  container.prepend(addTasksBlock)
  container.append(tasksList)

  renderTasks(tasksList)
}

// запускаем приложение

initApp()

const tasksListNode = document.querySelector('.tasks-list')
const addTasksBlock = document.querySelector('.create-task-block')
const topButton = document.querySelector('.top-button')

// функция отрисовки

function renderTasks(listNode) {
  listNode.innerHTML = ''
  const tasks = getDateLocalStorage('tasks')
  if (tasks.length > 0) {
    tasks.forEach(({ id, text, data, isCompleted }) => {
      const taskCard = createTasksCard(id, text, data, isCompleted)
      listNode.append(taskCard)
    })
  } else {
    const noTasks = createNotTaskBlock()
    listNode.append(noTasks)
  }
  const topButton = createTopScrollBtn()
  listNode.append(topButton)
}

// функции создающие компоненты

function createTopScrollBtn() {
  const topButton = document.createElement('button')
  topButton.type = 'button'
  topButton.className = 'top-button'
  topButton.innerHTML = '&#8593'
  return topButton
}

function createNotTaskBlock() {
  const noTasks = document.createElement('h3')
  noTasks.className = 'no-plans'
  noTasks.textContent = 'You don`t have tasks'
  return noTasks
}

function createAddTasksBlock() {
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

function createTasksCard(id, task, date, isCompleted) {
  const taskCard = document.createElement('div')
  taskCard.className = 'task-card'
  taskCard.id = id

  const taskText = document.createElement('div')
  taskText.className = 'task-text-wrapper'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = `task${id}`
  checkbox.className = 'checked-task'
  checkbox.checked = isCompleted
  checkbox.name = `task${id}`

  const checkStyle = document.createElement('span')
  checkStyle.className = 'check-style'

  const label = document.createElement('label')
  label.className = 'task-label'
  label.htmlFor = `task${id}`
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

// бизнес логика

function setDateLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function getDateLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

function createTask(value) {
  return {
    id: Date.now().toString(),
    text: value,
    data: new Date().toLocaleDateString(),
    name: 'task2',
    isCompleted: false
  }
}

function addTask(value) {
  const tasks = getDateLocalStorage('tasks')
  tasks.push(createTask(value))
  setDateLocalStorage('tasks', tasks)
}

function deleteTask(id) {
  const tasks = getDateLocalStorage('tasks')
  const updateTasks = tasks.filter((item) => item.id !== id)
  console.log(updateTasks)
  setDateLocalStorage('tasks', updateTasks)
}

function compliedTask(id, checked) {
  const tasks = getDateLocalStorage('tasks')
  const updateTasks = tasks.map((item) => {
    if (item.id === id) {
      item.isCompleted = checked
      return item
    } else {
      return item
    }
  })
  setDateLocalStorage('tasks', updateTasks)
}

function validate(value) {
  const tasks = getDateLocalStorage('tasks')
  if (tasks.some((task) => task.text === value)) {
    return 'double'
  } else if (!value.trim()) {
    return 'empty'
  }
  return false
}

// handlers

function handlerScrollTop() {
  tasksListNode.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
}

function handlerScrollBottom() {
  tasksListNode.scrollTo({
    left: 0,
    top: tasksListNode.scrollHeight - tasksListNode.clientHeight,
    behavior: 'smooth'
  })
}

// listeners events

addTasksBlock.addEventListener('submit', (event) => {
  event.preventDefault()
  const { target } = event
  const input = target.taskName
  const isValidate = validate(input.value)

  if (isValidate === 'double') {
    alert('this case already exists!')
  } else if (isValidate === 'empty') {
    alert('field cannot be empty!')
  } else {
    addTask(input.value)
    renderTasks(tasksListNode)
    input.value = ''

    handlerScrollBottom()
  }
})

tasksListNode.addEventListener('input', (event) => {
  const { target } = event
  const idItem = target.closest('.task-card').id
  const checked = target.checked
  compliedTask(idItem, checked)
})

tasksListNode.addEventListener('click', (event) => {
  const { target } = event
  const parent = target.closest('div')
  if (target.classList.contains('delete-icon')) {
    if (confirm('delete task?')) {
      deleteTask(parent.id)
      renderTasks(tasksListNode)
    }
  }
})

tasksListNode.addEventListener('scroll', (event) => {
  if (event.currentTarget.scrollTop > 100) {
    topButton.classList.add('active')
  } else {
    topButton.classList.remove('active')
  }
})

topButton.addEventListener('click', handlerScrollTop)
