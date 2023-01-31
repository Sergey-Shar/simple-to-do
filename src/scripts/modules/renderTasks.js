import { getDataLocalStorage } from '../utils.js'
import { createTasksCard } from '../components/tasksCard.js'
import { createNotTaskBlock } from '../components/notTasksBlock.js'

export function renderTasks (listNode) {
  listNode.innerHTML = ''
  const tasks = getDataLocalStorage('tasks')
  if (tasks.length > 0) {
    tasks.forEach(({ id, text, data, isCompleted }) => {
      const taskCard = createTasksCard(id, text, data, isCompleted)
      listNode.append(taskCard)
    })
  } else {
    const noTasks = createNotTaskBlock()
    listNode.append(noTasks)
  }
}
