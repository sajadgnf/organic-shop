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
    <Stack className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50">
      <Stack variant="form" className="bg-black opacity-50 w-full h-screen absolute top-0 left-0 right-0 bottom-0"></Stack>
      <Stack className="flex-col items-start absolute bottom-[-10px] w-full sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:translate-y-[-50%] sm:translate-x-[-50%] bg-white p-5 rounded-lg space-y-3 sm:w-[420px]">
        <Button className="ml-auto hover:bg-inherit " onClick={() => setOpen(false)}>
          X
        </Button>
        <Input label="Your Name" />

        <Stack className="flex-col items-start">
          <Typography>Rate</Typography>
          <Rate value={rate} onChange={setRate} />
        </Stack>

        <Input label="Review Content" multiLine />
        <Button variant="contained" size="large" className="w-full" onClick={() => setOpen(false)}>
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
      <Button variant="contained" size="large" onClick={() => setOpen(true)}>
        Share your review
      </Button>
    </Stack>
  )
}

export default ShareReview
