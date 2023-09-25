"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import Typography from "@atom/typography"
import { ProductType } from "@src/common/fake-data"
import { useDispatch, useSelector } from "react-redux"
import React, { ReactElement, ReactNode } from "react"
import { addItem, decreaseItem, increaseItems, removeItem } from "@src/store/slice/cartSlice"

type PropsType = {
  typeId: string
  className?: string
  size?: "large" | "small" | "medium"
  variant?: "outlined" | "text" | "contained" | "circle"
  buyButtonTitle?: string | number | ReactNode | ReactElement
  data: RootState["cartSlice"]["selectedItems"][number] | ProductType
}

const BuyButtons = ({
  data,
  typeId,
  size = "large",
  variant = "outlined",
  buyButtonTitle = "Add to Cart",
  className,
}: PropsType) => {
  const dispatch = useDispatch()
  const { selectedItems } = useSelector((state: RootState) => state.cartSlice)

  const currentItem = selectedItems.filter((item) => item.id === data.id)
  const currentTypeItem = currentItem.find((item) => item.type.id === typeId)
  const quantity = currentTypeItem?.quantity

  return !currentTypeItem ? (
    <Button
      onClick={() => dispatch(addItem({ data, typeId }))}
      variant={variant}
      size={size}
      className={`md:w-[130px] ${className}`}
    >
      {buyButtonTitle}
    </Button>
  ) : (
    <Stack className="space-x-2">
      <Button
        onClick={() =>
          dispatch(quantity === 1 ? removeItem({ data: currentItem[0], typeId }) : decreaseItem({ data: currentItem, typeId }))
        }
        variant="outlined"
        className="!rounded-full !p-0 flex justify-center w-6 lg:w-8 !h-6 lg:!h-8 items-center lg:items-start"
      >
        -
      </Button>
      <Typography>{quantity}</Typography>
      <Button
        onClick={() => dispatch(increaseItems({ data: currentItem, typeId }))}
        variant="outlined"
        className="!rounded-full !p-0 flex justify-center w-6 lg:w-8 !h-6 lg:!h-8 items-center lg:items-start"
      >
        +
      </Button>
    </Stack>
  )
}

export default BuyButtons
