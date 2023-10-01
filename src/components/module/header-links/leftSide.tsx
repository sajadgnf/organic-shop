'use client'
import React from "react"
import Links from "./links"
import Link from "next/link"
import { HOME } from "routes"
import Image from "next/image"
import Stack from "@atom/stack"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { useRouter } from "next/navigation"

const LeftSide = () => {
  const router= useRouter()

  return (
    <Stack className="justify-between sm:space-x-10 w-full md:w-auto">
      <Stack className="space-x-3 sm:space-x-0 ">
        <ArrowLeftIcon onClick={()=>router.back()} width={25} className="sm:hidden" />
        <Link href={HOME}>
          <Image
            src="/images/logo.svg"
            alt="organic shop logo"
            width={100}
            height={150}
            className="sm:w-[120px] md:w-[180px] lg:w-[220px] mt-2 lg:mt-0"
          />
        </Link>
      </Stack>

      <Stack variant="section" className="hidden md:flex w-full space-x-10">
        <Links />
      </Stack>
    </Stack>
  )
}

export default LeftSide
