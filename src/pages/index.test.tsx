import React from "react"
// import moxios from "moxios"
import { AnyAction } from "redux"
import thunk, { ThunkDispatch } from "redux-thunk"
import { Provider } from "react-redux"
// import { Router } from "react-router"
import { createMemoryHistory } from "history"
// import { HelmetProvider } from "react-helmet-async"
import configureMockStore, { MockStoreEnhanced } from "redux-mock-store"
import { act, cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
// import faker from "faker"

// import SignupPage from "@client/pages/Signup"
import IndexPage from "@src/pages/"
// import { appReducer } from "@src/client/store/app/reducer"
import { AppStateType, initialState } from "@src/store/app/state"
// import { mockedCauseAreas } from "@client/store/cause/__mocks__/data"

type ThunkDispatchType = ThunkDispatch<{}, any, AnyAction>

const middlewares = [thunk]
const mockStore = configureMockStore<AppStateType, ThunkDispatchType>(middlewares)
jest.mock("@src/pages/index.scss", () => { return {} })
// jest.mock("@src/client/utils/mixpanelHelper", () => {
//   return jest.fn().mockImplementation(() => {
//     return {}
//   })
// })

const mockedState = {
  ...initialState
}

interface TestComponentType {
  container: Element,
  store: MockStoreEnhanced<AppStateType, ThunkDispatchType>
}

const createComponent = (state: AppStateType, withDebug?: boolean): TestComponentType => {
  const history = createMemoryHistory()
  const store = mockStore(state)

  const { container, debug } = render(
    <Provider store={store}>
      <IndexPage />
    </Provider>
  )
  if (withDebug) {
    debug()
  }
  return {
    container,
    store
  }
}

test("Should render correctly", async () => {
  createComponent(mockedState, false)
  expect(screen.getByText("Hello index page!")).not.toBeEmptyDOMElement
})

afterEach(cleanup)
