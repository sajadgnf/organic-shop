import Stack from "@atom/stack"
import Typography from "@atom/typography"
import React, { ForwardedRef, InputHTMLAttributes, ReactElement, ReactNode, forwardRef } from "react"

type PropsType = {
  name?: string
  rows?: number
  label?: string
  className?: string
  multiLine?: boolean
  containerClassName?: string
  endIcon?: string | ReactElement | ReactNode
  startIcon?: string | ReactElement | ReactNode
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

const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  PropsType & InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
>((props, ref?: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>) => {
  const {
    type = "text",
    rows,
    label,
    endIcon,
    multiLine,
    startIcon,
    className,
    name = "name",
    containerClassName,
    ...rest
  } = props
  const paddingLeft = startIcon ? "pl-1" : "pl-2"

  return (
    <Stack className={`flex-col space-y-1 items-start w-full ${className}`}>
      <Typography component="label" htmlFor={name}>
        {label}
      </Typography>

      <Stack
        className={`bg-white rounded-lg px-1 min-h-[47px] w-full space-x-2 border border-secondary-dark ${containerClassName}`}
      >
        {multiLine ? (
          <textarea
            id={name}
            rows={rows}
            name={name}
            className={`outline-none py-2 w-full resize-none ${paddingLeft}`}
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            {...rest}
          />
        ) : (
          <>
            {startIcon && <Stack>{startIcon}</Stack>}
            <input
              className={`outline-none w-full number-input min-h-[47px] ${paddingLeft}`}
              name={name}
              type={type}
              id={name}
                ref={ref as React.RefObject<HTMLInputElement>}
              {...rest}
            />
            {endIcon && <Stack>{endIcon}</Stack>}
          </>
        )}
      </Stack>
    </Stack>
  )
})
export default Input
