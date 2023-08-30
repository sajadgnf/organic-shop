import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import OrderButton from "./order-button"
import Typography from "@atom/typography"

const MidHomeBlog = () => {
  return (
    <Stack className=" w-full">
      <Stack className="container justify-between p-24">
        <Image
          src="/images/juices.svg"
          width={555}
          height={810}
          className="hidden md:inline max-h-[560px] w-[400px] lg:w-[555px] rounded-3xl"
          alt="fruit-salad"
        />

        <Stack className="bg-white rounded-[24px] p-10 flex-col md:items-end space-y-12 w-[555px]">
          <Typography>
            The organic beverage also has another name of a fresh or processed drink made by organic methods in farming. This kind
            of beverage maximizes the benefits for your health by minimizing the harmful human-made chemicals such as pesticides
            and fertilizers, which are ensured from the ingredient sourcing. The organic beverage also has another name of a fresh
            or processed drink made by organic methods in farming. This kind of beverage maximizes the benefits for your health by
            minimizing the harmful human-made chemicals such as pesticides and fertilizers, which are ensured from the ingredient
            sourcing
          </Typography>
          <Image
            src="/images/juices.svg"
            width={763}
            height={810}
            className="md:hidden inline max-h-[260px] rounded-3xl"
            alt="fruit-salad"
          />
          <OrderButton />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MidHomeBlog
