"use client"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import React, { useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { BLOG, CART, CONTACT, HOME, SIGNIN, STORE } from "routes"
import HamburgerMenu from "@module/header-links/hamburgerMenu"

const Head = () => {
  const pathName = usePathname()
  const [image, setImage] = useState("")
  const router = useRouter()

  useEffect(() => {
    function handleResize() {
      setImage(window.innerWidth >= 480 ? "/images/logo.svg" : "/images/orange-logo.svg")
    }

    window.addEventListener("resize", handleResize)

    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [window, image])

  return (
    <Stack className="sm:fixed top-0 left-0 right-0 justify-center border-b z-10 bg-white w-full sm:shadow-lg">
      <Stack className=" sm:pr-3 max-w-[1830px] w-full justify-between">
        <Stack className="sm:space-x-10 w-full md:w-auto flex-col sm:flex-row">
          <Link href={HOME}>
            <Image
              src={image}
              alt="organic shop logo"
              width={120}
              height={150}
              className="w-[50px] sm:w-[120px] md:w-[180px] lg:w-[220px] mt-2 lg:mt-0"
            />
          </Link>

          <Stack variant="section" className="space-x-10 sm:text-base md:text-lg lg:t;ext-xl">
            <Link className={`header-link ${pathName === HOME ? "after:w-[50%]" : ""}`} href={HOME}>
              Home
            </Link>
            <Link className={`header-link ${pathName === STORE ? "after:w-[50%]" : ""}`} href={STORE}>
              Shop
            </Link>
            <Link className={`header-link hidden md:block ${pathName === CONTACT ? "after:w-[50%]" : ""}`} href={CONTACT}>
              Contact
            </Link>
            <Link className={`header-link ${pathName === BLOG ? "after:w-[50%]" : ""}`} href={BLOG}>
              Blog
            </Link>
            <HamburgerMenu />
          </Stack>
        </Stack>

        <Stack className="space-x-3 hidden md:flex">
          <Button variant="contained" onClick={() => router.push(SIGNIN)}>
            Sign in
          </Button>
          <Button onClick={() => router.push(CART)} data-testid="shopping-button" variant="contained" size="small">
            <ShoppingBagIcon className="h-8 w-8" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Head
