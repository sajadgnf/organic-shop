"use client"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import React, { useEffect, useState } from "react"
import { useSelectedLayoutSegment } from "next/navigation"
import { Bars3Icon, PhoneIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/solid"

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack className="relative">
      <Stack className={open ? "flex bg-white rounded-lg p-2 absolute top-5 left-[-30px] flex-col space-y-4" : "hidden"}>
        <Link className={`header-link flex-row flex justify-between `} href="contact">
          <PhoneIcon width={18} />
          <Typography variant="h6">Contact</Typography>
        </Link>
        <Link className={`header-link flex-row flex justify-between `} href="cart">
          <ShoppingBagIcon width={18} />
          <Typography variant="h6">Cart</Typography>
        </Link>
        <Link className={`header-link flex-row flex justify-between `} href="sign-in">
          <UserIcon width={18} />
          <Typography variant="h6">Sign In</Typography>
        </Link>
      </Stack>
      <Bars3Icon width={22} className="md:hidden mt-1" onClick={() => setOpen(!open)} />
    </Stack>
  )
}

const Head = () => {
  const segment = useSelectedLayoutSegment()
  const [image, setImage] = useState("")

  useEffect(() => {
    function handleResize() {
      setImage(window.innerWidth >= 480 ? "./images/logo.svg" : "./images/orange-logo.svg")
    }

    window.addEventListener("resize", handleResize)

    handleResize()

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
              className="w-[50px] sm:w-[120px] md:w-[180px] lg:w-[220px] mt-2 lg:mt-0"
            />
          </Link>

          <Stack variant="section" className="space-x-10 sm:text-base md:text-lg lg:text-xl">
            <Link className={`header-link ${!segment ? "after:w-[50%]" : ""}`} href="/">
              Home
            </Link>
            <Link className={`header-link ${segment === "store" ? "after:w-[50%]" : ""}`} href="store">
              Shop
            </Link>
            <Link className={`header-link hidden md:block ${segment === "contact" ? "after:w-[50%]" : ""}`} href="contact">
              Contact
            </Link>
            <Link className={`header-link ${segment === "blog" ? "after:w-[50%]" : ""}`} href="blog">
              Blog
            </Link>
            <HamburgerMenu />
          </Stack>
        </Stack>

        <Stack className="space-x-3 hidden md:flex">
          <Button variant="contained">Sign In</Button>
          <Button data-testid="shopping-button" variant="contained" size="small">
            <ShoppingBagIcon className="h-8 w-8" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Head
