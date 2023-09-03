import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import React, { ReactElement, ReactNode } from "react"

type PropsType = {
  quantity: string | number
  size?: "large" | "small" | "medium"
  variant?: "outlined" | "text" | "contained" | "circle"
  buyButtonTitle?: string | number | ReactNode | ReactElement
}

const BuyButtons = ({ quantity, variant = "outlined", size = "large", buyButtonTitle = "Add to Cart" }: PropsType) => {
  return quantity === 0 ? (
    <Button variant={variant} size={size}>
      {buyButtonTitle}
    </Button>
  ) : (
    <Stack className="space-x-2">
      <Button
        variant="outlined"
        className="!rounded-full !p-0 flex justify-center w-6 lg:w-8 !h-6 lg:!h-8 items-center lg:items-start"
      >
        -
      </Button>
      <Typography>{quantity}</Typography>
      <Button
        variant="outlined"
        className="!rounded-full !p-0 flex justify-center w-6 lg:w-8 !h-6 lg:!h-8 items-center lg:items-start"
      >
        +
      </Button>
    </Stack>
  )
}

export default BuyButtons
