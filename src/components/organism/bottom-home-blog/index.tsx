import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import OrderButton from "./order-button"
import Typography from "@atom/typography"

const BottomHomeBlog = () => {
  const base_url = process.env.BASE_URL
  
  return (
    <Stack className=" bg-primary-light w-full">
      <Stack className="container justify-between p-10 xmd:p-18">
        <Stack className="flex-col items-start space-y-2 xmd:space-y-6 xmd:w-[50%]">
          <Typography variant="h5">Happy Farmer</Typography>
          <Stack className="flex-col items-start space-y-2 md:space-y-0">
            <Typography>
              We plant the products with love and harvest them with laughter and send them to you with joy .The Planet Organic
              range of organic vegetables includes everyday staples such as broccoli, cabbage and cauliflower. We plant the
              products with love and harvest them with laughter and send them to you with joy .The Planet Organic range of organic
              vegetables includes everyday staples such as broccoli, cabbage and cauliflower. We plant the products with love and
              harvest them with laughter and send them to you with joy .The Planet Organic range of organic vegetables includes
              everyday staples such as broccoli, cabbage and cauliflower. We support local farmers whenever possible, and we are
              dedicated to promoting environmentally responsible practices throughout our supply chain.
            </Typography>
            <Image
              src={`${base_url}/farmer.svg`}
              width={1093}
              height={810}
              className="xmd:hidden inline max-h-[760px] rounded-3xl"
              alt="fruit-salad"
            />
            <OrderButton />
          </Stack>
        </Stack>

        <Image
          src={`${base_url}/farmer.svg`}
          width={500}
          height={510}
          className="hidden xmd:inline max-h-[500px] rounded-3xl"
          alt="fruit-salad"
        />
      </Stack>
    </Stack>
  )
}

export default BottomHomeBlog
