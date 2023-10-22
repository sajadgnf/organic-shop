"use client"
import SearchProductList from "../list"
import React, { useState } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

const StackHeaderSearch = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MagnifyingGlassIcon onClick={() => setOpen(true)} width={25} />
      <SearchProductList open={open} setOpen={setOpen} />
    </>
  )
}

export default StackHeaderSearch
