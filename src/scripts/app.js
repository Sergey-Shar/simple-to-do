import { createAddTasksBlock, createTopScrollBtn } from './components/ui'
import { getDataLocalStorage } from './utils'
import {
  handlerAddNewTask,
  handlerDeleteTask,
  handlerIsChecked,
  handlerDeleteAllTask,
  handlerShowScrollButton,
  handlerScrollTop,
  renderTasks,
  handleToggleTheme
} from './modules'

export const initApp = () => {
  let theme = null
  getDataLocalStorage('theme').length > 0 ? theme = getDataLocalStorage('theme') : theme = 'light'
  document.documentElement.setAttribute('theme', `${theme}`)
  const root = document.querySelector('#root')

  const container = document.createElement('main')
  container.className = 'container'

  const tasksList = document.createElement('div')
  tasksList.className = 'tasks-list'

  const addTasksBlock = createAddTasksBlock()
  const deleteAllTaskButton = addTasksBlock.querySelector('.delete-all-tasks__button')
  const toggleThemeButton = addTasksBlock.querySelector('.toggle-theme__button')
  const topButton = createTopScrollBtn()

  root.append(container)
  container.prepend(addTasksBlock)
  container.append(tasksList, topButton)

  addTasksBlock.addEventListener('submit', (event) => handlerAddNewTask(event, tasksList))

  tasksList.addEventListener('input', handlerIsChecked)

  tasksList.addEventListener('click', (event) => handlerDeleteTask(event, tasksList))

  deleteAllTaskButton.addEventListener('click', () => handlerDeleteAllTask(tasksList))

  toggleThemeButton.addEventListener('click', handleToggleTheme)

  tasksList.addEventListener('scroll', (event) => handlerShowScrollButton(event, topButton))

  topButton.addEventListener('click', () => handlerScrollTop(tasksList))

  renderTasks(tasksList)
}
