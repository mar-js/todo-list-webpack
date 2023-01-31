export interface ITask {
  created: string;
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface ITasks {
  tasks?: ITask[] | [];
  newTask?: (task: ITask) => void;
  isCompleted?: (id: string) => void;
  removeTask?: (id: string) => void;
  removeAllTask?: () => void;
}

export interface IEvent {
  e?: KeyboardEvent | MouseEvent | PointerEvent;

}

export interface IHandleEvents extends IEvent {
  input?: HTMLInputElement;
  element?: HTMLElement;
  inst: ITasks
}
