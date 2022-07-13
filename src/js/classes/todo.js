export class Todo {
  constructor(task) {
    this.created = new Date()
    this.id = new Date().getTime().toString()
    this.task = task
    this.isCompleted = false
  }
}
