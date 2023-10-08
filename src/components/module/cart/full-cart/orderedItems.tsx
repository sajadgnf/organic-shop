"use client"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import React, { Fragment } from "react"
import { PRODUCTDETAILS, STORE } from "routes"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "@src/store/slice/cartSlice"
import ProductPrice from "@module/product-price"

const OrderedItem = () => {
  const dispatch = useDispatch()
  const { selectedItems } = useSelector((state: RootState) => state.cartSlice)

  return (
    <Stack className="flex-col w-full lg:w-[65%] space-y-5">
      {selectedItems.map((item) => (
        <Fragment key={item.id}>
          <Stack className="hidden lg:flex border rounded-lg p-3 justify-between w-full">
            <Stack className="space-x-4">
              <Link href={PRODUCTDETAILS(item.id)}>
                <Image src={item.img} alt="product image" width={80} height={80} />
              </Link>
              <Stack className="space-x-8">
                <Stack className="flex-col items-start">
                  <Typography variant="h6">{item.title}</Typography>
                  <Stack className="space-x-1 font-semibold text-blue-700">
                    <Link href={STORE}>
                      <Typography variant="caption">products</Typography>
                    </Link>
                    <Typography variant="caption">/</Typography>
                    <Link href={`${STORE}?category=${item.category}`}>
                      <Typography variant="caption">{item.category}</Typography>
                    </Link>
                  </Stack>
                  <Typography variant="caption">{item.type.name}</Typography>
                </Stack>
                <ProductPrice
                  price={item.type.price}
                  discount={item.type.discount}
                  stockOut={item.type.stockOut}
                  absolutePercent={false}
                />
              </Stack>
            </Stack>

            <Stack className="space-x-6">
              <Stack className="space-x-2">
                <BuyButtons data={item} typeId={item.type.id} />
                <Typography>Kg</Typography>
              </Stack>
              <Typography>
                ${((+item.type.discount ? +item.type.discount : +item.type.price) * item.quantity).toFixed(2)}
              </Typography>
            </Stack>

            <Button className="hover:bg-transparent" onClick={() => dispatch(removeItem({ data: item, typeId: item.type.id }))}>
              <XMarkIcon width={25} />
            </Button>
          </Stack>

          {/* mobile size */}
          <Stack className="lg:hidden flex-col border rounded-lg space-y-5 p-3 justify-between w-full">
            <Stack className="justify-between w-full">
              <Link href={PRODUCTDETAILS(item.id)}>
                <Image src={item.img} alt={item.title} width={50} height={50} className="w-[50px] md:w-[80px]" />
              </Link>

              <Stack className="flex-col items-start">
                <Typography variant="h6">{item.title}</Typography>
                <Stack className="space-x-1 font-semibold text-blue-700">
                  <Link href={STORE}>
                    <Typography>products</Typography>
                  </Link>
                  <Typography>/</Typography>
                  <Link href={`${STORE}?category=${item.category}`}>
                    <Typography>{item.category}</Typography>
                  </Link>
                </Stack>
                <Typography variant="caption">{item.type.name}</Typography>
              </Stack>
              <Button className="hover:bg-transparent" onClick={() => dispatch(removeItem({ data: item, typeId: item.type.id }))}>
                <XMarkIcon width={25} />
              </Button>
            </Stack>

            <Stack className="justify-between w-full">
              <ProductPrice
                price={item.type.price}
                discount={item.type.discount}
                stockOut={item.type.stockOut}
                absolutePercent={false}
              />

              <Stack className="space-x-2">
                <BuyButtons data={item} typeId={item.type.id} />
                <Typography>Kg</Typography>
              </Stack>

              <Typography variant="h6">
                ${((+item.type.discount ? +item.type.discount : +item.type.price) * item.quantity).toFixed(2)}
              </Typography>
            </Stack>
          </Stack>
        </Fragment>
      ))}
    </Stack>
  )
}

export default OrderedItem
