import { ContainerList } from "../components"

export const REMOVE_TODO = (event, todoList) => {
  const TARGET = event.target
  const LI = event.target.offsetParent
  const ID = LI.getAttribute('data-id')
  const IMG = TARGET.getAttribute('alt')

  if (!ID) return

  if (IMG === 'Trash') {
    const DECISION = confirm('you want to delete it?')

    if (!DECISION) return

    todoList.removeTodo(ID)

    return ContainerList.removeChild(LI)
  }
}
