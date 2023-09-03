import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid"
import BuyButtons from "@module/buy-buttons"
import RelatedProduct from "@organism/related-product"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { STORE } from "routes"

const ProductDetails = () => {
  return (
    <Stack className="container mt-32 flex-col space-y-32">
      <Stack className="justify-between w-full">
        <Stack className="items-start space-x-10">
          <Image src="/images/test-juice.svg" alt="product image" width={400} height={400} />

          <Stack className="flex-col mt-10 items-start space-y-5">
            <Stack className="flex-col items-start space-y-2">
              <Typography variant="h3">title</Typography>
              <Link href={`${STORE}?category=category`}>
                <Typography className="grey">category</Typography>
              </Link>
            </Stack>

            <Stack className="space-x-1">
              <StarIcon width={20} className="text-primary-dark" />
              <Typography>4/4</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          <Stack className="flex-col space-y-8">
            <Typography variant="h6">per kilogram</Typography>
            <Typography variant="h6">$13.4</Typography>
            <BuyButtons
              quantity={0}
              buyButtonTitle={
                <Stack className="space-x-1">
                  <Typography>Luxury</Typography>
                  <ShoppingCartIcon width={20} />
                </Stack>
              }
            />
          </Stack>

          <Stack className="border border-gray-400 mx-3 h-44" />

          <Stack className="flex-col space-y-8">
            <Typography variant="h6">per kilogram</Typography>
            <Typography variant="h6">$13.4</Typography>
            <BuyButtons
              quantity={0}
              buyButtonTitle={
                <Stack className="space-x-1">
                  <Typography>High grade</Typography>
                  <ShoppingCartIcon width={20} />
                </Stack>
              }
            />
          </Stack>
        </Stack>
      </Stack>

      <RelatedProduct />
    </Stack>
  )
}

export default ProductDetails
