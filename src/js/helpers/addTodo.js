import { Todo } from '../classes/'
import { List } from '../components';

export const ADD_TODO = (inputElement, todoList) => {
  const VALUE = inputElement.value
  const TASK = new Todo(VALUE)

  todoList.newTodo(TASK)

  List(TASK)

  return inputElement.value = ''
}
