import { getDataLocalStorage } from '../utils.js'
import { createTasksCard, createNotTaskBlock } from '../components/ui'

export const renderTasks = (listNode) => {
  listNode.innerHTML = ''
  const tasks = getDataLocalStorage('tasks')
  if (tasks.length > 0) {
    tasks.forEach(({ id, text, date, isCompleted }) => {
      const taskCard = createTasksCard(id, text, date, isCompleted)
      listNode.append(taskCard)
    })
  } else {
    const noTasks = createNotTaskBlock()
    listNode.append(noTasks)
  }
}
