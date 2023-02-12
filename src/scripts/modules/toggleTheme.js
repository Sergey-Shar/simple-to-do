import { getDataLocalStorage, setDataLocalStorage } from '../utils'
import sunIcon from '../../assets/sun.png'
import darkIcon from '../../assets/dark.png'

export const handleToggleTheme = (event) => {
  const { target } = event
  const iconItem = target.querySelector('.toggle-theme__icon')
  if (getDataLocalStorage('theme') === 'dark') {
    setDataLocalStorage('theme', 'light')
    document.documentElement.setAttribute('theme', 'light')
    iconItem.src = sunIcon
  } else {
    setDataLocalStorage('theme', 'dark')
    document.documentElement.setAttribute('theme', 'dark')
    iconItem.src = darkIcon
  }
}
