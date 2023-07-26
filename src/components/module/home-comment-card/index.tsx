import React from "react"
import Stack from "@atom/stack"
import Avatar from "@atom/avatar"
import Typography from "@atom/typography"
import { StarIcon } from "@heroicons/react/24/solid"

const HomeCommentCard = () => {
  return (
    <Stack className="bg-white flex-col max-w-[350px] p-[21px] space-y-2 rounded-xl shadow-sm">
      <Stack className="space-x-2">
        <Avatar />

        <Stack className="flex-col ">
          <Typography variant="h6">Emma Anderson</Typography>
          <Stack>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Stack>
        </Stack>
      </Stack>
      <Typography>All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you</Typography>
    </Stack>
  )
}

export default HomeCommentCard
