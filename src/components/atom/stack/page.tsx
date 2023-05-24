import React, { ReactElement, ReactNode } from "react"

type PropsType = {
  spacing?: number
  className?: string
  children: ReactElement | ReactNode | string | number
  variant?: "div" | "header" | "footer" | "article" | "form" | "section"
}

const tagMap = {
  div: "div",
  form: "form",
  footer: "footer",
  header: "header",
  section: "section",
  article: "article",
}

const Stack = ({ children, variant = "div", className, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "div"

  const priorityClassName = className?.split(" ")
  if (!priorityClassName?.find((item) => item.startsWith("items-"))) priorityClassName?.push("items-center")

  return (
    <Tag className={`flex justify-center ${priorityClassName?.join(" ")}`} role="div" {...props}>
      {children}
    </Tag>
  )
}

export default Stack
