import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"

const FAKE_DATA = [
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
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
    <Stack className="w-full overflow-auto space-x-5 justify-start px-1 pb-2 hide-scrollbar">
      {FAKE_DATA.map((data, i) => (
        <Card
          img={data.img}
          title={data.title}
          price={data.price}
          discount={data.discount}
          key={data.title + data.img + i}
          description={data.description}
        />
      ))}
    </Stack>
  )
}

export default BestSellerProductList
