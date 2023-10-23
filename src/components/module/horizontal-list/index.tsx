"use client"
import Link from "next/link"
import Stack from "@atom/stack"
import Button from "@atom/button"
import Typography from "@atom/typography"
import React, { ReactElement, ReactNode, forwardRef } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"

interface HorizontalListProps {
  children: ReactElement | ReactNode
  title: string
  href?: string
}

const HorizontalList = forwardRef<HTMLDivElement, HorizontalListProps>(({ children, title, href }, ref: any) => {
  HorizontalList.displayName = "HorizontalList"
  const scrollStep = 5
  let animationId: number | null = null

  const scrollLeft = () => {
    const scroll = () => {
      if (ref?.current) {
        ref.current.scrollLeft -= scrollStep
        animationId = requestAnimationFrame(scroll)
      }
    }
    scroll()
  }

  const scrollRight = () => {
    const scroll = () => {
      if (ref?.current) {
        ref.current.scrollLeft += scrollStep
        animationId = requestAnimationFrame(scroll)
      }
    }
    scroll()
  }

  const stopScrolling = () => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
  }

  return (
    <Stack className="w-full flex-col space-y-4 md:space-y-10">
      {href ? (
        <Link href={href} className="w-full">
          <Stack className="items-center justify-between">
            <Typography variant="h5">{title}</Typography>

            <Stack className="space-x-2">
              <Typography variant="h6" className="text-primary-dark">
                See all
              </Typography>
              <ArrowRightIcon data-testid="arrow-icon" className="text-primary-dark w-3 sm:w-6" />
            </Stack>
          </Stack>
        </Link>
      ) : (
        <Stack className="justify-start w-full">
          <Typography variant="h5">{title}</Typography>
        </Stack>
      )}

      <Stack className="w-full">
        <Button
          variant="outlined"
          onMouseDown={scrollLeft}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          className="absolute top-[38%] left-0 lg:left-[-50px] z-20 !rounded-full !w-11 !p-0 h-11 md:flex hidden"
        >
          <ArrowLeftIcon width={30} className="m-auto" />
        </Button>

        {children}

        <Button
          variant="outlined"
          onMouseDown={scrollRight}
          onMouseUp={stopScrolling}
          onMouseLeave={stopScrolling}
          className="absolute top-[38%] right-0 lg:right-[-50px] !rounded-full !w-11 !p-0 h-11 md:flex hidden"
        >
          <ArrowRightIcon width={30} className="m-auto" />
        </Button>
      </Stack>
    </Stack>
  )
})

export default HorizontalList
