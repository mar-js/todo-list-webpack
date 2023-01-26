import { IEvent } from 'interfaces'

import { getElement } from 'helpers'

import { Container } from 'components'

export const deleteTodo = ({ e, removeTodo }: IEvent) => {
  const {
    img,
    id,
    elementLi
  } = getElement({ e })

  if (img === 'Trash') {
    const DECISION = confirm('you want to delete it?')

    if (!DECISION) return

    removeTodo(id)

    Container.removeChild(elementLi)
  }
}
