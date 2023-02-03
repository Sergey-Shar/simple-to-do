export const createTopScrollBtn = () => {
  const topButton = document.createElement('button')
  topButton.type = 'button'
  topButton.className = 'top-button'
  topButton.innerHTML = '&#8593'
  return topButton
}
