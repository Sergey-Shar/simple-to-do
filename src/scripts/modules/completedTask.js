import { getDataLocalStorage, setDataLocalStorage } from '../utils.js'

function compliedTask (id, checked) {
  const tasks = getDataLocalStorage('tasks')
  const updateTasks = tasks.map((item) => {
    if (item.id === id) {
      item.isCompleted = checked
      return item
    } else {
      return item
    }
  })
  setDataLocalStorage('tasks', updateTasks)
}

export function handlerIsChecked (event) {
  const { target } = event
  const idItem = target.closest('.task-card').id
  const checked = target.checked
  compliedTask(idItem, checked)
}
