export type ProductType = {
  img: string
  title: string
  id: string | number
  description: string
  rate: number | string
  category: "juice" | "fruit" | "vegetable" | "salad"
  type: {
    name: string
    price: number
    discount: number
  }[]
  comments: {
    name: string
    rate: number
    description: string
  }[]
}

const FAKE_DATA: ProductType[] = [
  {
    id: 1,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 0,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 0,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
  {
    id: 3,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 12.06,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
  {
    id: 4,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 12.06,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
  {
    id: 5,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 12.06,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
  {
    id: 6,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 12.06,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
  {
    id: 7,
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger and mint leaves",
    img: "/images/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        name: "Luxury",
        price: 14.01,
        discount: 12.06,
      },
      {
        name: "High grade",
        price: 12.01,
        discount: 12.41,
      },
    ],
    comments: [
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
        rate: 3,
      },
    ],
  },
]
export default FAKE_DATA
