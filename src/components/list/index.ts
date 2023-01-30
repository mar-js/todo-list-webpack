import { Container } from 'components'

import { ITask } from 'interfaces'

export const List = ({
  id,
  task,
  isCompleted
}: ITask) => {
  const COMPONENT = `
    <li data-id="${id}" class="list-group-item d-flex align-items-center justify-content-between py-3 ${isCompleted && 'bg-success'}">
      <div class="form-check m-0 ${isCompleted && 'text-light'}">
        <input role="button" class="form-check-input" type="checkbox" ${isCompleted && 'checked'}  id="${id}">
        <label role="button" class="form-check-label" for="${id}" ${isCompleted && 'checked'}>
          ${task}
        </label>
      </div>
      <img role="button" src="assets/img/trash.svg" alt="Trash">
    </li>
  `

  Container.innerHTML += COMPONENT
}
