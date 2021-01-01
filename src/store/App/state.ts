export enum EScrollDirection {
  DOWN = 1,
  NONE = 0,
  UP = -1,
}

export interface AppStateType {
  activePage: number
  scrollDirection: EScrollDirection
  toDoHow: string
  toDoWhat: string
}

export const initialState: AppStateType = {
  activePage: 0,
  scrollDirection: EScrollDirection.NONE,
  toDoHow: "",
  toDoWhat: "",
}
