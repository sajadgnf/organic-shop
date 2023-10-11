import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
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
      </Stack>
    </Link>
  )
}

export default RelatedProductCard
