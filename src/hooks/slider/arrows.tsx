import React from "react"
import Stack from "@atom/stack/page"
import { SliderTypes } from "@hooks/slider/page"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const Arrows = ({ currentSlide, setCurrentSlide, slides }: SliderTypes) => {
  return (
    <>
      {currentSlide !== 0 && (
        <Stack
          className="absolute left-2 bg-white rounded h-14 w-7 cursor-pointer"
          onClick={() => setCurrentSlide((num) => --num)}
        >
          <ChevronLeftIcon />
        </Stack>
      )}

      {currentSlide !== slides.length - 1 && (
        <Stack
          className="absolute right-2 bg-white rounded h-14 w-7 cursor-pointer"
          onClick={() => setCurrentSlide((num) => ++num)}
        >
          <ChevronRightIcon />
        </Stack>
      )}
    </>
  )
}

export default Arrows
