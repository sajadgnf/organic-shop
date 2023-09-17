"use client"
import React from "react"
import Stack from "@atom/stack"
import { RootState } from "@src/store"
import { useSelector } from "react-redux"
import FullCart from "@module/cart/full-cart"
import EmptyCart from "@module/cart/empty-cart"

const Cart = () => {
  const { itemsCounter } = useSelector((state: RootState) => state.cartSlice)
  return <Stack className="container mt-2 sm:mt-20 lg:mt-32 mx-auto w-full">{itemsCounter ? <FullCart /> : <EmptyCart />}</Stack>
}

export default Cart
