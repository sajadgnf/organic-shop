import Stack from "@atom/stack"
import Typography from "@atom/typography"
import React, { ChangeEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  rows?: number
  name?: string
  label?: string
  pattern?: string
  className?: string
  required?: boolean
  multiLine?: boolean
  placeholder?: string
  value?: string | number
  endIcon?: string | ReactElement | ReactNode
  startIcon?: string | ReactElement | ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  type?:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | "datetime-local"
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
  required,
  className,
  placeholder,
  name = "name",
  ...props
}: PropsType) => {
  const paddingLeft = startIcon ? "pl-1" : "pl-2"

  return (
    <Stack className={`flex-col space-y items-start w-full ${className}`}>
      <Typography component="label" htmlFor={name} className="sm:text-[19px]">
        {label}
      </Typography>

      <Stack className={`bg-white rounded-lg px-1 min-h-[47px] w-full space-x-2 border border-secondary-dark`}>
        {multiLine ? (
          <textarea
            id={name}
            name={name}
            value={value}
            rows={rows}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`outline-none py-2 w-full resize-none ${paddingLeft}`}
            {...props}
          />
        ) : (
          <>
            {startIcon && <Stack>{startIcon}</Stack>}
            <input
              value={value}
              onChange={onChange}
              className={`outline-none w-full number-input min-h-[47px] ${paddingLeft}`}
              placeholder={placeholder}
              required={required}
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
