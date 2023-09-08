import { combineReducers } from "redux"
import cartSlice from "./slice/cartSlice"

const rootReducer = combineReducers({
  cartSlice: cartSlice,
})

export default rootReducer
