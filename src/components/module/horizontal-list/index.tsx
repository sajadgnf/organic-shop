"use client"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid"
import React, { ForwardedRef, HTMLAttributes, ReactElement, ReactNode, forwardRef } from "react"

interface HorizontalListProps {
  children: ReactElement | ReactNode
}

const HorizontalList = forwardRef<HTMLDivElement, HorizontalListProps>(({ children }, ref: any) => {
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
    <Stack className="w-full">
      <Button
        variant="outlined"
        onMouseDown={scrollLeft}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        className="absolute top-[38%] left-0 z-20 !rounded-full !w-11 !p-0 h-11 md:flex hidden"
      >
        <ArrowLeftIcon width={30} className="m-auto" />
      </Button>

      {children}

      <Button
        variant="outlined"
        onMouseDown={scrollRight}
        onMouseUp={stopScrolling}
        onMouseLeave={stopScrolling}
        className="absolute top-[38%] right-0 !rounded-full !w-11 !p-0 h-11 md:flex hidden"
      >
        <ArrowRightIcon width={30} className="m-auto" />
      </Button>
    </Stack>
  )
})

export default HorizontalList
