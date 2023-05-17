import React, { ReactElement, ReactNode } from "react"

type PropsType = {
  children: ReactElement | ReactNode | string | number
  className?: string
  variant?: "div" | "header" | "footer" | "article" | "form"
}

const tagMap = {
  div: "div",
  header: "header",
  footer: "footer",
  article: "article",
  form: "form",
}

const Stack = ({ children, variant = "div", className, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "div"

  return (
    <Tag className={`${className} display-flex`} role="div" {...props}>
      {children}
    </Tag>
  )
}

export default Stack
