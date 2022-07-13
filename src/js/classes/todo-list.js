export class TodoList {
  constructor() {
    this.todos = []
  }

  newTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(id) {
    this.todos = [...this.todos.filter(todo => todo.id !== id)]
  }

  isCompleted(id) {
    this.todos = [...this.todos.map(todo => todo.id === id && !todo.isCompleted)]
  }

  removeAllTodo() {
    this.todos = []
  }
}
