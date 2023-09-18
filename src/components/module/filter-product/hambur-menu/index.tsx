"use client"
import Button from "@atom/button"
import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"
import FilterProduct from ".."

const HamburMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack className="md:hidden relative">
      {open && (
        <Stack className="absolute top-0">
          <FilterProduct />
        </Stack>
      )}

      <Button>
        <Stack className="space-x-2">
          <Typography variant="h5">Filter</Typography>
          <AdjustmentsHorizontalIcon width={22} className="md:hidden mt-1" onClick={() => setOpen(!open)} />
        </Stack>
      </Button>
    </Stack>
  )
}

export default HamburMenu
