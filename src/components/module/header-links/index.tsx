"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { useSelectedLayoutSegment } from "next/navigation"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const Head = () => {
  const segment = useSelectedLayoutSegment()

  return (
    <Stack className="fixed top-0 left-0 right-0 justify-center  z-10 bg-white w-full shadow-lg">
      <Stack className=" pr-3 max-w-[1830px] w-full justify-between">
        <Stack className="space-x-10 w-full md:w-auto py-2 sm:py-0">
          <Link href="/">
            <Image
              src="./images/logo.svg"
              alt="organic shop logo"
              width={120}
              height={150}
              className="md:w-[180px] lg:w-[220px] mt-2 lg:mt-0"
            />
          </Link>

          <Stack variant="section" className="space-x-10 text-xs sm:text-base md:text-lg lg:text-xl">
            <Link className={`header-link ${!segment ? "after:w-[50%]" : ""}`} href="/">
              Home
            </Link>
            <Link className={`header-link ${segment === "store" ? "after:w-[50%]" : ""}`} href="store">
              Shop
            </Link>
            <Link className={`header-link ${segment === "contact" ? "after:w-[50%]" : ""}`} href="contact">
              Contact
            </Link>
            <Link className={`header-link ${segment === "blog" ? "after:w-[50%]" : ""}`} href="blog">
              Blog
            </Link>
          </Stack>
        </Stack>

        <Stack className="space-x-3 hidden md:flex">
          <Button variant="contained">Sign Up</Button>
          <Button data-testid="shopping-button" variant="contained" size="small">
            <ShoppingBagIcon className="h-8 w-8" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Head
