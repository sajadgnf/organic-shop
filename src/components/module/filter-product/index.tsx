import React from "react"
import Stack from "@atom/stack"
import Checkbox from "@module/checkbox"
import Typography from "@atom/typography"
import { FAKE_CATEGORY } from "@src/common/fake-data"
import Button from "@atom/button"

const FilterProduct = () => {
  return (
    <Stack className=" border p-4 bg-[#f8f8f8] flex-col space-y-10 min-w-[300px] items-start">
      <Stack className="flex-col w-full items-start space-y-4">
        <Stack className="w-full justify-between">
          <Typography variant="h6">Filter</Typography>
          <Button className="text-danger-main">clear</Button>
        </Stack>

        <Checkbox label="Include Out of stock" />
      </Stack>
      <hr className="w-full" />
      <Stack className="flex-col items-start space-y-4 w-full">
        <Typography variant="h6">Category</Typography>
        <Stack className="flex-col space-y-4 items-start w-full">
          {FAKE_CATEGORY.map((item) => (
            <Checkbox label={item.title} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FilterProduct
