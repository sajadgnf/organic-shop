import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { ProductType } from "@src/common/fake-data"

type PropsType = {
  href: string
  item: ProductType
}

const SearchCard = ({ item, href }: PropsType) => {
  const { img, title, description } = item

  return (
    <Link href={href}>
      <Stack className="space-x-3 px-2 sm:px-6 py-2 sm:py-0 sm:pt-6">
        <Image src={img} width={50} height={201} alt={description || title} />

        <Stack className="space-y-1 sm:space-y-1 flex-col items-start w-full">
          <Typography>{title}</Typography>
          <Typography variant="caption" className="line-clamp-2">
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Link>
  )
}

export default SearchCard
