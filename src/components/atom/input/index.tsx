import Stack from "@atom/stack"
import Typography from "@atom/typography"
import React, { ChangeEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  rows?: number
  name?: string
  label?: string
  className?: string
  multiLine?: boolean
  placeholder?: string
  value?: string | number
  endIcon?: string | ReactElement | ReactNode
  startIcon?: string | ReactElement | ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  type?: "text" | "email" | "phone" | "number" | "age" | "range"
}

const Input = ({
  type = "text",
  rows,
  label,
  value,
  endIcon,
  onChange,
  multiLine,
  startIcon,
  className,
  placeholder,
  name = "name",
  ...props
}: PropsType) => {
  const paddingLeft = startIcon ? "pl-1" : "pl-4"
  return (
    <Stack className={`flex-col space-y sm:space-y-4 items-start ${className}`}>
      <Typography component="label" htmlFor={name} className="sm:text-[19px]">
        {label}
      </Typography>

      <Stack className={`bg-white rounded-lg px-1 min-h-[47px] w-full space-x-2 border ${paddingLeft} border-secondary-dark`}>
        {multiLine ? (
          <textarea
            id={name}
            name={name}
            value={value}
            rows={rows}
            onChange={onChange}
            placeholder={placeholder}
            className="outline-none w-full resize-none"
            {...props}
          />
        ) : (
          <>
            {startIcon && <Stack>{startIcon}</Stack>}
            <input
              value={value}
              onChange={onChange}
              className="outline-none w-full"
              placeholder={placeholder}
              name={name}
              type={type}
              id={name}
              {...props}
            />
            {endIcon && <Stack>{endIcon}</Stack>}
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default Input
