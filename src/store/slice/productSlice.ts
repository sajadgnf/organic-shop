import FAKE_DATA, { ProductType } from "@src/common/fake-data"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PropsType {
  products: ProductType[]
  selectedCategories: string[]
  clearFilters: boolean
}

const initialState: PropsType = {
  products: FAKE_DATA,
  clearFilters: false,
  selectedCategories: [],
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterCategory: (state, action: PayloadAction<{ checked: boolean; label: string }>) => {
      const { checked, label } = action.payload
      let { selectedCategories } = state
      state.clearFilters = false

      if (checked) {
        selectedCategories.push(label)
      } else {
        const index = selectedCategories.indexOf(label)
        if (index !== -1) {
          selectedCategories.splice(index, 1)
        }
      }

      const filteredProducts =
        selectedCategories.length === 0 ? FAKE_DATA : FAKE_DATA.filter((product) => selectedCategories.includes(product.category))

      state.products = [...filteredProducts]
      selectedCategories = Array.from(new Set(selectedCategories))
    },
    filterAvailable: (state, action) => {
      state.clearFilters = false
      const filteredProducts = action.payload
        ? FAKE_DATA.filter((product) => product.type.some((item) => item.stockOut === false))
        : FAKE_DATA

      state.products = filteredProducts
    },
    clearFilter: (state) => {
      state.clearFilters = true
      state.products = FAKE_DATA
      state.selectedCategories = []
    },
  },
})

export const { filterCategory, filterAvailable, clearFilter } = productSlice.actions

export default productSlice.reducer
