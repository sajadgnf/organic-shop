import React from "react"
import Link from "next/link"
import { STORE } from "routes"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Comments from "@organism/comments"
import BuyButtons from "@module/buy-buttons"
import RelatedProduct from "@organism/related-product"
import FAKE_DATA, { ProductType } from "@src/common/fake-data"
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid"

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const data = FAKE_DATA.find((item) => item.id == params.productId) as ProductType

  return (
    <Stack className="container mt-32 flex-col space-y-32">
      <Stack className="justify-between w-full">
        <Stack className="items-start space-x-10">
          <Image src="/images/test-juice.svg" alt="product image" width={400} height={400} />

          <Stack className="flex-col mt-10 items-start space-y-5">
            <Stack className="flex-col items-start space-y-2">
              <Typography variant="h3">{data.title}</Typography>
              <Link href={`${STORE}?category=category`}>
                <Typography className="grey">{data.category}</Typography>
              </Link>
            </Stack>

            <Stack className="space-x-1">
              <StarIcon width={20} className="text-primary-dark" />
              <Typography>{data.rate}</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack>
          {data.type.map((item, i) => (
            <>
              <Stack className="flex-col space-y-8">
                <Typography variant="h6">per kilogram</Typography>
                <Typography variant="h6">{item.price}</Typography>
                <BuyButtons
                  data={data}
                  typeId={item.id}
                  buyButtonTitle={
                    <Stack className="space-x-1">
                      <Typography>{item.name}</Typography>
                      <ShoppingCartIcon width={20} />
                    </Stack>
                  }
                />
              </Stack>
              <Stack className={`border mx-10 border-gray-300 h-44 ${i === data.type.length - 1 && "hidden"}`} />
            </>
          ))}
        </Stack>
      </Stack>

      <RelatedProduct />

      <Stack className="flex-col items-start space-y-3 w-full">
        <Typography variant="h5">title</Typography>
        <Typography>{data.description}</Typography>
      </Stack>

      <Comments data={data.comments} />
    </Stack>
  )
}

export default ProductDetails
