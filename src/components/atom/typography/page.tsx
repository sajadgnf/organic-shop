import React, { ReactElement } from "react"

type PropsType = {
  children: string | ReactElement
  className?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}

const tagMap = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
}

const Typography = ({ children, variant = "p", className, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "p"

  return (
    <Tag data-testid="typography" className={className} {...props}>
      {children}
    </Tag>
  )
}

export default Typography
