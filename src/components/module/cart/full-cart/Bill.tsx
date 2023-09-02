import React from "react"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"

const Bill = () => {
  return (
    <Stack className="flex-col space-y-5 border rounded-lg p-3 w-full lg:w-[30%]">
      <Stack className="justify-between w-full">
        <Typography>total price without discount</Typography>
        <Typography>$1000</Typography>
      </Stack>

      <Stack className="justify-between w-full text-danger-main">
        <Typography>discount</Typography>
        <Typography>$0</Typography>
      </Stack>

      <Stack className="justify-between w-full font-semibold">
        <Typography>total price</Typography>
        <Typography>$1000</Typography>
      </Stack>

      <Button variant="contained" className="w-full">
        Check Out
      </Button>
    </Stack>
  )
}

export default Bill
