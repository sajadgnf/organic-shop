import React from "react"
import Rate from "@atom/rate"
import Stack from "@atom/stack"
import Avatar from "@atom/avatar"
import Typography from "@atom/typography"

type PropsType = {
  data: {
    name: string
    rate: number
    description: string
  }
}

const CommentCard = ({ data }: PropsType) => {
  return (
    
    <Stack className="w-full items-start flex-col pb-2 space-y-3 ">
      <Stack className="space-x-3">
        <Avatar />

        <Stack className="flex-col items-start">
          <Typography variant="h6">{data.name}</Typography>
          <Rate value={data.rate} readonly />
        </Stack>
      </Stack>
      <Typography>{data.description}</Typography>
    </Stack>
  )
}

export default CommentCard
