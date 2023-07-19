import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Image from "next/image"
import React from "react"

const TopHomeBlog = () => {
  return (
    <Stack className="space-x-24 items-start bg-secondary-main p-20">
      <Stack className="flex-col items-start space-y-11">
        <Typography variant="h5">Why choose us?</Typography>
        <Typography>
          We take great pride in selecting only the freshest and highest quality fruits and vegetables for our customers. We know
          that our customers appreciate the valuable nutrition and taste that fresh produce offers, and that's why we only work
          with the best suppliers to ensure that we deliver. tastes and flavors from around the world. We value our partnership
          with you because we know that working together will benefit both our businesses and our customers. By providing the
          freshest and highest quality selection of produce, we can help our customers lead healthier, happier lives. We are
          dedicated to continuing to provide a level of excellence that our customers have come to expect, and we look forward to
          continuing to work with you as our trusted supplier.
        </Typography>
        <Button variant="contained">Order Now</Button>
      </Stack>
      <Image src="/images/fruit-salad.webp" width={525} height={610} className="max-h-[610px] rounded-3xl" alt="fruit-salad" />
    </Stack>
  )
}

export default TopHomeBlog
