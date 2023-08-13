import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"

type PropsType = {
  img?: string
  title?: string
  description?: string
  discount?: string | number
  price?: string | number
}

const ProductCard = ({ img = "", title = "", description = "", discount, price }: PropsType) => {
  return (
    <Stack className="flex-row md:flex-col md:bg-[#f8f8f8] md:w-[295px] md:space-y-4 md:shadow-md md:rounded-2xl md:p-6">
      <Image src={img} width={159} height={201} alt={description || title} className="w-[100px] sm:w-[120px] md:w-[159px]" />
      <Stack className="items-start flex-col space-y-4">
        <Stack className="space-y-1 flex-col items-start">
          <Typography variant="h6">{title}</Typography>
          <Typography className="text-gray-500" variant="caption">{description}</Typography>
        </Stack>

        <Stack className="flex-col items-start w-full">
          {discount && (
            <Stack className="items-center space-x-1">
              <Typography variant="caption" className="bg-primary-dark rounded-full text-white p-1">
                {discount && price && Math.floor((+discount * +price) / 100)}%
              </Typography>
              <Typography className="line-through text-gray-400">${price}</Typography>
            </Stack>
          )}
          <Stack className="justify-between w-full">
            <Typography variant="h6">${discount ? discount : price}</Typography>
            <Button variant="contained">Add To Cart</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default ProductCard
