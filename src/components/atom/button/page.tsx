import React, { ReactElement } from "react"

type PropsType = {
  children: string | ReactElement
  className?: string
  size?: "small" | "medium" | "large"
  variant?: "text" | "outlined" | "contained"
}

const Button = ({ children, className = "font-roboto", size = "medium", variant = "text", ...props }: PropsType) => {
  const small = size === "small" && "min-w-8 h-8 px-3 "
  const medium = size === "medium" && "min-w-32 h-8 text-lg px-5 "
  const large = size === "large" && "min-w-72 h-20 text-4xl px-16 "

  const text = variant === "text" && "hover:bg-primary-50 active:bg-primary-100"
  const outlined = variant === "outlined" && "border hover:bg-primary-50 active:bg-primary-100"
  const contained = variant === "contained" && "bg-primary-100 hover:bg-primary-200 active:bg-primary-300"

  return (
    <button className={`rounded-lg transition duration-100 ease-in-out  ${text} ${outlined} ${contained} ${small} ${medium} ${large} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
