import { getDataLocalStorage } from '../utils.js'

export function validate (value) {
  const tasks = getDataLocalStorage('tasks')
  if (tasks.some((task) => task.text === value)) {
    alert('this case already exists!')
    return false
  } else if (!value.trim()) {
    alert('field cannot be empty!')
    return false
  }
  return true
}
