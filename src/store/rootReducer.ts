import { combineReducers } from "redux"
import cartSlice from "./slice/cartSlice"
import productSlice from "./slice/productSlice"

const rootReducer = combineReducers({
  cartSlice: cartSlice,
  productSlice: productSlice,
})

export default rootReducer
