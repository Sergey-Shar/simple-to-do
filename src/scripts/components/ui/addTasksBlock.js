import { createButton, createInput } from '../shared'

export const createAddTasksBlock = () => {
  const wrapper = document.createElement('div')
  wrapper.className = 'create-task-block-wrapper'

  const form = document.createElement('form')
  form.className = 'create-task-block'
  form.noValidate = true

  const deleteAllTasksBtn = createButton('delete-all-tasks__button', 'button', 'DELETE ALL')
  const addTasksInput = createInput('add-tasks__input', 'taskName', 'text', 'task', 'task...', true)
  const addTasksBtn = createButton('add-tasks__button', 'submit', 'NEW')

  form.append(deleteAllTasksBtn, addTasksInput, addTasksBtn)
  wrapper.append(form)

  return wrapper
}
