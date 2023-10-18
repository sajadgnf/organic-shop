import React from "react"
import Stack from "@atom/stack"
import { SliderTypes } from "@hooks/slider"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const Arrows = ({ currentSlide, setCurrentSlide, slides }: SliderTypes) => {
  return (
    <>
      <Stack
        data-testid="arrow-previous"
        className="slider-arrow absolute top-1/2 sm:translate-y-[-50%] left-2 bg-white rounded md:h-14 h-8 w-6 md:w-7 cursor-pointer transition-all ease-out "
        onClick={() => setCurrentSlide((num) => (currentSlide !== 0 ? --num : (num = slides.length - 1)))}
      >
        <ChevronLeftIcon />
      </Stack>

      <Stack
        data-testid="arrow-next"
        className="slider-arrow absolute top-1/2 sm:translate-y-[-50%] right-2 bg-white rounded md:h-14 h-8 w-6 md:w-7 cursor-pointer transition-all ease-out "
        onClick={() => setCurrentSlide((num) => (currentSlide !== slides.length - 1 ? ++num : (num = 0)))}
      >
        <ChevronRightIcon />
      </Stack>
    </>
  )
}

export default Arrows
