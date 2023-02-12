export const createButton = (className, type, children) => {
  const button = document.createElement('button')
  const childrenBtn = document.createElement('span')
  childrenBtn.className = 'icon-btn'
  childrenBtn.innerHTML = children
  button.className = className
  button.type = type
  button.appendChild(childrenBtn)
  return button
}
