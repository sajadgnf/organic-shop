"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactElement, ReactNode } from "react"
import { BLOG, CART, CONTACT, HOME, PROFILE, SIGNIN, STORE } from "routes"
import { BuildingStorefrontIcon, HomeIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { RootState } from "@src/store"
import { useSelector } from "react-redux"

interface ContainerType {
  href: string
  className?: string
  children: ReactElement | ReactNode
}

const Container = ({ href, children, className }: ContainerType) => {
  const pathName = usePathname()
  return (
    <Link
      className={`header-link no-tap-highlight flex items-center flex-col justify-center text-gray-700 text-xs md:text-lg lg:text-xl ${
        pathName === href ? "text-primary-dark md:text-inherit md:after:w-[50%]" : ""
      } ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}

const Links = () => {
  const { phoneNumber } = useSelector((state: RootState) => state.loginSlice)
  return (
    <>
      <Container href={HOME}>
        <HomeIcon className="block md:hidden w-6" /> Home
      </Container>
      <Container href={STORE}>
        <BuildingStorefrontIcon className="block md:hidden w-6" /> Shop
      </Container>
      <Container href={phoneNumber ? PROFILE : SIGNIN} className="block md:hidden">
        <UserCircleIcon className="w-6" /> Profile
      </Container>
      <Container href={CART} className="block md:hidden">
        <ShoppingBagIcon className="w-6" /> Cart
      </Container>
      <Container href={CONTACT} className="md:block hidden">
        Contact
      </Container>
      <Container href={BLOG} className="md:block hidden">
        Blog
      </Container>
    </>
  )
}

export default Links
