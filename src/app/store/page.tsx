"use client"
import React from "react"
import Stack from "@atom/stack"
import { RootState } from "@src/store"
import { PRODUCTDETAILS } from "routes"
import { useSelector } from "react-redux"
import ProductCard from "@module/product-card"
import FilterProduct from "@module/filter-product"
import HamburMenu from "@module/filter-product/hambur-menu"

const Store = () => {
  const { products } = useSelector((state: RootState) => state.productSlice)

  return (
    <Stack className="xmd:px-4 w-full mt-10 sm:mt-28 md:mt-72 flex-col space-y-10 xmd:space-y-0">
      <HamburMenu />

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
  )
}

export default Store
