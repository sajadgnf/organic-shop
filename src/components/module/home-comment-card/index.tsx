"use client"
import Rate from "@atom/rate"
import Stack from "@atom/stack"
import Avatar from "@atom/avatar"
import React, { useState } from "react"
import Typography from "@atom/typography"
import { CommentType } from "@src/common/fake-data"

const HomeCommentCard = ({ data }: { data: CommentType }) => {
  const [value, setValue] = useState(data.rate)
  return (
    <Stack className="bg-white items-start flex-col min-w-[250px] md:min-w-[350px] p-[21px] space-y-3 rounded-xl shadow-sm">
      <Stack className="space-x-3">
        <Avatar src={data.img} />

        <Stack className="flex-col items-start">
          <Typography variant="h6">{data.name}</Typography>
          <Rate value={value} onChange={setValue} readonly />
        </Stack>
      </Stack>
      <Typography className="line-clamp-2">{data.description}</Typography>
    </Stack>
  )
}

export default HomeCommentCard
