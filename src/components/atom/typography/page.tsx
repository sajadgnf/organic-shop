import React, { ReactElement } from "react"

type PropsType = {
  children: string | ReactElement
  className?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const Typography = ({ children, variant = "p", className, ...props }: PropsType) => {
  if (variant === "h1")
    return (
      <h1 className={className} {...props}>
        {children}
      </h1>
    )
  if (variant === "h2")
    return (
      <h2 className={className} {...props}>
        {children}
      </h2>
    )
  if (variant === "h3")
    return (
      <h3 className={className} {...props}>
        {children}
      </h3>
    )
  if (variant === "h4")
    return (
      <h4 className={className} {...props}>
        {children}
      </h4>
    )
  if (variant === "h5")
    return (
      <h5 className={className} {...props}>
        {children}
      </h5>
    )
  if (variant === "h6")
    return (
      <h6 className={className} {...props}>
        {children}
      </h6>
    )
  if (variant === "p")
    return (
      <p className={className} {...props}>
        {children}
      </p>
    )
}

export default Typography
