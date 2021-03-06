import { ContainerList } from './'

export const List = ({ creatred, id, task, isCompleted }) => {
  const COMPONENT = `
    <li data-id="${id}" class="list-group-item d-flex align-items-center justify-content-between py-3">
      <div class="form-check m-0">
        <input role="button" class="form-check-input" type="checkbox" ${isCompleted && 'checked'}  id="${id}">
        <label role="button" class="form-check-label" for="${id}" ${isCompleted && 'checked'}>
          ${task}
        </label>
      </div>
      <img role="button" src="assets/img/trash.svg" alt="Trash">
    </li>
  `

  return ContainerList.innerHTML += COMPONENT
}
