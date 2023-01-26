import { ITodo } from 'interfaces'

export class Todos {
  todos: ITodo[] | []

  constructor() {
    this.todos = []
  }

  newTodo(todo: ITodo) {
    this.todos = [ ...this.todos, todo ]
  }

  removeTodo(id: string) {
    this.todos = [ ...this.todos.filter((todo: ITodo) => todo.id !== id) ]
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
