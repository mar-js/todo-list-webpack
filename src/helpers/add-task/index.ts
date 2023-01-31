import { Task } from 'classes'

import { IHandleEvents } from 'interfaces'

import { List } from 'components'

export const addTask = ({
  e,
  input,
  inst,
  element
}: IHandleEvents) => {
  const { value } = input

  if (!value) return

  if (e.type === 'keyup' && (e as KeyboardEvent).key !== 'Enter') return

  const TASK = new Task(value)

  List(TASK)

  inst.newTask(TASK)

  if (inst.tasks.length > 1) element.style.cssText = 'display: inline-block !important'
}
