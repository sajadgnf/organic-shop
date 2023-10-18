"use client"
import { Provider } from "react-redux"
import store, { persistor } from "@src/store"
import { PersistGate } from "redux-persist/integration/react"
import React, { ReactElement, ReactNode, useEffect } from "react"

const ReduxProvider = ({ children }: { children: ReactNode | ReactElement }) => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope)
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error)
          })
      })
    }
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
