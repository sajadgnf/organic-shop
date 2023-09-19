import React, { FormEventHandler, MouseEventHandler, ReactElement, ReactNode } from "react"

type PropsType = {
  ref?: any
  className?: string
  style?: string | {}
  id?: string | number
  onClick?: MouseEventHandler<HTMLButtonElement>
  onSubmit?: FormEventHandler<HTMLButtonElement>
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

const Stack = ({ children, id, variant = "div", style, className = "", onClick, ref, onSubmit, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "div"

  const priorityClassName = className?.split(" ")
  if (!priorityClassName?.find((item) => item.startsWith("items-"))) priorityClassName?.push("items-center")
  if (!priorityClassName?.find((item) => item.startsWith("justify-"))) priorityClassName?.push("justify-center")

  return (
    <Tag
      className={`flex transform ${priorityClassName?.join(" ")}`}
      id={id}
      ref={ref}
      role="div"
      style={style}
      onClick={onClick}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </Tag>
  )
}

export default Stack
