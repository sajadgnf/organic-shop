import React, { ReactElement } from "react"

type PropsType = {
  children: string | ReactElement
  className?: string
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
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

const Typography = ({ children, variant = "p", component = "p", className, ...props }: PropsType) => {
  const Tag: any = tagMap[variant] || "p"

  const font = () => {
    const obj = {
      h1: "text-8xl font-inika",
      h2: "text-6xl font-inika",
      h3: "text-5xl font-inika",
      h4: "text-4xl font-inika",
      h5: "text-3xl font-inika",
      h6: "text-2xl font-inika",
      p: "text-base font-roboto",
    }
    if (component in obj) return obj[component]
    if (variant in obj) return obj[variant]
  }

  return (
    <Tag data-testid="typography" className={`${className} ${font()}`} {...props}>
      {children}
    </Tag>
  )
}

export default Typography
