export class Task {
  created: string
  id: string
  task: string
  isCompleted: boolean

  constructor(task: string) {
    this.created = new Date().toDateString()
    this.id = new Date().getTime().toString()
    this.task = task
    this.isCompleted = false
  }
}
