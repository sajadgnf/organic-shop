"use client"
import Stack from "@atom/stack"
import FilterProduct from ".."
import Button from "@atom/button"
import React, { useEffect, useRef, useState } from "react"
import Typography from "@atom/typography"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"

const HamburMenu = () => {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    menuRef.current = document.getElementById("filter-container") as HTMLDivElement

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <Stack id="filter-container" className="md:hidden relative z-10">
      <Stack className={open ? "flex absolute top-0 z-20" : "hidden"}>
        <FilterProduct />
      </Stack>

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
