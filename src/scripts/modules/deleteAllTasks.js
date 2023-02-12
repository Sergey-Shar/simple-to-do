import { getDataLocalStorage, setDataLocalStorage, showConfetti } from '../utils.js'
import { renderTasks } from './renderTasks.js'

export const deleteAllTask = () => {
  const tasks = getDataLocalStorage('tasks')
  if (tasks.length > 0 && confirm('delete all task?')) {
    tasks.length = 0
    setDataLocalStorage('tasks', tasks)
    showConfetti()
  } else {
    alert('you have no tasks!')
  }
}

export const handlerDeleteAllTask = (tasksListNode) => {
  deleteAllTask()
  renderTasks(tasksListNode)
}
