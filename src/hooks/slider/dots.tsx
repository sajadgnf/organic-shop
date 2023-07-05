import React from "react"
import Stack from "@atom/stack"
import Button from "@atom/button"
import { SliderTypes } from "@hooks/slider"

const Dots = ({ slides, currentSlide, setCurrentSlide }: SliderTypes) => {
  return (
    <Stack className="space-x-2 absolute bottom-3 mx-auto">
      {slides.map((_, i) => (
        <Button
          data-testid={`dot-${i}`}
          key={i}
          variant="circle"
          className={`${i === currentSlide && "!bg-primary-dark"}`}
          onClick={() => setCurrentSlide(i)}
        ></Button>
      ))}
    </Stack>
  )
}

export default Dots
