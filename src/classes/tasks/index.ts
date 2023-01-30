import { ITask } from 'interfaces'

export class Tasks {
  tasks: ITask[] | []

  constructor() {
    this.tasks = []
  }

  newTask(task: ITask) {
    this.tasks = [ ...this.tasks, task ]
  }

  removeTask(id: string) {
    this.tasks = [ ...this.tasks.filter((task: ITask) => task.id !== id) ]
  }

  isCompleted(id: string) {
    this.tasks = [
      ...this.tasks.map(task => task.id === id && ({
        ...task,
        isCompleted: !task.isCompleted
      }))
    ]
  }

  removeAllTask() {
    this.tasks = []
  }
}
