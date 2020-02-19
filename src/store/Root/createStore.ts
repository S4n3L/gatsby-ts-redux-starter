import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import { appReducer, initialState } from "@src/store/App/reducer"

const preloadedState = () => {
  return createStore(appReducer, initialState, applyMiddleware(thunk))
}

export default preloadedState
