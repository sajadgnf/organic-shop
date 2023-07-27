import Stack from "@atom/stack"
import Typography from "@atom/typography"
import HomeCommentCard from "@module/home-comment-card"
import React from "react"

const HomeComments = () => {
  return (
    <Stack className="flex-col items-start space-y-10 w-full ">
      <Typography variant="h5">testimonials</Typography>
      <HomeCommentCard />
    </Stack>
  )
}

export default HomeComments
