import React, { ButtonHTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  className?: string
  disabled?: boolean
  size?: "small" | "medium" | "large"
  type?: "submit" | "button" | "reset"
  children?: string | ReactElement | ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  onMouseOver?: MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: MouseEventHandler<HTMLButtonElement>
  variant?: "text" | "outlined" | "contained" | "circle"
}

const Button = ({
  type,
  onClick,
  children,
  disabled,
  onMouseOver,
  onMouseLeave,
  size = "medium",
  variant = "text",
  className = "font-roboto",
  ...props
}: PropsType) => {
  const small = size === "small" && "min-w-1 md:min-w-8 h-8 md:h-10 px-2 md:px-3"
  const medium = size === "medium" && "min-w-3 md:min-w-32 h-8 md:h-10 text-sm md:text-lg px-3 md:px-5"
  const large = size === "large" && "min:w-10 md:min-w-42 h-10 md:h-14 text-lg md:text-xl px-5 md:px-8"

  const circle = variant === "circle" && "!p-0 !w-4 !h-4 rounded-full bg-gray-300"
  const text = variant === "text" && `hover:bg-primary-light px-0`
  const outlined = variant === "outlined" && `border hover:bg-primary-light`
  const contained = variant === "contained" && `bg-primary-main hover:bg-primary-dark ${disabled && " bg-gray-400"}`

  return (
    <button
      className={` rounded-lg transition duration-100 ease-in-out cursor-pointer ${
        disabled && "pointer-events-none !text-gray-400"
      } 
    ${text} ${outlined} ${contained} ${small} ${medium} ${large} ${circle} ${className}`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
