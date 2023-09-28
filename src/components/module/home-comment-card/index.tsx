"use client"
import Rate from "@atom/rate"
import Stack from "@atom/stack"
import Avatar from "@atom/avatar"
import React, { useState } from "react"
import Typography from "@atom/typography"
import { ProductType } from "@src/common/fake-data"

const HomeCommentCard = ({ data }: { data: ProductType["comments"][number] }) => {
  const [value, setValue] = useState(data.rate)
  return (
    <Stack className="bg-white items-start flex-col min-w-[250px] md:min-w-[350px] p-[21px] space-y-3 rounded-xl shadow-sm">
      <Stack className="space-x-3">
        <Avatar />

        <Stack className="flex-col items-start">
          <Typography variant="h6">{data.name}</Typography>
          <Rate value={value} onChange={setValue} readonly />
        </Stack>
      </Stack>
      <Typography>{data.description}</Typography>
    </Stack>
  )
}

export default HomeCommentCard
