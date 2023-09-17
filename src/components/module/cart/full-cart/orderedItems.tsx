"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import { PRODUCTDETAILS } from "routes"
import { useDispatch, useSelector } from "react-redux"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { removeItem } from "@src/store/slice/cartSlice"

const OrderedItem = () => {
  const dispatch = useDispatch()
  const { selectedItems } = useSelector((state: RootState) => state.cartSlice)

  return (
    <Stack className="flex-col w-full lg:w-[65%] space-y-5">
      {selectedItems.map((item) => (
        <>
          <Stack className="hidden lg:flex border rounded-lg p-3 justify-between w-full">
            <Link href={PRODUCTDETAILS(1)}>
              <Stack className="space-x-4">
                <Image src="/images/test-juice.svg" alt="" width={80} height={80} />
                <Stack className="flex-col">
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>${item.type.price}</Typography>
                </Stack>
              </Stack>
            </Link>

            <Stack className="space-x-6">
              <Stack className="space-x-2">
                <BuyButtons data={item} typeId={item.type.id} />
                <Typography>Kilogram</Typography>
              </Stack>
              <Typography className="text-danger-main">${item.type.price * item.quantity}</Typography>
            </Stack>

            <Button className="hover:bg-transparent" onClick={() => dispatch(removeItem({ data: item, typeId: item.type.id }))}>
              <XMarkIcon width={25} />
            </Button>
          </Stack>

          {/* mobile size */}
          <Stack className="lg:hidden flex-col border rounded-lg space-y-5 p-3 justify-between w-full">
            <Stack className="justify-between w-full">
              <Link href={PRODUCTDETAILS(1)}>
                <Stack className="space-x-4">
                  <Image src="/images/test-juice.svg" alt="" width={50} height={50} className="w-[50px] md:w-[80px]" />
                  <Stack className="flex-col">
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography>${item.type.price}</Typography>
                  </Stack>
                </Stack>
              </Link>
              <Button className="hover:bg-transparent" onClick={() => dispatch(removeItem({ data: item, typeId: item.type.id }))}>
                <XMarkIcon width={25} />
              </Button>
            </Stack>

            <Stack className="justify-between w-full">
              <Typography variant="h6">${item.type.price * item.quantity}</Typography>

              <Stack className="space-x-2">
                <BuyButtons data={item} typeId={item.type.id} />
                <Typography>Kilogram</Typography>
              </Stack>
            </Stack>
          </Stack>
        </>
      ))}
    </Stack>
  )
}

export default OrderedItem
