/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import { appReducer, initialState } from "@src/store/App/reducer"

const store = createStore(appReducer, initialState, applyMiddleware(thunk))

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export const onRenderBody = ({ setPostBodyComponents }) => {
  const reduxInitGlobal = () => {
    return (
      <script key="custom-1" id="redux-initial-state"
        dangerouslySetInnerHTML={{
        __html: `window.INITIAL_STATE=${JSON.stringify(store.getState())}`,
      }}>
      </script>
    )
  }
  setPostBodyComponents([reduxInitGlobal()])
}
