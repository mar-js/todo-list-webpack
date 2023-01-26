import { IEvent } from 'interfaces'

import { getElement } from 'helpers'

export const isComplete = ({ e, isCompleted }: IEvent) => {
  const {
    isChecked,
    id,
    elementLi
  } = getElement({ e })

  if (typeof isChecked === 'undefined') return

  if (isChecked) {
    isCompleted(id)

    elementLi.style.color = '#606060'
    elementLi.style.backgroundColor = '#dbeaff'
    elementLi.style.fontWeight = 'bold'
  } else {
    elementLi.style.color = ''
    elementLi.style.backgroundColor = ''
    elementLi.style.fontWeight = ''
  }
}
