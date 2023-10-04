"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import Typography from "@atom/typography"
import { ProductType } from "@src/common/fake-data"
import { useDispatch, useSelector } from "react-redux"
import React, { ReactElement, ReactNode } from "react"
import { addItem, decreaseItem, increaseItems, removeItem } from "@src/store/slice/cartSlice"
import { AnyAction } from "redux"

type PropsType = {
  typeId: string
  disabled?: boolean
  className?: string
  size?: "large" | "small" | "medium"
  variant?: "outlined" | "text" | "contained" | "circle"
  buyButtonTitle?: string | number | ReactNode | ReactElement
  data: RootState["cartSlice"]["selectedItems"][number] | ProductType
}

const ButtonContainer = ({ children, handler }: { children: ReactNode; handler: AnyAction }) => {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => dispatch(handler)}
      variant="outlined"
      className="!rounded-full !p-0 flex justify-center w-8 lg:w-10 !h-8 lg:!h-10 items-center"
    >
      {children}
    </Button>
  )
}

const BuyButtons = ({
  data,
  typeId,
  size = "large",
  variant = "outlined",
  buyButtonTitle = "Add to Cart",
  disabled,
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
      disabled={disabled}
      size={size}
      className={`md:w-[130px] text-sm ${className}`}
    >
      {buyButtonTitle}
    </Button>
  ) : (
    <Stack className="space-x-2">
      <ButtonContainer
        handler={quantity === 1 ? removeItem({ data: currentItem[0], typeId }) : decreaseItem({ data: currentItem, typeId })}
      >
        -
      </ButtonContainer>
      <Typography>{quantity}</Typography>
      <ButtonContainer handler={increaseItems({ data: currentItem, typeId })}>+</ButtonContainer>
    </Stack>
  )
}

export default BuyButtons
