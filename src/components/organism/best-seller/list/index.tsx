import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Card from "@module/card"
import Image from "next/image"
import React from "react"

const FAKE_DATA = [
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
]

const BestSellerProductList = () => {
  return (
    <Stack>
      {FAKE_DATA.map((data) => (
        <Card
          img={data.img}
          title={data.title}
          price={data.price}
          alt={data.description}
          discount={data.discount}
          key={data.title + data.img}
          description={data.description}
        />
      ))}
    </Stack>
  )
}

export default BestSellerProductList
