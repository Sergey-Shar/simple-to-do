function setDataLocalStorage (key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function getDataLocalStorage (key) {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

function clearInput (input) {
  input.value = ''
}

export { setDataLocalStorage, getDataLocalStorage, clearInput }
