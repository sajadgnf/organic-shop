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
    <Stack className="justify-between w-full">
      {FAKE_DATA.map((category) => (
        <Link key={category.title} href={`${PRODUCTS}?category=${category.title}`}>
          <Stack className="bg-primary-light pl-5 rounded-2xl overflow-hidden">
            <Typography data-testid="category-title" variant="p" className="mt-12">
              {category.title.toUpperCase()}
            </Typography>
            <Image src={category.img} width={120} height={120} alt={category.title} />
          </Stack>
        </Link>
      ))}
    </Stack>
  )
}

export default CategoriesList
