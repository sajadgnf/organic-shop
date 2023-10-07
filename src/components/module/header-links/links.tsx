"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactElement, ReactNode } from "react"
import { BLOG, CART, CONTACT, HOME, PROFILE, STORE } from "routes"
import {
  ArrowLeftOnRectangleIcon,
  BuildingStorefrontIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid"

interface ContainerType {
  href: string
  children: ReactElement | ReactNode
}

const Container = ({ href, children }: ContainerType) => {
  const pathName = usePathname()
  return (
    <Link
      className={`header-link no-tap-highlight flex items-center flex-col justify-center text-gray-700 text-xs md:text-lg lg:text-xl ${
        pathName === href ? "text-primary-dark md:text-inherit md:after:w-[50%]" : ""
      }`}
      href={href}
    >
      {children}
    </Link>
  )
}

const Links = () => {
  return (
    <>
      <Container href={HOME}>
        <HomeIcon className="block md:hidden w-6" /> Home
      </Container>
      <Container href={STORE}>
        <BuildingStorefrontIcon className="block md:hidden w-6" /> Shop
      </Container>
      <Container href={PROFILE}>
        <UserCircleIcon className="block md:hidden w-6" /> Profile
      </Container>
      <Container href={CART}>
        <ShoppingBagIcon className="block md:hidden w-6" /> Cart
      </Container>
    </>
  )
}

export default Links
