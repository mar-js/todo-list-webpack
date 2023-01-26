import { ITodos } from 'interfaces'

import { Container } from 'components'

export const deleteAllTodo = ({ removeAllTodo }: ITodos) => {
  removeAllTodo()

  Container.remove()
}
