import React, { FormEventHandler, HTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  className?: string
  id?: string | number
  children?: ReactElement | ReactNode | string | number
  variant?: "div" | "header" | "footer" | "article" | "form" | "section" | "main" | "ul"
}

const tagMap = {
  ul: "ul",
  div: "div",
  form: "form",
  main: "main",
  header: "header",
  footer: "footer",
  section: "section",
  article: "article",
}

const Stack = ({
  id,
  style,
  children,
  className = "",
  variant = "div",
  ...props
}: PropsType & HTMLAttributes<HTMLDivElement>) => {
  const Tag: any = tagMap[variant] || "div"

  const priorityClassName = className?.split(" ")
  if (!priorityClassName?.find((item) => item.startsWith("items-"))) priorityClassName?.push("items-center")
  if (!priorityClassName?.find((item) => item.startsWith("justify-"))) priorityClassName?.push("justify-center")

  return (
    <Tag className={`flex transform ${priorityClassName?.join(" ")}`} id={id} role="div" style={style} {...props}>
      {children}
    </Tag>
  )
}

export default Stack
