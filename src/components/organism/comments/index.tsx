import React from "react"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import CommentCard from "@module/comment-card"
import { ProductType } from "@src/common/fake-data"

const Comments = ({ data }: { data: ProductType["comments"] }) => {
  return (
    <Stack className="flex-col items-start space-y-10 w-full">
      <Typography variant="h5">testimonials</Typography>

      <Stack className="flex-col w-full space-y-4">
        {data.splice(0, 4).map((item) => (
          <CommentCard key={item.name + item.rate} data={item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Comments
