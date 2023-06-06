"use client"

import Stack from "@atom/stack/page"
import React, { ReactElement, ReactNode, useState } from "react"

type PropsType = {
  images: {
    path: string
    content?: ReactElement | ReactNode | string
  }[]
}

const Slider = ({ images }: PropsType) => {
  const [slide, setSlide] = useState(0)

  return (
    <Stack className="overflow-hidden relative transition ease-out">
      {images.map((img, i) => (
        <Stack
          key={img.path + i}
          className={`bg-[url('${
            img.path
          }')] bg-cover bg-no-repeat bg-center h-screen w-screen flex-col items-start font-inika px-28 ${
            i === slide ? "flex" : "hidden"
          }`}
        >
          {img.content}
        </Stack>
      ))}
    </Stack>
  )
}

export default Slider
