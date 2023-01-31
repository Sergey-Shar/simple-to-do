import { createAddTasksBlock } from './components/addTasksBlock.js'
import { createTopScrollBtn } from './components/topScrollButton.js'
import { handlerAddNewTask } from './modules/addTask.js'
import { handlerDeleteTask } from './modules/deleteTask.js'
import { handlerIsChecked } from './modules/completedTask.js'
import { handlerDeleteAllTask } from './modules/deleteAllTasks.js'
import { handlerShowScrollButton, handlerScrollTop } from './modules/scrollTasks.js'
import { renderTasks } from './modules/renderTasks.js'

export function initApp () {
  const root = document.querySelector('#root')

  const container = document.createElement('main')
  container.className = 'container'

  const tasksList = document.createElement('div')
  tasksList.className = 'tasks-list'

  const addTasksBlock = createAddTasksBlock()
  const deleteAllTaskButton = addTasksBlock.querySelector('.delete-all-tasks__button')
  const topButton = createTopScrollBtn()

  root.append(container)
  container.prepend(addTasksBlock)
  container.append(tasksList, topButton)

  addTasksBlock.addEventListener('submit', (event) => handlerAddNewTask(event, tasksList))

  tasksList.addEventListener('input', handlerIsChecked)

  tasksList.addEventListener('click', (event) => handlerDeleteTask(event, tasksList))

  deleteAllTaskButton.addEventListener('click', () => handlerDeleteAllTask(tasksList))

  tasksList.addEventListener('scroll', (event) => handlerShowScrollButton(event, topButton))

  topButton.addEventListener('click', () => handlerScrollTop(tasksList))

  renderTasks(tasksList)
}
