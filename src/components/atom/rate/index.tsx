"use client"
import Stack from "@atom/stack"
import React, { useState } from "react"
import { StarIcon } from "@heroicons/react/24/solid"

type PropsType = {
  value: number
  readonly?: boolean
  onChange: (t: number) => void
}

const Rate = ({ value, onChange, readonly = false }: PropsType) => {
  const [hover, setHover] = useState(value)

  return (
    <Stack>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index + 1}
          data-testid="starIcon"
          onClick={() => onChange(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(value)}
          className={`
          w-6 cursor-pointer
          ${readonly ? "pointer-events-none" : "pointer-events-auto"}
          ${index + 1 <= (hover || value) ? "text-primary-dark" : "text-secondary-dark"}
            `}
        />
      ))}
    </Stack>
  )
}

export default Rate
