import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { CONTACT } from "routes"
import Typography from "@atom/typography"

const AboutUs = () => {
  return (
    <Stack className="container mx-auto mt-32 flex-col space-y-16">
      <Stack className="flex-col space-y-6">
        <Typography variant="h3">About Organic Shop</Typography>
        <Typography variant="h6">
          Welcome to Organic Shop, your trusted source for the freshest organic fruits. We are passionate about providing you with
          the highest quality organic produce while promoting sustainable farming practices.
        </Typography>
      </Stack>

      <Stack className="flex-col space-y-14">
        <Stack className="flex-col space-y-6 items-start">
          <Typography variant="h5">Our Commitment to Organic</Typography>
          <Typography>
            At Organic Shop, we believe that organic farming is not just a trend but a way of life. Our dedicated team works
            closely with organic farmers who prioritize natural and eco-friendly farming methods. This commitment ensures that you
            receive fruits that are free from harmful pesticides and synthetic chemicals.
          </Typography>
        </Stack>

        <Stack className="flex-col space-y-6 items-start">
          <Typography variant="h5">Our Fresh Selection</Typography>
          <Typography>
            Explore our extensive range of organic fruits, carefully selected to meet your health and taste preferences. Whether
            you're looking for tropical delights, tangy citrus fruits, or sweet berries, we have you covered. We also offer rare
            and exotic organic imports to tantalize your palate.
          </Typography>
        </Stack>

        <Stack className="flex-col space-y-6 items-start">
          <Typography variant="h5">Supporting Sustainability</Typography>
          <Typography>
            Organic Shop is more than just an online store; it's a platform for supporting sustainable agriculture. When you
            choose our organic fruits, you contribute to the preservation of our environment and the well-being of farming
            communities.
          </Typography>
        </Stack>
        <Link href={CONTACT} className="w-full">
          <Stack className="flex-col space-y-6 items-start">
            <Typography variant="h5">Contact Us</Typography>
            <Typography>
              Have questions or need assistance? Our friendly customer support team is here to help. Feel free to contact us for
              any inquiries or feedback. Your satisfaction is our top priority.
            </Typography>
          </Stack>
        </Link>
        <Stack className="flex-col space-y-6 items-start">
          <Typography variant="h5">Join the Organic Movement</Typography>
          <Typography>
            We invite you to join us in embracing a healthier and more sustainable lifestyle. Explore our organic offerings, learn
            about the benefits of organic living in our <a href="#">blog and tips</a> section, and become a part of the Organic
            Shop community.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AboutUs
