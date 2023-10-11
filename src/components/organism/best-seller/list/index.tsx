import Stack from "@atom/stack"
import Card from "@module/card"
import React, { useRef } from "react"
import { PRODUCTDETAILS } from "routes"
import FAKE_DATA from "@src/common/fake-data"
import HorizontalList from "@module/horizontal-list"

const BestSellerProductList = () => {
  const listRef = useRef(null)

  return (
    <HorizontalList ref={listRef}>
      <Stack
        ref={listRef}
        className="duration-1000 w-full overflow-auto space-x-5 justify-start px-1 pb-2 hide-scrollbar"
        key="bestSellerList"
      >
        {FAKE_DATA.slice(10, 20).map((data, i) => (
          <Card data={data} key={data.title + data.img + i} href={PRODUCTDETAILS(data.id)} />
        ))}
      </Stack>
    </HorizontalList>
  )
}

export default BestSellerProductList
