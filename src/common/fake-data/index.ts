export type ProductType = {
  id: string
  img: string
  title: string
  description: string
  rate: number | string
  category: "juice" | "fruit" | "vegetable" | "salad"
  type: {
    id: string
    name: string
    price: number
    discount: number
    stockOut: boolean
  }[]
  comments: {
    name: string
    rate: number
    description: string
  }[]
}

export type CategoryType = {
  title: string
  img: string
}

const FAKE_DATA: ProductType[] = [
  {
    id: "1",
    title: "Green Love",
    description: "Organic drink, a combination of apple, celery, cucumber, lemon, ginger, and mint leaves",
    img: "/images/juice/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 14.01,
        discount: 0,
      },
      {
        stockOut: true,
        id: "2",
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
    id: "2",
    title: "Tropical Delight",
    description: "A refreshing blend of pineapple, mango, and passion fruit",
    img: "/images/juice/tropical-juice.svg",
    rate: 4.5,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 8.99,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 12.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "John Smith",
        description: "This juice is amazing! It's the perfect mix of sweet and tangy.",
        rate: 5,
      },
      {
        name: "Jane Doe",
        description: "I love the tropical flavor. It's like a vacation in a glass!",
        rate: 4,
      },
    ],
  },
  {
    id: "3",
    title: "Berry Bliss",
    description: "A delicious blend of strawberries, blueberries, and raspberries",
    img: "/images/juice/berry-bliss.svg",
    rate: 4.2,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 7.99,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 11.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Sarah Johnson",
        description: "The berry flavor is so intense and delicious. I can't get enough of it!",
        rate: 5,
      },
      {
        name: "Michael Brown",
        description: "This juice is a great way to start my day. It's packed with antioxidants!",
        rate: 4,
      },
    ],
  },
  {
    id: "4",
    title: "Citrus Burst",
    description: "A zesty combination of oranges, grapefruits, and lemons",
    img: "/images/juice/citrus-burst.svg",
    rate: 4.4,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 6.99,
        discount: 0,
      },
      {
        stockOut: true,
        id: "2",
        name: "High grade",
        price: 10.99,
        discount: 15.0,
      },
    ],
    comments: [
      {
        name: "Olivia White",
        description: "I love the tangy kick of this juice. It wakes me up in the morning!",
        rate: 5,
      },
      {
        name: "David Wilson",
        description: "The perfect balance of sweet and sour. Highly recommended!",
        rate: 4,
      },
    ],
  },
  {
    id: "5",
    title: "Mango Tango",
    description: "An exotic blend of ripe mangoes with a hint of pineapple",
    img: "/images/juice/mango.svg",
    rate: 4.6,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 9.49,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 13.49,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Sophia Clark",
        description: "Mango Tango is my go-to summer drink. It's pure tropical bliss!",
        rate: 5,
      },
      {
        name: "Ethan Davis",
        description: "I can taste the freshness of the mangoes in every sip. Absolutely delicious!",
        rate: 5,
      },
    ],
  },
  {
    id: "6",
    title: "Pineapple Paradise",
    description: "A tropical escape with the sweetness of ripe pineapples",
    img: "/images/juice/pineapple.svg",
    rate: 4.7,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 8.99,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 12.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Liam Taylor",
        description: "Pineapple Paradise takes me on a mini-vacation with every sip. So good!",
        rate: 5,
      },
      {
        name: "Ava Moore",
        description: "The pineapple flavor is so authentic. It's like drinking sunshine!",
        rate: 4,
      },
    ],
  },
  {
    id: "7",
    title: "Berry Blast",
    description: "A burst of berry goodness with strawberries, blueberries, and blackberries",
    img: "/images/juice/tropical-juice.svg",
    rate: 4.4,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 7.99,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 11.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Mia Harris",
        description: "Berry Blast is a burst of fruity goodness. It's like a party in my mouth!",
        rate: 5,
      },
      {
        name: "Noah Martinez",
        description: "I'm a berry lover, and this juice satisfies my cravings perfectly.",
        rate: 4,
      },
    ],
  },
  {
    id: "8",
    title: "Watermelon Wave",
    description: "A refreshing wave of juicy watermelon goodness",
    img: "/images/juice/watermelon.svg",
    rate: 4.6,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 8.49,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 12.49,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Ella Allen",
        description: "Watermelon Wave is so hydrating and delicious. Perfect for a hot day!",
        rate: 5,
      },
      {
        name: "William Turner",
        description: "This juice reminds me of summer picnics. It's a nostalgic treat!",
        rate: 4,
      },
    ],
  },
]

export const FAKE_CATEGORY: CategoryType[] = [
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
export default FAKE_DATA
