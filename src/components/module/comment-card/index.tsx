import React from "react"
import Rate from "@atom/rate"
import Stack from "@atom/stack"
import Avatar from "@atom/avatar"
import Typography from "@atom/typography"

type PropsType = {
  data: {
    name: string
    description: string
  }
}

const CommentCard = ({ data }: PropsType) => {
  return (
    <Stack className="bg-white w-full items-start flex-col p-[21px] space-y-3 rounded-xl shadow-sm">
      <Stack className="space-x-3">
        <Avatar />

        <Stack className="flex-col items-start">
          <Typography variant="h6">{data.name}</Typography>
          <Rate value={2} readonly />
        </Stack>
      </Stack>
      <Typography>{data.description}</Typography>
    </Stack>
  )
}

export default CommentCard
