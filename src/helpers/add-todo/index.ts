import { IAddTodo } from 'interfaces';

import { Todo } from 'classes'

import { List } from 'components';

export const addTodo = ({element, newTodo}: IAddTodo) => {
  const VALUE = element.value
  const TASK = new Todo(VALUE)

  newTodo(TASK)

  List(TASK)

  return element.value = ''
}
