import { AnyAction, Dispatch } from "redux"
import { ThunkDispatch } from "redux-thunk"

import { createAction } from "@src/store/Root/actionHelper"
import { EScrollDirection } from "@src/store/app/state"

type FunctionType = (...args: any[]) => any
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType }

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>

export enum AppActionTypes {
  SET_ACTIVE_PAGE = "@@app/SET_ACTIVE_PAGE",
  SET_SCROLL_DIRECTION = "@app/SET_SCROLL_DIRECTION",
  SET_TO_DO_HOW = "@app/SET_TO_DO_HOW",
  SET_TO_DO_WHAT = "@app/SET_TO_DO_WHAT",
}

export const AppActions = {
  setActivePage: (payload: number) => createAction(AppActionTypes.SET_ACTIVE_PAGE, payload),
  setScrollDirection: (payload: EScrollDirection) => createAction(AppActionTypes.SET_SCROLL_DIRECTION, payload),
  setToDoHow: (payload: string) => createAction(AppActionTypes.SET_TO_DO_HOW, payload),
  setToDoWhat: (payload: string) => createAction(AppActionTypes.SET_TO_DO_WHAT, payload),
}

export type AppActions = ActionsUnion<typeof AppActions>

export const AppActionCreators = {
  setActivePage: (activePage: number) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    return dispatch(AppActions.setActivePage(activePage))
  },
}
