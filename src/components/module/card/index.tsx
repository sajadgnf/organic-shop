import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Image from "next/image"
import React from "react"

type PropsType = {
  img?: string
  alt?: string
  title?: string
  description?: string
  discount?: string | number
  price?: string | number
}

const Card = ({ img = "", alt = "", title, description, discount, price }: PropsType) => {
  return (
    <Stack className="flex-col w-[295px] space-y-4 shadow-md rounded-2xl p-6">
      <Image src={img} width={159} height={201} alt={alt} />
      <Stack className="items-start flex-col space-y-4">
        <Stack className="space-y-1 flex-col items-start">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{description}</Typography>
        </Stack>

        <Stack className="flex-col items-start w-full">
          <Stack className="items-center space-x-1">
            <Typography variant="caption" className="bg-primary-dark rounded-full text-white p-1">
              {discount && price && Math.floor((+discount * +price) / 100)}%
            </Typography>
            <Typography className="line-through text-gray-400">${price}</Typography>
          </Stack>
          <Stack className="justify-between w-full">
            <Typography variant="h6">${discount}</Typography>
            <Button variant="contained">Add To Cart</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Card
