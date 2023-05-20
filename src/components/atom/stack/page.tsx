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

const Stack = ({ children, variant = "div", className, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "div"

  const priorityClassName = className
    ?.split(" ")
    .map((item) => (item.includes("items-") ? `!${item}` : item))
    .join(" ")

  return (
    <Tag className={`flex justify-center items-center ${priorityClassName}`} role="div" {...props}>
      {children}
    </Tag>
  )
}

export default Stack
