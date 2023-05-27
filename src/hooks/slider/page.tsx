import Stack from "@atom/stack/page"
import React, { ReactElement, ReactNode } from "react"

type PropsType = {
  images: {
    path: string
    content?: ReactElement | ReactNode | string
  }[]
}

const Slider = ({ images }: PropsType) => {
  return (
    <Stack>
      {images.map((img) => (
        <Stack
          className={`bg-[url('${img.path}')] bg-cover bg-no-repeat bg-center h-screen flex-col items-start font-inika px-28`}
        >
          {img.content}
        </Stack>
      ))}
    </Stack>
  )
}

export default Slider
