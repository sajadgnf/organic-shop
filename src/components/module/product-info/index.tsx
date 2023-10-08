"use client"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"
import { ProductType } from "@src/common/fake-data"
import React, { useState } from "react"

const ProductInfo = ({ data }: { data: ProductType }) => {
  const [open, setOpen] = useState(false)
  const linesToShow = open ? data.description : data.description.split("").slice(0, 600).join("")
  console.log(data.description.split("").slice(0, 344).join(""))

  return (
    <Stack className="flex-col items-start md:container w-full space-y-4">
      <Typography variant="h5" className="pl-5 md:pl-0">
        Information
      </Typography>
      <Stack className=" flex-col bg-white p-5 md:rounded-xl items-start space-y-3 w-full">
        <Typography>{linesToShow}</Typography>
        <Typography
          onClick={() => setOpen(!open)}
          className={`${data.description.length <= 600 ? "hidden" : "inline-block"} flex items-center space-x-1 text-blue-400 hover:bg-inherit`}
        >
          <Typography> {open ? "show less" : "Show more"}</Typography>

          {open ? <ChevronUpIcon width={20} className="w-4 md:w-5 inline-block" /> : <ChevronDownIcon width={20} className="w-4 md:w-5 inline-block" />}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default ProductInfo
