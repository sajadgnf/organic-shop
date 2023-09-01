import React from "react"
import Stack from "@atom/stack"
import FullCart from "@module/cart/full-cart"
import EmptyCart from "@module/cart/empty-cart"

const Cart = () => {
  return (
    <Stack className="container mt-32 mx-auto w-full">
      <FullCart />
      {/* <EmptyCart /> */}
    </Stack>
  )
}

export default Cart
