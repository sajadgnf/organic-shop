import FAKE_DATA, { ProductType } from "@src/common/fake-data"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface PropsType {
  clearFilters: boolean
  searchProducts: string
  products: ProductType[]
  availableProducts: boolean
  selectedCategories: string[]
}

const initialState: PropsType = {
  searchProducts: "",
  products: FAKE_DATA,
  clearFilters: false,
  selectedCategories: [],
  availableProducts: false,
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

      let products = []
      products =
        !state.availableProducts && state.searchProducts === "" && selectedCategories.length === 0 ? FAKE_DATA : state.products

      const filteredProducts =
        selectedCategories.length === 0 ? products : products.filter((product) => selectedCategories.includes(product.category))

      state.products = [...filteredProducts]
      selectedCategories = Array.from(new Set(selectedCategories))
    },

    filterAvailable: (state, action) => {
      state.clearFilters = false
      state.availableProducts = action.payload
      let products = []
      products = state.selectedCategories.length === 0 && state.searchProducts === "" ? FAKE_DATA : state.products
      const filteredProducts = action.payload
        ? products.filter((product) => product.type.some((item) => item.stockOut === false))
        : products

      state.products = filteredProducts
    },

    searchProduct: (state, action) => {
      state.clearFilters = false
      state.searchProducts = action.payload
      let products = []
      products = state.selectedCategories.length === 0 && !state.availableProducts ? FAKE_DATA : state.products
      const searchedProduct = products.filter((product) =>
        product.title.toLocaleLowerCase().includes(action.payload?.toLocaleLowerCase())
      )
      state.products = searchedProduct
    },

    clearFilter: (state) => {
      state.clearFilters = true
      state.products = FAKE_DATA
      state.selectedCategories = []
    },
  },
})

export const { filterCategory, filterAvailable, clearFilter, searchProduct } = productSlice.actions

export default productSlice.reducer
