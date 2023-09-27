"use client"
import Stack from "@atom/stack"
import FilterProduct from ".."
import Button from "@atom/button"
import Dialog from "@module/dialog"
import Typography from "@atom/typography"
import React, { useState } from "react"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"

const HamburMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog id="filter-container" setOpen={setOpen}>
      {open && (
        <Stack className=" absolute top-0 z-20">
          <FilterProduct setOpen={setOpen} />
        </Stack>
      )}

      <Button onClick={() => setOpen(!open)} className="xmd:hidden">
        <Stack className="space-x-2">
          <Typography variant="h5">Filter</Typography>
          <AdjustmentsHorizontalIcon width={22} className="xmd:hidden mt-1" />
        </Stack>
      </Button>
    </Dialog>
  )
}

export default HamburMenu
