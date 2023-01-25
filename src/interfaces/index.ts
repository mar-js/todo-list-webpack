export interface ITodo {
  created: string;
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface ITodoList {
  todos?: ITodo[] | [];
  newTodo?: (todo: ITodo) => void;
  isCompleted?: (id: string) => void;
  removeTodo?: (id: string) => void;
  removeAllTodo?: () => void;
}

export interface IAddTodo extends ITodoList {
  element: HTMLInputElement;
}

export interface IEvent extends ITodoList {
  e: MouseEvent | KeyboardEvent;
}

export interface IAddTodoInEvent  extends IAddTodo {
  component: HTMLElement;
}

export interface IGetElement {
  id: string;
  img: string;
  isChecked: boolean;
  elementLi: HTMLElement;
}
