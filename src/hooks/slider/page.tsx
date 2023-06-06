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
    <Stack className=" transition ease-out relative">
      {slides.map((img, i) => (
        <Stack
          key={img.path + i}
          style={{ background: `url(${img.path}) no-repeat center`, backgroundSize: "cover" }}
          className={`h-screen w-screen flex-col items-start font-inika px-28 ${i === currentSlide ? "flex" : "hidden"}`}
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
