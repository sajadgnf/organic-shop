import { createSlice } from "@reduxjs/toolkit"
import { ProductType } from "@src/common/fake-data"

interface ProductWithQuantity extends ProductType {
  quantity: number
}

type PropsType = {
  checkout: boolean
  totalPrice: number
  itemsCounter: number
  selectedItems: ProductWithQuantity[]
}

const initialState: PropsType = {
  totalPrice: 0,
  itemsCounter: 0,
  checkout: false,
  selectedItems: [],
}

const sumItems = (items: (typeof initialState)["selectedItems"]) => {
  const itemsCounter = items.reduce((totalPrice, product) => totalPrice + product.quantity, 0)
  const totalPrice = items.reduce((totalPrice, product) => totalPrice + product.quantity * product.price, 0).toFixed(2)
  return { itemsCounter, totalPrice }
}

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (
        !state.selectedItems.find(
          (item: { id: ProductType["id"]; type: ProductType["type"] }) =>
            item.id === action.payload.id && item.type.name === action.payload.type.name
        )
      ) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        })

        state.totalPrice = +sumItems(state.selectedItems).totalPrice
        state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.id
      state.selectedItems = state.selectedItems.filter((item) => item.id !== itemIdToRemove)
      state.totalPrice = +sumItems(state.selectedItems).totalPrice
      state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
    },
    increaseItems: (state, action) => {
      const indexI = state.selectedItems.findIndex((item) => item.id === action.payload.id)
      state.selectedItems[indexI].quantity++
      state.totalPrice = +sumItems(state.selectedItems).totalPrice
      state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
    },
    decreaseItem: (state, action) => {
      const indexD = state.selectedItems.findIndex((item) => item.id === action.payload.id)
      state.selectedItems[indexD].quantity--
      state.totalPrice = +sumItems(state.selectedItems).totalPrice
      state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
    },
    checkout: () => {
      return {
        totalPrice: 0,
        checkout: true,
        itemsCounter: 0,
        selectedItems: [],
      }
    },
    clearCart: () => {
      return {
        totalPrice: 0,
        checkout: false,
        itemsCounter: 0,
        selectedItems: [],
      }
    },
  },
})

export const { addItem, removeItem, increaseItems, decreaseItem, checkout, clearCart } = cartSlice.actions

export default cartSlice.reducer
