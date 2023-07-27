"use client"
import Stack from "@atom/stack"
import React, { useState } from "react"
import { StarIcon } from "@heroicons/react/24/solid"

type PropsType = {
  value?: number
  readonly?: boolean
}

const Rate = ({ value = 0, readonly = false }: PropsType) => {
  const [hover, setHover] = useState(value)
  const [rating, setRating] = useState(value)

  return (
    <Stack>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index + 1}
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(rating)}
          className={`
          w-6 cursor-pointer
          ${readonly ? "pointer-events-none" : "pointer-events-auto"}
          ${index + 1 <= (hover || rating) ? "text-primary-dark" : "text-secondary-dark"}
            `}
        />
      ))}
    </Stack>
  )
}

export default Rate
