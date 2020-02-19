export enum EScrollDirection {
  DOWN = 1,
  NONE = 0,
  UP = -1,
}

export interface IAppState {
  activePage: number
  scrollDirection: EScrollDirection
  toDoHow: string
  toDoWhat: string
}
