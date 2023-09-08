import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { COMMENTS } from "routes"
import Typography from "@atom/typography"
import HomeCommentCard from "@module/home-comment-card"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

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

const HomeComments = () => {
  return (
    <Stack className="flex-col items-start space-y-10 w-full">
      <Link href={COMMENTS} className="w-full">
        <Stack className="items-center justify-between">
          <Typography variant="h5">testimonials</Typography>

          <Stack className="items-end space-x-2">
            <Typography variant="h6" className="text-primary-dark">
              See all
            </Typography>
            <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-6" />
          </Stack>
        </Stack>
      </Link>

      <Stack className="flex-row w-full space-x-4 py-4 justify-start overflow-auto">
        {FAKE_DATA.map((item) => (
          <HomeCommentCard data={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default HomeComments
