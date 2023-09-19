import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"
import FAKE_DATA from "@src/common/fake-data"
import FilterProduct from "@module/filter-product"
import HamburMenu from "@module/filter-product/hambur-menu"
import ProductCard from "@module/product-card"

const Store = () => {
  return (
    <Stack className="px-4 md:px-14 mt-10 sm:mt-28 md:mt-72 flex-col space-y-10 md:space-y-0">
      <HamburMenu />

      <Stack className="items-start space-x-2">
        <Stack className="hidden md:flex">
          <FilterProduct />
        </Stack>

        <Stack className="flex-wrap flex-col md:flex-row gap-4">
          {FAKE_DATA.map((data, i) => (
            <ProductCard data={data} key={data.title + data.img + i} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Store
