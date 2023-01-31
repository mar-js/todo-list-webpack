
import { IHandleEvents } from 'interfaces'

export const deleteAllTask = ({ inst, element }: IHandleEvents) => {
  const CONFIRM = confirm('This sure?')
  const TRASH = element.parentElement.children[2] as HTMLElement

  if (!CONFIRM) return

  TRASH.style.cssText = 'display: none !important'

  inst.removeAllTask()

  element.innerHTML = ''
}
