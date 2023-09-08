import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"
import { ProductType } from "@src/common/fake-data"

type PropsType = {
  href?: string
  data: ProductType
}

const Card = ({ data, href = "" }: PropsType) => {
  const { img, title, description, type } = data

  return (
    <Stack className="flex-col space-y-4 bg-[#f8f8f8] min-w-[250px] md:min-w-[355px] w-28 shadow-md rounded-2xl">
      <Link href={href}>
        <Stack className="flex-col space-y-4 px-6 pt-6">
          <Image src={img} width={159} height={201} alt={description || title} className="w-[100px] sm:w-[120px] md:w-[159px]" />

          <Stack className="space-y-1 flex-col items-start">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption">{description}</Typography>
          </Stack>
        </Stack>
      </Link>

      <Stack className="justify-between items-end w-full px-6 pb-4">
        {type.map(({ price, name, discount }) => (
          <Stack className="flex-col space-y-3">
            <Stack className="flex-col items-end">
              {!!discount && (
                <Stack className="items-center space-x-1">
                  <Typography variant="caption" className="bg-primary-dark rounded-full text-white px-[3.5px] py-[2.5px]">
                    {discount && price && Math.floor((+discount * +price) / 100)}%
                  </Typography>
                  <Typography variant="caption" className="line-through text-gray-400">
                    ${price}
                  </Typography>
                </Stack>
              )}
              <Typography variant="h6" >
                ${discount ? discount : price}
              </Typography>
            </Stack>
            <BuyButtons buyButtonTitle={name} data={data} size="small" variant="contained" />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Card
