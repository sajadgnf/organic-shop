import Stack from "@atom/stack"
import Typography from "@atom/typography"
import { FormikProps } from "formik"
import React, { ForwardedRef, InputHTMLAttributes, ReactElement, ReactNode, forwardRef } from "react"

type PropsType = {
  name?: string
  rows?: number
  label?: string
  formik?: FormikProps<any>
  className?: string
  multiLine?: boolean
  containerClassName?: string
  endIcon?: string | ReactElement | ReactNode
  startIcon?: string | ReactElement | ReactNode
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
    formik,
    name = "name",
    containerClassName,
    ...rest
  } = props
  Input.displayName = "Input"
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
            className={`outline-none py-2 w-full resize-none ${paddingLeft}`}
            ref={ref as React.RefObject<HTMLTextAreaElement>}
            {...formik?.getFieldProps(name)}
            rows={rows}
            name={name}
            id={name}
            {...rest}
          />
        ) : (
          <>
            {startIcon && <Stack>{startIcon}</Stack>}
            <input
              className={`outline-none w-full number-input min-h-[47px] ${paddingLeft}`}
              ref={ref as React.RefObject<HTMLInputElement>}
              {...formik?.getFieldProps(name)}
              name={name}
              type={type}
              id={name}
              {...rest}
            />
            {endIcon && <Stack>{endIcon}</Stack>}
          </>
        )}
      </Stack>
      {formik?.errors[name] && formik.touched[name] && formik.errors[name] && (
        <Typography variant="caption" className="text-danger-main">
          {formik.errors[name] as string}
        </Typography>
      )}
    </Stack>
  )
})
export default Input
