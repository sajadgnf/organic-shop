import React, { MouseEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  className?: string
  style?: string | {}
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactElement | ReactNode | string | number
  variant?: "div" | "header" | "footer" | "article" | "form" | "section"
}

const tagMap = {
  div: "div",
  form: "form",
  header: "header",
  footer: "footer",
  section: "section",
  article: "article",
}

const Stack = ({ children, variant = "div", style, className, onClick, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "div"

  const priorityClassName = className?.split(" ")
  if (!priorityClassName?.find((item) => item.startsWith("items-"))) priorityClassName?.push("items-center")

  return (
    <Tag
      className={`flex justify-center transform ${priorityClassName?.join(" ")}`}
      role="div"
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Stack
