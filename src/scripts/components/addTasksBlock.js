export function createAddTasksBlock () {
  const wrapper = document.createElement('div')
  wrapper.className = 'create-task-block-wrapper'

  const form = document.createElement('form')
  form.className = 'create-task-block'
  form.noValidate = true

  const deleteAllTasksBtn = document.createElement('button')
  deleteAllTasksBtn.className = 'delete-all-tasks__button'
  deleteAllTasksBtn.type = 'button'
  deleteAllTasksBtn.textContent = 'delete all'

  const addTasksInput = document.createElement('input')
  addTasksInput.className = 'add-tasks__input'
  addTasksInput.name = 'taskName'
  addTasksInput.type = 'text'
  addTasksInput.placeholder = 'task...'
  addTasksInput.value = ''
  addTasksInput.autofocus = true

  const addTasksBtn = document.createElement('button')
  addTasksBtn.className = 'add-tasks__button'
  addTasksBtn.type = 'submit'
  addTasksBtn.textContent = 'new'

  form.append(deleteAllTasksBtn, addTasksInput, addTasksBtn)
  wrapper.append(form)

  return wrapper
}
