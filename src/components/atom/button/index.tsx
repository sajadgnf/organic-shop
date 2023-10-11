import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react"

type PropsType = {
  className?: string
  hoverEffect?: boolean
  size?: "small" | "medium" | "large"
  type?: "submit" | "button" | "reset"
  children?: string | ReactElement | ReactNode
  variant?: "text" | "outlined" | "contained" | "circle"
}

const Button = ({
  type,
  children,
  size = "medium",
  variant = "text",
  className = "font-roboto",
  hoverEffect = true,
  ...props
}: PropsType & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const small = size === "small" && "min-w-1 md:min-w-8 h-8 md:h-10 px-2 md:px-3"
  const medium = size === "medium" && "min-w-3 md:min-w-32 h-8 md:h-10 text-sm md:text-lg px-3 md:px-5"
  const large = size === "large" && "min-w-10 md:min-w-42 h-10 md:h-12 text-lg md:text-xl px-5"

  const circle = variant === "circle" && "!p-0 !w-4 !h-4 rounded-full bg-gray-300"
  const text = variant === "text" && ` ${hoverEffect && "hover:bg-primary-light"}`
  const outlined = variant === "outlined" && `border ${props.disabled ? "text-gray-300" : " hover:bg-primary-light"}`
  const contained = variant === "contained" && `${props.disabled ? "bg-gray-300 " : "bg-primary-main hover:bg-primary-dark"}`

  return (
    <button
      className={` rounded-lg transition duration-100 ease-in-out cursor-pointer ${
        props.disabled && "pointer-events-none !text-gray-400"
      } 
    ${text} ${outlined} ${contained} ${small} ${medium} ${large} ${circle} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
