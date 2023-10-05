import React from "react"
import Link from "next/link"
import Stack from "@atom/stack"
import { PRODUCTDETAILS } from "routes"
import Typography from "@atom/typography"
import { FAKE_COMMENT } from "@src/common/fake-data"
import HomeCommentCard from "@module/home-comment-card"

const HomeComments = () => {
  return (
    <Stack className="flex-col items-start md:space-y-10 w-full">
      <Typography variant="h5">Testimonials</Typography>

      <Stack className="flex-row w-full space-x-4 py-4 justify-start overflow-auto">
        {FAKE_COMMENT.map((item) => (
          <Link href={PRODUCTDETAILS(item.productId)}>
            <HomeCommentCard data={item} key={item.name + item.rate} />
          </Link>
        ))}
      </Stack>
    </Stack>
  )
}

export default HomeComments
