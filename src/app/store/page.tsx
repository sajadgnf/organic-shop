import React from "react"
import Stack from "@atom/stack"
import ProductCard from "@module/product-card"

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

const Store = () => {
  return (
    <Stack className="container flex-wrap mt-72 gap-4 ">
      {FAKE_DATA.map((data, i) => (
        <>
          <ProductCard
            img={data.img}
            title={data.title}
            price={data.price}
            discount={data.discount}
            key={data.title + data.img + i}
            description={data.description}
          />
          {FAKE_DATA.length - 1 !== i && <hr className="w-full md:hidden" />}
        </>
      ))}
    </Stack>
  )
}

export default Store
