"use client"

import React from "react"
import Link from "next/link"
import Stack from "@atom/stack/page"
import Button from "@atom/button/page"
import { useSelectedLayoutSegment } from "next/navigation"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const HeaderLink = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <Stack className="justify-between w-full fixed top-0 px-28 z-10">
      <Stack className="space-x-10">
        <Link href="/">
          <img src="./images/logo.svg" alt="organic shop لوگوی شاپ میباشد" />
        </Link>

        <Stack variant="section" className="space-x-10 text-2xl">
          <Link className={!segment ? "header-link" : ""} href="/">
            Home
          </Link>
          <Link className={segment === "store" ? "header-link" : ""} href="store">
            Shop
          </Link>
          <Link className={segment === "contact" ? "header-link" : ""} href="contact">
            Contact
          </Link>
          <Link className={segment === "blog" ? "header-link" : ""} href="blog">
            Blog
          </Link>
        </Stack>
      </Stack>

      <Stack className="space-x-3">
        <Button variant="contained">Sign Up</Button>
        <Button variant="contained" size="small">
          <ShoppingBagIcon className="h-8 w-8" />
        </Button>
      </Stack>
    </Stack>
  )
}

export default HeaderLink
