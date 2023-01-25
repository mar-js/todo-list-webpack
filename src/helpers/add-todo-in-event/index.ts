import { IAddTodoInEvent } from 'interfaces';

import {  addTodo } from 'helpers';

export const addTodoInEvent = ({
  element,
  newTodo,
  todos,
  component
}: IAddTodoInEvent) => {
  addTodo({ element, newTodo })

  return todos.length && (component.style.display = 'flex')
}
