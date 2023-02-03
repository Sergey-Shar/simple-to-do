import { getDataLocalStorage } from '../utils.js'

export const validate = (value) => {
  const tasks = getDataLocalStorage('tasks')
  if (tasks.some(({ text }) => text === value)) {
    alert('this case already exists!')
    return false
  } else if (!value.trim()) {
    alert('field cannot be empty!')
    return false
  }
  return true
}
