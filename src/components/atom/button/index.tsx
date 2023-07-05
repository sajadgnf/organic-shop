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
  const medium = size === "medium" && "min-w-32 h-10 text-lg px-5 "
  const large = size === "large" && "min-w-72 h-20 text-4xl px-16 "

  const circle = variant === "circle" && "!p-0 w-4 h-4 rounded-full bg-gray-300"
  const text = variant === "text" && "hover:bg-primary-light"
  const outlined = variant === "outlined" && "border hover:bg-primary-light"
  const contained = variant === "contained" && "bg-primary-main hover:bg-primary-dark"

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
