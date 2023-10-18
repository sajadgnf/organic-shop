"use client"
import React from "react"
import Links from "./links"
import Link from "next/link"
import { HOME } from "routes"
import Image from "next/image"
import Stack from "@atom/stack"
import LeftSide from "./leftSide"
import RightSide from "./rightSide"
import { useRouter } from "next/navigation"
import { ArrowLeftIcon, } from "@heroicons/react/24/solid"
import StackHeaderSearch from "@module/search-products/stack-header-search"

const StackHead = () => {
  const router = useRouter()

  return (
    <>
      <Stack className="fixed top-0 left-0 right-0 justify-center border-b z-10 bg-white w-full md:shadow-lg">
        <Stack className="md:hidden w-full justify-between px-2">
          <ArrowLeftIcon width={25} onClick={() => router.back()} />

          <Link href={HOME} className="m-auto">
            <Image
              src="/images/logo.svg"
              alt="organic shop logo"
              width={120}
              height={43}
              className="sm:w-[120px] md:w-[180px] lg:w-[220px] mt-2 lg:mt-0"
            />
          </Link>

          <StackHeaderSearch />
        </Stack>

        <Stack className="hidden md:flex sm:pr-3 max-w-[1830px] w-full justify-between md:pt-1">
          <LeftSide />
          <RightSide />
        </Stack>
      </Stack>

      <Stack
        variant="section"
        className="fixed container md:hidden z-40 bg-white rounded-t-lg py-3 justify-between bottom-0 left-0 right-0 w-full space-x-10"
      >
        <Links />
      </Stack>
    </>
  )
}

export default StackHead
