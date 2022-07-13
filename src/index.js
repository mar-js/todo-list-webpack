// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// JS
import { TodoList } from './js/classes/'
import { ContainerList } from './js/components';
import {
  ADD_TODO,
  IS_COMPLETED,
  REMOVE_TODO,
  REMOVE_ALL_TODO
} from './js/helpers/';

const INPUT = document.getElementById('taskText')
const SEND = document.getElementById('send')
const CONTAINER_TRASH_BIG = document.getElementById('containerTrashBig')
const TODO_LIST = new TodoList()

document.addEventListener('DOMContentLoaded', () => {
  if (!TODO_LIST.todos.length) CONTAINER_TRASH_BIG.style.display = 'none'

  CONTAINER_TRASH_BIG.addEventListener('click', () => REMOVE_ALL_TODO(TODO_LIST))

  INPUT.addEventListener('keyup', e => {
    if (!e.target.value) return

    if (e.key === 'Enter') {
      ADD_TODO(INPUT, TODO_LIST)

      return TODO_LIST.todos.length && (CONTAINER_TRASH_BIG.style.display = 'flex')
    }
  })
  SEND.addEventListener('click', () => {
    if (!INPUT.value) return

    ADD_TODO(INPUT, TODO_LIST)

    return TODO_LIST.todos.length && (CONTAINER_TRASH_BIG.style.display = 'flex')
  })
  ContainerList.addEventListener('click', e => {
    REMOVE_TODO(e, TODO_LIST)
    IS_COMPLETED(e, TODO_LIST)
  })

})
