import { getDataLocalStorage, setDataLocalStorage } from '../utils.js'
import { renderTasks } from './renderTasks.js'

export function deleteAllTask () {
  const tasks = getDataLocalStorage('tasks')
  if (tasks.length > 0 && confirm('delete all task?')) {
    tasks.length = 0
    setDataLocalStorage('tasks', tasks)
  } else {
    alert('you have no tasks!')
  }
}

export function handlerDeleteAllTask (tasksListNode) {
  deleteAllTask()
  renderTasks(tasksListNode)
}
