/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import { appReducer } from "@src/store/App/reducer"

const jsonState  = window.INITIAL_STATE
const store = createStore(appReducer, jsonState, composeWithDevTools(applyMiddleware(thunk)))

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}


