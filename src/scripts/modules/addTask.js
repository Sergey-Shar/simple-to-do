import { getDataLocalStorage, setDataLocalStorage, clearInput } from '../utils.js'
import { validate } from './validate.js'
import { renderTasks } from './renderTasks.js'
import { handlerScrollBottom } from './scrollTasks.js'

function createTask (value) {
  return {
    id: Date.now().toString(),
    text: value,
    data: new Date().toLocaleDateString(),
    name: 'task2',
    isCompleted: false
  }
}

function addTask (value) {
  const tasks = getDataLocalStorage('tasks')
  tasks.push(createTask(value))
  setDataLocalStorage('tasks', tasks)
}

export function handlerAddNewTask (event, tasksListNode) {
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
