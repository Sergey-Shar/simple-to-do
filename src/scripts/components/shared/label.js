export const createLabel = (className, id, text) => {
  const label = document.createElement('label')
  label.className = className
  label.htmlFor = id
  label.textContent = text
  return label
}
