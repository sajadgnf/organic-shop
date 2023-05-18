import React, { ReactElement, ReactNode } from "react"

type PropsType = {
  spacing?: number
  className?: string
  children: ReactElement | ReactNode | string | number
  variant?: "div" | "header" | "footer" | "article" | "form" | "section"
}

const tagMap = {
  div: "div",
  header: "header",
  footer: "footer",
  article: "article",
  form: "form",
  section: "section",
}

const Stack = ({ children, variant = "div", className, spacing = 0, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "div"

  return (
    <Tag className={`display-flex content-between [&>*]:mx-${spacing} ${className}`} role="div" {...props}>
      {children}
    </Tag>
  )
}

export default Stack
