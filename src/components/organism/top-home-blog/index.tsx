import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import OrderButton from "./order-button"
import Typography from "@atom/typography"

const TopHomeBlog = () => {
  return (
    <Stack className=" bg-secondary-main w-full">
      <Stack className="container justify-between p-10 xmd:p-24">
        <Stack className="flex-col items-start space-y-8 xmd:space-y-12 xmd:w-[50%]">
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
          <OrderButton />
          <Image
            src="/images/fruit.jpg"
            width={1093}
            height={810}
            className="xmd:hidden inline max-h-[780px] rounded-3xl"
            alt="fruit-salad"
          />
        </Stack>
        <Image
          src="/images/fruit.jpg"
          width={555}
          height={810}
          className="hidden xmd:inline w-[400px] lg:w-[555px] max-h-[760px] rounded-3xl"
          alt="fruit-salad"
        />
      </Stack>
    </Stack>
  )
}

export default TopHomeBlog
