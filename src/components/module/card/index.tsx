import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"

type PropsType = {
  img?: string
  href?: string
  title?: string
  description?: string
  price?: string | number
  discount?: string | number
}

const Card = ({ img = "", title = "", description = "", discount, price, href = "" }: PropsType) => {
  return (
    <Stack className="flex-col bg-[#f8f8f8] min-w-[250px] md:min-w-[295px] w-28 shadow-md rounded-2xl">
      <Link href={href}>
        <Stack className="flex-col space-y-4 px-6 pt-6">
          <Image src={img} width={159} height={201} alt={description || title} className="w-[100px] sm:w-[120px] md:w-[159px]" />

          <Stack className="items-start flex-col space-y-4">
            <Stack className="space-y-1 flex-col items-start">
              <Typography variant="h6">{title}</Typography>
              <Typography variant="caption">{description}</Typography>
            </Stack>

            <Stack className="flex-col items-start w-full">
              {discount && (
                <Stack className="items-center space-x-1">
                  <Typography variant="caption" className="bg-primary-dark rounded-full text-white px-1 py-[2.5px]">
                    {discount && price && Math.floor((+discount * +price) / 100)}%
                  </Typography>
                  <Typography className="line-through text-gray-400">${price}</Typography>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Link>
      <Stack className="justify-between w-full px-6 pb-4">
        <Typography variant="h6">${discount ? discount : price}</Typography>
        <BuyButtons quantity={0} size="medium" variant="contained" />
      </Stack>
    </Stack>
  )
}

export default Card
