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
  data: ProductType
}

const RelatedProductCard = ({ data, href = "" }: PropsType) => {
  const { img, title, description, type } = data

  return (
    <Link href={href}>
      <Stack className="space-x-4 p-3 bg-[#f8f8f8] min-w-[250px] md:min-w-[355px] w-28 shadow-md rounded-2xl max-h-[80px] sm:max-h-[90px] md:max-h-[120px]">
        <Image src={img} width={50} height={50} alt={description || title} className="sm:w-16 md:w-24" />

        <Stack className="space-y-1 flex-col items-start">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption" className="line-clamp-2">
            {description}
          </Typography>
        </Stack>

        {/* <Stack className="justify-between items-stretch flex-col w-full px-6 space-y-4">
        {type.map(({ price, name, discount, stockOut, id }) => (
          <Stack className="justify-between" key={id}>
          <BuyButtons
          typeId={id}
          buyButtonTitle={name}
          data={data}
          size="small"
          disabled={stockOut}
          variant="contained"
          className="!min-w-[90px]"
          />
          <ProductPrice price={price} stockOut={stockOut} discount={discount} />
          </Stack>
          ))}
        </Stack> */}
      </Stack>
    </Link>
  )
}

export default RelatedProductCard
