import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { ProductType } from "@src/common/fake-data"
import React from "react"

const ProductInfo = ({ data }: { data: ProductType }) => {
  return (
    <Stack className="flex-col md:items-start md:container w-full space-y-4">
      <Typography variant="h5">Information</Typography>
      <Stack className=" flex-col bg-white p-5 md:rounded-xl items-start space-y-3 w-full">
        <Typography variant="h5">title</Typography>
        <Typography>{data.description}</Typography>
      </Stack>
    </Stack>
  )
}

export default ProductInfo
