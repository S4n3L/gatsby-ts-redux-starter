import produce from "immer"

import { AppActions, AppActionTypes } from "@src/store/App/actions"
import { EScrollDirection, IAppState } from "@src/store/App/state"

export const initialState: IAppState = {
  activePage: 0,
  scrollDirection: EScrollDirection.NONE,
  toDoHow: "",
  toDoWhat: "",
}

export const appReducer = (state: IAppState = initialState, action: AppActions) => {
   switch (action.type) {
    case AppActionTypes.SET_ACTIVE_PAGE:
      return produce(state, (draftState) => {draftState.activePage = action.payload})
    case AppActionTypes.SET_SCROLL_DIRECTION:
      return produce(state, (draftState) => {draftState.scrollDirection = action.payload})
    case AppActionTypes.SET_TO_DO_HOW:
      return produce(state, (draftState) => {draftState.toDoHow = action.payload})
    case AppActionTypes.SET_TO_DO_WHAT:
      return produce(state, (draftState) => {draftState.toDoWhat = action.payload})
    default:
      return state
  }
}
