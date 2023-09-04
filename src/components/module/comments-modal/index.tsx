"use client"
import Stack from "@atom/stack"
import React, { useState } from "react"
import Typography from "@atom/typography"
import { ArrowRightIcon } from "@heroicons/react/24/solid"
import CommentCard from "@module/comment-card"

type PropsType = {
  data: { name: string; description: string }[]
}

const CommentsModal = ({ data }: PropsType) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Stack onClick={() => setOpen(true)} className="items-center justify-between w-full">
        <Typography variant="h5">testimonials</Typography>

        <Stack className="items-end space-x-2">
          <Typography variant="h6" className="text-primary-dark">
            See all
          </Typography>
          <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-6" />
        </Stack>
      </Stack>
      {open && (
        <Stack className="flex-col w-full h-full absolute top-0 bottom-0 left-0 right-0">
          {data.map((item: { name: string; description: string }) => (
            <CommentCard data={item} />
          ))}
        </Stack>
      )}
    </>
  )
}

export default CommentsModal
