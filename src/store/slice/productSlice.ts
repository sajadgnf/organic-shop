import FAKE_DATA, { ProductType } from "@src/common/fake-data"
import { createSlice } from "@reduxjs/toolkit"

type PropsType = {
  products: ProductType[]
  selectedCategories: string[]
}

const initialState: PropsType = {
  products: FAKE_DATA,
  selectedCategories: [],
}

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProduct: (state, action) => {
      const { checked, label } = action.payload
      const { products, selectedCategories } = state

      if (checked) {
        selectedCategories.push(label)
      } else {
        selectedCategories?.filter((category) => category !== label)
      }

      state.products = products?.filter((product) => selectedCategories.includes(product.category))
    },
  },
})

export const { filterProduct } = cartSlice.actions

export default cartSlice.reducer
