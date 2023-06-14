"use client"

import Stack from "@atom/stack/page"
import Dots from "@hooks/slider/dots"
import Arrows from "@hooks/slider/arrows"
import React, { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from "react"

export type Slides = {
  path: string
  content?: ReactElement | ReactNode | string
}[]

export type SliderTypes = {
  slides: Slides
  currentSlide: number
  setCurrentSlide: Dispatch<SetStateAction<number>>
}

const Slider = ({ slides }: { slides: Slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <Stack className="relative overflow-hidden">
      {slides.map((img, i) => (
        <Stack
          key={img.path + i}
          style={{ background: `url(${img.path}) no-repeat center`, backgroundSize: "cover" }}
          className={` flex-col font-inika transition-all ease-out h-[560px] ${
            i === currentSlide ? "visible w-screen " : "invisible w-0 px-0"
          }`}
        >
          {img.content}

          <Dots slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
        </Stack>
      ))}
      <Arrows slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
    </Stack>
  )
}

export default Slider
