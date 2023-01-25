import { ITodoList } from "interfaces"

import { Container } from "components"

export const deleteAllTodo = ({ removeAllTodo }: ITodoList) => {
  removeAllTodo()

  Container.remove()
}
