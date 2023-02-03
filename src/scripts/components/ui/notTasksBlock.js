export const createNotTaskBlock = () => {
  const noTasks = document.createElement('h3')
  noTasks.className = 'no-plans'
  noTasks.textContent = 'You don`t have tasks'
  return noTasks
}
