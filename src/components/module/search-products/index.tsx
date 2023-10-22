"use client"
import Input from "@atom/input"
import Stack from "@atom/stack"
import Dialog from "@module/dialog"
import SearchProductList from "./list"
import { useDispatch } from "react-redux"
import Typography from "@atom/typography"
import { searchProduct } from "@src/store/slice/productSlice"
import React, { ChangeEvent, useEffect, useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const SearchProduct = ({ id }: { id: string }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState("")

  const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    dispatch(searchProduct(search))

    return () => {
      dispatch(searchProduct(""))
    }
  }, [search])

  return (
    <Dialog id={id} setOpen={setOpen}>
      <Input
        type="search"
        name="search"
        value={search}
        autoComplete="off"
        placeholder="search..."
        className="hidden md:flex"
        containerClassName="xmd:!w-1/2"
        onFocus={() => setOpen(true)}
        onChange={(e) => changeHandler(e)}
        startIcon={<MagnifyingGlassIcon width={20} className="ml-2" />}
      />

      <Stack
        onClick={() => setOpen(true)}
        className="bg-white md:hidden rounded-lg px-1 min-h-[47px] w-full space-x-1 border border-secondary-dark text-gray-600 justify-start pl-3 m-3"
      >
        <Typography>search in</Typography>
        <Typography variant="h6" className="text-primary-dark">
          Organic Shop
        </Typography>
      </Stack>

      <SearchProductList open={open} setOpen={setOpen} />
    </Dialog>
  )
}

export default SearchProduct
