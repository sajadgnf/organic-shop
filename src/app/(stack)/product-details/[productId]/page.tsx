"use client"
import Link from "next/link"
import { STORE } from "routes"
import Image from "next/image"
import Stack from "@atom/stack"
import React, { Fragment, useEffect } from "react"
import Typography from "@atom/typography"
import Comments from "@organism/comments"
import BuyButtons from "@module/buy-buttons"
import ProductInfo from "@module/product-info"
import ProductPrice from "@module/product-price"
import RelatedProduct from "@organism/related-product"
import FAKE_DATA, { ProductType } from "@src/common/fake-data"
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/24/solid"

const BottomSheet = ({ data }: { data: ProductType }) => {
  return (
    <Stack className="xmd:hidden rounded-xl p-2 pb-4 bg-white z-40 fixed bottom-0 left-0 right-0 w-full ">
      {data.type.map((item, i) => (
        <Fragment key={item.id}>
          <Stack className={`flex-col w-full h-full space-y-3`}>
            <ProductPrice price={item.price} discount={item.discount} stockOut={item.stockOut} absolutePercent={false} />
            <BuyButtons
              data={data}
              size="small"
              typeId={item.id}
              className="w-full sm:!w-[200px]"
              variant="contained"
              disabled={item.stockOut}
              buyButtonTitle={
                <Stack className="space-x-1">
                  <Typography>{item.name}</Typography>
                  <ShoppingCartIcon width={20} />
                </Stack>
              }
            />
          </Stack>
          <Stack className={`border mx-5 border-gray-300 h-14 ${i === data.type.length - 1 && "hidden"}`} />
        </Fragment>
      ))}
    </Stack>
  )
}

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const data = FAKE_DATA.find((item) => item.id == params.productId) as ProductType

  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

  return (
    <>
      <BottomSheet data={data} />
      <Stack className="mt-32 md:mt-32 flex-col space-y-16 md:space-y-32">
        <Stack className="container flex-row justify-between w-full">
          <Stack className="md:items-start space-x-3 xmd:space-x-10">
            <Image
              src={data.img}
              alt="product image"
              width={100}
              height={400}
              className=" xs:w-[150px] md:w-[200px] lg:w-[400px] "
            />

            <Stack className="flex-col md:mt-10 items-start space-y-5">
              <Stack className="flex-col items-start space-y-2">
                <Typography variant="h3">{data.title}</Typography>
                <Stack className="space-x-1 font-semibold text-blue-700">
                  <Link href={STORE}>
                    <Typography>products</Typography>
                  </Link>
                  <Typography>/</Typography>
                  <Link href={`${STORE}?category=${data.category}`}>
                    <Typography>{data.category}</Typography>
                  </Link>
                </Stack>
              </Stack>

              <Stack className="space-x-1 items-end">
                <StarIcon width={20} className="text-primary-dark" />
                <Typography>{data.rate}</Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack className="hidden xmd:flex h-32">
            {data.type.map((item, i) => (
              <Fragment key={item.id}>
                <Stack className="flex-col justify-between py-5 h-full">
                  <ProductPrice price={item.price} discount={item.discount} stockOut={item.stockOut} />

                  <BuyButtons
                    data={data}
                    variant="contained"
                    typeId={item.id}
                    disabled={item.stockOut}
                    buyButtonTitle={
                      <Stack className="space-x-1">
                        <Typography>{item.name}</Typography>
                        <ShoppingCartIcon width={20} />
                      </Stack>
                    }
                  />
                </Stack>
                <Stack className={`border mx-10 border-gray-300 h-full ${i === data.type.length - 1 && "hidden"}`} />
              </Fragment>
            ))}
          </Stack>
        </Stack>

        <ProductInfo data={data} />

        <RelatedProduct currentItem={data} />

        <Comments data={data.comments} />
      </Stack>
    </>
  )
}

export default ProductDetails
