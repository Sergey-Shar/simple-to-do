import { handlerAddNewTask } from './addTask'
import { handlerIsChecked } from './completedTask'
import { deleteAllTask, handlerDeleteAllTask } from './deleteAllTasks'
import { handlerDeleteTask } from './deleteTask'
import { renderTasks } from './renderTasks'
import { handlerScrollBottom, handlerShowScrollButton, handlerScrollTop } from './scrollTasks'
import { validate } from './validate'
import { handleToggleTheme } from './toggleTheme'

export {
  handlerAddNewTask,
  handlerDeleteAllTask,
  handlerDeleteTask,
  handlerIsChecked,
  handlerScrollBottom,
  handlerShowScrollButton,
  handlerScrollTop,
  deleteAllTask,
  renderTasks,
  validate,
  handleToggleTheme
}
