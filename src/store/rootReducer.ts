import { combineReducers } from "redux"
import cartSlice from "./slice/cartSlice"
import loginSlice from "./slice/loginSlice"
import productSlice from "./slice/productSlice"

const rootReducer = combineReducers({
  cartSlice: cartSlice,
  loginSlice: loginSlice,
  productSlice: productSlice,
})

export default rootReducer
