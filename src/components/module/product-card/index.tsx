import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"
import { ProductType } from "@src/common/fake-data"

type PropsType = {
  href?: string
  item: ProductType
}

const ProductCard = ({ item, href = "" }: PropsType) => {
  const { img, title, description, type } = item

  return (
    <Stack className="xmd:flex-col justify-start md:justify-between xmd:space-y-4 xmd:bg-[#f8f8f8] w-full h-full border">
      <Link href={href}>
        <Stack className="xmd:flex-col space-x-3 xmd:space-x-0 xmd:space-y-4 px-2 sm:px-6 py-2 sm:py-0 sm:pt-6">
          <Image
            src={img}
            width={159}
            height={201}
            alt={description || title}
            className="w-[100px] xmd:w-[110px]  md:min-h-[130px] lg:min-h-[160px] lg:w-[130px]"
          />

          <Stack className="space-y-2 sm:space-y-1 flex-col items-start w-full">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption" className="line-clamp-2 md:line-clamp-3">
              {description}
            </Typography>

            <Stack className="flex-col md:hidden items-start space-y-1">
              {type.map(({ price, name, discount, id }) => (
                <Stack key={id} className="space-x-2 ">
                  <Typography className="font-bold">{name}:</Typography>
                  <Typography>${+discount ? +discount : price}</Typography>
                  {!!+discount && (
                    <Stack className="items-center space-x-1">
                      <Typography variant="caption" className="bg-primary-dark rounded-full text-white px-[3.5px] py-[2.5px]">
                        {+discount && Math.floor((+discount * +price) / 100)}%
                      </Typography>
                      <Typography variant="caption" className="line-through text-gray-400">
                        ${price}
                      </Typography>
                    </Stack>
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Link>

      <Stack className="hidden md:flex xmd:justify-between space-x-0 sm:space-x-6 space-y-4 xmd:space-y-0 items-end xmd:w-full px-6 md:pb-4 flex-col sm:flex-row">
        {type.map(({ price, name, discount, id }) => (
          <Stack key={id} className="flex-col space-y-3">
            <Stack className="flex-col items-end">
              {!!+discount && (
                <Stack className="items-center space-x-1">
                  <Typography variant="caption" className="bg-primary-dark rounded-full text-white px-[3.5px] py-[2.5px]">
                    {+discount && price && Math.floor((+discount * +price) / 100)}%
                  </Typography>
                  <Typography variant="caption" className="line-through text-gray-400">
                    ${price}
                  </Typography>
                </Stack>
              )}
              <Typography>${+discount ? discount : price}</Typography>
            </Stack>
            <BuyButtons
              className="!w-24 lg:!w-[110px] !p-0"
              typeId={id}
              buyButtonTitle={name}
              data={item}
              size="small"
              variant="contained"
            />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default ProductCard
