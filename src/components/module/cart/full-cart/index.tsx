import React from "react"
import Stack from "@atom/stack"
import Image from "next/image"
import Button from "@atom/button"
import Typography from "@atom/typography"
import { XMarkIcon } from "@heroicons/react/24/solid"

const FullCart = () => {
  return (
    <Stack className="flex-col sm:flex-row space-y-5 sm:space-y-0 w-full justify-between items-start">
      <Stack className="flex-col w-full sm:w-[65%] space-y-5">
        <Stack className="border rounded-lg p-3 justify-between w-full">
          <Stack className="space-x-4">
            <Image src="/images/test-juice.svg" alt="" width={80} height={80} />
            <Stack className="flex-col">
              <Typography>title</Typography>
              <Typography>price</Typography>
            </Stack>
          </Stack>

          <Stack className="space-x-2">
            <Button variant="outlined" className="!rounded-full w-1 h-1 flex items-center justify-center">
              -
            </Button>
            <Typography>quantity</Typography>
            <Button variant="outlined" className="!rounded-full w-1 h-1 flex items-center justify-center">
              +
            </Button>
          </Stack>

          <Button>
            <XMarkIcon width={25} />
          </Button>
        </Stack>
      </Stack>

      <Stack className="flex-col space-y-5 border rounded-lg p-3 w-full sm:w-[30%]">
        <Stack className="justify-between w-full">
          <Typography>total items</Typography>
          <Typography>5</Typography>
        </Stack>

        <Stack className="justify-between w-full">
          <Typography>total price</Typography>
          <Typography>$1000</Typography>
        </Stack>
        <Button variant="contained" className="w-full">
          Check Out
        </Button>
      </Stack>
    </Stack>
  )
}

export default FullCart
