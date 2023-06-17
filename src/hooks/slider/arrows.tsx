import React from "react"
import Stack from "@atom/stack/page"
import { SliderTypes } from "@hooks/slider/page"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const Arrows = ({ currentSlide, setCurrentSlide, slides, isHovered }: SliderTypes) => {
  return (
    <>
      <Stack
        className={`absolute left-2 bg-white rounded h-14 w-7 cursor-pointer transition-all ease-out ${
          isHovered ? "opacity-1" : "opacity-0"
        }`}
        onClick={() => setCurrentSlide((num) => (currentSlide !== 0 ? --num : (num = slides.length - 1)))}
      >
        <ChevronLeftIcon />
      </Stack>

      <Stack
        className={`absolute right-2 bg-white rounded h-14 w-7 cursor-pointer transition-all ease-out ${
          isHovered ? "opacity-1" : "opacity-0"
        }`}
        onClick={() => setCurrentSlide((num) => (currentSlide !== slides.length - 1 ? ++num : (num = 0)))}
      >
        <ChevronRightIcon />
      </Stack>
    </>
  )
}

export default Arrows
