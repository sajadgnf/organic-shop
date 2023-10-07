import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"
import { PRODUCTDETAILS } from "routes"
import FAKE_DATA, { ProductType } from "@src/common/fake-data"
import RelatedProductCard from "@module/related-product"

const RelatedProductList = ({ currentItem }: { currentItem: ProductType }) => {
  return (
    <Stack className="w-full overflow-auto space-x-5 justify-start px-1 pb-2 hide-scrollbar">
      {FAKE_DATA.filter((item) => item.id !== currentItem.id && item.category === currentItem.category)
        .slice(0, 8)
        .map((data) => (
          <RelatedProductCard key={data.id} data={data} href={PRODUCTDETAILS(data.id)} />
        ))}
    </Stack>
  )
}

export default RelatedProductList
