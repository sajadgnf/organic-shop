import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"
import ProductPrice from "@module/product-price"
import { ProductType } from "@src/common/fake-data"

type PropsType = {
  href?: string
  item: ProductType
}

const ProductCard = ({ item, href = "" }: PropsType) => {
  const { img, title, description, type } = item

  return (
    <Stack className="md:flex-col justify-start md:justify-between md:space-y-5 md:bg-[#f8f8f8] w-full h-full border pb-4 md:pb-6">
      <Link href={href}>
        <Stack className="md:flex-col space-x-3 md:space-x-0 md:space-y-4 px-2 sm:px-6 py-2 sm:py-0 sm:pt-6">
          <Image
            src={img}
            width={159}
            height={201}
            alt={description || title}
            className="w-[100px] md:w-[110px]  md:min-h-[130px] lg:min-h-[160px] lg:w-[130px]"
          />

          <Stack className="space-y-2 sm:space-y-1 flex-col items-start w-full">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption" className="line-clamp-2 md:line-clamp-3">
              {description}
            </Typography>

            <Stack className="flex-col md:flex-row md:hidden items-start md:items-center md:space-x-24 space-y-1">
              {type.map(({ price, name, discount, stockOut, id }) => (
                <Stack key={id} className="space-x-2 ">
                  <Typography className="font-bold">{name}:</Typography>
                  <ProductPrice price={price} discount={discount} stockOut={stockOut} absolutePercent={false} />
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Link>

      <Stack className="hidden items-start md:flex space-y-4 w-full px-6 flex-col">
        {type.map(({ price, name, discount, id, stockOut }) => (
          <Stack key={id} className="w-full justify-between space-x-3">
            <BuyButtons
              typeId={id}
              buyButtonTitle={name}
              data={item}
              size="small"
              disabled={stockOut}
              variant="contained"
              className="!w-[150px] lg:!min-w-[120px]"
            />
            <ProductPrice price={price} discount={discount} stockOut={stockOut} />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default ProductCard
