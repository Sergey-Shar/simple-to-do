export function createTasksCard (id, task, date, isCompleted) {
  const taskCard = document.createElement('div')
  taskCard.className = 'task-card'
  taskCard.id = id

  const taskText = document.createElement('div')
  taskText.className = 'task-text-wrapper'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.id = `task${id}`
  checkbox.className = 'checked-task'
  checkbox.checked = isCompleted
  checkbox.name = `task${id}`

  const checkStyle = document.createElement('span')
  checkStyle.className = 'check-style'

  const label = document.createElement('label')
  label.className = 'task-label'
  label.htmlFor = `task${id}`
  label.textContent = task

  taskText.append(checkbox, checkStyle, label)

  const deleteCardBtn = document.createElement('button')
  deleteCardBtn.className = 'delete-card__button'
  deleteCardBtn.type = 'button'
  const deleteIcon = document.createElement('span')
  deleteIcon.className = 'delete-icon'
  deleteIcon.innerHTML = '&times'
  deleteCardBtn.appendChild(deleteIcon)

  const creationTaskDate = document.createElement('span')
  creationTaskDate.className = 'creation-task-date'
  creationTaskDate.textContent = date

  taskCard.append(taskText, deleteCardBtn, creationTaskDate)

  return taskCard
}
