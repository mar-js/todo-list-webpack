export const IS_COMPLETED = (event, todoList) => {
  const TARGET = event.target
  const IS_CHECKED = TARGET.checked
  const LI = event.target.offsetParent
  const ID = LI.getAttribute('data-id')

  if (!ID) return

  if (typeof IS_CHECKED === 'undefined') return

  if (IS_CHECKED) {
    todoList.isCompleted(ID)

    LI.style.color = '#606060'
    LI.style.backgroundColor = '#dbeaff'
    LI.style.fontWeight = 'bold'
  } else {
    LI.style.color = ''
    LI.style.backgroundColor = ''
    LI.style.fontWeight = ''
  }
}
