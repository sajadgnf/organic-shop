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
    price: string
    discount: string
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
      "Indulge in a transcendent journey of the senses with Green Love, an extraordinary elixir meticulously crafted to tantalize your taste buds and rejuvenate your spirit. This botanical masterpiece is a harmonious blend of nature's most exquisite gifts, each sip carrying you through lush orchards and fragrant herb gardens. Green Love unites the crisp sweetness of hand-picked apples, the invigorating crunch of celery, the hydrating coolness of cucumber, the zesty burst of sun-ripened lemons, the fiery essence of ginger, and the soothing embrace of fresh mint leaves.",
    img: "/images/juice/test-juice.svg",
    rate: 4.3,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "14.01",
        discount: "0",
      },
      {
        stockOut: true,
        id: "2",
        name: "High grade",
        price: "12.01",
        discount: " 10.41",
      },
    ],
    comments: [
      {
        name: "Sophia Smith",
        description: "Green Love has woven itself into the fabric of my daily life. It's a symphony of freshness and vitality!",
        rate: 4,
      },
      {
        name: "Ethan Johnson",
        description:
          "Green Love transcends the boundaries of a mere juice; it's a captivating burst of natural energy in every sip. Love it!",
        rate: 5,
      },
      {
        name: "Olivia Davis",
        description:
          "The masterful combination of flavors in Green Love is nothing short of genius. It's a must-try for anyone seeking perfection!",
        rate: 4,
      },
      {
        name: "Noah White",
        description:
          "Green Love has become my trusted companion, a quick pick-me-up that never fails to impress. Highly recommended!",
        rate: 3,
      },
      {
        name: "Ava Brown",
        description:
          "I am enchanted by the unwavering quality of Green Love. It's a delightful treat for the senses, a true masterpiece.",
        rate: 2,
      },
      {
        name: "Liam Wilson",
        description:
          "Each day begins with a delightful sip of Green Love, setting a positive tone for the hours ahead. Cheers to this elixir of vitality!",
        rate: 4,
      },
      {
        name: "Mia Taylor",
        description:
          "The freshness encapsulated within Green Love is a league of its own. It's like sipping pure vitality, a botanical miracle!",
        rate: 3,
      },
    ],
  },
  {
    id: "2",
    title: "Cobb Salad",
    description:
      "a hearty Cobb salad featuring a bed of fresh mixed greens as the base, adorned with succulent grilled chicken, crispy bacon bits, soft-boiled eggs, creamy avocado slices, and topped generously with tangy and creamy blue cheese dressing. Each forkful offers a harmonious blend of flavors, from the savory chicken to the creamy avocado and pungent blue cheese, providing a satisfying and fulfilling meal that's both delicious and nutritious. This classic American favorite combines a medley of textures and tastes, making it a versatile choice for a hearty appetizer or a substantial main course, and its colorful presentation adds an element of visual delight. Whether you're a salad enthusiast or not, the Cobb salad has an irresistible way of winning over even the pickiest eaters, making it a timeless and beloved dish worth savoring.",
    img: "/images/salad/cobb.svg",
    category: "salad",
    rate: 4.6,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "10.99",
        discount: "0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "12.99",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Mia Garcia",
        description: "The Cobb salad is a full meal in itself. So many flavors and textures!",
        rate: 5,
      },
      {
        name: "Ethan Clark",
        description: "I order the Cobb salad every time. The avocado makes it so creamy!",
        rate: 2,
      },
      {
        name: "Sophie Turner",
        description:
          "I'm a Cobb salad enthusiast, and this one truly hits the mark. The mix of ingredients is spot-on, and that blue cheese dressing is divine. Solid 5 stars!",
        rate: 3,
      },
      {
        name: "Jordan Smith",
        description:
          "The Cobb salad is my go-to choice for a satisfying lunch. The grilled chicken is always perfectly cooked, and the combination of flavors is simply mouthwatering. Highly recommended!",
        rate: 5,
      },
      {
        name: "Olivia Martinez",
        description:
          "I'm all about that creamy avocado in the Cobb salad! It adds a unique twist to a classic dish. Definitely a 5-star salad for me.",
        rate: 5,
      },
      {
        name: "Liam Johnson",
        description:
          "The Cobb salad is a winner, but I wish there was an option for a lighter dressing. The blue cheese can be a bit overpowering. Still, a solid 4 stars for the taste.",
        rate: 4,
      },
      {
        name: "Ava Anderson",
        description:
          "Cobb salads are my guilty pleasure, and this one doesn't disappoint. The bacon and eggs add that perfect crunch and richness. It's a satisfying and indulgent choice, definitely a 5-star salad!",
        rate: 5,
      },
    ],
  },
  {
    id: "3",
    title: "Cabbage",
    description:
      "Enjoy the crisp and fresh taste of cabbage, perfect for salads and coleslaw. Cabbage's crunchy texture and subtle sweetness elevate any dish it graces, providing a satisfying, wholesome bite that complements a variety of flavors. Whether you're shredding it into a zesty coleslaw, sautéing it with garlic and butter for a savory side, or fermenting it into tangy kimchi, cabbage is a versatile vegetable that adds a delightful crunch to your culinary creations. Its vibrant green or purple leaves are not only visually appealing but also packed with essential nutrients, making it a nutritious addition to your diet. With its low-calorie content and high fiber content, cabbage is a health-conscious choice that promotes digestive health and keeps you feeling full and satisfied. Its mild flavor profile makes it an ideal canvas for experimenting with different seasonings and dressings, allowing you to customize your cabbage dishes to suit your taste preferences. So, whether you're a devoted cabbage enthusiast or just discovering its culinary potential, savor the joys of this remarkable vegetable in your meals and relish the endless possibilities it offers.",
    img: "/images/vegetable/cabbage.svg",
    category: "vegetable",
    rate: 4.7,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.09",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.59",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Liam Mitchell",
        description: "I make the best coleslaw with these cabbages. Crisp and delicious!",
        rate: 5,
      },
      {
        name: "Sophia Carter",
        description: "These cabbages are so fresh, they elevate my salads to the next level.",
        rate: 4,
      },
    ],
  },
  {
    id: "4",
    title: "Potato",
    description:
      "Experience the versatility of potatoes, perfect for fries, mash, and more. Potatoes, the humble tuber, have been a dietary staple across cultures for centuries. From crispy golden fries that satisfy your craving for a crunchy snack to creamy, buttery mashed potatoes that melt in your mouth, these starchy wonders offer an array of culinary possibilities. Whether you prefer them baked to crispy perfection, roasted with aromatic herbs, or transformed into delectable potato salads, their adaptability knows no bounds. Potatoes can be whipped into velvety soups or sliced thin for a gratin that oozes with cheesy goodness. Beyond the classics, explore the world of potato dishes, from gnocchi in Italy to samosas in India, showcasing the global appeal of this unassuming vegetable. Not only do potatoes serve as a canvas for a variety of flavors, but they also come in numerous varieties themselves.Russet potatoes, with their high starch content, are ideal for making light and fluffy mashed potatoes.Waxy potatoes like Yukon Gold are perfect for salads due to their creamy texture and ability to hold their shape.Sweet potatoes offer a naturally sweet and nutty flavor, making them a delightful choice for everything from fries to pies.Fingerling potatoes, petite and elongated, add an elegant touch to any dish.And don't forget about the vibrant purple and blue potatoes that bring a pop of color to your plate. With such a diverse selection, there's a potato for every culinary creation. In addition to their culinary versatility, potatoes boast nutritional benefits.They are a good source of vitamins and minerals, particularly vitamin C, vitamin B6, and potassium.They also provide dietary fiber, aiding in digestion and promoting a feeling of fullness.When prepared healthily, potatoes can be a nutritious part of a balanced diet.Bake them with a drizzle of olive oil and a sprinkle of herbs for a guilt- free side dish.Swap out traditional potato chips for homemade baked versions for a lower - fat snack.Or try mashed sweet potatoes as a tasty alternative to traditional mashed potatoes. Potatoes have a fascinating history that intertwines with cultures and cuisines around the world.Originating in the Andes region of South America, potatoes were introduced to Europe in the 16th century and quickly became a staple crop.They played a crucial role during the Irish Potato Famine in the 19th century, highlighting their significance in global food systems.Today, potatoes are cultivated on every continent except Antarctica, contributing to food security and culinary delight. When it comes to preparing potatoes, the possibilities are limited only by your imagination.Try experimenting with different cooking methods, seasonings, and toppings to create your signature potato dish.Craving a hearty breakfast ? Whip up a batch of crispy hash browns or a loaded potato and egg skillet.Hosting a barbecue ? Serve up grilled potato wedges with a variety of dipping sauces.Want to add a touch of elegance to your dinner table ? Prepare a potato gratin layered with cream and Gruyère cheese.For a quick and satisfying weeknight dinner, toss diced potatoes with olive oil, rosemary, and garlic, then roast until crispy. In conclusion, potatoes are a culinary marvel that offer endless possibilities in the kitchen.Their adaptability, rich history, and nutritional benefits make them a beloved ingredient worldwide.So whether you're craving comfort food or looking to impress with a gourmet creation, potatoes are your versatile, delicious, and dependable ally in the culinary realm. Explore the world of potatoes, and you'll discover a treasure trove of flavors and textures waiting to delight your taste buds.",
    img: "/images/vegetable/potato.svg",
    category: "vegetable",
    rate: 4.7,
    type: [
      {
        stockOut: true,
        id: "1",
        name: "Luxury",
        price: "0.69",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.19",
        discount: " 1.16",
      },
    ],
    comments: [
      {
        name: "Mason King",
        description: "Potatoes are a staple in my kitchen, and these are perfect for making fries!",
        rate: 5,
      },
      {
        name: "Lily Brown",
        description: "These potatoes make the creamiest mashed potatoes ever!",
        rate: 4,
      },
      {
        name: "Sophia Carter",
        description:
          "I can't get enough of these potatoes! They're versatile and great for roasting, frying, or boiling. A must-have in every kitchen.",
        rate: 5,
      },
      {
        name: "Ethan Johnson",
        description:
          "The quality of these potatoes is outstanding. They have a wonderful texture and taste, making them my go-to choice for all potato dishes.",
        rate: 5,
      },
      {
        name: "Olivia Davis",
        description:
          "These potatoes are a game-changer in my cooking. Whether it's for hash browns, scalloped potatoes, or potato salad, they never disappoint.",
        rate: 5,
      },
      {
        name: "Noah Wilson",
        description:
          "As a potato enthusiast, I'm impressed by the consistent quality of these potatoes. They're the foundation of countless delicious meals in my home.",
        rate: 5,
      },
      {
        name: "Ava White",
        description:
          "I love experimenting with different potato dishes, and these never let me down. From gnocchi to potato wedges, they're a kitchen essential.",
        rate: 5,
      },
      {
        name: "Liam Martinez",
        description:
          "These potatoes have revolutionized my Sunday brunches. They yield the crispiest hash browns, making weekend mornings even better.",
        rate: 5,
      },
      {
        name: "Charlotte Harris",
        description:
          "The creamy texture of these potatoes elevates my mashed potato game. They're so good that even my pickiest eater requests them regularly.",
        rate: 5,
      },
      {
        name: "William Clark",
        description:
          "I'm a self-proclaimed potato connoisseur, and these potatoes rank among the best I've ever tasted. They're a versatile superstar in the kitchen!",
        rate: 5,
      },
    ],
  },
  {
    id: "5",
    title: "Bell Pepper",
    description:
      "Add vibrant colors and flavor to your dishes with bell peppers. These versatile vegetables come in a variety of hues, including green, red, yellow, and orange, allowing you to create visually stunning and delicious meals. Whether you're sautéing them for fajitas, stuffing them with a savory mixture of rice and ground meat, or simply slicing them for a refreshing salad, bell peppers add a delightful crunch and a burst of sweetness to your culinary creations. Their natural sweetness intensifies when roasted, making them a fantastic addition to pasta dishes, pizzas, and sandwiches. Bell peppers are also rich in vitamins, particularly vitamin C, which boosts your immune system and promotes healthy skin. Furthermore, they contain antioxidants that may reduce the risk of chronic diseases. With their crisp texture and vibrant colors, bell peppers not only elevate the taste of your dishes but also enhance their visual appeal, making them a must-have ingredient in your kitchen. Whether you're a seasoned chef or a home cook, experimenting with bell peppers can take your culinary skills to the next level. So, don't hesitate to explore the world of flavors and colors that bell peppers bring to your table. Whether you're preparing a hearty stir-fry, a zesty salsa, or a stuffed bell pepper masterpiece, these vegetables are sure to impress your taste buds and elevate your cooking game. With their versatility and health benefits, bell peppers are a fantastic addition to any meal, adding both a burst of color and a burst of flavor. So, the next time you're planning your menu, be sure to include these vibrant gems to create dishes that are as beautiful as they are delicious.",
    img: "/images/vegetable/bell-pepper.svg",
    category: "vegetable",
    rate: 4.9,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.29",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.79",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Sophia Rodriguez",
        description:
          "These bell peppers are a burst of freshness in every bite. Whether I'm slicing them for a sandwich or dicing them for a salsa, they never disappoint. Their vibrant colors and crisp texture elevate every dish. I can't get enough of them!",
        rate: 3,
      },

      {
        name: "Ethan Baker",
        description:
          "I'm a huge fan of these bell peppers. They're not only delicious but also incredibly versatile. From fajitas to omelets, they add a delightful crunch and flavor that I adore. Plus, they're rich in vitamins, making them a nutritious choice for any meal.",
        rate: 5,
      },

      {
        name: "Ava Mitchell",
        description:
          "Bell peppers have become a staple in my kitchen, and these are exceptional. Their sweetness and juiciness take my salads to a whole new level. I often roast them with a drizzle of olive oil and some herbs for a mouthwatering side dish. Highly recommended!",
        rate: 5,
      },

      {
        name: "Noah Wright",
        description:
          "These bell peppers are a game-changer for my homemade pizzas. Their vibrant colors not only add visual appeal but also a burst of flavor. Whether I'm making a classic Margherita or a veggie-loaded pie, these peppers are a must-have topping.",
        rate: 4,
      },

      {
        name: "Olivia Scott",
        description:
          "As a vegetarian, bell peppers are a crucial part of my diet, and these do not disappoint. They are consistently fresh and crunchy, perfect for stuffing with a mix of rice, veggies, and cheese. These peppers make my stuffed peppers recipe a hit every time.",
        rate: 5,
      },

      {
        name: "Mason Green",
        description:
          "I've been buying these bell peppers for weeks, and they've become a family favorite. Their vibrant colors brighten up our dinner table, and the kids love them as a healthy snack. They're the perfect addition to our weekly grocery list.",
        rate: 2,
      },

      {
        name: "Emily Parker",
        description:
          "Bell peppers are a staple in my Mediterranean-inspired dishes, and these are top-notch. Their crisp texture and sweet flavor complement everything from Greek salads to shish kebabs. I can't imagine my kitchen without them.",
        rate: 4,
      },

      {
        name: "Jackson Adams",
        description:
          "These bell peppers are a hit in our household. They're not just tasty; they're also easy to slice and dice for quick meal prep. We use them in stir-fries, fajitas, and sandwiches regularly. They add a delightful crunch to our meals.",
        rate: 5,
      },

      {
        name: "Chloe Wilson",
        description:
          "I'm impressed with the quality of these bell peppers. They stay fresh for an extended period, which is a big plus for me. Their versatility in recipes is unmatched, and I love how they add a pop of color to my cooking.",
        rate: 5,
      },

      {
        name: "William Turner",
        description:
          "These bell peppers are a staple in my daily salads. The variety of colors not only makes them visually appealing but also indicates a range of nutrients. They're the perfect way to add a healthy and tasty twist to my meals.",
        rate: 5,
      },
    ],
  },
  {
    id: "6",
    title: "Greek Salad",
    description:
      "A Greek salad is a delightful culinary creation that embodies the essence of Mediterranean cuisine. This refreshing and vibrant dish is a symphony of flavors and textures, carefully curated to delight the senses. At its core, a traditional Greek salad is a harmonious combination of fresh, sun-ripened tomatoes, crisp and cool cucumbers, plump and briny Kalamata olives, creamy and tangy feta cheese, all coming together in perfect union. These ingredients are meticulously sliced, diced, or quartered to allow their individual qualities to shine. The tomatoes provide a juicy, succulent base, bursting with the sweet, summery essence of the Mediterranean sun.Their vibrant red color adds visual appeal to the salad.The cucumbers bring a crisp, refreshing crunch that complements the tomatoes perfectly, adding a touch of lightness and hydration.The Kalamata olives, with their deep purple hue and rich, salty flavor, provide a bold contrast that elevates the salad's taste profile, offering a burst of umami with every bite. Feta cheese, the crowning jewel of the Greek salad, crumbles elegantly over the top, adding a creamy, tangy richness that ties the entire ensemble together.This cheese's slightly salty and briny notes harmonize with the olives while tempering the salad's bright acidity.Often, a drizzle of extra- virgin olive oil further enhances the salad's Mediterranean character, imparting a smooth, fruity essence that marries all the ingredients. To complete this masterpiece, a generous sprinkle of dried oregano and sometimes fresh oregano leaves adds a fragrant and earthy dimension, bringing an authentic Greek touch to the dish.This herbaceous seasoning complements the other flavors and enhances the overall aroma. A Greek salad is not just a meal; it's an experience that transports you to the sun-soaked shores of Greece. Each bite is a symphony of flavors, a celebration of freshness, and a testament to the simplicity and brilliance of Mediterranean cuisine. Whether enjoyed as a light appetizer or a satisfying main course, a Greek salad is a culinary treasure that leaves an indelible mark on your palate, reminding you of the Mediterranean's natural beauty and culinary prowess.",
    img: "/images/salad/greek.svg",
    category: "salad",
    rate: 4.7,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "8.49",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "10.49",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Olivia Davis",
        description: "The Greek salad is so refreshing. Perfect for a light meal!",
        rate: 5,
      },
      {
        name: "Noah Johnson",
        description: "I love the combination of flavors in this Greek salad. Always a hit!",
        rate: 4,
      },
      {
        name: "Sophia Smith",
        description:
          "The Greek salad is a delightful medley of fresh vegetables and tangy feta cheese. It's my go-to choice for a healthy and satisfying lunch option. Highly recommended!",
        rate: 5,
      },
      {
        name: "Ethan White",
        description:
          "As a salad enthusiast, I can confidently say that this Greek salad is a masterpiece. The crisp cucumbers, juicy tomatoes, and creamy dressing create a symphony of flavors that never fails to please my taste buds.",
        rate: 5,
      },
      {
        name: "Ava Martinez",
        description:
          "I often find myself craving this Greek salad. It's the perfect blend of freshness and flavor, and the olives add a delightful briny kick. I could eat it every day!",
        rate: 5,
      },
      {
        name: "Liam Brown",
        description:
          "This Greek salad is like a party in my mouth. The ingredients are always so crisp, and the dressing is both zesty and creamy. A true palate pleaser for any occasion.",
        rate: 4,
      },
      {
        name: "Mia Wilson",
        description:
          "The Greek salad at this place is my guilty pleasure. It's guilt-free in terms of calories, but the taste is so indulgent. The fresh herbs and generous portion of feta make it irresistible.",
        rate: 5,
      },
      {
        name: "Jackson Harris",
        description:
          "I've had many Greek salads in my life, but this one stands out. The balance of ingredients is spot-on, and the crispy lettuce is the perfect canvas for the vibrant flavors. A solid choice every time!",
        rate: 4,
      },
      {
        name: "Scarlett Clark",
        description:
          "The Greek salad is a true winner! It's a nutritional powerhouse and a burst of flavor. The red onions give it a nice kick, and the cucumbers provide a refreshing crunch.",
        rate: 5,
      },
      {
        name: "William Lee",
        description:
          "This Greek salad is like sunshine in a bowl. It's my top pick for a quick and healthy meal. The combination of textures and the zesty dressing make it a delightful experience.",
        rate: 4,
      },
      {
        name: "Emma Taylor",
        description:
          "I'm a huge fan of Greek cuisine, and this salad never disappoints. The ingredients are always fresh, and the quality is consistent. It's a delicious escape to the Mediterranean!",
        rate: 5,
      },
      {
        name: "Liam Davis",
        description:
          "This Greek salad is a taste sensation! The olives and feta cheese add a delightful salty contrast to the crisp veggies. I can't get enough of it, and neither can my taste buds.",
        rate: 5,
      },
    ],
  },
  {
    id: "7",
    title: "Zucchini",
    description:
      "Add a healthy twist to your meals with fresh zucchini, a versatile vegetable that can be incorporated into a wide variety of dishes. Whether you're grilling, sautéing, or baking, zucchini's mild, slightly sweet flavor and tender texture make it a fantastic addition to countless recipes. Slice it thin and layer it in a lasagna for a delicious, low-carb alternative to pasta, or spiralize it into zoodles for a guilt-free substitute to traditional spaghetti. You can stuff zucchini halves with a mixture of herbs, breadcrumbs, and cheese, then bake them until they're golden and cheesy. If you're looking to cut down on carbs, zucchini can be used as a pizza crust, offering a lighter and more nutrient-packed base for your favorite toppings. For a quick and healthy side dish, simply sauté zucchini with garlic and olive oil, and season with a pinch of salt and pepper. You can also blend it into smoothies for an extra boost of vitamins and minerals. Zucchini is not only delicious but also nutritious, as it's a good source of vitamin C, vitamin A, and dietary fiber. It's also low in calories, making it an excellent choice for those looking to maintain a healthy weight. Additionally, zucchini is rich in antioxidants, which can help protect your cells from damage and reduce the risk of chronic diseases. So, whether you're trying to eat more veggies or simply want to add some variety to your meals, don't forget to pick up some fresh zucchini at your local grocery store or farmers' market. With its versatility and health benefits, zucchini is a must-have ingredient in any kitchen, and it's sure to elevate your culinary creations to a whole new level of deliciousness and nutrition.",
    img: "/images/vegetable/zucchini.svg",
    category: "vegetable",
    rate: 4.6,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.09",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.59",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Sophie Rodriguez",
        description: "Zucchini noodles are a game-changer for my low-carb diet. These make my pasta cravings disappear!",
        rate: 5,
      },

      {
        name: "Liam Smith",
        description: "I use these zucchinis to make a mouthwatering ratatouille. The freshness is unbeatable!",
        rate: 5,
      },

      {
        name: "Olivia Johnson",
        description:
          "These zucchinis are my secret ingredient for adding a healthy twist to my chocolate muffins. Surprisingly tasty!",
        rate: 4,
      },

      {
        name: "Ethan Wilson",
        description:
          "I grill these zucchinis with some olive oil and spices, and they become the star of my BBQ parties. So satisfying!",
        rate: 5,
      },

      {
        name: "Ava Martinez",
        description:
          "Zucchini fritters made with these are a hit at my family gatherings. Crispy on the outside, tender on the inside!",
        rate: 4,
      },
    ],
  },
  {
    id: "8",
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
        price: "0.79",
        discount: "0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "0.99",
        discount: " 0",
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
    id: "9",
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
        price: "8.99",
        discount: " 6.55",
      },
      {
        stockOut: true,
        id: "2",
        name: "High grade",
        price: "12.99",
        discount: " 0",
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
        rate: 3,
      },
      {
        name: "Emily Johnson",
        description: "Refreshing and revitalizing, this juice is my daily dose of energy!",
        rate: 5,
      },
      {
        name: "Michael Brown",
        description: "The quality of this juice is outstanding. Pure bliss in every sip!",
        rate: 1,
      },
      {
        name: "Samantha Lee",
        description: "A burst of fruity goodness that brightens up my mornings. Highly recommended!",
        rate: 4,
      },
      {
        name: "Daniel Clark",
        description: "This juice is a delightful concoction of flavors. I can't get enough of it!",
        rate: 5,
      },
      {
        name: "Olivia Taylor",
        description: "Perfectly balanced sweetness and a hint of zest make this juice a real treat.",
        rate: 3,
      },
    ],
  },
  {
    id: "10",
    title: "Citrus Burst",
    description:
      "Awaken your senses with the Citrus Burst juice, a zesty combination of ripe oranges, tangy grapefruits, and zesty lemons. Each sip is like a burst of sunshine on a cloudy day. The perfect balance of sweet and sour will invigorate your taste buds and give you the energy you need to tackle the day ahead. Whether you enjoy it in the morning or as an afternoon pick-me-up, Citrus Burst is sure to bring a smile to your face. As you raise the glass to your lips, the vibrant colors of the citrus fruits dance before your eyes, a kaleidoscope of orange, yellow, and pink. The aroma that wafts up from the glass is pure citrus heaven, a tantalizing blend of citrusy notes that tickles your nose and promises an explosion of flavor. With the first sip, your taste buds come alive, awakened by the intense citrus flavors that dance across your palate. The sweetness of the oranges is like a gentle kiss, followed by the tangy embrace of the grapefruits, and finally, the zesty punch of the lemons. It's a symphony of flavors that plays harmoniously on your tongue, each note in perfect sync with the others. The sensation is electrifying, like a jolt of energy coursing through your body, banishing any traces of fatigue or lethargy. It's as if the sun itself has descended into your glass, infusing you with its radiant energy. The sweetness lingers on your lips, while the tartness leaves a refreshing tingle that makes your mouth water in anticipation of the next sip. With each subsequent gulp, you find yourself transported to a sunny orchard, surrounded by citrus trees heavy with fruit. The warm breeze rustles the leaves, and the scent of citrus blossoms fills the air. You can almost hear the birds singing in the distance as you bask in the pure, unadulterated joy of Citrus Burst. Whether you're sipping it at breakfast, enjoying it as a mid-morning treat, or quenching your thirst in the heat of the afternoon, Citrus Burst is the ultimate refreshment. It's a drink that not only quenches your thirst but also revitalizes your spirit. It's a reminder that even on the gloomiest of days, there is always a burst of sunshine waiting to brighten your world. So, let Citrus Burst be your daily dose of happiness, a reminder that life is full of simple pleasures, and all you need to do is take a sip to savor them. Make Citrus Burst a part of your daily routine, and let its vibrant flavors and invigorating zest awaken your senses and bring a smile to your face, day after day.",
    img: "/images/juice/citrus-burst.svg",
    rate: 4.4,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "6.99",
        discount: " 4.0",
      },
      {
        stockOut: true,
        id: "2",
        name: "High grade",
        price: "10.99",
        discount: " 15.0",
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
    id: "11",
    title: "Ripe Kiwis",
    description:
      "Savor the tropical delight of our ripe kiwis, known for their vibrant green flesh and refreshing flavor. Our Green Kiwis offer a tangy, invigorating experience, while our Gold Kiwis provide a unique sweetness that's hard to resist. These kiwis are perfect for snacking, adding to fruit salads, or blending into smoothies. With their high vitamin C content, our ripe kiwis are not only delicious but also nutritious. Indulge in the natural goodness of these kiwis, whether you enjoy them as a midday snack, toss them into a crisp summer salad, or create a luscious kiwi-infused dessert. Their vibrant color and juicy texture make them a standout addition to any culinary creation.  The Green Kiwis, with their zesty and slightly tart notes, awaken your taste buds with each bite, making them a delightful choice for those who crave a burst of flavor.On the other hand, the Gold Kiwis, with their exceptional sweetness and tropical undertones, offer a taste of paradise that transports you to sun- kissed beaches and azure waters.You can even experiment by pairing both varieties for a dynamic kiwi experience that balances tartness and sweetness. Beyond their delectable taste, our ripe kiwis pack a nutritional punch.They are a fantastic source of vitamin C, renowned for its immune - boosting properties.Incorporating kiwis into your daily diet can help strengthen your body's defenses and keep you feeling energized throughout the day. Additionally, these kiwis contain dietary fiber, aiding in digestion and promoting a feeling of fullness, making them a great choice for those looking to maintain a healthy weight. Our commitment to quality ensures that each kiwi is carefully selected and handled to preserve its freshness and flavor.From orchard to table, we prioritize excellence in every step of the process, so you can enjoy the finest kiwis nature has to offer.Whether you're an experienced kiwi enthusiast or trying them for the first time, our Green and Gold Kiwis are sure to impress your taste buds and leave you craving for more. Incorporating kiwis into your daily routine is not only a treat for your taste buds but also a step towards a healthier lifestyle.These versatile fruits can be enjoyed in various ways.Slice them up and toss them into a fruit salad for a colorful and nutritious addition, or blend them into a creamy smoothie for a refreshing beverage that's perfect for breakfast or a post-workout snack. If you're feeling adventurous, try incorporating kiwis into your baking or dessert recipes. Kiwi tarts, pies, and sorbets are just a few of the mouthwatering options that can be explored. The natural sweetness and vibrant color of our Gold Kiwis can elevate your culinary creations, making them a feast for both the eyes and the palate. When selecting kiwis, look for ones that yield slightly to gentle pressure but are not too soft.The skin should be smooth and free from blemishes, with a fragrant aroma that indicates ripeness.To enjoy your kiwis at their best, store them at room temperature until they ripen and then transfer them to the refrigerator to prolong their freshness. In conclusion, our ripe kiwis, whether Green or Gold, are a testament to the wonders of nature's bounty. Their delightful flavors and exceptional nutritional value make them a must-have addition to your diet. So, embark on a journey of taste and health with our kiwis, and let them become a staple in your culinary adventures. Whether you're enjoying them on their own or using them to enhance your favorite dishes, our kiwis are a true tropical delight that you won't want to miss out on.",
    img: "/images/fruit/kiwi.svg",
    rate: 4.7,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.29",
        discount: " 1.10",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.59",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Olivia Smith",
        description: "These golden kiwis are a burst of sunshine in every bite. The sweetness is just perfect!",
        rate: 5,
      },

      {
        name: "Liam Johnson",
        description: "I'm addicted to these gold kiwis! They're like candy from nature, a healthy addiction!",
        rate: 5,
      },

      {
        name: "Ava Wilson",
        description:
          "Kiwis have always been my favorite, but these golden ones take it to a whole new level. Absolutely delicious!",
        rate: 5,
      },

      {
        name: "Mason Brown",
        description: "The vibrant color and exotic flavor of gold kiwis make them a delightful surprise in every fruit bowl.",
        rate: 4,
      },

      {
        name: "Harper Martinez",
        description: "I'm trying to eat healthier, and these golden kiwis are my guilt-free pleasure. So juicy and refreshing!",
        rate: 5,
      },
    ],
  },
  {
    id: "12",
    title: "Watermelon Wave",
    description:
      "Ride the wave of refreshment with our Watermelon Wave juice. This revitalizing blend captures the essence of juicy watermelons, providing a burst of hydrating goodness with every sip. It's the perfect way to cool down on a hot day or reminisce about summer picnics. With a wave of watermelon flavor, this juice will keep you refreshed and hydrated. Dive into the wave of watermelon delight! Experience the pure, natural taste of watermelon in every drop, as if you're biting into a freshly sliced melon. Our Watermelon Wave juice is crafted from the finest, sun-ripened watermelons, carefully selected for their sweetness and juiciness. Each bottle is packed with the goodness of real watermelon, with no added sugars or artificial flavors. You'll savor the authentic taste of summer in every sip. This refreshing juice is not only delicious but also incredibly thirst- quenching.Its high water content makes it an excellent choice to stay hydrated and replenish your body on a scorching summer day.Whether you're at the beach, by the pool, or just lounging in your backyard, our Watermelon Wave juice is the ultimate companion for beating the heat. Its cool, soothing sensation will transport you to a tropical paradise, where the sun kisses your skin, and the ocean waves lull you into relaxation. The vibrant red hue of our Watermelon Wave juice is a testament to its natural goodness.It's a visual treat that excites your senses even before you take your first sip. The aroma that wafts from the bottle is equally enticing, with a fragrant blend of sweet watermelon notes that awaken your taste buds. You'll find yourself irresistibly drawn to the allure of this juicy elixir, craving its refreshing taste with every passing moment. One of the best things about our Watermelon Wave juice is its versatility.While it's fantastic on its own, it also makes a delightful addition to cocktails and mocktails. Create a watermelon mojito, a refreshing agua fresca, or a sparkling watermelon spritzer - the possibilities are endless. Its natural sweetness means you can use less sugar in your favorite mixed drinks, making them healthier and even more enjoyable. We take great pride in the quality of our Watermelon Wave juice.Each batch is carefully crafted to ensure consistency in flavor and freshness.We use a gentle cold - pressing method to extract the juice from the watermelons, preserving all the vitamins, minerals, and antioxidants that make this fruit a nutritional powerhouse.It's a healthier alternative to sugary sodas and artificially flavored drinks, making it an ideal choice for families and health-conscious individuals. When you choose our Watermelon Wave juice, you're not just quenching your thirst; you're also treating your body to a natural source of essential nutrients.Watermelon is rich in vitamin C, which supports your immune system, and vitamin A, which promotes healthy skin and vision.It's also packed with hydration-enhancing electrolytes like potassium, helping to maintain your body's fluid balance. As you sip on our Watermelon Wave juice, you can feel good knowing that you're making a healthy choice for yourself and your loved ones. We believe that the best beverages should not only taste delicious but also contribute to your overall well-being. That's why we've created a juice that not only satisfies your taste buds but also nourishes your body. Whether you're young or old, a watermelon enthusiast or just looking for a refreshing drink to enjoy, our Watermelon Wave juice has something to offer everyone. It's a taste of summer that you can enjoy all year round.So, don't wait. Grab a bottle of Watermelon Wave juice today and let the wave of refreshment sweep you off your feet. Indulge in the natural goodness of watermelon, and ride the wave of flavor with every sip. Experience the joy of staying hydrated while tantalizing your taste buds. Dive into the wave of watermelon delight!",
    img: "/images/juice/watermelon.svg",
    rate: 4.6,
    category: "juice",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "8.49",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "12.49",
        discount: "10.00",
      },
    ],
    comments: [
      {
        name: "Sophia Smith",
        description: "I can't get enough of Watermelon Wave! It's like a burst of sunshine in a glass. Highly recommend!",
        rate: 5,
      },
      {
        name: "James Johnson",
        description:
          "Refreshing and revitalizing, Watermelon Wave is my go-to choice after a workout. Keeps me energized and satisfied!",
        rate: 5,
      },
      {
        name: "Olivia Davis",
        description:
          "Watermelon Wave has the perfect balance of sweetness and freshness. It's like a vacation for your taste buds!",
        rate: 4,
      },
      {
        name: "Michael White",
        description:
          "I tried Watermelon Wave at a friend's BBQ, and now I can't stop ordering it. It's the ultimate summer indulgence!",
        rate: 5,
      },
      {
        name: "Emily Brown",
        description:
          "Watermelon Wave is my secret weapon to beat the heat. It's an absolute must-try for anyone craving a fruity escape!",
        rate: 4,
      },
    ],
  },
  {
    id: "13",
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
        price: "1.49",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.29",
        discount: " 0",
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
    id: "14",
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
        price: "8.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "12.99",
        discount: " 0",
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
      {
        name: "Oliver Anderson",
        description: "I can't get enough of Pineapple Paradise! It's a tropical escape in a bottle. Absolutely refreshing!",
        rate: 5,
      },
      {
        name: "Sophia Clark",
        description: "Pineapple Paradise is a burst of tropical bliss! The taste is pure paradise, and I crave it daily!",
        rate: 5,
      },
      {
        name: "Noah Lewis",
        description:
          "This drink is a vacation in a can! The pineapple flavor is like a tropical paradise in every sip. Five stars!",
        rate: 5,
      },
      {
        name: "Emma Baker",
        description:
          "Pineapple Paradise is my go-to drink for relaxation. It transports me to a beachfront paradise with every gulp!",
        rate: 4,
      },
      {
        name: "Mason Garcia",
        description:
          "I've tried many pineapple drinks, but Pineapple Paradise stands out. It's like a tropical holiday in a bottle!",
        rate: 5,
      },
      {
        name: "Olivia Martinez",
        description: "Pineapple Paradise is pure liquid sunshine. It's a taste of the tropics that brightens my day every time!",
        rate: 4,
      },
    ],
  },
  {
    id: "15",
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
        price: "1.19",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.39",
        discount: " 0",
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
    id: "16",
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
        price: "7.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "11.99",
        discount: " 0",
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
    id: "17",
    title: "Cucumber",
    description:
      "Stay refreshed with crisp and hydrating cucumbers, a perfect summer snack that offers not only a delightful burst of coolness but also a multitude of health benefits. Cucumbers are nature's hydration heroes, with their high water content helping to keep you adequately hydrated during scorching hot days. They are a low-calorie option, making them an excellent choice for those looking to maintain or lose weight without compromising on flavor. Cucumbers are also a great source of vitamins and minerals, including vitamin K, which supports bone health, and vitamin C, which boosts your immune system. Additionally, their silica content promotes healthy skin, leaving you with a radiant complexion. These versatile veggies can be enjoyed in various ways – slice them up for a refreshing salad, blend them into a chilled gazpacho, or simply munch on cucumber sticks with your favorite dip. Their mild, crisp texture pairs well with a range of flavors and cuisines, making them a versatile addition to your summer menu. Furthermore, cucumbers are a natural breath freshener, thanks to their ability to combat bacteria in the mouth, leaving you feeling refreshed from the inside out. So, whether you're lounging by the pool, picnicking in the park, or just trying to beat the heat, make cucumbers your go-to summer snack, and savor the cool, crisp goodness that they bring to your plate. Your body will thank you for this delicious and hydrating choice, and you'll be ready to face the summer heat with a refreshing and healthy twist.",
    img: "/images/vegetable/cucumber.svg",
    category: "vegetable",
    rate: 4.6,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "0.89",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.39",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Sophia Carter",
        description:
          "I can't get enough of these cucumbers! They're the perfect balance of crunchy and juicy. Whether I'm snacking on them solo or adding them to my salads, they never disappoint. A definite 5-star treat!",
        rate: 5,
      },
      {
        name: "Liam Anderson",
        description:
          "These cucumbers are a lifesaver during summer. Their cool, crisp texture is like a burst of freshness in every bite. I often use them in sandwiches and as a side dish for BBQs. Solid 5 stars!",
        rate: 5,
      },
      {
        name: "Olivia Davis",
        description:
          "Cucumbers are my guilt-free pleasure, and these ones hit the spot. Their consistent crunchiness and mild flavor make them a versatile addition to my meals. Definitely a 5-star favorite in my kitchen!",
        rate: 5,
      },
      {
        name: "Noah White",
        description:
          "I'm a cucumber enthusiast, and these have earned a permanent spot in my fridge. Whether I'm snacking, pickling, or making cucumber-infused water, these cucumbers are consistently top-notch. A solid 5 out of 5!",
        rate: 5,
      },
      {
        name: "Emma Harris",
        description:
          "These cucumbers are the definition of crisp and delicious. Their quality and taste are unmatched, making them my go-to choice for healthy snacking. I'm giving them a well-deserved 5-star rating!",
        rate: 5,
      },
      {
        name: "Mason Wilson",
        description:
          "I enjoy these cucumbers as a hydrating and healthy snack. Their crunchiness is unbeatable, and they're perfect for slicing into salads or adding to sandwiches. I rate them a solid 4 stars!",
        rate: 4,
      },
      {
        name: "Ava Turner",
        description:
          "Cucumbers are a staple in my fridge, and these ones are pretty good. They're refreshing and versatile, but I've had slightly crisper cucumbers before. Overall, I'd rate them a decent 3 stars.",
        rate: 3,
      },
    ],
  },
  {
    id: "18",
    title: "Ripe Strawberries",
    description:
      "Indulge in the plump and juicy goodness of our ripe strawberries, each one bursting with sweet, sun-ripened flavor. Our Sweet Strawberries are the epitome of berry bliss, while our Organic Strawberries promise a guilt-free and wholesome treat. These strawberries are perfect for creating delectable desserts, garnishing breakfast bowls, or simply enjoying by the handful. Let the luscious taste of our ripe strawberries brighten up your day. Savor the sensation of biting into these ruby-red jewels of nature, as their succulent flesh releases a symphony of fruity delight with every chew. Whether you're a devoted berry aficionado or a casual fruit enthusiast, our strawberries are sure to captivate your taste buds with their irresistible combination of natural sweetness and vibrant freshness. Imagine the possibilities that come to life when you incorporate our strawberries into your culinary adventures.Craft a heavenly strawberry shortcake with layers of moist sponge cake, velvety whipped cream, and a generous helping of sliced strawberries.Elevate your morning routine by adding slices of these beauties to your yogurt parfait, cereal, or oatmeal.The burst of flavor will kickstart your day with a dose of natural sweetness.Or perhaps, unwind after a long day with a refreshing strawberry smoothie that blends the essence of these ripe fruits with creamy yogurt and a hint of honey. Our commitment to quality shines through in every strawberry we provide.We carefully select and hand- pick each berry at the peak of ripeness to ensure you experience the utmost freshness and flavor.Moreover, our Organic Strawberries are grown with love and care, free from harmful pesticides and chemicals, making them a healthier choice for you and the environment.You can savor these delectable treats with the peace of mind that they are as wholesome as they are delicious. Whether you're planning a romantic picnic, hosting a summer BBQ, or simply craving a guilt-free indulgence, our strawberries are your ideal companion. Their natural sweetness makes them a crowd-pleaser at any gathering, and their vibrant appearance adds a pop of color to your table. You can even dip them in rich, velvety chocolate for an extra touch of decadence that will leave your guests craving more. But our strawberries aren't just for special occasions; they're perfect for everyday enjoyment too.Keep a basket of these irresistible gems in your fridge, and you'll have a healthy and tasty snack within arm's reach whenever hunger strikes.Their versatility knows no bounds – from smoothies to salads, cocktails to mocktails, there's no shortage of ways to incorporate our strawberries into your daily life. In addition to their delectable taste, strawberries also boast a range of health benefits.They are packed with antioxidants, vitamin C, and fiber, making them a nutritious choice for those looking to maintain a balanced diet.The antioxidants found in strawberries can help protect your body from oxidative stress, while vitamin C supports your immune system and promotes healthy skin.The fiber content aids in digestion and keeps you feeling full and satisfied. So, whether you're seeking a delightful dessert ingredient, a healthy snack, or a way to boost your overall well-being, our strawberries are the perfect solution. Dive into the world of sweet, sun-kissed strawberries and let their irresistible flavor transport you to a place of pure bliss. Whether you're enjoying them on their own or using them to elevate your favorite dishes, our strawberries are a taste of summer that you can enjoy all year round.So, go ahead, treat yourself to the plump and juicy goodness of our strawberries, and let the sweetness of life's simplest pleasures brighten up your day..",
    img: "/images/fruit/strawberry.svg",
    rate: 4.8,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "2.49",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "2.99",
        discount: " 0",
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
    id: "19",
    title: "Mango Tango",
    description:
      "Transport yourself to a tropical paradise with our Mango Tango juice. This exotic blend combines the lusciousness of ripe mangoes with a hint of tropical pineapple. Every sip is a journey to sun-soaked beaches and swaying palm trees. Whether you're sipping it by the pool or dreaming of your next getaway, Mango Tango is the perfect escape in a glass. Experience the pure bliss of the tropics with every sip. Imagine the golden rays of the sun kissing your skin as you take that first refreshing sip, instantly transporting you to a place where worries melt away. The aroma of mangoes and pineapple fills the air, tantalizing your senses and awakening your taste buds. Close your eyes and let the vibrant flavors dance on your palate, a symphony of sweet and tangy notes that evoke images of turquoise waters and sandy shores. Mango Tango is like a vacation in a bottle, offering a temporary respite from the hustle and bustle of daily life.Each bottle is crafted with care, using only the finest, sun- ripened mangoes and tropical pineapples to capture the essence of the tropics.The juice is pure and unadulterated, ensuring that every drop is bursting with flavor.With each sip, you'll feel a wave of relaxation wash over you, as if you're reclining on a beach chair, listening to the gentle lapping of waves. As you continue to enjoy Mango Tango, you may start to feel the cool ocean breeze on your skin and hear the distant laughter of fellow beachgoers.It's a sensory experience that transcends time and place, allowing you to momentarily escape to a world of leisure and serenity. Whether you're on a break from work, sharing it with friends at a picnic, or simply savoring it in solitude, Mango Tango brings a slice of paradise to your day. The richness of mangoes infuses the juice with a sweet, velvety goodness that's complemented by the zing of pineapple, creating a harmonious flavor profile that's both indulgent and invigorating.It's a taste that will linger on your tongue, leaving you craving more. With Mango Tango, you don't need a passport or a plane ticket to experience the joys of the tropics; all you need is a bottle of this delectable juice. This tantalizing elixir is not just a beverage; it's a portal to relaxation and rejuvenation. With every sip, you can feel the stress and tension of the day melt away, replaced by a sense of calm and contentment. The vibrant orange hue of the juice is a visual testament to its natural goodness, a reminder that nature's bounty can transport us to a world of beauty and tranquility. Mango Tango is a celebration of the simple pleasures in life, a reminder to slow down and savor the moment.It's a reminder that, even in the midst of a busy schedule, you can take a mental vacation and treat yourself to a taste of paradise. So, why not indulge in a little tropical escape today? Pour yourself a glass of Mango Tango, close your eyes, and let the flavors transport you to a place where worries are replaced by waves, and deadlines are forgotten in the sea breeze. Experience the pure bliss of the tropics with every sip.",
    img: "/images/juice/mango.svg",
    rate: 4.6,
    category: "juice",
    type: [
      {
        stockOut: true,
        id: "1",
        name: "Luxury",
        price: "9.49",
        discount: " 0",
      },
      {
        stockOut: true,
        id: "2",
        name: "High grade",
        price: "13.49",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Olivia Smith",
        description:
          "Mango Tango takes me on a journey to a sun-kissed beach with its vibrant mango flavor. Sipping it feels like a tropical escape, making my taste buds dance with joy. It's the ultimate summer delight, and I can't get enough!",
        rate: 5,
      },
      {
        name: "Liam Johnson",
        description:
          "As someone who loves mangoes, Mango Tango is an absolute treat. It's like a burst of sunshine in a glass, radiating pure fruity goodness. The perfect balance of sweetness and tanginess makes it a refreshing choice for a hot day.",
        rate: 5,
      },
      {
        name: "Ava Martinez",
        description:
          "Mango Tango is a delightful fusion of tropical paradise and thirst-quenching delight. With every sip, you can taste the lusciousness of ripe mangoes, and it's incredibly refreshing. It's my secret weapon for beating the summer heat!",
        rate: 5,
      },
      {
        name: "Noah Brown",
        description:
          "The moment Mango Tango touches my lips, it's like a burst of fruity fireworks. The natural sweetness of mangoes is perfectly captured in this drink, making it an irresistible choice for anyone craving a taste of summer.",
        rate: 5,
      },
      {
        name: "Isabella White",
        description:
          "Mango Tango is a tropical symphony in a glass. Its exquisite blend of mango flavors is like a mini vacation for my palate. This drink is pure happiness, and I find myself reaching for it whenever I need a little taste of paradise.",
        rate: 5,
      },
      {
        name: "Jackson Wilson",
        description:
          "Mango Tango is my go-to summer refresher. Its tangy, sweet mango goodness is so invigorating. With every sip, I can almost feel the ocean breeze and hear the rustling palm trees. It's a vacation in a bottle!",
        rate: 5,
      },
      {
        name: "Sophie Anderson",
        description:
          "Mango Tango is like a fruity symphony that plays on my taste buds. It's a tantalizing blend of mango perfection, and I can't help but smile with every sip. This drink embodies the essence of summer in the most delightful way.",
        rate: 5,
      },
    ],
  },
  {
    id: "20",
    title: "Ripe Pineapples",
    description:
      "Transport your taste buds to tropical paradise with our juicy and sweet pineapples sourced from exotic islands. Our Golden Pineapples are prized for their unrivaled sweetness, making them perfect for creating refreshing fruit salads or sipping on piña coladas. Alternatively, our Mini Pineapples offer an adorable and convenient snacking option, ideal for satisfying your sweet cravings. Experience the taste of the tropics with our ripe pineapples that are carefully selected to ensure the highest quality. Whether you're enjoying a leisurely summer picnic or hosting a beach-themed party, our pineapples are the perfect addition to elevate your culinary creations. The vibrant yellow flesh of our pineapples is not only visually appealing but also bursting with flavor. When you take that first juicy bite, you'll be transported to a sunny beach with the gentle sound of waves in the background. Each pineapple is handpicked at the peak of ripeness to guarantee that you get the most delicious and succulent fruit possible.We take pride in working with local farmers in these exotic island locations who have perfected the art of pineapple cultivation over generations.This partnership ensures that our pineapples are grown sustainably, with a focus on environmentally friendly practices.We believe in supporting local communities and preserving the natural beauty of these tropical paradises. Our commitment to quality extends beyond the fruit itself.We meticulously inspect and pack each pineapple to ensure they reach your doorstep in perfect condition.From the moment you open the box, you'll be greeted by the unmistakable aroma of fresh pineapples, a scent that embodies the essence of a tropical getaway. Our packaging is not only designed to protect the fruit but also to showcase its natural beauty, so you can display these exquisite pineapples with pride before indulging in their delectable taste. Whether you prefer to enjoy your pineapples as a healthy snack, blend them into smoothies, or incorporate them into your favorite recipes, our fruit is versatile and ready to enhance your culinary adventures.The sweet and tangy flavor of our pineapples pairs wonderfully with a variety of dishes, from savory to sweet.Create a tropical salsa to top your grilled chicken or add diced pineapples to your morning yogurt for a refreshing breakfast.The possibilities are endless, limited only by your imagination. When it comes to health benefits, pineapples are a nutritional powerhouse.They are rich in vitamin C, which can boost your immune system and promote healthy skin.Additionally, they contain bromelain, an enzyme known for its digestive properties.So, not only do our pineapples taste amazing, but they also contribute to your well- being.Incorporating them into your daily diet is a delicious way to stay healthy and energized. we are dedicated to providing you with the finest pineapples that nature has to offer.Our mission is to bring a taste of the tropics to your table, allowing you to savor the essence of paradise from the comfort of your home.We are committed to",
    img: "/images/fruit/pineapple.svg",
    rate: 4.8,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "2.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.49",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Ethan Smith",
        description:
          "I can't get enough of these pineapples! They're a burst of sunshine in every bite. Whether I'm enjoying them as a refreshing snack or blending them into a tropical smoothie, they never disappoint. Their natural sweetness and juiciness are simply irresistible. I highly recommend these pineapples to everyone!",
        rate: 5,
      },
      {
        name: "Sophia Wilson",
        description:
          "These pineapples are a tropical delight. Their vibrant flavor instantly transports me to a sandy beach with clear blue waters. They're the perfect addition to fruit salads and fruit platters for a burst of freshness. I find myself reaching for these mini pineapples as a guilt-free treat during hot summer days. Definitely a must-try!",
        rate: 5,
      },
      {
        name: "Lucas Brown",
        description:
          "These mini pineapples are a snack lover's dream come true. Their small size and portability make them ideal for on-the-go munching. The balance of sweet and tangy is spot on, and they're so juicy! Whether you're packing them for a picnic or enjoying them at home, these little pineapples won't disappoint.",
        rate: 4,
      },
      {
        name: "Ava Miller",
        description:
          "I adore these mini pineapples! They're like nature's candy. The convenience of their petite size makes them a fantastic option for kids' lunchboxes or as a sweet addition to charcuterie boards. Their flavor bursts with tropical goodness, and I often find myself snacking on them straight from the fridge. Yum!",
        rate: 5,
      },
      {
        name: "Noah Davis",
        description:
          "These pineapples are a delightful treat. Their miniature size and sweet, juicy flesh make them perfect for satisfying cravings without the guilt. I love incorporating them into my morning yogurt or pairing them with cheese for a unique flavor combination. If you haven't tried these mini pineapples yet, you're missing out!",
        rate: 4,
      },
      {
        name: "Isabella Martinez",
        description:
          "These pineapples are a taste of the tropics in every bite. They're not only delicious but also incredibly versatile. I use them to create exotic fruit salsa for tacos or as a garnish for tropical desserts. Their vibrant yellow color and sweet aroma are a testament to their quality. A delightful addition to any meal!",
        rate: 5,
      },
      {
        name: "William Turner",
        description:
          "These mini pineapples are a family favorite in our household. They're the perfect size for kids and adults alike. Their flavor is a harmonious blend of sweetness and tartness, making them an excellent addition to both sweet and savory dishes. Whether you're making cocktails or snacking during movie night, these pineapples will steal the show!",
        rate: 4,
      },
    ],
  },
  {
    id: "21",
    title: "Tropical Bananas",
    description:
      "Delight in the tropical goodness of our ripe and creamy bananas, sourced from lush tropical plantations. Our Cavendish Bananas are the embodiment of sweet indulgence, while the Baby Bananas offer a charmingly small yet equally delectable experience. These bananas are nature's perfect snack, rich in potassium and natural sweetness. Whether you add them to your morning cereal, blend them into smoothies, or savor them as a quick and healthy on-the-go treat, our tropical bananas are sure to satisfy your cravings. Embrace the luscious taste of these tropical treasures, whether you enjoy them on a sun-soaked beach or in the comfort of your own home. The vibrant yellow skins hide the treasure within, a creamy and delectable flesh that melts in your mouth, leaving behind a burst of tropical flavor. With every bite, you'll experience the essence of the sun-kissed tropics, as our bananas are grown in the ideal conditions to ensure their natural sweetness and delightful texture. Our commitment to quality means that we only select the finest bananas, carefully monitoring their growth to ensure they reach peak ripeness. Each banana is handpicked with care to bring you a taste that's second to none.From the moment you peel back the skin, you'll be transported to a tropical paradise, where the gentle sway of palm trees and the sound of ocean waves create the perfect backdrop for enjoying these delicious fruits. Bananas are not only a delicious treat but also a nutritional powerhouse.Packed with essential nutrients like potassium, vitamin C, and vitamin B6, they offer a variety of health benefits.Potassium, in particular, helps support healthy blood pressure levels and contributes to overall heart health.Vitamin C boosts your immune system, while vitamin B6 plays a role in brain development and function.Our bananas are a convenient and natural way to incorporate these vital nutrients into your daily diet. The versatility of bananas is another reason to love them.Whether you're looking for a quick energy boost before a workout, a satisfying snack between meals, or a wholesome addition to your favorite recipes, our tropical bananas are the perfect choice. Slice them onto your morning oatmeal for a burst of flavor, toss them into your backpack for a midday pick-me-up, or use them as a natural sweetener in your baking endeavors. You can even freeze them for a cool and creamy treat on a hot day. If you're an adventurous foodie, you'll appreciate the endless culinary possibilities that bananas offer.Try grilling them for a caramelized twist, mashing them into pancake batter for extra moisture and flavor, or dipping them in chocolate for a decadent dessert.The options are limited only by your imagination.And if you're a parent, you'll be pleased to know that our Baby Bananas are perfectly sized for little hands, making them an ideal snack for kids. At our tropical banana plantations, sustainability is at the heart of what we do.We take pride in our eco- friendly practices, which include responsible farming methods, efficient water usage, and reducing waste.We're dedicated to preserving the natural beauty of the tropical landscapes where our bananas thrive, ensuring that future generations can also enjoy these exquisite fruits. When you choose our bananas, you're not only treating yourself to a taste of the tropics but also supporting environmentally conscious agriculture. In addition to their culinary and nutritional merits, bananas have a fascinating history and cultural significance.They are believed to have originated in Southeast Asia and have been cultivated for thousands of years.Bananas have played a role in various cultures and traditions, symbolizing everything from fertility and prosperity to friendship and hospitality.They have also found their way into art, literature, and folklore, leaving a lasting impression on human history. As you savor the tropical goodness of our bananas, you're connecting with this rich heritage and the generations of people who have cherished these fruits. Whether you're enjoying them as a simple snack or incorporating them into a gourmet meal, you're continuing a tradition that spans centuries. In conclusion, our ripe and creamy bananas are a testament to the beauty and flavor of the tropics.With their natural sweetness, nutritional benefits, and versatility, they are a must - have in any kitchen.Whether you're a health-conscious individual looking for a wholesome snack or a culinary enthusiast eager to experiment with new recipes, our bananas offer endless possibilities. So, indulge in the tropical goodness of our bananas and let their flavor transport you to a paradise of sun, sea, and deliciousness. Join us in celebrating the magic of these remarkable fruits and make them a part of your daily delight.",
    img: "/images/fruit/banana.svg",
    rate: 4.6,
    category: "fruit",
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "0.89",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.09",
        discount: " 0",
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
    id: "22",
    title: "Tomato",
    description:
      "Experience the juicy and tangy flavor of tomatoes, a kitchen essential that has been a staple in culinary traditions around the world for centuries. Whether sliced and sprinkled with salt for a simple and refreshing snack, blended into a rich and hearty tomato sauce to adorn your favorite pasta dishes, or roasted to perfection to elevate the taste of sandwiches and salads, the versatility of tomatoes knows no bounds. These vibrant, red orbs of flavor are not only delicious but also packed with essential nutrients, including vitamin C, potassium, and lycopene, which is known for its potential health benefits. Whether you prefer the sweetness of cherry tomatoes bursting in your mouth or the robust acidity of plum tomatoes that enhance the depth of your sauces, there's a tomato variety to suit every palate and culinary creation. Tomatoes have a fascinating history, having traveled from their origins in the Andes Mountains to become an integral part of cuisines worldwide, from Mediterranean classics like Caprese salads to Mexican salsas and Indian curries. The love affair with tomatoes continues to evolve as innovative chefs and home cooks alike experiment with heirloom varieties, preserving techniques, and unique flavor pairings to unlock new dimensions of taste and texture. So, whether you're a gardener tending to your tomato plants, a chef crafting exquisite tomato-based dishes, or simply a food enthusiast savoring the essence of tomatoes in your everyday meals, the rich and diverse world of tomatoes invites you to explore, savor, and celebrate their culinary magic.",
    img: "/images/vegetable/tomato.svg",
    category: "vegetable",
    rate: 4.5,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "0.79",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.29",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Ava Baker",
        description: "These tomatoes are so flavorful, I use them in all my recipes!",
        rate: 5,
      },
      {
        name: "James White",
        description: "Fresh tomatoes are a must for my sandwiches, and these fit the bill.",
        rate: 4,
      },
    ],
  },
  {
    id: "23",
    title: "Mango",
    description:
      "Experience the tropical delight of Mango, the king of fruits, as you bite into its succulent, golden flesh, bursting with a symphony of sweet and tangy flavors that dance on your taste buds like a tropical paradise. Each juicy, sun-kissed bite is a sensory journey through lush orchards, where the warm sun has worked its magic, infusing every fiber of this delectable fruit with the essence of summer. The intoxicating aroma wafts through the air, beckoning you to indulge in its lusciousness. Its vibrant, sunset-hued skin hints at the treasure hidden within, and as you peel back its layers, you unveil nature's candy, dripping with nectar that glistens like liquid gold. The tender, fibrous strands of mango flesh cling to the pit, offering a tantalizing challenge to extract every last bit of goodness. Its taste is a harmonious blend of honeyed sweetness and a gentle tartness that titillates your senses, leaving you craving more. Whether savored in slices, diced into a refreshing salsa, blended into a velvety smoothie, or transformed into a creamy, dreamy sorbet, the versatility of mango knows no bounds. Its tropical allure transports you to far-off shores, where palm trees sway in the breeze and azure waters lap at sandy beaches. With each bite, you experience the essence of sunshine and warmth, a sweet escape from the ordinary. From the first taste of the season's first mango to the final indulgence of its ripest, you embark on a journey that celebrates nature's bounty and the joy it brings to your palate. So, let the mango be your passport to a world of tropical bliss, a sensory symphony that redefines the very essence of deliciousness.",
    img: "/images/fruit/mango.svg",
    category: "fruit",
    rate: 4.9,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "2.49",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Ella Johnson",
        description: "Mangoes are my favorite fruit, and these are the juiciest I've ever tasted!",
        rate: 5,
      },
      {
        name: "Aiden Smith",
        description: "The freshness of these mangoes is unmatched. A perfect snack!",
        rate: 4,
      },
      {
        name: "Sophia Davis",
        description: "These mangoes are like a burst of sunshine in every bite. I can't get enough of them!",
        rate: 5,
      },
      {
        name: "Liam Wilson",
        description: "I've tried mangoes from all over, but these are the cream of the crop. Simply delicious!",
        rate: 5,
      },
      {
        name: "Olivia Brown",
        description: "The texture of these mangoes is just perfect – soft and succulent. A tropical delight!",
        rate: 4,
      },
      {
        name: "Noah Martinez",
        description: "These mangoes take me back to my childhood summers. They're a taste of nostalgia!",
        rate: 5,
      },
      {
        name: "Ava Garcia",
        description: "The aroma of these mangoes alone is enough to make your mouth water. Truly exceptional!",
        rate: 5,
      },
    ],
  },
  {
    id: "24",
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
        price: "1.79",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.99",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Oliver Smith",
        description:
          "These peaches are simply heavenly. Their aroma alone can transport you to a sunny orchard on a warm summer day. Their juiciness is unparalleled, and their sweetness is just the right balance, making them ideal for snacking or incorporating into your favorite desserts. Whether you're enjoying them on a lazy afternoon or using them to whip up a peach pie, these peaches are a true treat.",
        rate: 5,
      },
      {
        name: "Ava Johnson",
        description:
          "I've never tasted peaches this good before! They're like nature's candy. Their flesh is incredibly soft and succulent, and the flavor is an explosion of sweet and tangy goodness. I can't get enough of them, and they make the most scrumptious peach smoothies. These peaches are a delightful addition to my summer routine, and I highly recommend them to anyone seeking a taste of pure bliss.",
        rate: 5,
      },
      {
        name: "Noah Davis",
        description:
          "White peaches are a revelation! They're like a breath of fresh air in the world of fruit. The mild, delicate sweetness is perfect for those who prefer a subtler fruit flavor. These peaches are incredibly refreshing, especially when chilled. Savoring a slice on a hot day feels like a mini vacation. They're also fantastic for making unique cocktails, adding a touch of sophistication to your evening. I'm thoroughly impressed!",
        rate: 4,
      },
    ],
  },
  {
    id: "25",
    title: "Broccoli",
    description:
      "Experience the goodness of broccoli, packed with vitamins and nutrients that promote overall health and well-being. Broccoli is a versatile vegetable that can be enjoyed in a variety of ways, from steamed and sautéed to roasted and grilled. Its vibrant green color is not only visually appealing but also indicative of its rich nutrient content. Broccoli is a powerhouse of vitamins, particularly vitamin C, which boosts your immune system and supports skin health. It's also a great source of vitamin K, essential for bone health and blood clotting. Additionally, broccoli is loaded with fiber, aiding in digestion and helping you feel full, making it a valuable addition to any diet. This cruciferous vegetable is a rich source of folate, an important nutrient for pregnant women. Broccoli also contains antioxidants like sulforaphane, which may help protect against certain chronic diseases. Its high mineral content includes potassium, which plays a crucial role in maintaining healthy blood pressure. Broccoli is a low-calorie food, making it an excellent choice for weight management. Moreover, it's a good source of essential minerals such as iron and calcium, contributing to overall vitality. Include broccoli in your meals to enhance your nutritional intake and savor its delicious taste, whether in salads, stir-fries, or as a side dish. You can even puree it into soups or blend it into smoothies for a convenient dose of nutrients. The versatility of broccoli makes it an ideal addition to various culinary creations. So, embrace the benefits of broccoli and make it a staple in your diet for a healthier and more vibrant you.",
    img: "/images/vegetable/broccoli.svg",
    category: "vegetable",
    rate: 4.8,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.29",
        discount: " 1.1",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.79",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Olivia Davis",
        description: "Broccoli is a must-have in my salads, and these are always fresh!",
        rate: 5,
      },
      {
        name: "Noah Johnson",
        description: "I enjoy the taste of these broccoli. They make my meals healthier.",
        rate: 4,
      },
      {
        name: "Emma Smith",
        description:
          "Broccoli is a staple in my diet, and these broccoli florets are top-notch. They add a delightful crunch to my stir-fries!",
        rate: 5,
      },
      {
        name: "Liam Wilson",
        description:
          "These broccoli florets are a game-changer for me. They're packed with nutrients and make my veggie platters irresistible.",
        rate: 5,
      },
      {
        name: "Ava Brown",
        description:
          "I'm not a huge fan of vegetables, but these broccoli florets are surprisingly delicious. They're a guilt-free snack option for me.",
        rate: 4,
      },
      {
        name: "William Lee",
        description:
          "I've tried many broccoli brands, but these are consistently fresh and flavorful. They're a must for my weekly meal prep.",
        rate: 5,
      },
      {
        name: "Sophia White",
        description:
          "Broccoli is an essential part of my family's diet, and these florets never disappoint. They're a hit with both kids and adults.",
        rate: 5,
      },
      {
        name: "James Taylor",
        description:
          "These broccoli florets are my go-to choice for adding a healthy twist to pasta dishes. They're a versatile and tasty addition to any meal.",
        rate: 4,
      },
      {
        name: "Oliver Anderson",
        description:
          "I've been trying to eat healthier, and these broccoli florets make it easy. They're convenient and delicious, perfect for snacking.",
        rate: 5,
      },
      {
        name: "Evelyn Martinez",
        description:
          "These broccoli florets are a lifesaver when it comes to getting my kids to eat their veggies. They love the taste and texture!",
        rate: 5,
      },
      {
        name: "Benjamin Lewis",
        description:
          "I'm not a fan of bland veggies, but these broccoli florets are anything but bland. They add a burst of flavor to my meals.",
        rate: 4,
      },
    ],
  },
  {
    id: "26",
    title: "Caprese Salad",
    description:
      "A delightful Caprese salad with fresh mozzarella, tomatoes, basil, olive oil, and balsamic glaze is a simple yet elegant dish that captures the essence of Italian cuisine. The creamy, milky mozzarella complements the juicy, ripe tomatoes, creating a harmonious contrast in flavors and textures. The aromatic basil leaves add a touch of freshness and earthiness, while the drizzle of extra virgin olive oil enhances the dish's richness and depth. The final flourish of balsamic glaze, with its sweet and tangy notes, elevates the salad to a culinary masterpiece. Each bite is a symphony of flavors, a celebration of the Mediterranean sun, and a reminder of the joys of simple, high-quality ingredients. This Caprese salad is a perfect appetizer for a summer soirée, a light lunch on a sunny day, or a side dish that can brighten any meal. Its vibrant colors and delicious taste make it not only a feast for the palate but also a feast for the eyes. Whether you're enjoying it on a picturesque Italian terrace overlooking the sea or in the comfort of your own home, this Caprese salad is a timeless classic that never fails to delight. So, gather your ingredients, assemble this masterpiece, and savor the taste of Italy in every glorious bite.",
    img: "/images/salad/caprese.svg",
    category: "salad",
    rate: 4.9,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "9.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "11.99",
        discount: " 10.0",
      },
    ],
    comments: [
      {
        name: "Liam Wilson",
        description: "The Caprese salad is a burst of flavor in every bite. Love the mozzarella!",
        rate: 5,
      },
      {
        name: "Ava Baker",
        description: "I'm a fan of the simple yet delicious Caprese salad. Perfect for a starter!",
        rate: 4,
      },
      {
        name: "Ella Smith",
        description:
          "The Caprese salad is a delightful combination of fresh tomatoes, creamy mozzarella, and fragrant basil. A taste of summer!",
        rate: 5,
      },
      {
        name: "Noah Davis",
        description: "Absolutely mouthwatering! The Caprese salad at this place is a culinary masterpiece. Highly recommend!",
        rate: 5,
      },
      {
        name: "Olivia Johnson",
        description: "Freshness overload! This Caprese salad is like a garden on a plate. A must-try for salad enthusiasts!",
        rate: 5,
      },
      {
        name: "William Brown",
        description:
          "I've had Caprese salads all over, but this one stands out. The ingredients are top-notch, and it's beautifully presented.",
        rate: 4,
      },
      {
        name: "Sophia Lee",
        description:
          "Simple yet sublime. The Caprese salad here is a classic that never disappoints. Great for a light and tasty appetizer!",
        rate: 4,
      },
      {
        name: "James Johnson",
        description:
          "The Caprese salad is like a symphony of flavors. The tomatoes are so ripe, and the balsamic glaze adds the perfect touch.",
        rate: 5,
      },
      {
        name: "Charlotte White",
        description:
          "As a vegetarian, I appreciate a good Caprese salad, and this one hits the mark. It's a heavenly medley of textures and tastes.",
        rate: 5,
      },
      {
        name: "Mason Harris",
        description:
          "Fresh, flavorful, and fabulous! The Caprese salad here is a culinary delight. The quality of ingredients shines through.",
        rate: 5,
      },
      {
        name: "Amelia Clark",
        description:
          "I'm not a big salad person, but the Caprese salad converted me. It's so good that I keep coming back for more!",
        rate: 4,
      },
    ],
  },
  {
    id: "27",
    title: "Spinach",
    description:
      "Get your dose of iron and vitamins with fresh spinach leaves. Spinach is a nutrient powerhouse, packed with essential vitamins and minerals that promote overall health and well-being. It's a rich source of iron, which is crucial for maintaining healthy blood and preventing anemia. Additionally, spinach provides an array of vitamins, including vitamin A, vitamin C, and several B vitamins, all of which play vital roles in supporting various bodily functions. Vitamin A is essential for good vision, skin health, and a strong immune system, while vitamin C acts as a powerful antioxidant, protecting cells from damage and supporting a robust immune response. The B vitamins found in spinach, such as folate, riboflavin, and niacin, are essential for energy metabolism and the production of red blood cells. Spinach is also a great source of dietary fiber, which aids in digestion and helps maintain a healthy weight. Its high antioxidant content helps reduce inflammation in the body and may lower the risk of chronic diseases. Furthermore, spinach is low in calories, making it an excellent choice for those looking to manage their weight. Incorporating spinach into your diet is easy; you can enjoy it raw in salads, sauté it as a side dish, blend it into smoothies for a nutrient boost, or use it as a filling for sandwiches and wraps. So, whether you're aiming to increase your iron intake, boost your immune system, or simply maintain overall health, don't forget to include fresh spinach leaves in your meals regularly. With its exceptional nutritional profile and versatility, spinach is a green vegetable that deserves a permanent spot on your grocery list. Make the most of its health benefits by exploring a variety of delicious recipes and creative ways to incorporate this leafy green into your daily meals. Whether you're a salad enthusiast, a green smoothie lover, or someone who enjoys experimenting in the kitchen, spinach can be your go-to ingredient for a healthy and vibrant lifestyle. Start today, and savor the goodness of fresh spinach as it nourishes your body and keeps you feeling your best.",
    img: "/images/vegetable/spinach.svg",
    category: "vegetable",
    rate: 4.6,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "1.19",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.69",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Mia Garcia",
        description: "Spinach is a must for my green smoothies, and these are perfect!",
        rate: 5,
      },
      {
        name: "Ethan Clark",
        description: "I love the freshness of these spinach leaves. They're great for salads.",
        rate: 4,
      },
      {
        name: "Olivia Smith",
        description:
          "These spinach leaves are a staple in my refrigerator. I use them for omelets, sandwiches, and even as a pizza topping. Versatile and always fresh!",
        rate: 5,
      },
      {
        name: "Daniel Johnson",
        description:
          "I'm on a health kick, and these spinach leaves make my daily salads exciting. Crisp and full of flavor, they add that extra zing to my meals.",
        rate: 5,
      },
      {
        name: "Sophia Brown",
        description:
          "Spinach is my go-to when I'm aiming for a nutrient-packed smoothie. These leaves blend effortlessly, making my mornings deliciously healthy.",
        rate: 3,
      },
      {
        name: "Aiden Wilson",
        description:
          "I'm not a huge fan of salads, but these spinach leaves have changed my mind. Their freshness and crunchiness make eating greens enjoyable.",
        rate: 4,
      },
      {
        name: "Lily Davis",
        description:
          "As a fitness enthusiast, I demand top-quality ingredients for my meals. These spinach leaves never disappoint, adding a burst of green goodness to my dishes.",
        rate: 5,
      },
      {
        name: "Jackson Lee",
        description:
          "I'm relatively new to incorporating spinach into my diet, and these leaves have made it easy. Freshness and taste combine to make them a winner.",
        rate: 4,
      },
      {
        name: "Ava Turner",
        description:
          "My kids are usually picky eaters, but they don't even notice when I sneak these spinach leaves into their smoothies. A parent's secret weapon for nutrition!",
        rate: 1,
      },
      {
        name: "Noah White",
        description:
          "Spinach leaves are a crucial ingredient in my homemade lasagna. These leaves maintain their texture and flavor, elevating my Italian cooking game.",
        rate: 5,
      },
      {
        name: "Emily Harris",
        description:
          "I'm a vegetarian, and these spinach leaves are my saviors. They're a vital component of my daily salads, adding the necessary crunch and nutrients.",
        rate: 5,
      },
      {
        name: "Lucas Martin",
        description:
          "I've tried various brands of spinach leaves, but these are hands down the freshest and most flavorful. They've become a kitchen staple for me.",
        rate: 5,
      },
      {
        name: "Zoe Rodriguez",
        description:
          "These spinach leaves are like a green miracle in a bag. They stay fresh for so long, and I use them for everything from wraps to stir-fries.",
        rate: 5,
      },
    ],
  },
  {
    id: "28",
    title: "Onion",
    description:
      "Enhance the flavor of your dishes with sweet and pungent onions. These versatile bulbs, known for their ability to transform ordinary meals into culinary delights, can be caramelized to create a rich, golden sweetness that adds depth to soups, stews, and sauces. Sautéed onions bring a savory aroma and a touch of sweetness to your stir-fries and pasta dishes, while raw onions provide a crisp, zesty crunch to salads and sandwiches. Onions come in various types, each with its own unique flavor profile. Sweet onions, like Vidalias and Walla Wallas, are mild and slightly fruity, making them perfect for eating raw or grilling. Spanish onions offer a balanced flavor, ideal for salsas and fajitas. Red onions, with their vibrant hue, bring color and a mild spiciness to salads and pickled dishes. Shallots, a close relative of onions, are prized for their delicate, subtle flavor and are often used in vinaigrettes and gourmet recipes. The pungent aroma of cooking onions can be captivating, filling your kitchen with a mouthwatering fragrance that signals a delicious meal in the making. Whether you're sautéing, caramelizing, grilling, or pickling, onions serve as a fundamental ingredient in countless global cuisines. They are the foundation of classic French dishes like onion soup, coq au vin, and beef bourguignon, and they play a starring role in Indian curries, Mexican salsas, and Italian sauces. Beyond their flavor-enhancing capabilities, onions offer a range of health benefits. They are a good source of vitamins C and B6, as well as dietary fiber, which aids in digestion and supports a healthy gut. Onions also contain antioxidants like quercetin, which may help reduce inflammation and lower the risk of chronic diseases. Moreover, onions have been linked to potential cardiovascular benefits and improved bone health. When selecting onions, look for ones that are firm and free from blemishes. Store them in a cool, dry place away from direct sunlight to extend their shelf life. To minimize tearing when chopping onions, you can refrigerate them for about 30 minutes or use a sharp knife and cut swiftly. Whether you're preparing a comforting bowl of French onion soup on a chilly evening, crafting a zesty salsa for a summer barbecue, or simply adding depth to your weeknight pasta, the humble onion is a kitchen essential that elevates your culinary creations. Its ability to balance sweetness with pungency, its versatility in various cooking techniques, and its potential health benefits make the onion a staple ingredient worth celebrating in every kitchen. So, embrace the culinary magic of onions and let their flavors enhance your favorite dishes, bringing joy to your taste buds and satisfaction to your dining table.",
    img: "/images/vegetable/onion.svg",
    category: "vegetable",
    rate: 4.5,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "0.79",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.29",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Sarah Smith",
        description:
          "These onions are a staple in my kitchen. They bring a burst of flavor to my salads and stir-fries. Always crisp and delicious!",
        rate: 5,
      },
      {
        name: "Michael Johnson",
        description:
          "I'm a professional chef, and I trust these onions for their consistent quality. They elevate my culinary creations to the next level.",
        rate: 5,
      },
      {
        name: "Olivia Davis",
        description:
          "As a health-conscious cook, I appreciate the nutritional value of these onions. They're low in calories and high in flavor, making them perfect for my dishes.",
        rate: 4,
      },
      {
        name: "Liam White",
        description:
          "Onions from this supplier are a game-changer. They're so versatile, whether I'm caramelizing them for French onion soup or using them raw in salads.",
        rate: 5,
      },
      {
        name: "Emma Brown",
        description:
          "These onions have a lovely, sweet undertone that enhances the taste of my homemade salsas. They're a must-have in my kitchen pantry.",
        rate: 4,
      },
      {
        name: "Noah Garcia",
        description:
          "I'm a BBQ enthusiast, and these onions are the perfect addition to my grilled dishes. They bring out that smoky, savory goodness.",
        rate: 5,
      },
      {
        name: "Ava Martinez",
        description:
          "I'm impressed with the quality and freshness of these onions. They're easy to chop, and their aroma fills my kitchen with a wonderful scent.",
        rate: 4,
      },
      {
        name: "William Anderson",
        description:
          "These onions are a lifesaver for busy weeknight dinners. They save me precious prep time without compromising on flavor. Highly recommend!",
        rate: 5,
      },
      {
        name: "Sophia Wilson",
        description:
          "The consistency of these onions is remarkable. I can count on them to add a burst of flavor and a satisfying crunch to my salads.",
        rate: 4,
      },
      {
        name: "Mason Taylor",
        description:
          "I love experimenting with different cuisines, and these onions are my go-to ingredient. They work beautifully in everything from Thai curries to Mexican tacos.",
        rate: 5,
      },
      {
        name: "Grace Hall",
        description:
          "I'm a novice cook, but these onions make me feel like a pro. They're easy to work with and instantly upgrade the taste of my dishes.",
        rate: 4,
      },
    ],
  },
  {
    id: "29",
    title: "Carrot",
    description:
      "Enjoy the crisp and sweet taste of carrots, a nutritious vegetable that's not only delicious but also packed with essential vitamins and minerals. Carrots are a versatile ingredient in the kitchen, whether you prefer them raw as a crunchy snack, juiced for a refreshing beverage, or cooked in a variety of dishes. They are an excellent source of beta-carotene, which is converted into vitamin A in the body, promoting good vision, healthy skin, and a strong immune system. Carrots also provide a healthy dose of fiber, aiding in digestion and keeping you feeling full and satisfied. These vibrant orange roots can be grated and added to salads for a burst of color and flavor, or they can be roasted with a drizzle of olive oil and a sprinkle of herbs for a savory side dish. Carrots' natural sweetness can even be incorporated into desserts like carrot cake, adding moisture and a hint of earthy sweetness. Moreover, they're a low-calorie option, making them a great choice for those looking to maintain or lose weight. So, whether you're munching on baby carrots as a snack, dipping them in hummus, or incorporating them into your favorite recipes, the delightful taste and nutritional benefits of carrots make them a must-have vegetable in your diet. Plus, their crunch and juiciness add a satisfying texture to your meals, making every bite a delightful experience. Whether you're a fan of raw or cooked carrots, you'll be pleased to know that they are easy to include in your daily meals and snacks, enhancing both taste and nutrition. So why not savor the goodness of carrots in all their forms, from carrot sticks to carrot soup, and relish the fact that you're nourishing your body while enjoying their natural, wholesome flavor? You can even explore heirloom varieties of carrots in different colors like purple, red, and yellow, each offering its unique taste and visual appeal. These colorful carrots can add an exciting twist to your culinary creations and make your meals not only delicious but also visually stunning. Whether you're a culinary enthusiast or someone who simply enjoys good food, carrots can be your go-to ingredient for a wide range of dishes. From stir-fries to salads, from soups to smoothies, there's no shortage of ways to incorporate carrots into your diet and savor their delightful taste. Carrots also pair well with various seasonings and spices, allowing you to customize their flavor to suit your preferences. You can experiment with garlic and ginger for an Asian-inspired dish, or you can go for a classic combination of carrots and thyme for a comforting, homestyle flavor. The natural sweetness of carrots can balance out the heat of chili peppers or the earthiness of cumin, creating a harmonious blend of flavors in your recipes. When it comes to cooking techniques, carrots are incredibly versatile. You can steam them to retain their natural crunch, or you can boil them until they're tender and mash them for a creamy side dish. Roasting carrots with a touch of honey or maple syrup caramelizes their sugars and creates a mouthwatering glaze. Grilling carrots imparts a smoky flavor, while stir-frying them with other vegetables adds a delightful crispiness. The options are nearly endless, allowing you to enjoy carrots in a variety of textures and tastes. Carrots also make a fantastic addition to soups and stews, infusing them with a rich, sweet flavor. Whether you're making a classic chicken noodle soup or a hearty vegetable stew, adding carrots enhances the depth and complexity of the dish. Plus, their vibrant orange color adds a beautiful aesthetic touch to your culinary creations, making them as visually appealing as they are delicious. Beyond their culinary versatility, carrots offer numerous health benefits that make them a valuable addition to your diet. Their high vitamin A content is essential for maintaining healthy vision and a strong immune system. Vitamin A also plays a role in skin health, helping to keep your complexion clear and glowing. Additionally, carrots contain antioxidants like beta-carotene, which help combat free radicals and reduce the risk of chronic diseases. These antioxidants may also contribute to cardiovascular health by reducing the risk of heart disease. Furthermore, the fiber in carrots supports digestive health by promoting regular bowel movements and preventing constipation. It also contributes to a feeling of fullness, which can aid in weight management by reducing overall calorie intake. Carrots are a nutrient-dense food, meaning they provide a significant amount of vitamins and minerals with relatively few calories. This makes them an excellent choice for those looking to maintain a healthy weight while ensuring they get essential nutrients. In addition to vitamin A, carrots contain vitamins C, K, and B6, as well as potassium, biotin, and fiber. These nutrients support overall well-being and can contribute to a balanced and nutritious diet. Moreover, carrots have a low glycemic index, which means they have a minimal impact on blood sugar levels. This makes them suitable for individuals with diabetes or those watching their carbohydrate intake. The natural sugars in carrots are slowly released into the bloodstream, providing a steady source of energy without causing rapid spikes and crashes in blood sugar. Whether you're a child or an adult, incorporating carrots into your diet is a tasty and practical way to meet your daily nutritional needs. They are a favorite among parents for encouraging kids to eat their vegetables, thanks to their natural sweetness and appealing crunch. You can serve carrot sticks with a dip as a fun and nutritious snack for children, making it easier for them to enjoy the benefits of this wholesome vegetable. Additionally, carrots are a popular choice for homemade baby food, as they are easy to puree and provide essential nutrients for growing infants. As children grow into teenagers and adults, carrots remain a convenient and healthy snack option. You can pack carrot sticks in your lunchbox or take them on the go for a quick and satisfying bite. Their portability and durability make them a practical choice for busy individuals and families. Plus, they don't require refrigeration, making them ideal for picnics, road trips, and outdoor adventures. The convenience of carrots extends to their storage as well. They have a relatively long shelf life when stored in a cool",
    img: "/images/vegetable/carrot.svg",
    category: "vegetable",
    rate: 4.7,
    type: [
      {
        stockOut: false,
        id: "1",
        name: "Luxury",
        price: "0.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.49",
        discount: " 0",
      },
    ],
    comments: [
      {
        name: "Olivia Smith",
        description:
          "These onions are the secret ingredient in my grandma's famous spaghetti sauce recipe. Their crisp texture and intense flavor elevate the dish to a whole new level. I wouldn't dream of using any other onions!",
        rate: 5,
      },
      {
        name: "Liam Johnson",
        description:
          "I'm a chef, and I've used onions from all over the world. These onions are simply outstanding. Their consistent quality and natural sweetness add depth to my culinary creations that my customers adore.",
        rate: 5,
      },
      {
        name: "Sophia Martinez",
        description:
          "As a vegetarian, onions are a staple in my kitchen. These onions are so fresh and crisp; they bring a burst of flavor to my salads and stir-fries. I'm always impressed by their quality.",
        rate: 4,
      },
      {
        name: "Mason Davis",
        description:
          "I'm a home cook, and these onions make me feel like a pro. Whether caramelized for French onion soup or finely diced for a salsa, they never disappoint. I'm addicted to their aroma and taste!",
        rate: 5,
      },
      {
        name: "Ava Wilson",
        description:
          "These onions are a game-changer for my Indian curry recipes. Their pungent aroma and bold flavor infuse the dishes with authenticity. I'm grateful for the consistent freshness they offer.",
        rate: 4,
      },
      {
        name: "Noah Brown",
        description:
          "I'm a fan of grilling, and these onions are my go-to for kebabs and burgers. Their natural sweetness caramelizes beautifully, creating a mouthwatering char that's impossible to resist. A barbecue essential!",
        rate: 5,
      },
      {
        name: "Emma Lee",
        description:
          "I use onions in my daily omelets, and these are a breakfast delight. They sauté to perfection, adding a burst of flavor to my morning routine. They've become an indispensable part of my kitchen.",
        rate: 4,
      },
      {
        name: "William Clark",
        description:
          "I've been a loyal customer for years. These onions are consistently top-notch. Their crispness and flavor are unmatched, making them a must-have in my weekly grocery list.",
        rate: 5,
      },
      {
        name: "Charlotte White",
        description:
          "These onions are my go-to for homemade pickles. Their crunch and mild flavor are perfect for preserving that classic, tangy taste. My pickles have become a family favorite thanks to these onions!",
        rate: 4,
      },
      {
        name: "Henry Turner",
        description:
          "I'm a soup enthusiast, and these onions are my go-to for French onion soup. Their rich flavor and caramelization bring depth to the broth that's simply heavenly. A culinary gem!",
        rate: 5,
      },
      {
        name: "Avery Garcia",
        description:
          "I love experimenting with international cuisine, and these onions are a versatile addition to my kitchen. From Mexican salsas to Thai curries, they never fail to enhance the authenticity and taste of my dishes.",
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
        price: "3.49",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "4.49",
        discount: " 0",
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

  {
    id: "31",
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
        price: "1.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "1.79",
        discount: " 0",
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
    id: "32",
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
        price: "7.99",
        discount: " 0",
      },
      {
        stockOut: false,
        id: "2",
        name: "High grade",
        price: "11.99",
        discount: " 0",
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
]

export const FAKE_CATEGORY: CategoryType[] = [
  {
    title: "vegetable",
    img: `/images/category/vegetable.svg`,
  },
  {
    title: "fruit",
    img: "/images/category/fruit.svg",
  },
  {
    title: "juice",
    img: "/images/category/juice.svg",
  },
  {
    title: "salad",
    img: "/images/category/salad.svg",
  },
]
export default FAKE_DATA
