import { getDataLocalStorage, setDataLocalStorage } from '../utils.js'
import { renderTasks } from './renderTasks.js'

function deleteTask (id) {
  const tasks = getDataLocalStorage('tasks')
  const updateTasks = tasks.filter((item) => item.id !== id)
  setDataLocalStorage('tasks', updateTasks)
}

export function handlerDeleteTask (event, tasksListNode) {
  const { target } = event
  const parent = target.closest('div')
  if (target.classList.contains('delete-icon')) {
    if (confirm('delete task?')) {
      deleteTask(parent.id)
      renderTasks(tasksListNode)
    }
  }
}
