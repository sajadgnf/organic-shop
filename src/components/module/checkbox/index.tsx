import React, { InputHTMLAttributes } from "react"
import Stack from "@atom/stack"
import Typography from "@atom/typography"

type PropsType = { label: string }

const Checkbox = ({ label, ...props }: PropsType & InputHTMLAttributes<HTMLInputElement>) => {
  const num = Math.random() * 1000
  return (
    <Stack className="relative block w-full h-full overflow-hidden justify-start space-x-3">
      <input
        id={label + num}
        name={label + num}
        type="checkbox"
        className="checkbox-input cursor-pointer w-[30px] h-[30px]"
        {...props}
      />
      <Typography variant="label" className="w-full cursor-pointer" htmlFor={label + num}>
        {label}
      </Typography>
    </Stack>
  )
}

export default Checkbox
