import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import FAKE_DATA, { ProductType } from "@src/common/fake-data"

interface PropsType {
  clearFilters: boolean
  availableProducts: boolean
  selectedCategories: string[]
  searchedProducts: ProductType[]
  filteredProducts: ProductType[]
}

const initialState: PropsType = {
  clearFilters: false,
  searchedProducts: [],
  selectedCategories: [],
  availableProducts: false,
  filteredProducts: FAKE_DATA,
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterCategory: (state, action: PayloadAction<{ checked: boolean; label: string }>) => {
      const { checked, label } = action.payload
      state.clearFilters = false

      if (checked) {
        state.selectedCategories.push(label)
      } else {
        const index = state.selectedCategories.indexOf(label)
        if (index !== -1) {
          state.selectedCategories.splice(index, 1)
        }
      }

      let filteredItems = []
      filteredItems = !state.filteredProducts ? FAKE_DATA : state.filteredProducts

      let products = []
      products = !state.availableProducts
        ? filteredItems
        : filteredItems.filter((product) => product.type.some((item) => item.stockOut === false))

      const filteredProducts =
        state.selectedCategories.length === 0
          ? products
          : products.filter((product) => state.selectedCategories.includes(product.category))

      state.filteredProducts = [...filteredProducts]
      state.selectedCategories = Array.from(new Set(state.selectedCategories))
    },

    filterAvailable: (state, action) => {
      state.clearFilters = false
      state.availableProducts = action.payload
      const products = action.payload
        ? state.filteredProducts.filter((product) => product.type.some((item) => item.stockOut === false))
        : state.selectedCategories.length
        ? FAKE_DATA.filter((product) => state.selectedCategories.includes(product.category))
        : FAKE_DATA

      state.filteredProducts = products
    },

    searchProduct: (state, action) => {
      state.clearFilters = false

      const searchWords = action.payload?.toLowerCase().replace(/\s+/g, "").split("")

      const searchedProduct = FAKE_DATA.filter((product) =>
        searchWords.some((word: string) => product.title.toLowerCase().includes(word))
      )

      state.searchedProducts = !!action.payload ? searchedProduct : []
    },

    filterBySearch: (state, action) => {
      state.clearFilters = true

      const searchWords = action.payload?.toLowerCase().replace(/\s+/g, "").split("")

      const searchedProduct = FAKE_DATA.filter((product) =>
        searchWords.some((word: string) => product.title.toLowerCase().includes(word))
      )

      state.filteredProducts = searchedProduct
    },

    clearFilter: (state) => {
      state.clearFilters = true
      state.selectedCategories = []
      state.filteredProducts = FAKE_DATA
    },
  },
})

export const { filterCategory, filterAvailable, clearFilter, searchProduct, filterBySearch } = productSlice.actions

export default productSlice.reducer
