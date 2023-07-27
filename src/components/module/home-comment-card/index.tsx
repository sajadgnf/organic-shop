import React from "react"
import Rate from "@atom/rate"
import Stack from "@atom/stack"
import Avatar from "@atom/avatar"
import Typography from "@atom/typography"

const HomeCommentCard = () => {
  return (
    <Stack className="bg-white items-start flex-col max-w-[350px] p-[21px] space-y-3 rounded-xl shadow-sm">
      <Stack className="space-x-3">
        <Avatar />

        <Stack className="flex-col items-start">
          <Typography variant="h6">Emma Anderson</Typography>
          <Rate />
        </Stack>
      </Stack>
      <Typography>All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you</Typography>
    </Stack>
  )
}

export default HomeCommentCard
