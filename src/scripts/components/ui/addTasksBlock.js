import { createButton, createInput } from '../shared'
import sunIcon from '../../../assets/sun.png'
import darkIcon from '../../../assets/dark.png'
import { getDataLocalStorage } from '../../utils'

const setIcon = () => {
  if (getDataLocalStorage('theme') === 'dark') {
    return darkIcon
  } else {
    return sunIcon
  }
}

export const createAddTasksBlock = () => {
  const wrapper = document.createElement('div')
  wrapper.className = 'create-task-block-wrapper'

  const form = document.createElement('form')
  form.className = 'create-task-block'
  form.noValidate = true

  const deleteAllTasksBtn = createButton('delete-all-tasks__button', 'button', 'DELETE ALL')
  const addTasksInput = createInput('add-tasks__input', 'taskName', 'text', 'task', 'task...', true)
  const addTasksBtn = createButton('add-tasks__button', 'submit', 'NEW')
  const toggleThemeIcon = `<img class="toggle-theme__icon" src=${setIcon()} >`
  const toggleThemeBtn = createButton('toggle-theme__button', 'button', toggleThemeIcon)

  form.append(deleteAllTasksBtn, addTasksInput, addTasksBtn, toggleThemeBtn)
  wrapper.append(form)

  return wrapper
}
