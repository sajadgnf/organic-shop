import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { PRODUCTS } from "routes"

const FAKE_DATA = [
  {
    title: "vegetable",
    img: "/images/vegetable.svg",
  },
  {
    title: "fruit",
    img: "/images/vegetable.svg",
  },
  {
    title: "juice",
    img: "/images/vegetable.svg",
  },
  {
    title: "salad",
    img: "/images/vegetable.svg",
  },
]

const CategoriesList = () => {
  return (
    <Stack className="justify-between sm:flex-wrap lg:flex-nowrap w-full sm:space-y-4 md:space-y-0">
      {FAKE_DATA.map((category) => (
        <Link key={category.title} href={`${PRODUCTS}?category=${category.title}`}>
          <Stack className="bg-primary-light rounded-2xl sm:overflow-hidden px-6 py-2 sm:p-0 sm:pl-5 sm:justify-between sm:w-[165px] lg:w-[265px] lg:h-[190px]">
            <Typography data-testid="category-title" variant="p" className="sm:mt-12 sm:text-[18px]">
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
