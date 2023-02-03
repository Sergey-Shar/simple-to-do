import { createButton, createCheckbox, createLabel } from '../shared'

export const createTasksCard = (id, task, date, isCompleted) => {
  const taskCard = document.createElement('div')
  taskCard.className = 'task-card'
  taskCard.id = id

  const taskText = document.createElement('div')
  taskText.className = 'task-text-wrapper'

  const checkbox = createCheckbox('checked-task', `task${id}`, `task${id}`, isCompleted)

  const checkStyle = document.createElement('span')
  checkStyle.className = 'check-style'

  const label = createLabel('task-label', `task${id}`, task)

  taskText.append(checkbox, checkStyle, label)

  const deleteCardBtn = createButton('delete-card__button', 'button', '&times')

  const creationTaskDate = document.createElement('span')
  creationTaskDate.className = 'creation-task-date'
  creationTaskDate.textContent = date

  taskCard.append(taskText, deleteCardBtn, creationTaskDate)

  return taskCard
}
