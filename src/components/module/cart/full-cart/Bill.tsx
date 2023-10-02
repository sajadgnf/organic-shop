"use client"
import { HOME } from "routes"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import Checkbox from "@module/checkbox"
import { toast } from "react-hot-toast"
import Typography from "@atom/typography"
import { useRouter } from "next/navigation"
import React, { ChangeEvent, InputHTMLAttributes, useState } from "react"
import { checkout } from "@src/store/slice/cartSlice"
import { useDispatch, useSelector } from "react-redux"

const RadioInput = ({ type, name, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Stack className="cursor-pointer items-center space-x-2 w-full justify-start">
      <input type={type} id={name} name={name} value={name} onChange={props.onChange} checked={props.checked} />
      <Typography variant="label" htmlFor={name}>
        Today 9 to 12
      </Typography>
    </Stack>
  )
}

const Bill = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { totalPrice, totalDiscount } = useSelector((state: RootState) => state.cartSlice)
  const [openDelivery, setOpenDelivery] = useState(false)
  const [checked, setChecked] = useState("")

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value)
  }

  const checkoutHandler = () => {
    toast.success("checked out successfully")
    dispatch(checkout())
    router.push(HOME)
  }

  return (
    <Stack className="flex-col space-y-5 border rounded-lg p-3 w-full lg:w-[30%]">
      <Stack className="justify-between w-full">
        <Typography>total price without discount</Typography>
        <Typography>${totalPrice}</Typography>
      </Stack>

      <Stack className="justify-between w-full text-danger-main">
        <Typography>discount</Typography>
        <Typography>${totalDiscount}</Typography>
      </Stack>

      <Stack className="justify-between w-full font-semibold">
        <Typography>total price</Typography>
        <Typography>${(totalPrice - totalDiscount).toFixed(2)}</Typography>
      </Stack>
      {openDelivery && (
        <>
          <hr className="w-full" />
          <Stack className="flex-col w-full space-y-3">
            <Typography>Delivery time</Typography>
            <RadioInput type="radio" name="firstPeriod" onChange={(e) => changeHandler(e)} checked={checked === "firstPeriod"} />
            <RadioInput type="radio" name="secPeriod" onChange={(e) => changeHandler(e)} checked={checked === "secPeriod"} />
            <RadioInput type="radio" name="thirdPeriod" onChange={(e) => changeHandler(e)} checked={checked === "thirdPeriod"} />
          </Stack>
        </>
      )}
      {openDelivery ? (
        <Button variant="contained" className="w-full" disabled={!checked} onClick={checkoutHandler}>
          Check Out
        </Button>
      ) : (
        <Button variant="contained" className="w-full" onClick={() => (openDelivery ? checkoutHandler : setOpenDelivery(true))}>
          Choose time for delivery
        </Button>
      )}
    </Stack>
  )
}

export default Bill
