// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'

import { Tasks } from 'classes'

import {
  addTask,
  deleteAllTask,
  handleChange
} from 'helpers'

import { Container } from 'components'

const INPUT = document.getElementById('task') as HTMLInputElement
const SEND = document.getElementById('send')
const TRASH = document.getElementById('trash') as HTMLImageElement
const TASKS = new Tasks()

document.addEventListener('DOMContentLoaded', () => {
  TRASH.addEventListener('click', function(e) {
    deleteAllTask({
      e,
      inst: TASKS,
      element: Container
    })
  })

  INPUT.addEventListener('keyup', function(e) {
    addTask({
      e,
      input: this,
      inst: TASKS,
      element: TRASH
    })
  })

  SEND.addEventListener('click', function(e) {
    addTask({
      e,
      input: INPUT,
      inst: TASKS,
      element: TRASH
    })
  })

  Container.addEventListener('click', function(e) {
    handleChange({
      e,
      element: this,
      inst: TASKS
    })
  })
})
