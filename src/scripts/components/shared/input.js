export const createInput = (className, name, type, id, placeholder, focus = false) => {
  const input = document.createElement('input')
  input.className = className
  input.name = name
  input.id = id
  input.type = type
  input.placeholder = placeholder
  input.autofocus = focus
  return input
}
