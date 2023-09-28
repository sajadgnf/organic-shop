"use client"
import Stack from "@atom/stack"
import FilterProduct from ".."
import Button from "@atom/button"
import Dialog from "@module/dialog"
import React, { useState } from "react"
import Typography from "@atom/typography"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"

const HamburMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack className="z-10 w-full">
      <Dialog id="filter-container" setOpen={setOpen}>
        <Stack className={`absolute left-0 top-0 right-0 w-full z-10 ${open ? "flex" : "hidden"}`}>
          <FilterProduct setOpen={setOpen} />
        </Stack>

        <Button onClick={() => setOpen(!open)} className="xmd:hidden ml-2">
          <Stack className="space-x-2">
            <Typography variant="h5">Filter</Typography>
            <AdjustmentsHorizontalIcon width={22} className="xmd:hidden mt-1" />
          </Stack>
        </Button>
      </Dialog>
    </Stack>
  )
}

export default HamburMenu
