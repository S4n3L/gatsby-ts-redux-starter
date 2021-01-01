import produce from "immer"

import { AppActions, AppActionTypes } from "@src/store/App/actions"
import { EScrollDirection, AppStateType, initialState } from "@src/store/App/state"



export const appReducer = (state: AppStateType = initialState, action: AppActions) => {
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
