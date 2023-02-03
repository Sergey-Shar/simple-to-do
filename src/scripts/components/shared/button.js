export const createButton = (className, type, children) => {
  const button = document.createElement('button')
  button.className = className
  button.type = type
  button.innerHTML = children
  return button
}
