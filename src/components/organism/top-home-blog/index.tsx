import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Image from "next/image"
import React from "react"

const TopHomeBlog = () => {
  return (
    <Stack className=" bg-secondary-main w-full">
      <Stack className="container justify-between p-24">
        <Stack className="flex-col items-start space-y-12 md:w-[50%]">
          <Typography variant="h5">Why choose us?</Typography>
          <Typography>
            We take great pride in selecting only the freshest and highest quality fruits and vegetables for our customers. We
            know that our customers appreciate the valuable nutrition and taste that fresh produce offers, and that's why we only
            work with the best suppliers to ensure that we deliver. tastes and flavors from around the world. We value our
            partnership with you because we know that working together will benefit both our businesses and our customers. By
            providing the freshest and highest quality selection of produce, we can help our customers lead healthier, happier
            lives. We are dedicated to continuing to provide a level of excellence that our customers have come to expect, and we
            look forward to continuing to work with you as our trusted supplier.
          </Typography>
          <Image
            src="/images/fruit.jpg"
            width={763}
            height={810}
            className="md:hidden inline max-h-[760px] rounded-3xl"
            alt="fruit-salad"
          />
          <Button variant="contained" size="large">
            Order Now
          </Button>
        </Stack>
        <Image
          src="/images/fruit.jpg"
          width={555}
          height={810}
          className="hidden md:inline w-[400px] lg:w-[555px] max-h-[760px] rounded-3xl"
          alt="fruit-salad"
        />
      </Stack>
    </Stack>
  )
}

export default TopHomeBlog
