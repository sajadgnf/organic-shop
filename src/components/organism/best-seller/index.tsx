"use client"
import Stack from "@atom/stack"
import Card from "@module/card"
import React, { useRef } from "react"
import FAKE_DATA from "@src/common/fake-data"
import { PRODUCTDETAILS, STORE } from "routes"
import HorizontalList from "@module/horizontal-list"

const BestSellerProduct = () => {
  const bestSellerListRef = useRef(null)

  return (
    <HorizontalList ref={bestSellerListRef} title="Our Best Seller Product" href={STORE}>
      <Stack
        ref={bestSellerListRef}
        className="w-full overflow-auto space-x-5 justify-start pb-1 hide-scrollbar"
        key="specialList"
      >
        {FAKE_DATA.slice(17, 27).map((data, i) => (
          <Card key={data.id} data={data} href={PRODUCTDETAILS(data.id)} />
        ))}
      </Stack>
    </HorizontalList>
  )
}

export default BestSellerProduct
