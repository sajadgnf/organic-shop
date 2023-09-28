"use client"
import Stack from "@atom/stack"
import Input from "@atom/input"
import { RootState } from "@src/store"
import { PRODUCTDETAILS } from "routes"
import ProductCard from "@module/product-card"
import FilterProduct from "@module/filter-product"
import React, { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import HamburMenu from "@module/filter-product/hambur-menu"
import { searchProduct } from "@src/store/slice/productSlice"

const Store = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const { products } = useSelector((state: RootState) => state.productSlice)

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
    dispatch(searchProduct(event.target.value))
  }

  return (
    <Stack className="xmd:px-4 max-w-[1600px] w-full mx-auto mt-20 sm:mt-28 md:mt-72 flex-col space-y-10 xmd:space-y-0">
      <HamburMenu />

      <Stack className="flex-col w-full space-y-4">
        <Input
          type="search"
          className="w-[50%]"
          placeholder="search..."
          name="search"
          value={search}
          onChange={(e) => changeHandler(e)}
        />
        <Stack className="items-start w-full">
          <Stack className="hidden xmd:flex sticky top-7">
            <FilterProduct />
          </Stack>

          <Stack className="grid grid-cols-1 lg:grid-cols-4 xmd:grid-cols-3 w-full">
            {products.map((item, i) => (
              <ProductCard href={PRODUCTDETAILS(item.id)} item={item} key={item.title + item.img + i} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Store
