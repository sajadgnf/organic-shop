import React, { MouseEventHandler, ReactElement } from "react"

type PropsType = {
  className?: string
  children?: string | ReactElement
  size?: "small" | "medium" | "large"
  onClick?: MouseEventHandler<HTMLButtonElement>
  variant?: "text" | "outlined" | "contained" | "circle"
}

const Button = ({ children, className = "font-roboto", size = "medium", variant = "text", onClick, ...props }: PropsType) => {
  const small = size === "small" && "min-w-8 h-12 px-3"
  const medium = size === "medium" && "min-w-32 h-12 text-lg px-10 "
  const large = size === "large" && "min-w-72 h-20 text-4xl px-16 "

  const circle = variant === "circle" && "!p-0 w-4 h-4 rounded-full bg-gray-300"
  const text = variant === "text" && "hover:bg-primary-50 active:bg-primary-100"
  const outlined = variant === "outlined" && "border hover:bg-primary-50 active:bg-primary-100"
  const contained = variant === "contained" && "bg-primary-100 hover:bg-primary-200 active:bg-primary-300"

  return (
    <button
      className={`rounded-lg transition duration-100 ease-in-out cursor-pointer ${text} ${outlined} ${contained} ${small} ${medium} ${large} ${circle} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
