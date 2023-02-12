import JSConfetti from 'js-confetti'
const setDataLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}

const getDataLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key) ?? '[]')
}

const clearInput = (input) => {
  input.value = ''
}

const showConfetti = () => {
  const jsConfetti = new JSConfetti()
  jsConfetti.addConfetti({ confettiRadius: 6, confettiNumber: 500 })
}

export { setDataLocalStorage, getDataLocalStorage, clearInput, showConfetti }
