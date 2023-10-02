import rootReducer from "./rootReducer"
import storage from "redux-persist/lib/storage"
import { persistStore, persistReducer } from "redux-persist"
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import { ProductType } from "@src/common/fake-data"

export interface RootState {
  cartSlice: {
    id: string
    checkout: boolean
    totalPrice: number
    totalDiscount: number
    itemsCounter: number
    selectedItems: [{ id: string; title: string; quantity: number; img: string; type: { id: string; price: string, discount:string } }]
  }
  productSlice: { filteredProducts: ProductType[]; searchedProducts: ProductType[]; clearFilters: boolean }
  loginSlice: { phoneNumber: string }
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
