// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'

import { Tasks } from 'classes'

import { addTask, handleChange } from 'helpers'

import { Container } from 'components'

const INPUT = document.getElementById('task') as HTMLInputElement
const SEND = document.getElementById('send')
const TASKS = new Tasks()

document.addEventListener('DOMContentLoaded', () => {
  Container.addEventListener('click', function(e) {
    handleChange({
      e,
      element: this,
      inst: TASKS
    })
  })

  INPUT.addEventListener('keyup', function(e) {
    addTask({
      e,
      input: this,
      inst: TASKS
    })
  })

  SEND.addEventListener('click', function(e) {
    addTask({
      e,
      input: INPUT,
      inst: TASKS
    })
  })
})
