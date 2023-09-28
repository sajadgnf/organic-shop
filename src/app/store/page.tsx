"use client"
import React from "react"
import Stack from "@atom/stack"
import { RootState } from "@src/store"
import { PRODUCTDETAILS } from "routes"
import NoResult from "@module/no-result"
import { useSelector } from "react-redux"
import ProductCard from "@module/product-card"
import FilterProduct from "@module/filter-product"
import SearchProduct from "@module/search-products"
import HamburMenu from "@module/filter-product/hambur-menu"

const Store = () => {
  const { filteredProducts } = useSelector((state: RootState) => state.productSlice)

  return (
    <Stack className="flex-col xmd:px-4 max-w-[1600px] w-full mx-auto mt-20 sm:mt-28 md:mt-72 space-y-4">
      <SearchProduct />
      <HamburMenu />

      <Stack className="items-start w-full">
        <Stack className="hidden xmd:flex sticky top-7">
          <FilterProduct />
        </Stack>

        {filteredProducts.length === 0 ? (
          <NoResult />
        ) : (
          <Stack className="grid grid-cols-1 lg:grid-cols-4 xmd:grid-cols-3 w-full">
            {filteredProducts.map((item, i) => (
              <ProductCard href={PRODUCTDETAILS(item.id)} item={item} key={item.title + item.img + i} />
            ))}
          </Stack>
        )}
      </Stack>
    </Stack>
  )
}

export default Store
