import { ContainerList } from "../components"

export const REMOVE_ALL_TODO = todoList => {
  todoList.removeAllTodo()

  ContainerList.remove()
}
