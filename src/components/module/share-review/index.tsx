"use client"
import Button from "@atom/button"
import Input from "@atom/input"
import Rate from "@atom/rate"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import React, { useState } from "react"
import { createPortal } from "react-dom"

const ModalDialog = ({ setOpen }: { setOpen: (t: boolean) => void }) => {
  const [rate, setRate] = useState(0)

  return (
    <Stack className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen ">
      <Stack
        variant="form"
        className=" flex-col items-start absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white p-5 rounded-lg space-y-3 w-[320px] sm:w-[420px]"
      >
        <Button className="ml-auto" onClick={() => setOpen(false)}>
          X
        </Button>
        <Input label="Your Name" />

        <Stack className="flex-col items-start">
          <Typography>Rate</Typography>
          <Rate value={rate} onChange={setRate} />
        </Stack>

        <Input label="Review Content" multiLine />
        <Button variant="contained" onClick={() => setOpen(false)}>
          post
        </Button>
      </Stack>
    </Stack>
  )
}

const ShareReview = () => {
  const [open, setOpen] = useState(false)
  return (
    <Stack>
      {open && createPortal(<ModalDialog setOpen={setOpen} />, document.getElementsByClassName("body")[0])}
      <Button variant="outlined" size="large" onClick={() => setOpen(true)}>
        Share your review
      </Button>
    </Stack>
  )
}

export default ShareReview
