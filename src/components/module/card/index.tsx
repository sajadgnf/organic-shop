import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import BuyButtons from "@module/buy-buttons"

type PropsType = {
  img?: string
  title?: string
  description?: string
  discount?: string | number
  price?: string | number
}

const Card = ({ img = "", title = "", description = "", discount, price }: PropsType) => {
  return (
    <Stack className="flex-col bg-[#f8f8f8] min-w-[250px] md:min-w-[295px] space-y-4 shadow-md rounded-2xl p-6">
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
          <Stack className="justify-between w-full">
            <Typography variant="h6">${discount ? discount : price}</Typography>
            <BuyButtons quantity={0} size="medium" variant="contained" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Card
