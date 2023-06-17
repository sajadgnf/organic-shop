"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack/page"
import Button from "@atom/button/page"
import { useSelectedLayoutSegment } from "next/navigation"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const HeaderLink = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <Stack className="justify-between fixed top-0 z-10 bg-white w-full px-28 shadow-lg">
      <Stack className="space-x-10">
        <Link href="/">
          <Image src="./images/logo.svg" alt="organic shop logo" width={220} height={150} />
        </Link>

        <Stack variant="section" className="space-x-10 text-xl">
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
