import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { STORE } from "routes"
import Typography from "@atom/typography"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import RelatedProductList from "@organism/related-product/list"

const RelatedProduct = () => {
  return (
    <Stack className="container w-full flex-col space-y-10">
      <Link href={`${STORE}?filter=related-product`} className="w-full">
        <Stack className="items-center justify-between">
          <Typography variant="h5">Related Product</Typography>

          <Stack className="xs:space-x-1 sm:space-x-2">
            <Typography variant="h6" className="text-primary-dark">
              See all
            </Typography>
            <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-3 sm:w-6" />
          </Stack>
        </Stack>
      </Link>

      <RelatedProductList />
    </Stack>
  )
}

export default RelatedProduct
