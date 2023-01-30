import { IHandleEvents } from 'interfaces'

export const handleChange = ({
  e,
  element,
  inst
}: IHandleEvents) => {
  const ELEMENT = e.target as HTMLElement
  const IMG = (ELEMENT as HTMLImageElement).alt
  const CHECKBOX = ELEMENT as HTMLInputElement

  if (typeof IMG === 'undefined') return

  const LI = ELEMENT.parentElement
  const ID = LI.getAttribute('data-id')

  if (IMG === 'Trash') {
    const CONFIRM = confirm('This sure?')

    if (!CONFIRM) return

    inst.removeTask(ID)

    element.removeChild(LI)
  }

  CHECKBOX.addEventListener('change', () => inst.isCompleted(ID))

  console.log('AAAAAAAAAA', inst.tasks)
}
