import React, { ForwardedRef, HTMLAttributes, ReactElement, ReactNode, forwardRef } from "react"

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

const Stack = forwardRef<HTMLAttributes<HTMLDivElement>, PropsType & HTMLAttributes<HTMLDivElement>>(
  (props, ref?: ForwardedRef<HTMLAttributes<HTMLDivElement>>) => {
    const { id, style, children, className = "", variant = "div", ...rest } = props

    const Tag: any = tagMap[variant] || "div"

    const priorityClassName = className?.split(" ")
    if (!priorityClassName?.find((item) => item.startsWith("items-"))) priorityClassName?.push("items-center")
    if (!priorityClassName?.find((item) => item.startsWith("justify-"))) priorityClassName?.push("justify-center")

    return (
      <Tag ref={ref} className={`flex transform ${priorityClassName?.join(" ")}`} id={id} role="div" style={style} {...rest}>
        {children}
      </Tag>
    )
  }
)
export default Stack
