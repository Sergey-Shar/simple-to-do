export function handlerScrollTop (tasksListNode) {
  tasksListNode.scrollTo({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
}

export const handlerScrollBottom = (tasksListNode) => {
  tasksListNode.scrollTo({
    left: 0,
    top: tasksListNode.scrollHeight - tasksListNode.clientHeight,
    behavior: 'smooth'
  })
}

export const handlerShowScrollButton = (event, topButton) => {
  if (event.currentTarget.scrollTop > 100) {
    topButton.classList.add('active')
  } else {
    topButton.classList.remove('active')
  }
}
