// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';

// JS
import { TodoList } from 'classes'

import {
  isComplete,
  deleteTodo,
  deleteAllTodo,
  addTodoInEvent
} from 'helpers';

import { Container } from 'components';

const INPUT = document.getElementById('taskText') as HTMLInputElement
const SEND = document.getElementById('send') as HTMLButtonElement
const CONTAINER_TRASH_BIG = document.getElementById('containerTrashBig')
const {
  todos,
  newTodo,
  isCompleted,
  removeTodo,
  removeAllTodo
} = new TodoList()

document.addEventListener('DOMContentLoaded', () => {
  if (!todos.length) CONTAINER_TRASH_BIG.style.display = 'none'

  CONTAINER_TRASH_BIG.addEventListener('click', () => deleteAllTodo({ removeAllTodo }))

  INPUT.addEventListener('keyup', e => {
    const VALUE = e.target as unknown as HTMLInputElement
    const KEY = e.key

    if (!VALUE) return

    if (KEY === 'Enter') {
      addTodoInEvent({
        element: INPUT,
        newTodo,
        todos,
        component: CONTAINER_TRASH_BIG
      })
    }
  })

  SEND.addEventListener('click', () => {
    if (!INPUT.value) return

    addTodoInEvent({
      element: INPUT,
      newTodo,
      todos,
      component: CONTAINER_TRASH_BIG
    })
  })

  Container.addEventListener('click', e => {
    deleteTodo({ e, removeTodo })
    isComplete({ e, isCompleted })
  })
})
