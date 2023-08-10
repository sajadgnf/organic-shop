import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { PRODUCTS } from "routes"
import Typography from "@atom/typography"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import BestSellerProductList from "@organism/best-seller/list"

const BestSellerProduct = () => {
  return (
    <Stack className="w-full flex-col space-y-10">
      <Link href={`${PRODUCTS}?filter=best-seller`} className="w-full">
        <Stack className="items-center justify-between">
          <Typography variant="h5">Our Best Seller Product</Typography>

          <Stack className="xs:space-x-1 sm:space-x-2">
            <Typography variant="h6" className="text-primary-dark">
              See all product
            </Typography>
            <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-3 sm:w-6" />
          </Stack>
        </Stack>
      </Link>

      <BestSellerProductList />
    </Stack>
  )
}

export default BestSellerProduct
