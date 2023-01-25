import { IEvent, IGetElement } from "interfaces"

export const getElement = ({ e }: IEvent): IGetElement => {
  const TARGET = e.target as HTMLInputElement
  const ELEMENT_LI = TARGET.offsetParent as HTMLElement
  const ID = ELEMENT_LI.getAttribute('data-id')
  const IMG = TARGET.getAttribute('alt')
  const IS_CHECKED = TARGET.checked

  if (!ID) return

  return {
    id: ID,
    img: IMG,
    isChecked: IS_CHECKED,
    elementLi: ELEMENT_LI
  }
}
