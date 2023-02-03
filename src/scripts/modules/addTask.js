import { getDataLocalStorage, setDataLocalStorage, clearInput } from '../utils.js'
import { validate } from './validate.js'
import { renderTasks } from './renderTasks.js'
import { handlerScrollBottom } from './scrollTasks.js'

const createTask = (value) => {
  return {
    id: Date.now().toString(),
    text: value,
    date: new Date().toLocaleDateString(),
    isCompleted: false
  }
}

const addTask = (value) => {
  const tasks = getDataLocalStorage('tasks')
  tasks.push(createTask(value))
  setDataLocalStorage('tasks', tasks)
}

export const handlerAddNewTask = (event, tasksListNode) => {
  event.preventDefault()
  const { target } = event
  const input = target.taskName
  const isValidate = validate(input.value)
  if (isValidate) {
    addTask(input.value)
    renderTasks(tasksListNode)
    clearInput(input)
    handlerScrollBottom(tasksListNode)
  }
}
