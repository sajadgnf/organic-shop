import React from "react"
import Bill from "./Bill"
import Stack from "@atom/stack"
import OrderedItem from "./orderedItems"

const FullCart = () => {
  return (
    <Stack className="flex-col lg:flex-row space-y-5 lg:space-y-0 w-full justify-between items-start">
      <OrderedItem />
      <Bill />
    </Stack>
  )
}

export default FullCart
