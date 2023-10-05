import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import OrderButton from "./order-button"
import Typography from "@atom/typography"

const MidHomeBlog = () => {
  return (
    <Stack className=" w-full">
      <Stack className="container bg-white xmd:bg-inherit justify-between p-10 space-x-3 xmd:p-18">
        <Image
          src="/images/juices.svg"
          width={555}
          height={810}
          className="hidden xmd:inline max-h-[560px] w-[400px] lg:w-[555px] rounded-3xl"
          alt="fruit-salad"
        />

        <Stack className="bg-white rounded-[24px] py:10 xmd:p-10 flex-col xmd:items-start space-y-4 xmd:w-[555px]">
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
            className="xmd:hidden inline max-h-[260px] rounded-3xl"
            alt="fruit-salad"
          />
          <OrderButton />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MidHomeBlog
