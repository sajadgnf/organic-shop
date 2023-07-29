import React from "react"

type PropsType = {
  for?: string
  children: any
  className?: string
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "label"
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "caption" | "label"
}

const tagMap = {
  caption: "p",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  p: "p",
  label: "label",
}

const Typography = ({ children, variant = "p", component, className, ...props }: PropsType) => {
  const Tag: any = component || tagMap[variant] || "p"

  const font = () => {
    const obj = {
      h1: "text-8xl font-inika", //96px
      h2: "text-6xl font-inika", //60px
      h3: "text-5xl font-inika", //48px
      h4: "text-4xl font-inika", //36px
      h5: "text-3xl font-inika", //30px
      h6: "text-2xl font-inika", //24px
      p: "text-base font-roboto", //16px
      label: "text-base font-roboto", //16px
      caption: "text-sm font-roboto", //14px
    }
    if (component && component in obj) return obj[component]
    if (variant === "caption") return obj[variant]
    if (variant in obj) return obj[variant]
  }

  return (
    <Tag className={` ${className} ${font()}`} {...props}>
      {children}
    </Tag>
  )
}

export default Typography
