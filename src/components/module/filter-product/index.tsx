import React from "react"
import Stack from "@atom/stack"
import Checkbox from "@module/checkbox"
import Typography from "@atom/typography"
import { FAKE_CATEGORY } from "@src/common/fake-data"

const FilterProduct = () => {
  return (
    <Stack className=" border p-3 rounded-lg flex-col space-y-10 min-w-[300px] items-start">
      <Stack className="flex-col items-start space-y-4">
        <Typography variant="h6">Filter</Typography>
        <Checkbox label="Include Out of stock" />
      </Stack>

      <Stack className="flex-col items-start space-y-4">
        <Typography variant="h6">Category</Typography>
        <Stack className="flex-col space-y-4 items-start">
          {FAKE_CATEGORY.map((item) => (
            <Checkbox label={item.title} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FilterProduct
