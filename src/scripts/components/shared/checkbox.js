export const createCheckbox = (className, id, name, checked) => {
  const checkbox = document.createElement('input')
  checkbox.className = className
  checkbox.type = 'checkbox'
  checkbox.id = id
  checkbox.name = name
  checkbox.checked = checked
  return checkbox
}
