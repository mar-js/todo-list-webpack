import { ITodo } from 'interfaces'

export class TodoList {
  todos: ITodo[] | []

  constructor() {
    this.todos = []
  }

  newTodo(todo: ITodo) {
    this.todos = [ ...this.todos, todo ]
  }

  removeTodo(id: string) {
    this.todos = [ ...this.todos.filter(todo => todo.id !== id) ]
  }

  isCompleted(id: string) {
    this.todos = [
      ...this.todos.map(todo => todo.id === id && ({
        ...todo,
        isCompleted: !todo.isCompleted
      }))
    ]
  }

  removeAllTodo() {
    this.todos = []
  }
}
