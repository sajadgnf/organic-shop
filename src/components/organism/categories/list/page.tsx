import React from "react"
import Image from "next/image"
import Stack from "@atom/stack/page"
import Typography from "@atom/typography/page"

const FAKE_DATA = [
  {
    title: "vegetable",
    img: "/images/vegetable.svg",
  },
  {
    title: "vegetable",
    img: "/images/vegetable.svg",
  },
  {
    title: "vegetable",
    img: "/images/vegetable.svg",
  },
  {
    title: "vegetable",
    img: "/images/vegetable.svg",
  },
]

const CategoriesList = () => {
  return (
    <Stack className="justify-between w-full">
      {FAKE_DATA.map((category) => (
        <Stack className="bg-primary-50 pl-5 rounded-2xl overflow-hidden">
          <Typography variant="p" className="mt-12">
            {category.title.toUpperCase()}
          </Typography>
          <Image src={category.img} width={120} height={120} alt="vegetable" />
        </Stack>
      ))}
    </Stack>
  )
}

export default CategoriesList
