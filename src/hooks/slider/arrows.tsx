import React from "react"
import Stack from "@atom/stack"
import { SliderTypes } from "@hooks/slider"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const Arrows = ({ currentSlide, setCurrentSlide, slides }: SliderTypes) => {
  return (
    <>
      <Stack
        data-testid="arrow-previous"
        className="slider-arrow absolute left-2 bg-white rounded h-14 w-7 cursor-pointer transition-all ease-out "
        onClick={() => setCurrentSlide((num) => (currentSlide !== 0 ? --num : (num = slides.length - 1)))}
      >
        <ChevronLeftIcon />
      </Stack>

      <Stack
        data-testid="arrow-next"
        className="slider-arrow absolute right-2 bg-white rounded h-14 w-7 cursor-pointer transition-all ease-out "
        onClick={() => setCurrentSlide((num) => (currentSlide !== slides.length - 1 ? ++num : (num = 0)))}
      >
        <ChevronRightIcon />
      </Stack>
    </>
  )
}

export default Arrows
