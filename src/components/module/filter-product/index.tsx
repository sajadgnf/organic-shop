"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import Checkbox from "@module/checkbox"
import Typography from "@atom/typography"
import FilterCategory from "./filter-category"
import React, { useEffect, useState } from "react"
import { FAKE_CATEGORY } from "@src/common/fake-data"
import { useDispatch, useSelector } from "react-redux"
import { clearFilter, filterAvailable } from "@src/store/slice/productSlice"

const FilterProduct = ({ setOpen = () => {} }: { setOpen?: (t: boolean) => void }) => {
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(false)
  const { clearFilters } = useSelector((state: RootState) => state.productSlice)

  const checkHandler = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    dispatch(filterAvailable(checked))
  }, [checked])

  useEffect(() => {
    setChecked(false)
  }, [clearFilters])

  return (
    <Stack className="w-full border p-4 bg-[#f8f8f8] flex-col space-y-10 min-w-[300px] items-start">
      <Stack className="flex-col w-full items-start space-y-4">
        <Button className="xmd:hidden ml-auto" onClick={() => setOpen(false)}>
          X
        </Button>
        <Stack className="w-full justify-between">
          <Typography variant="h6">Filter</Typography>
          <Button className="text-danger-main" onClick={() => dispatch(clearFilter())}>
            clear
          </Button>
        </Stack>

        <Checkbox checked={checked} onChange={checkHandler} label="Remove Out of stock" />
      </Stack>
      <hr className="w-full" />
      <Stack className="flex-col items-start space-y-4 w-full">
        <Typography variant="h6">Category</Typography>
        <Stack className="flex-col space-y-4 items-start w-full">
          {FAKE_CATEGORY.map((item) => (
            <FilterCategory key={item.title} item={item} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

export default FilterProduct
