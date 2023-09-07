import React from "react"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import CommentCard from "@module/comment-card"

const FAKE_DATA = [
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 4,
  },
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 5,
  },
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 4,
  },
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 3,
  },
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 2,
  },
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 4,
  },
  {
    name: "Emma Anderson",
    description: "All the fruits I bought were undamaged and fresh. I really enjoyed the quality, thank you",
    rate: 3,
  },
]

const Comments = () => {
  return (
    <Stack className="flex-col items-start space-y-10 w-full">
      <Typography variant="h5">testimonials</Typography>

      <Stack className="flex-col w-full space-y-4">
        {FAKE_DATA.splice(0, 4).map((item) => (
          <CommentCard key={item.name + item.rate} data={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Comments