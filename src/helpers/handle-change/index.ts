import { IHandleEvents } from 'interfaces'

export const handleChange = ({
  e,
  element,
  inst
}: IHandleEvents) => {
  const ELEMENT = e.target as HTMLElement
  const IMG = (ELEMENT as HTMLImageElement).alt

  if (typeof IMG === 'undefined') return

  const LI = ELEMENT.parentElement
  const ID = LI.getAttribute('data-id')

  if (!ID) return

  if (IMG === 'Trash') {
    const CONFIRM = confirm('This sure?')
    const TRASH = element.parentElement.children[2] as HTMLElement

    if (!CONFIRM) return

    inst.removeTask(ID)

    element.removeChild(LI)

    if (inst.tasks.length < 2) TRASH.style.cssText = 'display: none !important'
  }
}
