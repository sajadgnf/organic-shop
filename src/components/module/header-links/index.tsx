"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { useSelectedLayoutSegment } from "next/navigation"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"

const Head = () => {
  const segment = useSelectedLayoutSegment()
  const [image, setImage] = useState("")

  useEffect(() => {
    function handleResize() {
      setImage(window.innerWidth >= 480 ? "./images/logo.svg" : "./images/orange-logo.svg")
    }

    window.addEventListener("resize", handleResize)

    handleResize()
    console.log(image)

    return () => window.removeEventListener("resize", handleResize)
  }, [window, image])

  return (
    <Stack className="sm:fixed top-0 left-0 right-0 justify-center border-b z-10 bg-white w-full sm:shadow-lg">
      <Stack className=" sm:pr-3 max-w-[1830px] w-full justify-between">
        <Stack className="sm:space-x-10 w-full md:w-auto flex-col sm:flex-row">
          <Link href="/">
            <Image
              src={image}
              alt="organic shop logo"
              width={120}
              height={150}
              className="w-[50px] sm:w-[180px] lg:w-[220px] mt-2 lg:mt-0"
            />
          </Link>

          <Stack variant="section" className="space-x-10 sm:text-base md:text-lg lg:text-xl">
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
