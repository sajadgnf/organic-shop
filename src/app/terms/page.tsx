import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import Typography from "@atom/typography"

const Terms = () => {
  return (
    <Stack className="w-full mt-32 container mx-auto">
      <Stack className="flex-col items-start space-y-3">
        <Typography variant="h3">Welcome to Organic Shop</Typography>
        <Stack variant="ul" className="space-y-3 flex-col items-start">
          <li>
            <Link href="#"> Organic Fruit Selection</Link>: Explore our wide variety of fresh organic fruits.
          </li>
          <li>
            <Link href="#"> Organic Fruit Categories</Link>: Browse organic fruits by type, including tropical, citrus, berries,
            and more.
          </li>
          <li>
            <Link href="#"> Seasonal Organic Specials</Link>: Check out our seasonal organic fruit offerings for the freshest
            picks.
          </li>
          <li>
            <Link href="#"> Organic Fruit Baskets</Link>: Send a delightful organic fruit basket as a healthy and eco-friendly
            gift.
          </li>
          <li>
            <Link href="#"> Organic Fruit Delivery</Link>: We deliver fresh organic fruits right to your doorstep.
          </li>
          <li>
            <Link href="#"> Exotic Organic Imports</Link>: Taste the world with our selection of exotic and rare organic fruits.
          </li>
          <li>
            <Link href="#"> Organic Juicy Savings</Link>: Find great deals and discounts on your favorite organic fruits.
          </li>
          <li>
            <Link href="#"> Organic Fruit Packs</Link>: Get convenient organic fruit packs for a quick and healthy snack.
          </li>
          <li>
            <Link href="#"> Organic Fruit Subscriptions</Link>: Subscribe for regular deliveries of fresh organic fruits and enjoy
            convenience.
          </li>
          <li>
            <Link href="#"> Organic Nutritional Benefits</Link>: Learn about the nutritional benefits of our organic fruits.
          </li>
          <li>
            <Link href="#"> Organic Fruit Recipes</Link>: Explore organic recipes and cooking ideas using our fresh fruits.
          </li>
          <li>
            <Link href="#"> Organic Customer Reviews</Link>: Read what our satisfied customers have to say about our organic
            products.
          </li>
          <li>
            <Link href="#"> Contact Organic Shop</Link>: Reach out to our customer support for assistance with organic inquiries.
          </li>
          <li>
            <Link href="#"> About Organic Shop</Link>: Learn about our passion for quality organic products and sustainable
            practices.
          </li>
          <li>
            <Link href="#"> Organic Blog and Tips</Link>: Stay updated with our blog for organic-related tips and news.
          </li>
          <li>
            <Link href="#"> Organic FAQ</Link>: Get answers to common questions about our organic products and services.
          </li>
          <li>
            <Link href="#"> My Organic Account</Link>: Manage your account and track your organic orders.
          </li>
          <li>
            <Link href="#"> Organic Shipping Information</Link>: Find details about our organic shipping options and policies.
          </li>
          <li>
            <Link href="#"> Organic Returns and Refunds</Link>: Learn about our return and refund procedures for organic products.
          </li>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Terms
