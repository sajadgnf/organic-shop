"use client"

import Stack from "@atom/stack/page"
import Dots from "@hooks/slider/dots"
import Arrows from "@hooks/slider/arrows"
import React, { Dispatch, SetStateAction, useEffect, useState, useRef } from "react"

export type SliderTypes = {
  isHovered?: boolean
  slides: string[]
  currentSlide: number
  setCurrentSlide: Dispatch<SetStateAction<number>>
}

const Slider = ({ slides }: { slides: string[] }) => {
  const sliderContainer = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    const startInterval = () => {
      setIsHovered(false)
      interval = setInterval(() => {
        setCurrentSlide((currentSlide) => (currentSlide !== slides.length - 1 ? ++currentSlide : (currentSlide = 0)))
      }, 5000)
    }

    const stopInterval = () => {
      clearInterval(interval)
      setIsHovered(true)
    }

    startInterval()

    sliderContainer.current?.addEventListener("mouseover", stopInterval)
    sliderContainer.current?.addEventListener("mouseout", startInterval)

    return () => {
      clearInterval(interval)
      sliderContainer.current?.removeEventListener("mouseover", stopInterval)
      sliderContainer.current?.removeEventListener("mouseout", startInterval)
    }
  }, [])

  return (
    <div ref={sliderContainer} className="display-flex relative overflow-hidden">
      {slides.map((img, i) => (
        <Stack
          key={img + i}
          style={{ background: `url(${img}) no-repeat center`, backgroundSize: "cover" }}
          className={`transition-all ease-out h-[620px] ${i === currentSlide ? "visible w-screen " : "invisible w-0 px-0"}`}
        ></Stack>
      ))}
      <Dots slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <Arrows slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} isHovered={isHovered} />
    </div>
  )
}

export default Slider
