"use client"
import React from "react"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { CART, SIGNIN } from "routes"
import { RootState } from "@src/store"
import { useSelector } from "react-redux"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import UserHamburgerMenu from "./userHamburgerMenu"
import { ArrowLeftOnRectangleIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"

const RightSide = () => {
  const router = useRouter()
  const { phoneNumber } = useSelector((state: RootState) => state.loginSlice)
  const { itemsCounter } = useSelector((state: RootState) => state.cartSlice)

  return (
    <Stack className="space-x-3">
      {phoneNumber ? (
        <UserHamburgerMenu />
      ) : (
        <Button
          variant="outlined"
          onClick={() => router.push(SIGNIN)}
          className="flex justify-between items-center w-[90px] sm:w-[120px]"
        >
          <Typography>Sign in</Typography>
          <ArrowLeftOnRectangleIcon width={20} />
        </Button>
      )}
      <Stack className="border border-gray-300 h-6" />
      <Button size="small" hoverEffect={false} className="relative" data-testid="shopping-button" onClick={() => router.push(CART)}>
        {!!itemsCounter && (
          <Typography
            variant="caption"
            className="absolute top-5 md:top-6 right-3 bg-primary-dark rounded-md w-[16px] h-[14px] md:w-[18px] md:h-[17px] text-white md:!text-[10px]"
          >
            {itemsCounter}
          </Typography>
        )}
        <ShoppingBagIcon width={25} className=" text-gray-700" />
      </Button>
    </Stack>
  )
}

export default RightSide
