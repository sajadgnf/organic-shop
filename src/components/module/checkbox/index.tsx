"use client"
import Stack from "@atom/stack"
import React, { useState } from "react"
import Typography from "@atom/typography"

const Checkbox = ({ label }: { label: string }) => {
  const [checked, setChecked] = useState(false)

  return (
    <Stack className="relative block w-full h-full overflow-hidden justify-start">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setChecked(!checked)
          console.log(222)
        }}
        className="checkbox-input w-[50px] h-[50px] absolute opacity-0"
        id={label}
      />
      <Typography variant="label" className="flex items-center" htmlFor={label}>
        <svg viewBox="0 0 100 100" height="50" width="50">
          <rect x="30" y="20" width="50" height="50" stroke="black" fill="none" />
          <g transform="translate(0,-952.36216)" id="layer1">
            <path
              id="path4146"
              d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23"
              fill="none"
              stroke="black"
              stroke-width="3"
              className="checkbox-input-tick"
            />
          </g>
        </svg>
        <Typography>{label}</Typography>
      </Typography>
    </Stack>
  )
}

export default Checkbox
