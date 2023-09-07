import React from "react"
import Stack from "@atom/stack"
import Card from "@module/card"
import { PRODUCTDETAILS } from "routes"

const FAKE_DATA = [
  {
    id: 1,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    id: 2,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    id: 3,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    id: 4,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    id: 5,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    id: 6,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
  {
    id: 7,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    price: 14.01,
    discount: 12.06,
    img: "/images/test-juice.svg",
  },
]

const Store = () => {
  return (
    <Stack className="container flex-wrap mt-72 gap-4 ">
      {FAKE_DATA.map((data, i) => (
        <>
          <Card
            img={data.img}
            title={data.title}
            price={data.price}
            discount={data.discount}
            description={data.description}
            href={PRODUCTDETAILS(data.id)}
            key={data.title + data.img + i}
          />
        </>
      ))}
    </Stack>
  )
}

export default Store
