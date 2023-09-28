import React from "react"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { useDispatch } from "react-redux"
import Typography from "@atom/typography"
import { clearFilter } from "@src/store/slice/productSlice"

const NoResult = () => {
  const dispatch = useDispatch()

  return (
    <Stack className="flex-col w-full">
      <Image src="./images/no-result.svg" alt="no result image" width={200} height={300} className="md:w-[300px]" />
      <Typography variant="h6" className="mb-4">
        there is not data matches to your search
      </Typography>
      <Button variant="outlined" onClick={() => dispatch(clearFilter())}>
        See All Products
      </Button>
    </Stack>
  )
}

export default NoResult
