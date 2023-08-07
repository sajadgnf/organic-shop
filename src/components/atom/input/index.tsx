import Stack from "@atom/stack"
import Typography from "@atom/typography"
import React, { ChangeEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  label?: string
  className?: string
  placeholder?: string
  value?: string | number
  endIcon?: string | ReactElement | ReactNode
  startIcon?: string | ReactElement | ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
  name?: "name" | "email" | "phone" | "number" | "age" | "range"
}

const Input = ({ label, name = "name", placeholder, startIcon, endIcon, value, onChange, className, ...props }: PropsType) => {
  const paddingLeft = startIcon ? "pl-1" : "pl-4"
  return (
    <Stack className="flex-col space-y sm:space-y-4 items-start ">
      <Typography component="label" htmlFor={name} className="sm:text-[19px]">
        {label}
      </Typography>

      <Stack className={`bg-white rounded-lg px-1 space-x-2 border ${paddingLeft} border-secondary-dark`}>
        {startIcon && <Stack>{startIcon}</Stack>}
        <input
          value={value}
          onChange={onChange}
          className={`outline-none ${className}`}
          placeholder={placeholder}
          name={name}
          id={name}
          {...props}
        />
        {endIcon && <Stack>{endIcon}</Stack>}
      </Stack>
    </Stack>
  )
}

export default Input
