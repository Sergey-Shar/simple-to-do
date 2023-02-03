const setDataLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

const getDataLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

const clearInput = (input) => {
  input.value = ''
}

export { setDataLocalStorage, getDataLocalStorage, clearInput }
