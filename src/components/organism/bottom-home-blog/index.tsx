import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import React from "react"

const BottomHomeBlog = () => {
  return (
    <Stack className=" bg-primary-light w-full">
      <Stack className="container justify-between p-24">
        <Stack className="flex-col items-start space-y-12 md:w-[50%]">
          <Typography variant="h5">Happy Farmer</Typography>
          <Typography>
            We plant the products with love and harvest them with laughter and send them to you with joy .The Planet Organic range
            of organic vegetables includes everyday staples such as broccoli, cabbage and cauliflower. We plant the products with
            love and harvest them with laughter and send them to you with joy .The Planet Organic range of organic vegetables
            includes everyday staples such as broccoli, cabbage and cauliflower. We plant the products with love and harvest them
            with laughter and send them to you with joy .The Planet Organic range of organic vegetables includes everyday staples
            such as broccoli, cabbage and cauliflower. We support local farmers whenever possible, and we are dedicated to
            promoting environmentally responsible practices throughout our supply chain.
          </Typography>
          <Image
            src="/images/farmer.svg"
            width={763}
            height={810}
            className="md:hidden inline max-h-[760px] rounded-3xl"
            alt="fruit-salad"
          />
          <Button className="text-primary-dark flex-row flex items-center space-x-1">
            <Typography className="text-lg">Read More</Typography>
            <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-6" />
          </Button>
        </Stack>
        <Image
          src="/images/farmer.svg"
          width={555}
          height={510}
          className="hidden md:inline max-h-[500px] rounded-3xl"
          alt="fruit-salad"
        />
      </Stack>
    </Stack>
  )
}

export default BottomHomeBlog
