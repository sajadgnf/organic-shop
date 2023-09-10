import rootReducer from "./rootReducer"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"

export interface RootState {
  cartSlice: {
    total: number
    checkout: boolean
    itemsCounter: number
    selectedItems: [{ id: string; quantity: number; price: number; type: { id: string }[] }]
  }
}

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

export default store

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
