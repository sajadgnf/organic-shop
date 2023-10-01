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
    description:
      "Indulge in the goodness of our organic Green Love juice, a refreshing blend of apple, celery, cucumber, lemon, ginger, and mint leaves. This invigorating concoction is carefully crafted to provide a revitalizing experience for your taste buds. The crispness of apple and cucumber meets the zing of lemon and ginger, all balanced by the cooling sensation of mint. It's the perfect choice for a healthy and flavorful hydration option. Whether you're a seasoned juicer or just starting on your journey to wellness, Green Love will make your taste buds dance with joy.",
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
        description: "I'm a big fan of Green Love. It's my daily dose of freshness and vitality!",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "Green Love is more than just a juice; it's a burst of natural energy in every sip. Love it!",
        rate: 5,
      },
      {
        name: "Emma Anderson",
        description: "The combination of flavors in Green Love is simply genius. It's a must-try!",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "Green Love has become my go-to drink for a quick pick-me-up. Highly recommended!",
        rate: 3,
      },
      {
        name: "Emma Anderson",
        description: "I appreciate the quality of Green Love. It's a delightful treat for the senses.",
        rate: 2,
      },
      {
        name: "Emma Anderson",
        description: "I start my day with Green Love, and it sets a positive tone for the entire day. Cheers!",
        rate: 4,
      },
      {
        name: "Emma Anderson",
        description: "The freshness of Green Love is unmatched. It's like sipping pure vitality!",
        rate: 3,
      },
    ],
  },
  {
    id: "2",
    title: "Tropical Delight",
    description:
      "Experience a taste of the tropics with our Tropical Delight juice. This refreshing blend combines the exotic flavors of pineapple, mango, and passion fruit to transport your senses to a sun-soaked paradise. Each sip is a journey through lush rainforests and pristine beaches. Whether you're lounging by the pool or dreaming of your next vacation, Tropical Delight is the perfect companion. Don't miss out on this tropical escape in a glass!",
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
    description:
      "Indulge in the lusciousness of our Berry Bliss juice, a delightful blend of ripe strawberries, succulent blueberries, and tangy raspberries. Each sip is a burst of fruity goodness, making it the perfect addition to your morning routine or a refreshing treat throughout the day. Packed with antioxidants and natural sweetness, Berry Bliss is the epitome of a guilt-free indulgence. Treat your taste buds to a symphony of berry flavors!",
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
    description:
      "Awaken your senses with the Citrus Burst juice, a zesty combination of ripe oranges, tangy grapefruits, and zesty lemons. Each sip is like a burst of sunshine on a cloudy day. The perfect balance of sweet and sour will invigorate your taste buds and give you the energy you need to tackle the day ahead. Whether you enjoy it in the morning or as an afternoon pick-me-up, Citrus Burst is sure to bring a smile to your face.",
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
    description:
      "Transport yourself to a tropical paradise with our Mango Tango juice. This exotic blend combines the lusciousness of ripe mangoes with a hint of tropical pineapple. Every sip is a journey to sun-soaked beaches and swaying palm trees. Whether you're sipping it by the pool or dreaming of your next getaway, Mango Tango is the perfect escape in a glass. Experience the pure bliss of the tropics with every sip!",
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
    description:
      "Escape to a tropical paradise with our Pineapple Paradise juice. This refreshing blend captures the sweetness of ripe pineapples, taking your taste buds on a mini-vacation with every sip. Whether you're relaxing on the beach or daydreaming of sunny days, Pineapple Paradise is your ticket to tropical bliss. The authentic pineapple flavor will transport you to paradise, sip by sip.",
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
    description:
      "Get ready for a burst of berry goodness with our Berry Blast juice. This vibrant blend combines the sweetness of strawberries, the richness of blueberries, and the boldness of blackberries. It's like a party in your mouth with every sip! Whether you're starting your day with a burst of fruity flavor or indulging in a mid-day treat, Berry Blast is the perfect choice. Satisfy your berry cravings with this delightful juice.",
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
    description:
      "Ride the wave of refreshment with our Watermelon Wave juice. This revitalizing blend captures the essence of juicy watermelons, providing a burst of hydrating goodness with every sip. It's the perfect way to cool down on a hot day or reminisce about summer picnics. With a wave of watermelon flavor, this juice will keep you refreshed and hydrated. Dive into the wave of watermelon delight!",
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
  {
    id: "21",
    title: "Sweet Apples",
    description:
      "Indulge in the delicious sweetness of our fresh and crisp apples, hand-picked from the bountiful orchards at the peak of ripeness. These apples are carefully selected to ensure that each bite delivers the perfect balance of sweetness and crunchiness. Whether you enjoy the classic Red Delicious variety or prefer the tartness of Granny Smith, our apples are the ultimate snack for any time of the day. Elevate your meals or satisfy your sweet cravings with the wholesome goodness of our sweet apples.",
    img: "/images/fruit/apple.svg",
    rate: 4.8,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 1.49,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.29,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Sophia Adams",
        description: "These apples are so sweet and crunchy. Perfect for snacking!",
        rate: 5,
      },
      {
        name: "Ethan Turner",
        description: "I love the variety of apples available. They're all delicious!",
        rate: 4,
      },
    ],
  },
  {
    id: "22",
    title: "Juicy Oranges",
    description:
      "Experience the burst of citrusy goodness with our succulent oranges. Sourced from the sun-drenched groves, our oranges are known for their unparalleled juiciness and vibrant flavor. Whether you opt for the classic Navel Oranges with their sweet and tangy notes or the exotic Blood Oranges with their rich, deep color and distinctive taste, each orange is a refreshing delight. From fresh orange juice to zesty salads, our juicy oranges elevate your culinary adventures.",
    img: "/images/fruit/orange.svg",
    rate: 4.7,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 1.19,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.39,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Oliver Wilson",
        description: "These oranges are incredibly juicy and refreshing. I can't get enough!",
        rate: 5,
      },
      {
        name: "Lily Parker",
        description: "The blood oranges have such a unique and vibrant flavor. Highly recommended!",
        rate: 4,
      },
    ],
  },
  {
    id: "23",
    title: "Tropical Bananas",
    description:
      "Delight in the tropical goodness of our ripe and creamy bananas, sourced from lush tropical plantations. Our Cavendish Bananas are the embodiment of sweet indulgence, while the Baby Bananas offer a charmingly small yet equally delectable experience. These bananas are nature's perfect snack, rich in potassium and natural sweetness. Whether you add them to your morning cereal, blend them into smoothies, or savor them as a quick and healthy on-the-go treat, our tropical bananas are sure to satisfy your cravings.",
    img: "/images/fruit/banana.svg",
    rate: 4.6,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 0.89,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.09,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Ava Turner",
        description: "These bananas are perfectly ripe and great for making smoothies!",
        rate: 5,
      },
      {
        name: "Noah Adams",
        description: "I love the baby bananas. They're so cute and sweet!",
        rate: 4,
      },
    ],
  },
  {
    id: "24",
    title: "Zesty Lemons",
    description:
      "Unleash the tangy and zesty flavors of our lemons, ideal for adding a burst of citrus to your culinary creations. Our Eureka Lemons are prized for their tartness, making them perfect for making lemonade and zest for desserts. Meanwhile, our Meyer Lemons offer a sweeter, more aromatic alternative that elevates your recipes with a unique and delightful twist. From salad dressings to baking, our zesty lemons are a kitchen essential for every home chef.",
    img: "/images/fruit/lemon.svg",
    rate: 4.9,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 0.79,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 0.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Liam Wilson",
        description: "These lemons are so fresh and full of flavor. Perfect for making lemonade!",
        rate: 5,
      },
      {
        name: "Emma Parker",
        description: "Meyer lemons are my favorite for baking. They have a delightful aroma!",
        rate: 4,
      },
    ],
  },
  {
    id: "25",
    title: "Ripe Strawberries",
    description:
      "Indulge in the plump and juicy goodness of our ripe strawberries, each one bursting with sweet, sun-ripened flavor. Our Sweet Strawberries are the epitome of berry bliss, while our Organic Strawberries promise a guilt-free and wholesome treat. These strawberries are perfect for creating delectable desserts, garnishing breakfast bowls, or simply enjoying by the handful. Let the luscious taste of our ripe strawberries brighten up your day.",
    img: "/images/fruit/strawberry.svg",
    rate: 4.8,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 2.49,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 2.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Olivia Adams",
        description: "These strawberries are like little bursts of happiness. So sweet and delicious!",
        rate: 5,
      },
      {
        name: "William Turner",
        description: "I can't resist the organic strawberries. They're so flavorful!",
        rate: 4,
      },
    ],
  },
  {
    id: "26",
    title: "Ripe Kiwis",
    description:
      "Savor the tropical delight of our ripe kiwis, known for their vibrant green flesh and refreshing flavor. Our Green Kiwis offer a tangy, invigorating experience, while our Gold Kiwis provide a unique sweetness that's hard to resist. These kiwis are perfect for snacking, adding to fruit salads, or blending into smoothies. With their high vitamin C content, our ripe kiwis are not only delicious but also nutritious.",
    img: "/images/fruit/kiwi.svg",
    rate: 4.7,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 1.29,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.59,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Sophie Parker",
        description: "I love the tropical flavor of these kiwis. They're a healthy snack!",
        rate: 5,
      },
      {
        name: "Ethan Adams",
        description: "Gold kiwis are a delightful treat. They have a unique sweetness!",
        rate: 4,
      },
    ],
  },
  {
    id: "27",
    title: "Ripe Pineapples",
    description:
      "Transport your taste buds to tropical paradise with our juicy and sweet pineapples sourced from exotic islands. Our Golden Pineapples are prized for their unrivaled sweetness, making them perfect for creating refreshing fruit salads or sipping on piña coladas. Alternatively, our Mini Pineapples offer an adorable and convenient snacking option, ideal for satisfying your sweet cravings. Experience the taste of the tropics with our ripe pineapples.",
    img: "/images/fruit/pineapple.svg",
    rate: 4.8,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 2.99,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.49,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Oliver Turner",
        description: "These pineapples are so tropical and refreshing. Perfect for making piña coladas!",
        rate: 5,
      },
      {
        name: "Lily Adams",
        description: "The mini pineapples are adorable and delicious. They make great snacks!",
        rate: 4,
      },
    ],
  },
  {
    id: "28",
    title: "Sweet Grapes",
    description:
      "Experience the grapevine's bounty with our plump and juicy grapes, available in red, green, and black varieties. Our Red Grapes burst with natural sweetness, making them an ideal choice for snacking or adding a fruity touch to your salads. On the other hand, our Green Grapes offer a delightful crispness that pairs perfectly with cheese platters. Dive into the world of grape indulgence with our sweet and juicy grapes.",
    img: "/images/fruit/grape.svg",
    rate: 4.7,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 1.99,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.79,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Ava Wilson",
        description: "These grapes are incredibly sweet and make for a healthy snack!",
        rate: 5,
      },
      {
        name: "Noah Parker",
        description: "I love the variety of grapes available. They're all so delicious!",
        rate: 4,
      },
    ],
  },
  {
    id: "29",
    title: "Ripe Peaches",
    description:
      "Dive into the lusciousness of our ripe peaches, each one oozing with sweet, juicy flavor. Our Yellow Peaches offer the classic peachy taste, while our White Peaches provide a unique and slightly floral twist to your fruit experience. Whether you enjoy them fresh, in pies, or blended into smoothies, our ripe peaches are the essence of summer. Get ready to savor the ripe perfection of our peaches.",
    img: "/images/fruit/peach.svg",
    rate: 4.6,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 1.79,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 1.99,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Liam Adams",
        description: "These peaches are so ripe and juicy. Perfect for making peach cobbler!",
        rate: 5,
      },
      {
        name: "Emma Turner",
        description: "I love the sweetness of white peaches. They're a summer delight!",
        rate: 4,
      },
    ],
  },
  {
    id: "30",
    title: "Pomegranate",
    description:
      "Discover the exquisite taste and health benefits of Pomegranate, often referred to as the 'jewel of fruits.' Pomegranates are known for their vibrant ruby-red arils, which are bursting with sweet and tangy juice. Each bite is a delightful explosion of flavor, reminiscent of berries and a hint of citrus. Pomegranates are not only delicious but also packed with antioxidants, vitamins, and minerals. They're believed to promote heart health and offer a wealth of nutritional advantages. Whether you enjoy them as a fresh snack, sprinkle the arils on salads, or savor their juice, Pomegranates are a true superfruit that can elevate your culinary experience and boost your well-being.",
    img: "/images/fruit/pomegranate.svg",
    category: "fruit",
    rate: 4.6,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: 3.49,
        discount: 0,
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: 4.49,
        discount: 0,
      },
    ],
    comments: [
      {
        name: "Lily Wilson",
        description: "These mixed berries are a burst of fruity goodness. Great for making smoothie bowls!",
        rate: 5,
      },
      {
        name: "Oliver Parker",
        description: "I prefer the organic berries. They taste so fresh and wholesome!",
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
