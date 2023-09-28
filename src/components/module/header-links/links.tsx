"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactElement, ReactNode } from "react"
import { BLOG, CONTACT, HOME, STORE } from "routes"
import { BookOpenIcon, BuildingStorefrontIcon, ChatBubbleOvalLeftEllipsisIcon, HomeIcon } from "@heroicons/react/24/solid"

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
      <Container href={CONTACT}>
        <ChatBubbleOvalLeftEllipsisIcon className="block md:hidden w-6" /> Contact
      </Container>
      <Container href={BLOG}>
        <BookOpenIcon className="block md:hidden w-6" /> Blog
      </Container>
    </>
  )
}

export default Links
