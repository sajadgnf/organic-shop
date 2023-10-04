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

const Card = ({ data, href = "" }: PropsType) => {
  const { img, title, description, type } = data

  return (
    <Stack className="flex-col space-y-4 bg-[#f8f8f8] min-w-[250px] md:min-w-[355px] w-28 max-h-[450px] shadow-md rounded-2xl pb-6">
      <Link href={href}>
        <Stack className="flex-col space-y-4 px-6 pt-6">
          <Stack className="h-[110px] sm:h-[130px] md:h-[200px] w-[50%]">
            <Image src={img} width={159} height={201} alt={description || title} className="h-fit w-fit" />
          </Stack>

          <Stack className="space-y-1 flex-col items-start">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption" className="line-clamp-2">
              {description}
            </Typography>
          </Stack>
        </Stack>
      </Link>

      <Stack className="justify-between items-stretch flex-col w-full px-6 space-y-4">
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
      </Stack>
    </Stack>
  )
}

export default Card
