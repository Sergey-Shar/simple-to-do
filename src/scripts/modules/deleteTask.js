import { getDataLocalStorage, setDataLocalStorage, showConfetti } from '../utils.js'
import { renderTasks } from './renderTasks.js'

const deleteTask = (id) => {
  const tasks = getDataLocalStorage('tasks')
  if (tasks.length === 1) {
    showConfetti()
  }
  const updateTasks = tasks.filter((item) => item.id !== id)
  setDataLocalStorage('tasks', updateTasks)
}

export const handlerDeleteTask = (event, tasksListNode) => {
  const { target } = event
  const parent = target.closest('div')
  if (target.classList.contains('delete-card__button') || target.classList.contains('icon-btn')) {
    if (confirm('delete task?')) {
      deleteTask(parent.id)
      renderTasks(tasksListNode)
    }
  }
}
