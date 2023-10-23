import Stack from "@atom/stack"
import React, { useRef } from "react"
import { PRODUCTDETAILS, STORE } from "routes"
import HorizontalList from "@module/horizontal-list"
import RelatedProductCard from "@module/related-product-card"
import FAKE_DATA, { ProductType } from "@src/common/fake-data"

const RelatedProduct = ({ currentItem }: { currentItem: ProductType }) => {
  const relatedProductRef = useRef(null)

  return (
    <Stack className="container">
      <HorizontalList ref={relatedProductRef} title="Related Product" href={STORE}>
        <Stack ref={relatedProductRef} className="w-full overflow-auto space-x-5 justify-start px-1 pb-2 hide-scrollbar">
          {FAKE_DATA.filter((item) => item.id !== currentItem.id && item.category === currentItem.category)
            .slice(0, 8)
            .map((data) => (
              <RelatedProductCard key={data.id} data={data} href={PRODUCTDETAILS(data.id)} />
            ))}
        </Stack>
      </HorizontalList>
    </Stack>
  )
}

export default RelatedProduct
