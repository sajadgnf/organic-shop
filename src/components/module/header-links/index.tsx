"use client"
import Link from "next/link"
import Image from "next/image"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { RootState } from "@src/store"
import Typography from "@atom/typography"
import React, { useEffect, useState } from "react"
import UserHamburgerMenu from "./userHamburgerMenu"
import { useSelector } from "react-redux"
import { usePathname, useRouter } from "next/navigation"
import HamburgerMenu from "@module/header-links/hamburgerMenu"
import { BLOG, CART, CONTACT, HOME, SIGNIN, STORE } from "routes"
import { ArrowLeftOnRectangleIcon, ShoppingBagIcon } from "@heroicons/react/24/solid"

const Head = () => {
  const router = useRouter()
  const pathName = usePathname()
  const [image, setImage] = useState("")
  const { phoneNumber } = useSelector((state: RootState) => state.loginSlice)

  const { itemsCounter } = useSelector((state: RootState) => state.cartSlice)

  useEffect(() => {
    function handleResize() {
      setImage(window.innerWidth >= 480 ? "/images/logo.svg" : "/images/orange-logo.svg")
    }

    window.addEventListener("resize", handleResize)

    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [window, image])

  return (
    <Stack className="sticky sm:fixed top-0 left-0 right-0 justify-center border-b z-10 bg-white w-full sm:shadow-lg">
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
            <HamburgerMenu itemsCounter={itemsCounter} />
          </Stack>
        </Stack>

        <Stack className="space-x-3 hidden md:flex">
          {phoneNumber ? (
            <UserHamburgerMenu />
          ) : (
            <Button
              variant="outlined"
              onClick={() => router.push(SIGNIN)}
              className="flex justify-between items-center w-[120px]"
            >
              <Typography>Sign in</Typography>
              <ArrowLeftOnRectangleIcon width={20} />
            </Button>
          )}
          <Stack className="border border-gray-300 h-6" />
          <Button size="small" className="relative" data-testid="shopping-button" onClick={() => router.push(CART)}>
            {!!itemsCounter && (
              <Typography
                variant="caption"
                className="absolute bottom-0 right-0 bg-primary-dark rounded-md w-[18px] h-[18px] text-white"
              >
                {itemsCounter}
              </Typography>
            )}
            <ShoppingBagIcon width={25} className=" text-gray-700" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Head
