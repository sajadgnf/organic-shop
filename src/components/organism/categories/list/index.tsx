import React from "react"
import Link from "next/link"
import Image from "next/image"
import { STORE } from "routes"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { FAKE_CATEGORY } from "@src/common/fake-data"

const CategoriesList = () => {
  return (
    <Stack className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xmd:grid-cols-4 m-auto w-full gap-4">
      {FAKE_CATEGORY.map((category) => (
        <Link key={category.title} href={`${STORE}?category=${category.title}`}>
          <Stack className="bg-primary-light items-start rounded-2xl sm:overflow-hidden px-3 xs:px-6 py-2 sm:p-0 sm:pl-5 sm:justify-between sm:h-[190px]">
            <Typography data-testid="category-title" variant="p" className="mt-auto sm:!text-xl sm:mb-12">
              {category.title.toUpperCase()}
            </Typography>
            <Image src={category.img} width={120} height={120} alt={category.title} className="flex-1 hidden sm:flex" />
          </Stack>
        </Link>
      ))}
    </Stack>
  )
}

export default CategoriesList
