import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import Image from "next/image"
import React from "react"

const MidHomeBlog = () => {
  return (
    <Stack className=" w-full">
      <Stack className="container mx-auto justify-between p-24">
        <Image src="/images/juices.svg" width={555} height={810} className="max-h-[560px] rounded-3xl" alt="fruit-salad" />

        <Stack className="bg-white rounded-[24px] p-10 flex-col items-end space-y-12 w-[555px]">
          <Typography>
            The organic beverage also has another name of a fresh or processed drink made by organic methods in farming. This kind
            of beverage maximizes the benefits for your health by minimizing the harmful human-made chemicals such as pesticides
            and fertilizers, which are ensured from the ingredient sourcing. The organic beverage also has another name of a fresh
            or processed drink made by organic methods in farming. This kind of beverage maximizes the benefits for your health by
            minimizing the harmful human-made chemicals such as pesticides and fertilizers, which are ensured from the ingredient
            sourcing
          </Typography>
          <Button variant="contained">Order Now</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MidHomeBlog
