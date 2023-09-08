"use client"
import { Provider } from "react-redux"
import store, { persistor } from "@src/store"
import React, { ReactElement, ReactNode } from "react"
import { PersistGate } from "redux-persist/integration/react"

const ReduxProvider = ({ children }: { children: ReactNode | ReactElement }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
