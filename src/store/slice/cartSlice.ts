import { createSlice } from "@reduxjs/toolkit"

interface ProductType {
  id: string
  quantity: number
  type: { id: string; price: number }
}

type PropsType = {
  checkout: boolean
  totalPrice: number
  itemsCounter: number
  selectedItems: ProductType[]
}

const initialState: PropsType = {
  totalPrice: 0,
  itemsCounter: 0,
  checkout: false,
  selectedItems: [],
}

const sumItems = (items: (typeof initialState)["selectedItems"]) => {
  const itemsCounter = items.reduce((totalPrice, product) => totalPrice + product.quantity, 0)
  const totalPrice = items.reduce((totalPrice, product) => totalPrice + product.quantity * product.type.price, 0).toFixed(2)
  return { itemsCounter, totalPrice }
}

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const selectedItem = state.selectedItems.find((item: { id: string }) => item.id === action.payload.data.id)
      const selectedItemType = selectedItem?.type.id === action.payload.typeId
      const currentItemType = action.payload.data.type.find((item: { id: string }) => item.id === action.payload.typeId)

      if (!selectedItem || !selectedItemType) {
        state.selectedItems.push({
          ...action.payload.data,
          type: { ...currentItemType },
          quantity: 1,
        })

        state.totalPrice = +sumItems(state.selectedItems).totalPrice
        state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
      }
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.typeId
      const itemToRemove = action.payload.data

      state.selectedItems = state.selectedItems.reduce<ProductType[]>(
        (acc, cur) => (itemToRemove.id !== cur.id ? [...acc, cur] : cur.type.id !== itemIdToRemove ? [...acc, cur] : [...acc]),
        []
      )

      state.totalPrice = +sumItems(state.selectedItems).totalPrice
      state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
    },
    increaseItems: (state, action) => {
      const itemIdToIncrease = action.payload.typeId
      const itemToIncrease = action.payload.data[0]

      const indexI = state.selectedItems.findIndex((item) => item.id === itemToIncrease.id && item.type.id === itemIdToIncrease)
      state.selectedItems[indexI].quantity++

      state.totalPrice = +sumItems(state.selectedItems).totalPrice
      state.itemsCounter = +sumItems(state.selectedItems).itemsCounter
    },
    decreaseItem: (state, action) => {
      const itemIdToDecrease = action.payload.typeId
      const itemToDecrease = action.payload.data[0]

      const indexD = state.selectedItems.findIndex((item) => item.id === itemToDecrease.id && item.type.id === itemIdToDecrease)
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
